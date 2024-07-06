<script>

export default {
  methods: {
    sendForm() {
      this.$swal({
        title: '感謝您的回饋',
        icon: 'success',
        text: '已收到您的留言，感謝您的建議與指教，我們會盡快回覆。'
      });
      this.$refs.formRef.resetForm();
    }
  }
}
</script>

<template>
  <div class="wrapper mx-auto pt-9 px-5">
    <h2 class="mb-10 fs-1 fw-bold">聯絡我們</h2>
    <h3 class="mb-7 fs-3">有任何問題或建議，歡迎聯絡我們！<i class="bi bi-arrow-down-circle-fill"></i>
    </h3>
    <VForm action="" class="row gy-8 mb-10 mb-mb-20" v-slot="{ errors }" @submit="sendForm" ref="formRef">
      <div class="col-md-6">
        <div class="form-floating">
          <VField type="text" id="姓名" name="姓名" placeholder="姓名" rules="required" class="form-control custom-border bg-secondary" :class="{ 'is-invalid': errors['姓名'] }" />
          <label for="姓名">姓名</label>
          <ErrorMessage name="姓名" class="position-absolute start-0 ps-3 text-danger" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-floating">
          <VField type="email" id="email" name="Email" rules="required||email" placeholder="Email" class="form-control custom-border bg-secondary" 
            :class="{ 'is-invalid': errors['Email'] }" />
          <label for="email">Email</label>
          <ErrorMessage name="Email" class="position-absolute start-0 ps-3   text-danger" />
        </div>
      </div>
      <div >
        <div class="form-floating">
          <VField name="手機號碼" type="tel" id="tel" placeholder="手機號碼" class="form-control custom-border bg-secondary"/>
          <label for="tel">手機號碼(選填)</label>
        </div>
      </div>
      <div class="mb-6">
        <div class="form-floating">
          <VField as="textarea" name="留言" id="message" placeholder="留言" rows="6" rules="required" class="form-control custom-border bg-secondary" :class="{ 'is-invalid': errors['留言'] }"></VField>
          <label for="message">留言</label>
          <ErrorMessage name="留言" class="position-absolute start-0 ps-3   text-danger" />
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="px-8 py-2 btn btn-info">送出</button>
      </div>
    </VForm>
  </div>
</template>

<style scoped lang="scss">
.wrapper{
  max-width: 700px;
}
</style>