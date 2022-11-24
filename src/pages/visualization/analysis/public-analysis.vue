<template>
  <el-col :span="24">
    <el-card header="舆情分析">
      <el-row :gutter="20">
        <el-col class="mb-16" :sm="12" :md="12" :lg="6" :xl="6">
          <div class="pane-item">
            <div class="content">
              <div class="title">访问总人次</div>
              <div class="total">5,670</div>
              <div class="font-size-small compare">
                <span>较昨日 206.32</span>
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  class="arco-icon arco-icon-arrow-rise"
                  stroke-width="4"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  data-v-15a7739e=""
                >
                  <path
                    d="M23.992 6.01a.01.01 0 0 1 .016 0l9.978 11.974a.01.01 0 0 1-.007.016H14.02a.01.01 0 0 1-.007-.016l9.978-11.975Z"
                  ></path>
                  <path
                    d="m24 6 10 12H14L24 6Z"
                    fill="currentColor"
                    stroke="none"
                  ></path>
                  <path d="M26 42h-4V16h4z"></path>
                  <path
                    fill="currentColor"
                    stroke="none"
                    d="M26 42h-4V16h4z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="chart-wrap">
              <Chart :options="option" height="110px" />
            </div>
          </div>
        </el-col>
        <el-col class="mb-16" :sm="12" :md="12" :lg="6" :xl="6">
          <div class="pane-item">
            <div class="content">
              <div class="title">访问总人次</div>
              <div class="total">5,670</div>
              <div class="font-size-small compare">
                <span>较昨日 206.32</span>
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  class="arco-icon arco-icon-arrow-rise"
                  stroke-width="4"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  data-v-15a7739e=""
                >
                  <path
                    d="M23.992 6.01a.01.01 0 0 1 .016 0l9.978 11.974a.01.01 0 0 1-.007.016H14.02a.01.01 0 0 1-.007-.016l9.978-11.975Z"
                  ></path>
                  <path
                    d="m24 6 10 12H14L24 6Z"
                    fill="currentColor"
                    stroke="none"
                  ></path>
                  <path d="M26 42h-4V16h4z"></path>
                  <path
                    fill="currentColor"
                    stroke="none"
                    d="M26 42h-4V16h4z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="chart-wrap">
              <Chart :options="optionTotal" height="110px" />
            </div>
            <!-- <v-chart class="chart" :option="optionTotal" autoresize /> -->
          </div>
        </el-col>
        <el-col class="mb-16" :sm="12" :md="12" :lg="6" :xl="6">
          <div class="pane-item">
            <div class="content">
              <div class="title">内容发布量</div>
              <div class="total">4,970</div>
              <div class="font-size-small compare">
                <span>较昨日 206.32</span>
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  class="arco-icon arco-icon-arrow-rise"
                  stroke-width="4"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  data-v-15a7739e=""
                >
                  <path
                    d="M23.992 6.01a.01.01 0 0 1 .016 0l9.978 11.974a.01.01 0 0 1-.007.016H14.02a.01.01 0 0 1-.007-.016l9.978-11.975Z"
                  ></path>
                  <path
                    d="m24 6 10 12H14L24 6Z"
                    fill="currentColor"
                    stroke="none"
                  ></path>
                  <path d="M26 42h-4V16h4z"></path>
                  <path
                    fill="currentColor"
                    stroke="none"
                    d="M26 42h-4V16h4z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="chart-wrap">
              <Chart :options="option" height="110px" />
            </div>
          </div>
        </el-col>
        <el-col class="mb-16" :sm="12" :md="12" :lg="6" :xl="6">
          <div class="pane-item">
            <div class="content">
              <div class="title">访问总人次</div>
              <div class="total">5,670</div>
              <div class="font-size-small compare">
                <span>较昨日 206.32</span>
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  class="arco-icon arco-icon-arrow-rise"
                  stroke-width="4"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  data-v-15a7739e=""
                >
                  <path
                    d="M23.992 6.01a.01.01 0 0 1 .016 0l9.978 11.974a.01.01 0 0 1-.007.016H14.02a.01.01 0 0 1-.007-.016l9.978-11.975Z"
                  ></path>
                  <path
                    d="m24 6 10 12H14L24 6Z"
                    fill="currentColor"
                    stroke="none"
                  ></path>
                  <path d="M26 42h-4V16h4z"></path>
                  <path
                    fill="currentColor"
                    stroke="none"
                    d="M26 42h-4V16h4z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="chart-wrap">
              <Chart :options="optionTotal" height="110px" />
            </div>
            <!-- <v-chart class="chart" :option="optionTotal" autoresize /> -->
          </div>
        </el-col>
      </el-row>
    </el-card>
  </el-col>
</template>

<script setup lang="ts">
  import { ChartOption, Chart } from '@/components';

  const scale = 1;
  const echartData = [
    {
      value: 2154,
      name: '曲阜师范大学',
    },
    {
      value: 3854,
      name: '潍坊学院',
    },
    {
      value: 3515,
      name: '青岛职业技术学院',
    },
    {
      value: 3515,
      name: '淄博师范高等专科',
    },
    {
      value: 3854,
      name: '鲁东大学',
    },
    {
      value: 2154,
      name: '山东师范大学',
    },
  ];
  const rich = {
    yellow: {
      color: '#ffc72b',
      fontSize: 30 * scale,
      padding: [5, 4],
      align: 'center',
    },
    total: {
      color: '#ffc72b',
      fontSize: 40 * scale,
      align: 'center',
    },
    white: {
      color: '#fff',
      align: 'center',
      fontSize: 14 * scale,
      padding: [21, 0],
    },
    blue: {
      color: '#49dff0',
      fontSize: 16 * scale,
      align: 'center',
    },
    hr: {
      borderColor: '#0b5263',
      width: '100%',
      borderWidth: 1,
      height: 0,
    },
  };
  const option: ChartOption = {
    // backgroundColor: '#031f2d',
    tooltip: {
      trigger: 'item',
    },
    title: {
      // text: '总考生数',
      left: 'center',
      top: '53%',
      padding: [24, 0],
      textStyle: {
        color: '#fff',
        fontSize: 18 * scale,
        align: 'center',
      },
    },
    series: [
      {
        name: '总考生数量',
        type: 'pie',
        radius: ['42%', '50%'],
        hoverAnimation: false,
        center: ['80%', '50%'],
        label: {
          show: false,
          position: 'center',
        },
        color: [
          '#c487ee',
          '#deb140',
          '#49dff0',
          '#034079',
          '#6f81da',
          '#00ffb4',
        ],
        data: echartData,
      },
    ],
  };

  const optionTotal: ChartOption = {
    xAxis: {
      type: 'category',
      axisLabel: false,
      show: false,
      // type: 'value',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    grid: {
      height: '100%',
      width: '80%',
      top: 8,
      right: 8,
    },
    yAxis: {
      show: false,
    },
    series: [
      {
        data: [50, 230, 24, 218, 135, 247, 60],
        type: 'line',
        smooth: true,
        labelLine: {
          show: false,
        },
        showSymbol: false,
        lineStyle: {
          width: 6,
          type: 'solid',
          color: 'rgb(147,228,197)',
          // join: 'bevel'
          // cap: 'round'
        },
      },
    ],
  };
</script>

<style scoped lang="less">
  .pane-item {
    // width: 100%;
    background: linear-gradient(rgb(40, 73, 145) 0%, rgb(18, 43, 98) 100%);
    color: #fff;
    display: flex;
    padding: 16px;

    .content {
      display: inline-block;
      height: 110px;
      flex: 0 0 110px;
    }

    .title {
      color: #fff;
      font-size: 14px;
      margin-bottom: 8px;
    }

    .total {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .compare {
      font-size: 12px;

      * {
        vertical-align: middle;
        color: #f33838;
      }
    }

    .chart-wrap {
      // display: inline-block;
      flex: 1;
    }
  }

  .chart {
    height: 110px;
  }
</style>
