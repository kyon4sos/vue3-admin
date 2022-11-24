<template>
  <el-row justify="space-between">
    <el-col>
      <el-result
        icon="error"
        title="提交失败"
        sub-title="表单提交失败，请重试。"
      >
        <template #extra>
          <el-button type="primary">返回修改</el-button>
        </template>
      </el-result>
    </el-col>
  </el-row>
  <el-row>
    <el-col>
      <el-alert title="你的用户组不具有进行此操作的权限；" type="error" />
    </el-col>
  </el-row>
</template>

<script setup lang="ts"></script>

<style scoped></style>
