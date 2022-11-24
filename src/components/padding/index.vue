<template>
  <div class="padding" :style="style">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, computed } from 'vue';

  const props = defineProps({
    all: {
      type: [String, Number],
    },
  });
  const unit = ['px', '%', 'vw', 'rem', 'em'];
  const style = computed(() => {
    const { all } = props;
    if (typeof all === 'string' && unit.some((u) => all.endsWith(u))) {
      return { padding: all };
    }
    if (typeof all === 'number') {
      return { padding: `${all}px` };
    }
    return { padding: all };
  });
</script>

<style scoped></style>
