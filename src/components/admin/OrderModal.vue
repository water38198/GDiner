<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps(['tempOrder'])
const tempOrder = ref(props.tempOrder);
const dialog = ref();
// 檢查訂單資料有無更動，
const isChanged = computed(() => {
    return JSON.stringify(props.tempOrder) == JSON.stringify(tempOrder.value);
})

function autoClose(e) {
    if (e.target.nodeName === "DIALOG") {
        dialog.value.close()
    }
}
function changePrice(product) {
    // 改變商品數量時，同時更改總價格
    tempOrder.value.products[product.id].final_total = tempOrder.value.products[product.id].qty * tempOrder.value.products[product.id].product.price;
    tempOrder.value.products[product.id].total = tempOrder.value.products[product.id].final_total
}
// VeeValidation 手機驗證
function isPhone(value) {
    const phoneNumber = /^(09)[0-9]{8}$/;
    return phoneNumber.test(value) ? true : "請輸入正確的電話號碼"
}

watch(() => props.tempOrder, () => {
    tempOrder.value = JSON.parse(JSON.stringify(props.tempOrder));
})

defineExpose({
    dialog
})
</script>

<template>
    <dialog ref="dialog" class="max-w-1140px  w-100% border-0 rd p-0 backdrop:backdrop-blur-3" @click="autoClose">
        <VForm method="dialog" @submit="$emit('confirmOrder', tempOrder)" v-slot="{ errors }">
            <div class="bg-#212529 flex justify-between items-center p-4">
                <h3 class="text-white">修改訂單</h3>
                <button type="button" class="i-ic:baseline-close p-2 text-white font-size-4 hover:cursor-pointer"
                    @click="dialog.close()"></button>
            </div>
            <div class="grid grid-cols-2 gap-6 p-3">
                <div v-if='tempOrder.user'>
                    <h4 class="text-center font-size-6 mb-2">客戶資料</h4>
                    <div class="input-group">
                        <label for="name">姓名</label>
                        <VField type="text" id="name" placeholder="請輸入姓名" v-model="tempOrder.user.name" name="姓名"
                            rules="required" :class="{ 'invalid': errors['姓名'] }" />
                        <ErrorMessage name="姓名" class="block ps-2 pt-2 text-red-500 font-size-3" />

                    </div>
                    <div class="input-group">
                        <label for="tel">電話</label>
                        <VField type="tel" id="tel" placeholder="請輸入電話" v-model="tempOrder.user.tel" name="電話"
                            :rules="isPhone" :class="{ 'invalid': errors['電話'] }" />
                        <ErrorMessage name="電話" class="block ps-2 pt-2 text-red-500 font-size-3" />

                    </div>
                    <div class="input-group">
                        <label for="email">Email</label>
                        <VField type="email" id="email" placeholder="請輸入Email" v-model="tempOrder.user.email"
                            name="Email" rules="required|email" :class="{ 'invalid': errors['Email'] }" />
                        <ErrorMessage name="Email" class="block ps-2 pt-2 text-red-500 font-size-3" />
                    </div>
                    <div class="input-group">
                        <label for="address">地址</label>
                        <VField type="address" id="address" placeholder="請輸入地址" v-model="tempOrder.user.address"
                            name="地址" rules="required" :class="{ 'invalid': errors['地址'] }" />
                        <ErrorMessage name="地址" class="block ps-2 pt-2 text-red-500 font-size-3" />
                    </div>
                    <div>
                        <h4>留言：</h4>
                        <p>{{ tempOrder.message }}</p>
                    </div>
                </div>
                <div class="flex flex-col">
                    <h4 class="text-center font-size-6">購買的商品</h4>
                    <table>
                        <thead>
                            <tr>
                                <th class="font-size-5">商品名稱</th>
                                <th class="font-size-5">數量</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr v-for="product in tempOrder.products" :key="product.id">
                                <td class="text-center font-size-4.5">
                                    {{ product.product.title }}
                                </td>
                                <td>
                                    <div class="input-group">
                                        <input type="number" min="1" v-model.number="product.qty"
                                            @change="changePrice(product)">
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="text-end col-start-2">
                    <label for="is_paid" class="me-2">
                        <input type="checkbox" id="is_paid" v-model="tempOrder.is_paid" class="custom-checkbox">
                        是否付款
                    </label>
                </div>
            </div>
            <div class="text-end p-3 border-(t solid #dee2e6)">
                <button type="button"
                    class="m-1 px-3 py-1.5 bg-transparent text-#6c757d border-(1 solid #6c757d ) rd hover:(cursor-pointer bg-#5c636a text-white)"
                    @click="dialog.close()">取消</button>
                <button type="submit"
                    class="m-1 px-3 py-1.5 text-white bg-#0d6efd border-0 rd hover:(cursor-pointer bg-#0b5ed7)"
                    :class="{ 'disabled': isChanged }">修改訂單</button>
            </div>
        </VForm>
    </dialog>
</template>

<style scoped lang="postcss">
.input-group {
    @apply mb-4;

    .invalid {
        @apply border-red outline-(red 2px solid)
    }

    label {
        @apply mb-2 block
    }

    input, textarea, select {
        @apply w-100% rd border-1 border-solid px-3 py-1.5 font-size-4 focus:(outline-0 border-#86b7fe border-solid shadow-[0px_0px_0px_0.25rem_#C2DBFE]);
    }
}

.disabled {
    @apply pointer-events-none op-65;
}

.custom-checkbox {
    @apply appearance-none relative inline-block h-7 w-12 align-middle rd-8 shadow-[inset_0px_1px_3px_#0003];
    transition: .25s linear background;
    background-color: lightgrey;

    &::before {
        content: "";
        transition: .25s linear transform;
        transform: translateX(0);
        @apply block w-5 h-5 bg-#fff rd-1.2rem absolute top-1 left-1 shadow-[0px_1px_3_px_#0003];
    }

    &:checked {
        @apply bg-green;
    }

    &:checked::before {
        transform: translateX(1.25rem);
    }
}
</style>