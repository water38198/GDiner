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
    <div class="max-w-740px mx-a pt-9 px-5">
        <h2 class="mb-16 font-size-14 fw-bold tracking-wider">聯絡我們</h2>
        <h3 class="mb-7 font-size-7">有任何問題或建議，歡迎聯絡我們！<div
                class="i-fluent-emoji-flat:backhand-index-pointing-down inline-block"></div>
        </h3>
        <VForm action="" class="grid grid-cols-2 gap-8 mb-25" v-slot="{ errors }" @submit="sendForm" ref="formRef">
            <div class="custom-input-group col-span-2 md:col-span-1">
                <VField type="text" id="姓名" name="姓名" placeholder="姓名" rules="required"
                    :class="{ 'invalid': errors['姓名'] }" />
                <label for="姓名">姓名</label>
                <ErrorMessage name="姓名" class="absolute block left-3 bottom--5 text-red-500 font-size-3" />
            </div>
            <div class="custom-input-group  col-span-2 md:col-span-1">
                <VField type="email" id="email" name="Email" rules="required||email" placeholder="Email"
                    :class="{ 'invalid': errors['Email'] }" />
                <label for="email">Email</label>
                <ErrorMessage name="Email" class="absolute block left-3 bottom--5 text-red-500 font-size-3" />
            </div>
            <div class="custom-input-group col-span-2">
                <VField name="手機號碼" type="tel" id="tel" placeholder="手機號碼" />
                <label for="tel">手機號碼(選填)</label>
            </div>
            <div class="custom-input-group col-span-2">
                <VField as="textarea" name="留言" id="message" placeholder="留言" rows="6" rules="required"
                    :class="{ 'invalid': errors['留言'] }"></VField>
                <label for="message">留言</label>
                <ErrorMessage name="留言" class="absolute block left-3 bottom--5 text-red-500 font-size-3" />

            </div>
            <div>
                <button type="submit"
                    class="px-8 py-2 customBorder rd-100vh border-info bg-info text-secondary tracking-widest   cursor-pointer hover:(transform-scale-105)">送出</button>
            </div>
        </VForm>
    </div>
</template>

<style lang="scss" scoped>
.custom-input-group {
    position: relative;

    .invalid {
        @apply border-red-400 shadow-red hover:outline-red;
    }

    .invalid~label {
        color: red
    }

    input,
    textarea {
        border-width: 2px;
        @apply w-100% customBorder rd-3 p-3 bg-transparent outline-0;
    }

    input::placeholder,
    textarea::placeholder {
        color: transparent;
    }

    label {
        position: absolute;
        transition: transform .1s ease-in-out;
        user-select: none;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
        color: rgba(61, 8, 27, 0.8);

        &:hover {
            cursor: text;
        }
    }

    textarea~label {
        top: 0;
        transform: translateY(12px);
    }

    input:focus~label,
    input:not(:placeholder-shown)~label {
        transform: translateX(-10%) translateY(calc(-1rem - 50%)) scale(0.8);
    }

    textarea:focus~label,
    textarea:not(:placeholder-shown)~label {
        transform: translateX(-10%) scale(0.8);
    }

    input:focus,
    input:not(:placeholder-shown),
    textarea:not(:placeholder-shown) textarea:focus {
        padding-top: 16px;
        padding-bottom: 8px;
    }

    input:hover,
    textarea:hover {
        outline: 1.5px solid #3D081B;
    }
}
</style>