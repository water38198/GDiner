<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'
const formRef = ref();
function sendForm() {
    Swal.fire({
        title: '感謝您的回饋',
        icon: 'success',
        text: '已收到您的留言，感謝您的建議與指教，我們會盡快回覆。'
    })
    formRef.value.resetForm();
}

</script>

<template>
    <div class="max-w-740px px-5 mx-a pt-9">
        <h2 class="font-size-14 lh-tight font-serif fw-bold tracking-wider mb-16">聯絡我們</h2>
        <h3 class="font-size-7 mb-7">有任何問題或建議，歡迎聯絡我們！<div
                class="i-fluent-emoji-flat:backhand-index-pointing-down inline-block"></div>
        </h3>
        <VForm action="" class="grid grid-cols-2 gap-4 md:gap-7 mb-25" v-slot="{ errors }" @submit="sendForm"
            ref="formRef">
            <div class="custom-input-group position-relative  col-span-2 md:col-span-1">
                <VField type="text" id="姓名" name="姓名" placeholder="姓名"
                    class="customBorder w-100% bg-transparent outline-0 font-size-4 px-3 py-3  rd-3"
                    :class="{ 'invalid': errors['姓名'] }" rules="required" />
                <label for="姓名" class="position-absolute block w-100% top-0 left-0 z-2 p-4 hover:cursor-text">姓名</label>
                <ErrorMessage name="姓名" class="block ps-3 pt-2 text-red-500 font-size-3" />
            </div>
            <div class="custom-input-group position-relative  col-span-2 md:col-span-1">
                <VField type="email" id="email" name="Email" rules="required||email" placeholder="Email"
                    class="customBorder w-100% bg-transparent outline-0 font-size-4 px-3 py-3 rd-3"
                    :class="{ 'invalid': errors['Email'] }" />
                <label for="email"
                    class="position-absolute block w-100% top-0 left-0 z-2 p-4 hover:cursor-text">Email</label>
                <ErrorMessage name="Email" class="block ps-3 pt-2 text-red-500 font-size-3" />
            </div>
            <div class="custom-input-group position-relative col-span-2">
                <VField name="手機號碼" type="tel" id="tel" placeholder="手機號碼"
                    class="customBorder w-100% bg-transparent outline-0 font-size-4 px-3 py-3 rd-3" />
                <label for="tel"
                    class="position-absolute w-[calc(50%-28px)] block top-0 left-0 z-2 p-4 hover:cursor-text ">手機號碼</label>
            </div>
            <div class="custom-input-group position-relative col-span-2">
                <VField as="textarea" name="留言" id="message" placeholder="留言" rows="6" rules="required"
                    class="customBorder w-100% bg-transparent outline-0 font-size-4 px-3 py-3 rd-4"
                    :class="{ 'invalid': errors['留言'] }"></VField>
                <label for="message"
                    class="position-absolute w-[calc(50%-28px)] block top-0 left-0 z-2 p-4 hover:cursor-text ">留言</label>
                <ErrorMessage name="留言" class="block ps-3 pt-2 text-red-500 font-size-3" />

            </div>
            <div>
                <button type="submit"
                    class="customBorder border-info bg-info text-secondary tracking-widest px-8 py-2 rd-100vh hover:(cursor-pointer transform-scale-105)">送出</button>
            </div>
        </VForm>
    </div>
</template>

<style lang="postcss" scoped>
.custom-input-group {
    .invalid {
        @apply border-red-400 shadow-red hover:outline-red;
    }

    input,
    textarea {
        border-width: 2px;
    }

    input::placeholder,
    textarea::placeholder {
        color: transparent;
    }

    label {
        transition: transform .1s ease-in-out;
        user-select: none;
        color: rgba(61, 8, 27, 0.8);
    }

    input:focus~label,
    textarea:focus~label,
    textarea:not(:placeholder-shown)~label,
    input:not(:placeholder-shown)~label {
        transform: scale(0.8) translateY(-1.15rem) translateX(-2rem);
    }

    input:focus,
    textarea:focus {
        padding-top: 16px;
        padding-bottom: 8px;
    }

    input:hover,
    textarea:hover {
        outline: 1.5px solid #3D081B;
    }
}
</style>