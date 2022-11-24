<template>
  <el-row justify="center">
    <el-col>
      <el-result icon="error" title="对不起，您没有访问该资源的权限">
        <template #extra>
          <el-button type="primary">返回</el-button>
        </template>
      </el-result>
    </el-col>
  </el-row>
</template>

<script setup lang="ts"></script>

<style scoped></style>
