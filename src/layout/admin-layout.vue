<template>
  <el-container class="admin-layout">
    <el-aside :width="sideWidth" :class="isCollapse ? 'collapsed' : null">
      <logo>
        <span v-show="!isCollapse">vue3-admin</span>
      </logo>
      <NMenu />
    </el-aside>
    <el-container>
      <el-header>
        <NHeader />
      </el-header>
      <el-main>
        <NContent />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import useAppStore from '@/store/app';
  import useWidth from '@/hooks/use-width';
  import NHeader from './components/header.vue';
  import NContent from './components/content.vue';
  import NMenu from './components/menu';
  import Logo from './components/logo.vue';

  const store = useAppStore();
  const { isCollapse } = storeToRefs(store);
  const { md } = useWidth();

  const baseWidth = 220;
  const sideWidth = computed(() => {
    if (md.value) {
      return '0px';
    }
    return isCollapse.value ? '64px' : `${baseWidth}px`;
  });
</script>

<style scoped lang="less">
  @borerColor: var(--el-color-info-light-8);

  @headerHeight: var(--el-header-height);

  @transition: all var(--el-transition-duration)
    cubic-bezier(0.34, 0.69, 0.1, 1);

  .admin-layout {
    height: 100vh;

    .el-header {
      width: 100%;
      background: var(--el-bg-color);
      border-bottom: 1px solid @borerColor;
      color: var(--el-text-color-primary);
      box-shadow: 0 2px 5px 0 rgb(0 0 0 / 8%);
    }

    ::v-deep .el-aside {
      color: var(--el-text-color-primary);
      background: var(--bg-color);
      overflow-x: hidden;
      border-right: 1px solid @borerColor;
      box-shadow: 0 2px 5px 0 rgb(0 0 0 / 8%);
      height: 100vh;
      transition: width 0.4s cubic-bezier(0.34, 0.69, 0.1, 1);

      &.collapsed {
        transition: width 0.4s cubic-bezier(0.34, 0.69, 0.1, 1) -0.1s;
      }
    }

    .el-main {
      padding-top: 16px;
      transition: @transition;
    }
  }
</style>
