<template>
  <el-card class="info mb-16" :body-style="{ padding: '0px' }">
    <el-space direction="vertical" style="padding: 30px">
      <el-space direction="vertical">
        <el-avatar
          :size="60"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <span>王立群</span>
      </el-space>
      <el-space class="title">
        <el-space>
          <el-icon>
            <Position />
          </el-icon>
          <span>前端</span>
        </el-space>
        <el-space>
          <el-icon>
            <User />
          </el-icon>
          <span>前端</span>
        </el-space>
        <el-space>
          <el-icon>
            <SetUp />
          </el-icon>
          <span>前端</span>
        </el-space>
      </el-space>
    </el-space>
  </el-card>
  <el-row class="mb-16" :gutter="16">
    <el-col :span="18">
      <el-card header="我的项目">
        <el-row :gutter="16">
          <el-col v-for="idx in 6" :key="idx" class="mb-16" :span="8">
            <el-card header="企业级产品设计系统">
              <p class="demo">Content resource managemen</p>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card header="我的团队">
        <el-row :gutter="16">
          <el-col v-for="idx in 4" :key="idx" class="mb-16">
            <el-space>
              <el-avatar
                class="avatar"
                :size="40"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              >
              </el-avatar>
              <el-space direction="vertical" alignment="flex-start">
                <span>企业级产品设计团队</span>
                <span class="total">共5095人</span>
              </el-space>
            </el-space>
            <el-divider v-if="idx !== 3" />
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="18">
      <el-card header="最新动态">
        <el-row :gutter="16">
          <el-col v-for="idx in 6" :key="idx" class="mb-16">
            <el-space>
              <el-avatar
                class="avatar"
                :size="40"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              >
              </el-avatar>
              <el-space direction="vertical" alignment="flex-start">
                <span>企业级产品设计团队</span>
                <span class="total">共5095人</span>
              </el-space>
            </el-space>
            <el-divider v-if="idx !== 9" />
          </el-col>
        </el-row>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card header="站内通知">
        <el-empty description="暂无数据" image="/empty.png" />
        <span></span>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
  import { Position, User, SetUp } from '@element-plus/icons-vue';
</script>

<style scoped lang="less">
  .info {
    display: flex;
    justify-content: center;
    background: url(https://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/41c6b125cc2e27021bf7fcc9a9b1897c.svg~tplv-49unhts6dw-image.image);
    background-repeat: no-repeat;
    background-size: cover;
  }

  .title {
    font-size: 12px;
  }

  .demo {
    height: 68px;
  }

  .avatar {
    margin-right: 12px;
  }

  .total {
    font-size: 12px;
  }

  .notice {
    width: 180px;
  }
</style>
