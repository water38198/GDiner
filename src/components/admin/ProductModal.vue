<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_URL, VITE_PATH } = import.meta.env;
const props = defineProps(['tempProduct', 'isNew']);
const tempProduct = ref(props.tempProduct);
const dialog = ref();
const newTag = ref("");

function autoClose(e) {
  // 點擊 dialog 外圍區域自動關閉
  if (e.target.nodeName === "DIALOG") {
    dialog.value.close();
  }
}
function addNewImages() {
  // 先檢查有無 imagesUrl屬性
  if (!tempProduct.value.imagesUrl) {
    tempProduct.value.imagesUrl = [];
  }
  // 如果最後一個為空則不能新增圖片
  if (tempProduct.value.imagesUrl[tempProduct.value.imagesUrl.length - 1] === "") return
  tempProduct.value.imagesUrl.push("");
}
//上傳圖片
function upload(target, e) {
  const file = e.target.files[0]
  const formData = new FormData();
  formData.append('file-to-upload', file)
  axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/admin/upload`, formData)
    .then(res => {
      addNewImages();
      if (target === 'images') {
        tempProduct.value.imagesUrl[tempProduct.value.imagesUrl.length - 1] = res.data.imageUrl
      } else if (target === 'image') {
        tempProduct.value.imageUrl = res.data.imageUrl
      };
      e.target.value = "";
    })
    .catch(err => {
      Swal.fire({
        icon: 'error',
        title: '錯誤發生',
        text: err.response.data.message,
      })
    })
}
function addTag() {
  if (newTag.value == '') return //如果是空的就無視
  if (!tempProduct.value.tags) { //如果沒有 tags 則建立一個 tags陣列
    tempProduct.value.tags = [];
  };
  const lastTag = tempProduct.value.tags[tempProduct.value.tags.length - 1] || '';
  if (newTag.value === lastTag || lastTag == undefined) return;
  tempProduct.value.tags.push(newTag.value);
  newTag.value = "";
}
function deleteTag(tag) {
  const index = tempProduct.value.tags.indexOf(tag);
  tempProduct.value.tags.splice(index, 1);
}
// 父層 temp 變動時，子層 tempProduct 跟著變動
watch(() => props.tempProduct, () => {
  tempProduct.value = props.tempProduct
})
defineExpose({
  dialog
})
</script>

<template>
  <dialog ref="dialog" class="max-w-1140px w-100% border-0 rd p-0 backdrop:backdrop-blur-3 " @click="autoClose">
    <VForm @submit="$emit('confirmProduct', tempProduct)" v-slot="{ errors }">
      <div class="bg-primary p-4 flex justify-between items-center">
        <h3 class="text-white">{{ isNew ? "新增產品" : "編輯產品" }}</h3>
        <button type="button" class="i-ic:baseline-close p-2 text-white font-size-4 hover:cursor-pointer"
          @click="dialog.close()"></button>
      </div>
      <div>
        <div class="grid grid-cols-12 gap-6 p-3">
          <div class="col-span-4">
            <div class="input-group">
              <label for="imagUrl" class="block">主要圖片</label>
              <VField name="主要圖片" id="imageUrl" type="text" placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl"
                :class="{ 'invalid': errors['主要圖片'] }" rules="required" />
              <ErrorMessage name="主要圖片" class="block ps-2 pt-2 text-red-500 font-size-3" />
              <img :src="tempProduct.imageUrl" alt="產品主要照片">
            </div>
            <!-- 檔案上傳 -->
            <form action="/api/thisismycourse2/admin/upload" enctype="multipart/form-data" method="post" class="my-4">
              <input type="file" name="file-to-upload" @change="upload('image', $event)">
            </form>
            <div>
              <h4 class="font-size-5 mb-4">多圖新增</h4>
              <div v-for='(image, index) in tempProduct.imagesUrl' :key="image" class="mb-4">
                <div class="flex justify-between mb-2">
                  <label for="images-1">圖片網址{{ index + 1 }}</label>
                  <button type="button"
                    class="i-ic:baseline-close font-size-5 opacity-50  hover:(cursor-pointer opacity-75)"
                    @click="tempProduct.imagesUrl.splice(index, 1)"></button>
                </div>
                <div class="input-group">
                  <input type="text" v-model="tempProduct.imagesUrl[index]" placeholder="請輸入圖片網址" class=",b-2">
                </div>
                <img :src="image" alt="產品照片">
              </div>
              <button type="button"
                class="inline-block w-100% bg-transparent border-primary border-solid border-1 rd text-primary py-1 mb-1 cursor-pointer hover:(bg-primary text-secondary)"
                @click="addNewImages">
                新增圖片網址
              </button>
              <!-- 檔案上傳 -->
              <form action="/api/thisismycourse2/admin/upload" enctype="multipart/form-data" method="post"
                class="mt-10">
                <input type="file" name="file-to-upload" @change="upload('images', $event)">
              </form>
            </div>
          </div>
          <div class="col-span-8">
            <div class="grid grid-cols-2 gap-col-6 gap-row-4 ">
              <div class="input-group  col-span-2">
                <label for="title">名稱：</label>
                <VField type="text" id="title" name="名稱" rules="required" placeholder="請輸入標題"
                  v-model="tempProduct.title" :class="{ 'invalid': errors['名稱'] }" />
                <ErrorMessage name="名稱" class="block ps-2 pt-2 text-red-500 font-size-3" />
              </div>
              <div class="input-group">
                <label for="category">分類：</label>
                <VField as="select" name="分類" rules="required" id="category" :class="{ 'invalid': errors['分類'] }"
                  v-model="tempProduct.category">
                  <option value="主食">主食</option>
                  <option value="沙拉">沙拉</option>
                  <option value="湯品">湯品</option>
                  <option value="副食">副食</option>
                  <option value="甜點">甜點</option>
                  <option value="飲料">飲料</option>
                  <option value="套餐">套餐</option>
                </VField>
                <ErrorMessage name="分類" class="block ps-2 pt-2 text-red-500 font-size-3" />
              </div>
              <div class="input-group">
                <label for="unit">單位：</label>
                <VField type="text" id="unit" placeholder="請輸入單位" v-model="tempProduct.unit" list="units" name="單位"
                  rules="required" :class="{ 'invalid': errors['單位'] }" autocomplete="off" />
                <datalist id="units">
                  <option value="碗"></option>
                  <option value="客"></option>
                  <option value="杯"></option>
                  <option value="份"></option>
                  <option value="個"></option>
                </datalist>
                <ErrorMessage name="單位" class="block ps-2 pt-2 text-red-500 font-size-3" />
              </div>
              <div class="input-group">
                <label for="origin_price">原價：</label>
                <VField type="number" name="原價" id="origin_price" placeholder="請輸入原價" min="0"
                  rules="required|min_value:0" :class="{ 'invalid': errors['原價'] }"
                  v-model.number="tempProduct.origin_price" />
                <ErrorMessage name="原價" class="block ps-2 pt-2 text-red-500 font-size-3" />
              </div>
              <div class="input-group">
                <label for="price">售價：</label>
                <VField type="number" id="price" placeholder="請輸入售價" min="0" v-model.number="tempProduct.price"
                  name="售價" :rules="{ required: true, max_value: tempProduct.origin_price, min_value: 0 }"
                  :class="{ 'invalid': errors['售價'] }" />
                <ErrorMessage name="售價" class="block ps-2 pt-2 text-red-500 font-size-3" />

              </div>
              <div class="input-group">
                <label for="veggie">素食:</label>
                <VField as="select" id="veggie" v-model="tempProduct.veggie" name="素食" rules="required"
                  :class="{ 'invalid': errors['素食'] }">
                  <option value="全素" class="text-green-700">全素</option>
                  <option value="蛋奶素" class="text-yellow-700">蛋奶素</option>
                  <option value="葷食" class="text-red">葷食</option>
                </VField>
                <ErrorMessage name="素食" class="block ps-2 pt-2 text-red-500 font-size-3" />
              </div>
              <div class="input-group col-span-2">
                <label for="tags">標籤：</label>
                <input type="text" id="tags" v-model.trim="newTag" @keydown.enter="addTag">
              </div>
              <div class="col-span-2">
                <div v-if="tempProduct.tags" class="mb-4 flex">
                  <ul class="flex">
                    <li v-for="tag, index in tempProduct.tags" :key="`${index}+${tag}`"
                      class="flex px-2 py-2 border-(1 solid primary) rd me-2 ">
                      <span class="font-size-4 px-4">{{ tag }} </span>
                      <a class="border-0 bg-transparent p-0 hover:(cursor-pointer)" @click="deleteTag(tag)">
                        <div class="i-ic:baseline-close"></div>
                      </a>
                    </li>
                  </ul>
                </div>
                <button type="button"
                  class="border-0 rd bg-primary text-white px-4 py-2 hover:(cursor-pointer bg-primary-light)"
                  @click="addTag">新增標籤</button>
              </div>
              <div class="input-group col-span-2">
                <label for="description">產品敘述:</label>
                <VField as="textarea" id="description" rows="6" v-model="tempProduct.description" name="產品敘述"
                  rules="required" :class="{ 'invalid': errors['產品敘述'] }"></VField>
                <ErrorMessage name="產品敘述" class="block ps-2 pt-2 text-red-500 font-size-3" />
              </div>
              <div class="input-group col-span-2">
                <label for="content">內容說明:</label>
                <VField as="textarea" id="content" rows="4" v-model="tempProduct.content" name="內容說明" rules="required"
                  :class="{ 'invalid': errors['內容說明'] }">
                </VField>
                <ErrorMessage name="內容說明" class="block ps-2 pt-2 text-red-500 font-size-3" />
              </div>
              <div>
                <input type="checkbox" id="is_enabled" v-model="tempProduct.is_enabled" :true-value="1"
                  :false-value="0">
                <label for="is_enabled">是否啟用</label>
              </div>
            </div>
          </div>
        </div>
        <div class="text-end p-3 border-(t solid #dee2e6)">
          <button type="button"
            class="m-1 px-3 py-1.5 bg-transparent text-#6c757d border-(1 solid #6c757d ) rd hover:(cursor-pointer bg-#5c636a text-white)"
            @click="dialog.close()">取消</button>
          <button type="submit"
            class="m-1 px-3 py-1.5 text-secondary bg-primary border-0 rd cursor-pointer hover:(bg-primary-light)">確定</button>
        </div>
      </div>
    </VForm>
  </dialog>
</template>
