<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
  import { defineComponent, onMounted } from 'vue';

  onMounted(() => {
    const e = new CustomEvent('app-mounted', { bubbles: false });
    setTimeout(() => {
      window.dispatchEvent(e);
    }, 3000);
  });
</script>

<style scoped></style>
