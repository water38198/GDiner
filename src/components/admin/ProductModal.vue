<script>
import * as bootstrap from 'bootstrap';

const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  props: {
    tempProduct: {
      type: Object,
    },
    isNew: Boolean, 
  },
  emits: ['getProducts'],
  data() {
    return {
      modalProduct:{},
      newTag: '',
      modal: null,
      isLoading: false,
    }
  },
  methods:{
    addNewImages(){
      // 先檢查有無 imagesUrl屬性
      if(!this.modalProduct.imagesUrl){
        this.modalProduct.imagesUrl = [];
      }
      // 如果最後一個為空則不能新增圖片
      const length = this.modalProduct.imagesUrl.length;
      if(this.modalProduct.imagesUrl[length - 1] === '') return;
      this.modalProduct.imagesUrl.push('');
    },
    async upload(target,e){
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', file);
      try{
        const res = await this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/admin/upload`, formData);
        this.addNewImages();
        if(target === 'images'){
          const length = this.modalProduct.imagesUrl.length;
          this.modalProduct.imagesUrl[length - 1] = res.data.imageUrl
        } else if(target === 'image'){
          this.modalProduct.imageUrl = res.data.imageUrl;
        }
        e.target.value = '';
      } catch (err) {
        this.$swal({
          icon: 'error',
          title: '錯誤發生',
          text: err.response.data.message,
        })
      }
    },
    addTag(){
      if(this.newTag === '') return;
      if(!this.modalProduct.tags){
        this.modalProduct.tags = [];
      };
      const length = this.modalProduct.tags.length;
      const lastTag = this.modalProduct.tags[length - 1] || '';
      if(this.newTag === lastTag || lastTag === undefined) return;
      this.modalProduct.tags.push(this.newTag);
      this.newTag = '';
    },
    deleteTag(tag){
      this.modalProduct.tags = this.modalProduct.tags.filter(item=>item !== tag);
    },
    async confirmProduct() {
      this.isLoading = true;
      const method = this.isNew ? 'post' : 'put';
      const url = this.isNew ? `${VITE_URL}/v2/api/${VITE_PATH}/admin/product` : `${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${this.modalProduct.id}`;
      if (this.isNew) this.modalProduct.created = Date.now();
      try {
        const res = await this.$http[method](url, { data: this.modalProduct });
        this.$swal({
          title: `${res.data.message}`,
          icon: "success",
          didClose: () => {
            this.modal.hide();
            this.$emit('getProducts');
          }
        });
      } catch (err) {
        this.$swal({
        icon: "error",
        title: "錯誤發生",
        text: `${err.response.data.message}`,
        })
      } finally {
        this.isLoading = false;
      }
    },
  },
  watch:{
    tempProduct(){
      this.modalProduct = {...this.tempProduct};
    }
  },
  mounted() {
    this.modal = new bootstrap.Modal('#ProductModal');
  }
}
</script>

<template>
  <div class="modal fade" id="ProductModal" tabindex="-1" aria-labelledby="ProductLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-2" id="ProductModalLabel">{{ isNew ? "新增產品" : "編輯產品" }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <VForm @submit="confirmProduct" v-slot="{ errors }" id="ProductForm">
            <div class="row gy-6">
              <div class="col-md-4">
                <div>
                  <label for="imagUrl" class="form-label">主要圖片</label>
                  <VField name="主要圖片" id="imageUrl" type="text" placeholder="請輸入圖片連結" v-model="modalProduct.imageUrl" class="form-control"
                    :class="{ 'is-invalid': errors['主要圖片'] }" rules="required" />
                  <ErrorMessage name="主要圖片" class="invalid-feedback ms-3" />
                  <img :src="modalProduct.imageUrl" alt="產品主要照片" v-if="modalProduct.imageUrl">
                  <!-- 檔案上傳 -->
                  <form action="/api/thisismycourse2/admin/upload" enctype="multipart/form-data" method="post" class="my-4">
                    <input type="file" name="file-to-upload" @change="upload('image', $event)" class="form-control">
                  </form>
                </div>
                <div class="mt-10">
                  <h4 class="mb-4 fs-6">多圖新增</h4>
                  <div v-for='(image, index) in modalProduct.imagesUrl' :key="image" class="mb-4">
                    <div class="d-flex align-items-center mb-2">
                      <label for="images-1" class="form-la">圖片網址{{ index + 1 }}</label>
                      <button type="button"
                        class="fs-4 ms-auto"
                        @click="modalProduct.imagesUrl.splice(index, 1)"><i class="bi bi-x"></i></button>
                    </div>
                    <div class="input-group mb-2">
                      <input type="text" v-model="modalProduct.imagesUrl[index]" placeholder="請輸入圖片網址" class="form-control">
                    </div>
                    <img :src="image" alt="產品照片">
                  </div>
                  <button type="button"
                    class="btn btn-outline-primary w-100"
                    @click="addNewImages">
                    新增圖片網址
                  </button>
                  <form action="/api/thisismycourse2/admin/upload" enctype="multipart/form-data" method="post"
                    class="mt-6">
                    <input type="file" name="file-to-upload" @change="upload('images', $event)" class="form-control">
                  </form>
                </div>
              </div>
              <div class="col-md-8">
                <div class="row g-2">
                  <div>
                    <label for="title" class="form-label">名稱：</label>
                    <VField type="text" id="title" name="名稱" rules="required" placeholder="請輸入標題"
                      v-model="modalProduct.title" class="form-control" :class="{ 'is-invalid': errors['名稱'] }" />
                    <ErrorMessage name="名稱" class="invalid-feedback ps-3" />
                  </div>
                  <div class="col-6">
                    <label for="category" class="form-label">分類：</label>
                    <VField as="select" name="分類" rules="required" id="category" class="form-select" :class="{ 'is-invalid': errors['分類'] }"
                      v-model="modalProduct.category">
                      <option value="主食">主食</option>
                      <option value="沙拉">沙拉</option>
                      <option value="湯品">湯品</option>
                      <option value="副食">副食</option>
                      <option value="甜點">甜點</option>
                      <option value="飲料">飲料</option>
                      <option value="套餐">套餐</option>
                    </VField>
                    <ErrorMessage name="分類" class="invalid-feedback ps-3" />
                  </div>
                  <div class="col-6">
                    <label for="unit" class="form-label">單位：</label>
                    <VField type="text" id="unit" placeholder="請輸入單位" v-model="modalProduct.unit" list="units" name="單位"
                      rules="required" class="form-control" :class="{ 'is-invalid': errors['單位'] }" autocomplete="off" />
                    <datalist id="units">
                      <option value="碗"></option>
                      <option value="客"></option>
                      <option value="杯"></option>
                      <option value="份"></option>
                      <option value="個"></option>
                    </datalist>
                    <ErrorMessage name="單位" class="invalid-feedback ps-3" />
                  </div>
                  <div class="col-6">
                    <label for="origin_price" class="form-label">原價：</label>
                    <VField type="number" name="原價" id="origin_price" placeholder="請輸入原價" min="0"
                      rules="required|min_value:0" class="form-control" :class="{ 'is-invalid': errors['原價'] }"
                      v-model.number="modalProduct.origin_price" />
                    <ErrorMessage name="原價" class="invalid-feedback ps-3" />
                  </div>
                  <div class="col-6">
                    <label for="price" class="form-label">售價：</label>
                    <VField type="number" id="price" placeholder="請輸入售價" min="0" v-model.number="modalProduct.price"
                      name="售價" :rules="{ required: true, max_value: modalProduct.origin_price, min_value: 0 }" class="form-control"
                      :class="{ 'is-invalid': errors['售價'] }" />
                    <ErrorMessage name="售價" class="invalid-feedback ps-3" />
                  </div>
                  <div class="col-6">
                    <label for="veggie" class="form-label">素食:</label>
                    <VField as="select" id="veggie" v-model="modalProduct.veggie" name="素食" rules="required" class="form-select"
                      :class="{ 'is-invalid': errors['素食'] }">
                      <option value="全素" class="text-success">全素</option>
                      <option value="蛋奶素" class="text-warning">蛋奶素</option>
                      <option value="葷食" class="text-danger">葷食</option>
                    </VField>
                    <ErrorMessage name="素食" class="invalid-feedback ps-3" />
                  </div>
                  <!-- 標籤 -->
                  <div>
                    <label for="tags" class="form-label">標籤：</label>
                    <div class="input-group">
                      <input type="text" id="tags" v-model.trim="newTag" @keydown.enter="addTag" class="form-control">
                      <button type="button" class="btn btn-outline-primary" @click="addTag">
                        新增標籤
                      </button>
                    </div>
                  </div>
                  <div class="mb-2">
                    <p>目前標籤：</p>
                    <ul class="list-unstyled d-flex" v-if="modalProduct.tags">
                      <li v-for="tag, index in modalProduct.tags" :key="`${index}+${tag}`">
                        <button class="btn btn-outline-primary" @click="deleteTag(tag)">
                          {{ tag }}
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <label for="description" class="form-label">產品敘述:</label>
                    <VField as="textarea" id="description" rows="6" v-model="modalProduct.description" name="產品敘述"
                    rules="required" class="form-control" :class="{ 'is-invalid': errors['產品敘述'] }"></VField>
                    <ErrorMessage name="產品敘述" class="invalid-feedback ps-3" />
                  </div>
                  <div>
                    <label for="content" class="form-label">內容說明:</label>
                    <VField as="textarea" id="content" rows="4" class="form-control" v-model="modalProduct.content" name="內容說明" rules="required" :class="{ 'is-invalid': errors['內容說明'] }">
                    </VField>
                    <ErrorMessage name="內容說明" class="invalid-feedback ps-3" />
                  </div>
                </div>
              </div>
            </div>
          </VForm>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="submit" class="btn btn-primary" form="ProductForm" :disabled="isLoading">送出</button>
        </div>
      </div>
    </div>
  </div>
</template>

