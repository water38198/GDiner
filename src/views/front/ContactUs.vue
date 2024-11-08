<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';

const formRef = ref(null);
const sendForm = () => {
  Swal.fire({
    icon: 'success',
    title: '感謝您的回饋',
    text: '我們會盡快回覆您',
    confirmButtonColor: '#3D081B',
  });
  console.log('send form');
  formRef.value.resetForm();
}
const phoneRule = (value) => {
  if (!value) return true;
  const rule = /^09\d{8}$/;
  return rule.test(value) ? true : '手機號碼格式錯誤';
}
</script>


<template>
  <main class="container h-100 py-8">
    <div class="w-lg-75">
      <h2 class="mb-4 fw-bold">聯絡我們</h2>
      <p class="mb-8 fs-5">有任何問題或建議，歡迎聯絡我們！<i class="bi bi-arrow-down-circle-fill"></i></p>
      <VForm v-slot="{ errors }" @submit="sendForm" ref="formRef">
        <div class="mb-4 row gy-4">
          <div class="col-12 col-md-6">
            <div class="mb-4 form-floating">
              <VField type="text" id="姓名" name="姓名" placeholder="姓名" rules="required" class="form-control border-custom" :class="{ 'is-invalid': errors['姓名'] }" />
              <label for="姓名">姓名</label>
              <ErrorMessage name="姓名" class="invalid-feedback" />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-4 form-floating">
              <VField type="email" id="Email" name="Email" placeholder="Email" rules="required|email" class="form-control border-custom" :class="{ 'is-invalid': errors['Email']}" />
              <label for="email">Email</label>
              <ErrorMessage name="Email" class="invalid-feedback" />
            </div>
          </div>
        </div>
        <div class="mb-4 form-floating">
          <VField type="tel" id="tel" name="手機號碼" placeholder="手機號碼" :rules="phoneRule" class="form-control border-custom" :class="{ 'is-invalid': errors['手機號碼']}" />
          <label for="email">手機號碼(選填)</label>
          <ErrorMessage name="手機號碼" class="invalid-feedback" />
        </div>
        <div class="mb-8 form-floating">
          <VField as="textarea" name="留言" id="message" placeholder="留言" rules="required" class="form-control border-custom" :class="{ 'is-invalid': errors['留言'] }"></VField>
          <label for="message">留言</label>
          <ErrorMessage name="留言" class="invalid-feedback"/>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-info btn-lg">送出</button>
        </div>
      </VForm>
    </div>
  </main>
</template>

<style scoped lang="scss">
.is-invalid {
  box-shadow: none;
}

.form-floating textarea{
  min-height:300px;
}
</style>