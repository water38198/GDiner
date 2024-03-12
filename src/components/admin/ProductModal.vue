<script setup>
import { ref, watch } from 'vue'
import axios from 'axios';

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
        tempProduct.value.imagesUrl = []
    }
    // 如果最後一個為空則不能新增圖片
    if (tempProduct.value.imagesUrl[tempProduct.value.imagesUrl.length - 1] === "") return
    tempProduct.value.imagesUrl.push("")
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
            }
        })
        .catch(err => {
            console.log(err)
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
        <form method="dialog">
            <div class="bg-primary p-4 flex justify-between items-center">
                <h3 class="text-white">{{ isNew ? "新增產品" : "編輯產品" }}</h3>
                <button type="button" class="i-ic:baseline-close p-2 text-white font-size-4 hover:cursor-pointer"
                    @click="dialog.close()"></button>
            </div>
            <div class="grid grid-cols-12 gap-6 p-3">
                <div class="col-span-4">
                    <div class="input-group">
                        <label for="imagUrl" class="block">主要圖片</label>
                        <input type="text" placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl" class="mb-2">
                        <img :src="tempProduct.imageUrl" alt="">
                    </div>
                    <form action="/api/thisismycourse2/admin/upload" enctype="multipart/form-data" method="post">
                        <input type="file" name="file-to-upload" @change="upload('image', $event)">
                    </form>
                    <img src="" alt="">
                    <!-- 檔案上傳 -->

                    <div>
                        <h4 class="font-size-5 mb-4">多圖新增</h4>
                        <div v-for='(image, index) in tempProduct.imagesUrl' :key="image" class="mb-4">
                            <div class="flex justify-between mb-2">
                                <label for="images-1">圖片網址{{ index + 1 }}</label>
                                <button
                                    class="i-ic:baseline-close font-size-5 opacity-50  hover:(cursor-pointer opacity-75)"
                                    @click="tempProduct.imagesUrl.splice(index, 1)"></button>
                            </div>
                            <div class="input-group">
                                <input type="text" v-model="tempProduct.imagesUrl[index]" placeholder="請輸入圖片網址"
                                    class=",b-2">
                            </div>
                            <img :src="image" alt="">
                        </div>
                        <button type="button"
                            class="inline-block w-100% bg-transparent border-#0d6efd border-solid border-1 rd text-#0d6efd py-1 mb-1"
                            hover="cursor-pointer bg-#0d6efd text-white" @click="addNewImages">
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
                            <input type="text" id="title" placeholder="請輸入標題" v-model="tempProduct.title">
                        </div>
                        <div class="input-group">
                            <label for="category">分類：</label>
                            <select id="category" v-model="tempProduct.category">
                                <option value="主食">主食</option>
                                <option value="沙拉">沙拉</option>
                                <option value="湯品">湯品</option>
                                <option value="副食">副食</option>
                                <option value="甜點">甜點</option>
                                <option value="飲料">飲料</option>
                            </select>

                        </div>
                        <div class="input-group">
                            <label for="unit">單位：</label>
                            <input type="text" id="unit" placeholder="請輸入單位" v-model="tempProduct.unit" list="units"
                                autocomplete="off">
                            <datalist id="units">
                                <option value="碗"></option>
                                <option value="客"></option>
                                <option value="杯"></option>
                                <option value="份"></option>
                                <option value="個"></option>

                            </datalist>
                        </div>
                        <div class="input-group">
                            <label for="origin_price">原價：</label>
                            <input type="number" id="origin_price" placeholder="請輸入原價" min="0"
                                v-model.number="tempProduct.origin_price">
                        </div>
                        <div class="input-group">
                            <label for="price">售價：</label>
                            <input type="number" id="price" placeholder="請輸入售價" min="0"
                                v-model.number="tempProduct.price">
                        </div>
                        <div class="input-group">
                            <label for="veggie">素食:</label>
                            <select name="" id="veggie" v-model="tempProduct.veggie">
                                <option value="true">是</option>
                                <option value="false">否</option>
                            </select>
                        </div>
                        <div class="input-group col-span-2">
                            <label for="tags">標籤：</label>
                            <input type="text" id="tags" v-model.trim="newTag">
                        </div>
                        <div class="col-span-2">
                            <div v-if="tempProduct.tags" class="mb-4 flex">
                                <ul class="flex">
                                    <li v-for="tag, index in tempProduct.tags" :key="`${index}+${tag}`"
                                        class="flex px-2 py-2 border-(1 solid primary) rd me-2 ">
                                        <span class="font-size-4 px-4">{{ tag }} </span>
                                        <a class="border-0 bg-transparent p-0 hover:(cursor-pointer)"
                                            @click="deleteTag(tag)">
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
                            <label for="description">產品敘述</label>
                            <textarea name="" id="description" rows="6" v-model="tempProduct.description"></textarea>
                        </div>
                        <div class="input-group col-span-2">
                            <label for="content">說明內容</label>
                            <textarea name="" id="content" rows="4" v-model="tempProduct.content"></textarea>
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
                <button type="button"
                    class="m-1 px-3 py-1.5 text-white bg-#0d6efd border-0 rd hover:(cursor-pointer bg-#0b5ed7)"
                    @click="$emit('confirmProduct', tempProduct)">確定</button>
            </div>
        </form>
    </dialog>
</template>
<style scoped lang="postcss">
.input-group {
    label {
        @apply mb-2 block font-size-5
    }

    input, textarea, select {
        @apply w-100% rd border-1 border-solid px-3 py-1.5 font-size-4 focus:(outline-0 border-#86b7fe border-solid shadow-[0px_0px_0px_0.25rem_#C2DBFE])
    }
}
</style>
