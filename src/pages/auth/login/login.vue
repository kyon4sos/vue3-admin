<template>
  <div class="login-page">
    <div class="bg">
      <div class="login-form">
        <div class="title">
          <h1>Welcome</h1>
          <h1>Back</h1>
        </div>
        <el-form
          ref="formRef"
          label-position="top"
          :model="form"
          :rules="rules"
          hide-required-asterisk
        >
          <el-row>
            <el-col :span="24">
              <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" placeholder="请输入用户名admin" />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="密码" prop="password">
                <el-input
                  v-model="form.password"
                  type="password"
                  placeholder="请输入密码admin"
                />
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item>
                <el-button
                  :loading="isLoading"
                  type="primary"
                  @click="onSubmit(formRef)"
                >
                  Sign In
                </el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { FormInstance, FormRules } from 'element-plus';
  import { reactive, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import useRequest from '@/hooks/use-request';
  import useAuth from '@/hooks/use-auth';

  type LoginInfo = {
    success: boolean;
  };

  const router = useRouter();
  const route = useRoute();
  const { signIn } = useAuth();
  const formRef = ref<FormInstance>();
  const form = reactive({
    username: '',
    password: '',
  });

  const rules = reactive<FormRules>({
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 3, max: 10, message: '用户名长度为 3 - 10', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 3, max: 10, message: '密码长度为 3 - 10', trigger: 'blur' },
    ],
  });

  const { isLoading, execute } = useRequest<LoginInfo>(
    '/api/login',
    {
      method: 'POST',
    },
    { immediate: false }
  );

  const onSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate(async (valid) => {
      if (!valid) {
        return;
      }
      const res = await execute({
        data: form,
      });
      const { error } = res;
      if (!error.value) {
        signIn();
        const url: any = route.query.redirectUrl ?? '/';
        router.push({ path: url });
      }
    });
  };
</script>

<style lang="less" scoped>
  .login-page {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #1e1e1e;

    .bg {
      position: absolute;
      width: 70vw;
      height: 80vh;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 8px;
      box-shadow: -9px 4px 76px rgba(0, 0, 0, 0.25);
      background: url('/bg-1.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: flex-end;
      overflow: hidden;
    }

    .login-form {
      margin-right: 5vw;
      margin-top: 100px;
      max-width: 420px;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      background-color: rgba(239, 239, 239, 0.2);
      height: 400px;
      padding: 32px;
      box-shadow: -2px 7px 14px 4px rgb(0 0 0 / 25%);
      filter: none;
      backdrop-filter: blur(10px);
      border-radius: 16px;
      border: 1px solid transparent;

      ::v-deep .el-form-item__label {
        color: #000;
      }

      h1 {
        margin: 0;
        font-size: 52px;
        line-height: 52px;
      }

      .title {
        margin-bottom: 20px;
        color: #1e1e1e;
      }

      .el-button {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .login-page {
      .bg {
        width: 100vw;
        height: 100vh;
        padding: 16px;
        justify-content: center;
        align-items: center;

        .login-form {
          align-items: center;
          margin-right: 0;
          margin-top: 0;

          .title {
            color: rgb(0, 0, 0);
            text-align: center;
          }
        }

        .title {
          text-align: center;
        }
      }
    }
  }
</style>
