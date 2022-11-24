<template>
  <el-row justify="center">
    <el-col>
      <el-result icon="warning" title="抱歉，页面不见了～">
        <template #extra>
          <el-space>
            <el-button>重试</el-button>
            <el-button type="primary">返回</el-button>
          </el-space>
        </template>
      </el-result>
    </el-col>
  </el-row>
</template>

<script setup lang="ts"></script>

<style scoped></style>
