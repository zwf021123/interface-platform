<script setup>
import { ref } from 'vue'
import { Message, Lock, User } from '@element-plus/icons-vue'

const activeName = ref('byEmail')

const autoLogin = ref(true)
</script>

<template>
  <div class="register-page">
    <el-container>
      <el-header>
        <div class="header">
          <span class="logo">logo</span>
          <span class="title">API 接口开放平台</span>
        </div>
        <div class="describe">
          Qi-API 接口开放平台致力于提供稳定、安全、高效的接口调用服务
        </div>
      </el-header>
      <el-main>
        <el-tabs v-model="activeName" class="my-tabs" stretch>
          <el-tab-pane label="邮箱账号登录" name="byEmail">
            <el-form>
              <el-form-item>
                <el-input
                  v-model="emailInput"
                  placeholder="请输入邮箱账号"
                  :prefix-icon="Message"
                  size="large"
                  :style="{ width: '100%' }"
                ></el-input>
              </el-form-item>
              <el-form-item :style="{ height: '40px' }" class="flex">
                <el-input
                  v-model="codeInput"
                  placeholder="请输入验证码"
                  :prefix-icon="Lock"
                  size="large"
                  :style="{ width: '308px' }"
                ></el-input>
                <el-button size="large">获取验证码</el-button>
              </el-form-item>
              <el-form-item class="flex">
                <el-checkbox
                  v-model="autoLogin"
                  label="自动登录"
                  size="large"
                />
                <el-link :underline="false">还没账号?点击前往注册</el-link>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="btn">登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="账号密码登录" name="byAccount">
            <el-form>
              <el-form-item>
                <el-input
                  v-model="emailInput"
                  placeholder="请输入账号"
                  :prefix-icon="User"
                  size="large"
                  :style="{ width: '100%' }"
                ></el-input>
              </el-form-item>
              <el-form-item :style="{ height: '40px' }" class="flex">
                <el-input
                  v-model="codeInput"
                  placeholder="请输入密码"
                  :prefix-icon="Lock"
                  size="large"
                  :style="{ width: '418px' }"
                ></el-input>
              </el-form-item>
              <el-form-item class="flex">
                <el-checkbox
                  v-model="autoLogin"
                  label="自动登录"
                  size="large"
                />
                <el-link :underline="false">还没账号?点击前往注册</el-link>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="btn">登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <div class="other">其他登录方式：1、2、3</div>
        </el-tabs>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.register-page {
  height: 100vh;
  background: #fff url('@/assets/3.jfif') no-repeat 50%;
  .el-container {
    padding-top: 56px;
    height: 100%;
    justify-content: center;
    align-items: center;
    .el-header {
      display: flex;
      flex-direction: column;
      height: 80px;
      justify-content: space-between;
      .header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 44px;
        line-height: 44px;
        .logo {
          width: 44px;
          height: 44px;
          margin-right: 16px;
        }
        .title {
          font-size: 33px;
          font-weight: 600;
        }
      }
      .describe {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
      }
    }
  }
}

.my-tabs {
  display: flex;
  flex-direction: column;
  text-align: center;
  .flex {
    ::v-deep .el-form-item__content {
      justify-content: space-between;
    }
  }
  .btn {
    width: 100%;
  }
}
</style>
