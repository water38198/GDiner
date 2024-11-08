<script setup>
import { ref, watch, computed } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as bootstrap from 'bootstrap';

const { VITE_URL, VITE_PATH } = import.meta.env;

const props = defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
  isNew: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['refresh']);

const title = computed(() => (props.isNew ? '新增商品' : '編輯商品'));
const modalProduct = ref({ ...props.product });
watch(() => props.product, (newVal) => {
  modalProduct.value = { ...newVal };
});

const modalRef = ref(null);
const confirmProduct = async() => {
  const method = props.isNew ? 'post' : 'put';
  const url = props.isNew ? `${VITE_URL}/v2/api/${VITE_PATH}/admin/product` : `${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${modalProduct.value.id}`;
  if (props.isNew || !modalProduct.value.created) modalProduct.value.created = Date.now();
  try {
    isLoading.value = true;
    const response = await axios[method](url, {data: modalProduct.value})
    Swal.fire({
      icon: 'success',
      title: `${response.data.message}`,
      showConfirmButton: false,
      timer: 1500,
      didClose: () => {
        isLoading.value = false;
        emit('refresh');
        const modal = bootstrap.Modal.getInstance(modalRef.value);
        modal.hide();
      }
    });
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '錯誤',
      text: `${error.response.data.message || '請稍後再試'}`,
    });
  }
};

const addNewImage = () => {
  if (!modalProduct.value.imagesUrl) modalProduct.value.imagesUrl = [];
  const length = modalProduct.value.imagesUrl.length;
  if (modalProduct.value.imagesUrl[length - 1] === '') return;
  modalProduct.value.imagesUrl.push('');
};

const uploadImage = async (target, e) => {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append('file-to-upload', file);
  try {
    const response = await axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/admin/upload`, formData);
    addNewImage();
    if (target === 'image') modalProduct.value.imageUrl = response.data.imageUrl;
    if (target === 'images') modalProduct.value.imagesUrl[modalProduct.value.imagesUrl.length - 1] = response.data.imageUrl;
    e.target.value = '';
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '上傳失敗',
      text: `${error.response.data.message || '請稍後再試'}`,
    });
  }
}

const deleteImage = (index) => {
  modalProduct.value.imagesUrl.splice(index, 1);
};

const newTag = ref('');
const addTag = () => {
  if (!modalProduct.value.tags) modalProduct.value.tags = [];
  if (newTag.value.trim() === '') return;
  modalProduct.value.tags.push(newTag.value);
  newTag.value = '';
};
const deleteTag = (tag) => {
  modalProduct.value.tags = modalProduct.value.tags.filter((item) => item !== tag);
};

const isLoading = ref(false);
</script>

<template>
  <div class="modal fade" id="ProductModal" tabindex="-1" aria-labelledby="ProductLabel" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-2" id="ProductModalLabel"> {{ title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <VForm @submit="confirmProduct" v-slot="{ errors }" id="ProductForm">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-md-4">
                  <label for="imageUrl" class="form-label">主要圖片</label>
                  <VField name="主要圖片" id="imageUrl" type="text" placeholder="請輸入圖片連結" v-model="modalProduct.imageUrl" class="form-control mb-2"
                    :class="{ 'is-invalid': errors['主要圖片'] }" rules="required" />
                  <ErrorMessage name="主要圖片" class="invalid-feedback" />
                  <img :src="modalProduct.imageUrl" alt="產品主要照片" v-if="modalProduct.imageUrl">
                  <form action="/api/thisismycourse2/admin/upload" enctype="multipart/form-data" method="post" class="my-4">
                    <input type="file" name="file-to-upload" @change="uploadImage('image', $event)" class="form-control">
                  </form>
                  <div>
                    <h4 class="mb-4 fs-6">多圖新增</h4>
                    <div v-for='(image, index) in modalProduct.imagesUrl' :key="image" class="mb-4">
                      <div class="d-flex align-items-center mb-2">
                        <label :for="`image-${index}`" class="form-label">圖片網址{{ index + 1 }}</label>
                        <button type="button" class="ms-auto fs-5" @click="deleteImage(index)"><i class="bi bi-x"></i></button>
                      </div>
                      <div>
                        <input type="text" v-model="modalProduct.imagesUrl[index]" placeholder="請輸入圖片網址" class="form-control">
                      </div>
                      <img :src="image" alt="產品照片">
                    </div>
                    <div class="mb-4">
                      <button type="button" @click="addNewImage" class="btn btn-outline-primary">新增圖片</button>
                    </div>
                    <hr>
                    <form action="/api/thisismycourse2/admin/upload" enctype="multipart/form-data" method="post">
                      <input type="file" name="file-to-upload" @change="uploadImage('images', $event)" class="form-control">
                    </form>
                  </div>
                </div>
                <div class="col-12 col-md-8">
                  <div class="row gy-4">
                    <div class="col-12">
                      <label for="title" class="form-label">名稱：</label>
                      <VField type="text" id="title" name="名稱" rules="required" placeholder="請輸入標題"
                      v-model="modalProduct.title" class="form-control" :class="{ 'is-invalid': errors['名稱'] }" />
                    <ErrorMessage name="名稱" class="invalid-feedback" />
                    </div>
                    <div class="col-6">
                      <label for="category" class="form-label">分類：</label>
                      <VField as="select" name="分類" rules="required" id="category" class="form-select" :class="{ 'is-invalid': errors['分類'] }" v-model="modalProduct.category">
                        <option value="主食">主食</option>
                        <option value="沙拉">沙拉</option>
                        <option value="湯品">湯品</option>
                        <option value="副食">副食</option>
                        <option value="甜點">甜點</option>
                        <option value="飲料">飲料</option>
                        <option value="套餐">套餐</option>
                      </VField>
                      <ErrorMessage name="分類" class="invalid-feedback" />
                    </div>
                    <div class="col-6">
                      <label for="unit" class="form-label">單位：</label>
                      <VField type="text" id="unit" placeholder="請輸入單位" v-model="modalProduct.unit" list="units" name="單位" rules="required" class="form-control" :class="{ 'is-invalid': errors['單位'] }" autocomplete="off" />
                      <datalist id="units">
                        <option value="碗"></option>
                        <option value="客"></option>
                        <option value="杯"></option>
                        <option value="份"></option>
                        <option value="個"></option>
                      </datalist>
                      <ErrorMessage name="單位" class="invalid-feedback" />
                    </div>
                    <div class="col-6">
                      <label for="origin_price" class="form-label">原價：</label>
                      <VField type="number" name="原價" id="origin_price" placeholder="請輸入原價" min="0" rules="required|min_value:0" class="form-control" :class="{ 'is-invalid': errors['原價'] }" v-model.number="modalProduct.origin_price" />
                      <ErrorMessage name="原價" class="invalid-feedback" />
                    </div>
                    <div class="col-6">
                      <label for="price" class="form-label">售價：</label>
                      <VField type="number" id="price" placeholder="請輸入售價" min="0" v-model.number="modalProduct.price" name="售價" :rules="{ required: true, max_value: modalProduct.origin_price, min_value: 0 }" class="form-control" :class="{ 'is-invalid': errors['售價'] }" />
                      <ErrorMessage name="售價" class="invalid-feedback" />
                    </div>
                    <div class="col-6">
                      <label for="veggie" class="form-label">素食:</label>
                      <VField as="select" id="veggie" v-model="modalProduct.veggie" name="素食" rules="required" class="form-select" :class="{ 'is-invalid': errors['素食'] }">
                        <option value="全素" class="text-success">全素</option>
                        <option value="蛋奶素" class="text-warning">蛋奶素</option>
                        <option value="葷食" class="text-danger">葷食</option>
                      </VField>
                      <ErrorMessage name="素食" class="invalid-feedback" />
                    </div>
                    <div class="col-12">
                      <label for="tags" class="form-label">標籤：</label>
                      <ul v-if="modalProduct.tags" class="list-unstyled d-flex">
                        <li v-for="tag, index in modalProduct.tags" :key="`${index}+${tag}`">
                          <button class="btn btn-outline-primary" @click="deleteTag(tag)">{{ tag }}</button>
                        </li>
                      </ul>
                      <div class="input-group">
                        <input type="text" id="tags" v-model.trim="newTag" @keydown.enter="addTag" class="form-control">
                        <button type="button" class="btn btn-outline-primary" @click="addTag">新增標籤</button>
                      </div>
                    </div>
                    <div class="col-12">
                      <label for="description" class="form-label">商品敘述:</label>
                      <VField as="textarea" id="description" rows="6" v-model="modalProduct.description" name="產品敘述" rules="required" class="form-control" :class="{ 'is-invalid': errors['產品敘述'] }" placeholder="例如：這是法國進口超好吃的馬卡龍，加上阿橘大廚特製的冰淇淋"></VField>
                      <ErrorMessage name="產品敘述" class="invalid-feedback" />
                    </div>
                    <div class="col-12">
                      <label for="content" class="form-label">商品內容:</label>
                      <VField as="textarea" id="content" rows="4" class="form-control" v-model="modalProduct.content" name="商品內容" rules="required" :class="{ 'is-invalid': errors['商品內容'] }" placeholder="例如：牛排 * 1 客">
                      </VField>
                      <ErrorMessage name="商品內容" class="invalid-feedback" />
                    </div>
                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="is_enabled" v-model="modalProduct.is_enabled" :true-value="1"  :false-value="0">
                        <label class="form-check-label" for="is_enabled">是否啟用</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </VForm>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">取消</button>
          <button type="submit" form="ProductForm" class="btn btn-primary" :disabled="isLoading">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>