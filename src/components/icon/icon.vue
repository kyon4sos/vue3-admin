<template>
  <i class="el-icon">
    <Icon :icon="type" :theme="theme" :size="size" />
  </i>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';
  import { Icon } from '@iconify/vue';

  interface IconProps {
    type: any;
    size?: number | string;
    theme?: 'outline' | 'filled' | 'two-tone' | 'multi-color';
  }
  withDefaults(defineProps<IconProps>(), {
    size: 14,
    theme: 'outline',
  });
</script>

<style></style>
