<template>
  <div class="logo">
    <svg
      class="logo"
      viewBox="0 0 128 128"
      width="24"
      height="24"
      data-v-97393f76=""
    >
      <path
        fill="#42b883"
        d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
        data-v-97393f76=""
      ></path>
      <path
        fill="#35495e"
        d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
        data-v-97393f76=""
      ></path>
    </svg>
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
  .logo {
    display: flex;
    justify-content: center;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #eee;
    gap: 14px;
    background-color: var(--bg-color);
  }
</style>
