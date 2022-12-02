<template>
  <div class="layout-navbar">
    <el-space>
      <el-button
        v-if="md"
        class="toggle-button"
        :icon="Expand"
        text
        plain
        @click="handleClickMenuTrigger"
      >
      </el-button>
    </el-space>
    <el-space :size="20">
      <el-button :icon="darkIcon" circle @click="toggleDark()"> </el-button>
      <el-button :icon="Setting" circle @click="settingVisible = true">
      </el-button>
      <el-button :icon="fullScreenIcon" circle @click="toggle"> </el-button>
      <el-dropdown @command="handleCommand">
        <el-avatar :size="32" :src="avatar" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-space>
  </div>
  <el-drawer v-model="settingVisible" title="设置" :size="300">
    <el-form :model="form">
      <el-form-item label="菜单栏颜色">
        <el-color-picker v-model="form.menuBgColor" />
      </el-form-item>
      <el-form-item label="菜单栏">
        <el-switch></el-switch>
      </el-form-item>
    </el-form>
    <el-form-item label="导航栏">
      <el-switch></el-switch>
    </el-form-item>
  </el-drawer>
</template>

<script setup lang="ts">
  import { computed, reactive, ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useDark, useToggle, useFullscreen } from '@vueuse/core';
  import {
    Moon,
    Sunny,
    Rank,
    FullScreen,
    Expand,
    Setting,
  } from '@element-plus/icons-vue';
  import useAppStore from '@/store/app';
  import { useRouter } from 'vue-router';
  import useWidth from '@/hooks/use-width';
  import useEvent from '@/hooks/use-event';
  import useAuth from '@/hooks/use-auth';

  const store = useAppStore();
  const router = useRouter();
  const { userInfo } = storeToRefs(store);
  const isDark = useDark();
  const { signOut } = useAuth();
  const darkIcon = computed(() => {
    return isDark.value ? Moon : Sunny;
  });

  const { isFullscreen, toggle } = useFullscreen();
  const fullScreenIcon = computed(() => {
    return isFullscreen.value ? FullScreen : Rank;
  });

  const { md } = useWidth();
  const toggleDark = useToggle(isDark);

  const { emit } = useEvent();
  const handleClickMenuTrigger = () => {
    emit('showMenu');
  };

  const settingVisible = ref(false);
  const { avatar } = userInfo.value;

  const form = reactive({
    menuBgColor: '',
    header: true,
    side: true,
  });

  const handleCommand = (command: string | number | object) => {
    if (command === 'logout') {
      signOut();
      router.push('login');
    }
  };
</script>

<style scoped lang="less">
  .layout-navbar {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  @media screen and (max-width: 992px) {
    .layout-navbar {
      justify-content: space-between;
    }
  }
</style>
