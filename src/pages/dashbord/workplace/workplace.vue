<template>
  <el-row :gutter="20">
    <el-col class="mb-16" :xs="24" :md="24" :lg="18" :xl="18">
      <el-card class="box-card" header="Welcome! 王立群">
        <el-row justify="center">
          <el-col
            class="mb-16"
            v-for="item in items"
            :key="item.id"
            :xs="24"
            :sm="12"
            :md="12"
            :lg="12"
            :xl="6"
          >
            <el-space :size="20" alignment="center">
              <el-avatar :size="60" :src="item.src" />
              <el-space direction="vertical" alignment="flex-start">
                <div class="font-size-base">{{ item.title }}</div>
                <div class="font-size-large">
                  {{ item.total }}
                  <span class="font-size-small">{{ item.unit }}</span>
                </div>
              </el-space>
            </el-space>
          </el-col>
        </el-row>
        <el-divider />
        <Chart :options="contentOpt" />
      </el-card>
    </el-col>
    <el-col class="mb-16" :xs="24" :md="24" :lg="6" :xl="6">
      <el-row class="mb-16">
        <el-col>
          <el-card class="box-card" header="Quick Operation">
            <el-row :gutter="20">
              <el-col v-for="(item, idx) in operation" :key="idx" :span="6">
                <el-space direction="vertical">
                  <el-icon class="icon-item" :size="30">
                    <component :is="item.icon" />
                  </el-icon>
                  <span class="font-size-small">{{ item.title }}</span>
                </el-space>
              </el-col>
            </el-row>
            <el-divider />
            <el-row :gutter="20">
              <el-col v-for="(item, idx) in operation" :key="idx" :span="6.4">
                <el-space direction="vertical">
                  <el-icon class="icon-item" :size="30">
                    <component :is="item.icon" />
                  </el-icon>
                  <span class="font-size-small">{{ item.title }}</span>
                </el-space>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-card class="box-card" :body-style="{ padding: '0px' }">
            <el-carousel indicator-position="outside" height="230px">
              <el-carousel-item v-for="item in carouselItems" :key="item.id">
                <el-image :src="item.src" />
              </el-carousel-item>
            </el-carousel>
          </el-card>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col class="mb-16" :xs="24" :md="24" :lg="12" :xl="12">
      <el-card header="Popular Content">
        <el-space direction="vertical" fill style="width: 100%">
          <el-radio-group>
            <el-radio-button label="text" />
            <el-radio-button label="image" />
            <el-radio-button label="video" />
            <el-radio-button label="Chicago" />
          </el-radio-group>
          <NTable :columns="columns" :data="data" stripe />
        </el-space>
      </el-card>
    </el-col>
    <el-col class="mb-16" :xs="24" :md="24" :lg="12" :xl="12">
      <el-card header="Categories Percent">
        <Chart :options="catagoriesOpt" />
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
  import { Chart, NTable } from '@/components';
  import type { ColumnsProps } from '@/components';
  import { ChartOption } from '@/components/chart/chart.vue';
  import * as echarts from 'echarts';
  import {
    Calendar,
    DataAnalysis,
    Monitor,
    Odometer,
    Location,
  } from '@element-plus/icons-vue';

  const items = [
    {
      id: 1,
      title: 'Online Content',
      src: 'http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77d74c9a245adeae1ec7fb5d4539738d.svg~tplv-49unhts6dw-image.image',
      unit: 'pecs',
      total: '373.5 W+',
    },
    {
      id: 2,
      title: 'Online Content',
      src: 'http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77d74c9a245adeae1ec7fb5d4539738d.svg~tplv-49unhts6dw-image.image',
      unit: 'pecs',
      total: '373.5 W+',
    },
    {
      id: 3,
      title: 'Online Content',
      src: 'http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77d74c9a245adeae1ec7fb5d4539738d.svg~tplv-49unhts6dw-image.image',
      unit: 'pecs',
      total: '373.5 W+',
    },
    {
      id: 4,
      title: 'Online Content',
      src: 'http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77d74c9a245adeae1ec7fb5d4539738d.svg~tplv-49unhts6dw-image.image',
      unit: 'pecs',
      total: '373.5 W+',
    },
  ];

  type Data = {
    id: number;
    sort: number;
    title: string;
    click: number | string;
    increase: number | string;
  };

  const columns: ColumnsProps<Data>[] = [
    {
      label: '排名',
      dataIndex: 'sort',
    },
    {
      label: '内容标题',
      dataIndex: 'title',
    },
    {
      label: '点击量',
      dataIndex: 'click',
    },
    {
      label: '日涨幅',
      dataIndex: 'increase',
    },
  ];

  const data: Data[] = [
    {
      id: 1,
      title: '杭州一家三口公园',
      sort: 1,
      click: '7.9w+',
      increase: '0%',
    },
    {
      id: 2,
      title: '杭州一家三口公园',
      sort: 1,
      click: '7.9w+',
      increase: '0%',
    },
    {
      id: 3,
      title: '杭州一家三口公园',
      sort: 1,
      click: '7.9w+',
      increase: '0%',
    },
    {
      id: 4,
      title: '杭州一家三口公园',
      sort: 1,
      click: '7.9w+',
      increase: '0%',
    },
    {
      id: 5,
      title: '杭州一家三口公园',
      sort: 1,
      click: '7.9w+',
      increase: '0%',
    },
    {
      id: 6,
      title: '杭州一家三口公园',
      sort: 1,
      click: '7.9w+',
      increase: '0%',
    },
    {
      id: 7,
      title: '杭州一家三口公园',
      sort: 1,
      click: '7.9w+',
      increase: '0%',
    },
    {
      id: 8,
      title: '杭州一家三口公园',
      sort: 1,
      click: '7.9w+',
      increase: '0%',
    },
  ];

  const contentOpt: ChartOption = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    title: {
      text: 'Gradient Stacked Area Chart',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    legend: {
      data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Line 1',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(128, 255, 165)',
            },
            {
              offset: 1,
              color: 'rgb(1, 191, 236)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [140, 232, 101, 264, 90, 340, 250],
      },
      {
        name: 'Line 2',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(0, 221, 255)',
            },
            {
              offset: 1,
              color: 'rgb(77, 119, 255)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [120, 282, 111, 234, 220, 340, 310],
      },
      {
        name: 'Line 3',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(55, 162, 255)',
            },
            {
              offset: 1,
              color: 'rgb(116, 21, 219)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [320, 132, 201, 334, 190, 130, 220],
      },
      {
        name: 'Line 4',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 0, 135)',
            },
            {
              offset: 1,
              color: 'rgb(135, 0, 157)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [220, 402, 231, 134, 190, 230, 120],
      },
      {
        name: 'Line 5',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        label: {
          show: true,
          position: 'top',
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 191, 0)',
            },
            {
              offset: 1,
              color: 'rgb(224, 62, 76)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [220, 302, 181, 234, 210, 290, 150],
      },
    ],
  };

  const catagoriesOpt: ChartOption = {
    title: {
      text: 'Categories Percent',
      subtext: 'Fake Data',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  const src = [
    '//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/5cc3cd1d994b7ef9db6a1f619a22addd.jpg~tplv-49unhts6dw-image.image',
    '//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/f256cbcc287139e191fecea9d255a1f0.jpg~tplv-49unhts6dw-image.image',
    '//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/b557ff0cd44146a2e471b477af2f30d0.jpg~tplv-49unhts6dw-image.image',
    '//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/665106f4bbd2a2df96eaf7aec52f7bc3.jpg~tplv-49unhts6dw-image.image',
    '//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/ea095a2c9c72b5d8f2f2818040db736d.jpg~tplv-49unhts6dw-image.image',
  ];

  const carouselItems = src.map((item, idx) => ({
    id: idx,
    src: item,
    title: `测试${idx}`,
  }));

  const operation = [
    {
      icon: Odometer,
      title: '内容管理',
    },
    {
      icon: DataAnalysis,
      title: '内容分析',
    },
    {
      icon: Monitor,
      title: '高级管理',
    },
    {
      icon: Location,
      title: '线上推广',
    },
    {
      icon: Calendar,
      title: '内容投放',
    },
  ];
</script>

<style scoped></style>
