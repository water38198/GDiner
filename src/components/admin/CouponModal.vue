<script setup>
import { ref, watch } from 'vue'

import moment from 'moment'


const props = defineProps(['tempCoupon', 'isNew'])
const tempCoupon = ref(props.tempCoupon)
const dialog = ref()
const dateTime = ref('')
function autoClose(e) {
    if (e.target.nodeName === "DIALOG") {
        dialog.value.close();
    }
}

watch(() => props.tempCoupon, () => {
    tempCoupon.value = { ...props.tempCoupon };
    if (tempCoupon.value.due_date) {
        dateTime.value = moment(tempCoupon.value.due_date).format('YYYY-MM-DD')
    };
    if (!tempCoupon.value.is_enabled) {
        tempCoupon.value.is_enabled = 0
    }
})
watch(() => dateTime.value, () => {
    tempCoupon.value.due_date = new Date(dateTime.value).getTime();
})
defineExpose({
    dialog
})
</script>

<template>
    <dialog ref="dialog" class="max-w-1140px w-100% border-0 rd p-0 backdrop:backdrop-blur-3" @click="autoClose">
        <VForm method="dialog" v-slot="{ errors }" @submit="$emit('confirmCoupon', tempCoupon)">
            <div class="bg-#212529 p-4 flex justify-between items-center">
                <h3 class="text-white">{{ isNew ? "新增優惠券" : "編輯優惠券" }}</h3>
                <button type="button" class="i-ic:baseline-close p-2 text-white font-size-4 hover:cursor-pointer"
                    @click="dialog.close()"></button>
            </div>
            <div class="grid grid-cols-2 gap-6 p-5">
                <div class="input-group">
                    <label for="name">名稱：</label>
                    <VField type="text" id="name" name="名稱" rules="required" placeholder="請輸入名稱"
                        v-model="tempCoupon.title" :class="{ 'invalid': errors['名稱'] }" />
                    <ErrorMessage name="名稱" class="block ps-3 pt-2 text-red-500 font-size-3"></ErrorMessage>
                </div>
                <div class="input-group">
                    <label for="code">優惠碼：</label>
                    <VField type="text" id="code" name="優惠碼" rules="required" placeholder="請輸入優惠碼"
                        :class="{ 'invalid': errors['優惠碼'] }" v-model="tempCoupon.code" />
                    <ErrorMessage name="優惠碼" class="block ps-3 pt-2 text-red-500 font-size-3"></ErrorMessage>
                </div>

                <div class="input-group">
                    <label for="due_date">到期日：</label>
                    <VField type="date" id="due_date" name="到期日" rules="required" pattern="yyyy-MM-dd"
                        :class="{ 'invalid': errors['到期日'] }" v-model="dateTime" :min="moment().format('YYYY-MM-DD')" />
                    <ErrorMessage name="到期日" class="block ps-3 pt-2 text-red-500 font-size-3"></ErrorMessage>
                </div>

                <div class="input-group mb-4">
                    <label for="percent">優惠比例：</label>
                    <VField type="number" id="percent" placeholder="請輸入折扣百分比" name="優惠比例"
                        rules="required||max_value:100||min_value:0" v-model.number="tempCoupon.percent" min="0"
                        :class="{ 'invalid': errors['優惠比例'] }" max="100" />
                    <ErrorMessage name="優惠比例" class="block ps-3 pt-2 text-red-500 font-size-3"></ErrorMessage>
                </div>
                <div>
                    <label for="is_paid">
                        <input type="checkbox" id="is_paid" v-model="tempCoupon.is_enabled" class="custom-checkbox"
                            :true-value="1" :false-value="0">
                        是否啟用
                    </label>
                </div>
            </div>
            <div class="text-end p-3 border-(t solid #dee2e6)">
                <button type="button"
                    class="m-1 px-3 py-1.5 bg-transparent text-#6c757d border-(1 solid #6c757d ) rd hover:(cursor-pointer bg-#5c636a text-white)"
                    @click="dialog.close()">取消</button>
                <button type="submit"
                    class="m-1 px-3 py-1.5 text-white bg-#0d6efd border-0 rd hover:(cursor-pointer bg-#0b5ed7)">確定</button>
            </div>
        </VForm>
    </dialog>
</template>

<style scoped lang="postcss">
.input-group {
    label {
        @apply mb-2 block;
    }

    .invalid {
        @apply border-red outline-(red 2px solid)
    }

    input, textarea, select {
        --at-apply: w-100% rd border-1 border-solid px-3 py-1.5 font-size-4 focus:(outline-0 border-#86b7fe border-solid shadow-[0px_0px_0px_0.25rem_#C2DBFE])
    }
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