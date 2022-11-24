<template>
  <el-row>
    <el-col :span="24">
      <el-card>
        <template #header>
          <div class="mb-16"> 查询表格 </div>
          <el-form :inline="true" :model="form">
            <el-row :gutter="16">
              <el-col :span="7">
                <el-form-item label="集合编号" prop="id">
                  <el-input
                    v-model="form.id"
                    placeholder="请输入集合编号"
                    clearable
                  />
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label=" 集合名称">
                  <el-input
                    v-model="form.name"
                    placeholder="请输入集合名称"
                    clearable
                  />
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="内容载体">
                  <el-select
                    v-model="form.payload"
                    placeholder="请选择内容载体"
                  >
                    <el-option label="全部" :value="0" />
                    <el-option label="横版短视频" value="横版短视频" />
                    <el-option label="竖版小视频" value="竖版小视频" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="3">
                <el-button type="primary" @click="handleQuery">查询</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="16">
              <el-col :span="7">
                <el-form-item label="筛选方式">
                  <el-select v-model="form.filter" placeholder="请选择筛选方式">
                    <el-option label="全部" :value="0" />
                    <el-option label="人工筛选" value="人工筛选" />
                    <el-option label="规则筛选" value="规则筛选" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="创建时间">
                  <el-date-picker
                    v-model="form.createTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="状态" :label-width="68">
                  <el-select v-model="form.status" placeholder="请选择状态">
                    <el-option label="全部" :value="0" />
                    <el-option label="已上线" value="已上线" />
                    <el-option label="已下线" value="已下线" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="3">
                <el-button block>重置</el-button>
              </el-col>
            </el-row>
          </el-form>
        </template>
        <NTable v-loading="isLoading" :columns="columns" :data="data"></NTable>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
  import { ColumnsProps, NTable } from '@/components';
  import useRequest from '@/hooks/use-request';
  import { reactive } from 'vue';

  interface DataItem {
    id: string | number;
    name: string;
    payload: string;
    filter: string;
    total: number;
    status: string;
    createTime: string;
  }

  const form = reactive({
    id: null,
    name: null,
    payload: null,
    filter: null,
    total: null,
    status: null,
    createTime: null,
  });

  const { data, isLoading } = useRequest<DataItem[]>('/api/search-table');

  const filter = (list: any[], obj: any) => {
    Object.keys(obj).forEach((key) => {
      if (obj[key]) {
        list = list?.filter((item: any) => item[key] === obj[key]) ?? [];
      }
    });
    return list;
  };

  const handleQuery = () => {
    data.value = filter(data.value ?? [], form);
  };

  const columns: ColumnsProps<DataItem>[] = [
    {
      label: '集合编号',
      dataIndex: 'id',
    },
    {
      label: '集合名称',
      dataIndex: 'name',
    },
    {
      label: '内容体裁',
      dataIndex: 'payload',
    },
    {
      label: '筛选方式',
      dataIndex: 'filter',
    },
    {
      label: '内容量',
      dataIndex: 'total',
    },
    {
      label: '创建时间',
      dataIndex: 'createTime',
    },
    {
      label: '状态',
      dataIndex: 'status',
    },
    {
      label: '操作',
    },
  ];
</script>

<style scoped lang="less">
  .el-form-item {
    width: 100%;

    .el-select {
      width: 100%;
    }
  }
</style>
