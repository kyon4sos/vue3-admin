<template>
  <el-row justify="space-between">
    <el-col>
      <el-result icon="success" title="提交成功" sub-title="表单提交成功！">
        <template #extra>
          <el-button type="primary">返回列表</el-button>
        </template>
      </el-result>
    </el-col>
  </el-row>
  <el-row>
    <el-col>
      <el-steps :active="2" align-center>
        <el-step title="提交申请" description="2020/10/10 14:00:39" />
        <el-step title="直属领导审核" description="进行中" />
        <el-step title="购买证书" description="未开始" />
        <el-step title="安全测试" description="未开始" />
      </el-steps>
    </el-col>
  </el-row>
</template>

<script setup lang="ts"></script>

<style scoped></style>
