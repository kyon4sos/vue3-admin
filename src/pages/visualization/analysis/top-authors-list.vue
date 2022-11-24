<template>
  <el-col :sm="24" :md="24" :lg="10" :xl="8">
    <el-card header="热门作者榜单">
      <NTable v-loading="isLoading" :columns="columns" :data="data" />
    </el-card>
  </el-col>
</template>

<script setup lang="ts">
  import { ColumnsProps, NTable } from '@/components';
  import useRequest from '@/hooks/use-request';

  interface AuthorList {
    sort: number;
    total: number;
    click: number;
    author: string;
    id: number;
  }

  const columns: ColumnsProps<AuthorList>[] = [
    {
      label: '排名',
      dataIndex: 'sort',
    },
    {
      label: '作者',
      dataIndex: 'author',
    },
    {
      label: '内容量',
      dataIndex: 'total',
    },
    {
      label: '点击量',
      dataIndex: 'click',
    },
  ];
  // const data, isLoading;
  const { data, isLoading } = useRequest<AuthorList[]>('/api/author');
  console.log(data);
</script>
