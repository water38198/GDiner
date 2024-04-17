<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';

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
        <VField type="text" id="姓名" name="姓名" placeholder="姓名" rules="required" :class="{ 'invalid': errors['姓名'] }" />
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
