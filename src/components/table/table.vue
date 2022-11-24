<template>
  <el-table :data="data" v-bind="$attrs">
    <template v-for="(col, idx) in columns" :key="idx">
      <el-table-column
        v-if="col.render"
        :prop="col.dataIndex"
        :label="col.label"
        :width="col.width"
      >
        <template #default="scope">
          {{ col.render(scope) }}
        </template>
      </el-table-column>
      <el-table-column
        v-else
        :prop="col.dataIndex"
        :label="col.label"
        :width="col.width"
      >
      </el-table-column>
    </template>
  </el-table>
</template>

<script setup lang="ts">
  import { defineProps, VNode } from 'vue';

  export interface ColumnsProps<T = any> {
    label: string;
    width?: number | string;
    dataIndex?: keyof T;
    render?: (scope: any) => VNode;
  }

  defineProps({
    columns: {
      type: Array<ColumnsProps<any>>,
    },
    data: {
      type: Array<any>,
    },
  });
</script>

<style scoped></style>
