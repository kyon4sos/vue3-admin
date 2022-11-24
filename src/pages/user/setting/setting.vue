<template>
  <el-card class="mb-16">
    <el-row align="middle" :gutter="10">
      <el-col :sm="6" :xs="6" :md="4" :lg="4" :xl="4">
        <el-avatar
          :size="80"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
      </el-col>
      <el-col :sm="18" :xs="18" :md="20" :lg="20" :xl="20">
        <el-space class="info-item" direction="vertical" alignment="flex-start">
          <span>用户名 :王立群</span>
          <span>账号ID :15012312300</span>
          <span>注册时间 :2013-05-10 12:10:00</span>
        </el-space>
        <el-space class="info-item" direction="vertical" alignment="flex-start">
          <span
            >实名认证 :
            <el-tag class="ml-2" type="success">已认证</el-tag></span
          >
          <span>手机号码 :150****0000</span>
        </el-space>
      </el-col>
    </el-row>
  </el-card>
  <el-card>
    <el-tabs v-model="activeTab" class="demo-tabs">
      <el-tab-pane label="基础信息" name="first">
        <el-row justify="center">
          <el-col :span="8">
            <el-form :label-width="120">
              <el-form-item label="邮箱" required>
                <el-input placeholder="请输入邮箱地址" />
              </el-form-item>
              <el-form-item label="昵称" required>
                <el-input placeholder="请输入昵称" />
              </el-form-item>
              <el-form-item label="国家/地区" required>
                <el-select style="width: 100%" placeholder="请选择国家/地区">
                  <el-option value="中国" label="中国"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="所在区域" required>
                <el-select style="width: 100%" placeholder="请选择">
                  <el-option value="中国" label="中国"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="具体地址" required>
                <el-input placeholder="请输入具体地址" />
              </el-form-item>
              <el-form-item label="个人简介" required>
                <el-input placeholder="请输入个人简介" type="textarea" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary">保存</el-button>
                <el-button>重置</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="安全设置" name="second">
        <el-descriptions :column="1">
          <el-descriptions-item label="登录密码"
            >已设置。密码至少6位字符，支持数字、字母和除空格外的特殊字符，且必须同时包含数字和大小写字母。</el-descriptions-item
          >
          <el-descriptions-item label="密保问题"
            >您暂未设置密保问题，密保问题可以有效的保护账号的安全。</el-descriptions-item
          >
          <el-descriptions-item label="安全手机"
            >已绑定：150******50</el-descriptions-item
          >
          <el-descriptions-item label="安全邮箱">
            您暂未设置邮箱，绑定邮箱可以用来找回密码、接收通知等。
          </el-descriptions-item>
        </el-descriptions>
      </el-tab-pane>
      <!-- <el-tab-pane label="实名认证" name="third">实名认证</el-tab-pane> -->
    </el-tabs>
  </el-card>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const activeTab = ref('first');
</script>

<style scoped>
  .info-item {
    font-size: 12px;
    color: rgb(78, 89, 105);
    margin-right: 100px;
  }

  .el-tab-pane {
    padding: 50px 0px;
  }
</style>
