<template>
  <el-button
    class="toggle-button"
    :icon="isCollapse ? Expand : Fold"
    text
    plain
    @click="toggleCollapse"
  ></el-button>
</template>

<script setup lang="ts">
  import useAppStore from '@/store/app';
  import { storeToRefs } from 'pinia';
  import { Fold, Expand } from '@element-plus/icons-vue';
  // import { computed } from 'vue';
  const store = useAppStore();
  const { toggleCollapse } = store;
  const { isCollapse } = storeToRefs(store);
  // const icon = computed(() => {
  //   return isCollapse ? Expand : Fold
  // })
</script>

<style scoped></style>
