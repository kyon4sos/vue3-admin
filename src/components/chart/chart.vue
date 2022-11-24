<template>
  <div ref="chartContainer" class="chart" :style="{ height }"></div>
</template>

<script setup lang="ts">
  import { onMounted, ref, onUnmounted, defineProps } from 'vue';
  import * as echarts from 'echarts';
  import { useEventListener } from '@vueuse/core';
  import { EChartsOption } from 'echarts';
  import { ECBasicOption } from 'echarts/types/dist/shared';

  export type ChartOption = ECBasicOption;

  const chartContainer = ref();
  let chart: echarts.ECharts | null = null;

  const props = defineProps<{
    options: ECBasicOption;
    height?: string;
  }>();

  onMounted(() => {
    chart = echarts.init(chartContainer.value);
    chart.setOption(props.options);
  });

  const cleanUp = useEventListener(window, 'resize', () => {
    chart?.resize();
  });

  onUnmounted(() => {
    chart?.dispose();
    cleanUp();
  });
</script>

<style scoped lang="less">
  .chart {
    width: 100%;
    height: 400px;
  }
</style>
