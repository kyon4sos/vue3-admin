<template>
  <div class="not-found">
    <el-result
      icon="warning"
      title="Not Found"
      sub-title="Please follow the instructions"
    >
      <template #extra>
        <el-button type="primary" @click="handleClick">Back</el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const handleClick = () => {
    router.push('/home');
  };
</script>

<style scoped lang="less">
  .not-found {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
