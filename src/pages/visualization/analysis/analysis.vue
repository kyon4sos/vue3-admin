<template>
  <el-row class="mb-16" :gutter="20">
    <PublicAnalysis />
  </el-row>
  <el-row class="mb-16" :gutter="20">
    <ContentPublish />
    <TopAuthorsList />
  </el-row>
  <el-row>
    <DateAnalysis />
  </el-row>
</template>

<script setup lang="ts">
  import ContentPublish from './content-publish.vue';
  import DateAnalysis from './date-analysis.vue';
  import PublicAnalysis from './public-analysis.vue';
  import TopAuthorsList from './top-authors-list.vue';
</script>

<style scoped></style>
