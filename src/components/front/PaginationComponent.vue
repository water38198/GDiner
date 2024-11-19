<script setup>
import { ref, watch} from 'vue';
const props = defineProps({
  pagination: {
    type: Object,
    required: true,
  },
});
const pagination = ref(props.pagination);
watch(() => props.pagination, (newVal) => {
  pagination.value = newVal;
});

const emit = defineEmits(['change-page']);
const changePage = (page) => {
  if (page === '+') {
    emit('change-page', pagination.value.current_page + 1);
  } else if (page === '-') {
    emit('change-page', pagination.value.current_page - 1);
  } else {
    emit('change-page', page);
  }
};
</script>

<template>
  <nav aria-label="Page navigation example" class="mb-10">
    <ul class="pagination justify-content-center border-0">
      <li class="page-item" :class="{'disabled': !pagination.has_pre}">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="changePage('-')">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="i in pagination.total_pages" :key="i" class="page-item" :class="{'active':pagination.current_page === i}">
        <a class="page-link" href="#" @click.prevent="changePage(i)">{{ i }}</a>
      </li>
      <li class="page-item" :class="{'disabled': !pagination.has_next}">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="changePage('+')">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>