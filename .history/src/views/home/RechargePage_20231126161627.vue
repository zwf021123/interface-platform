<template>
  <div class="recharge-page">
    <el-card class="box-cards" shadow="never">
      <el-card class="box-card-coins" shadow="never">
        <template #header>
          <div class="box-card-coins-header">
            <span><strong>我的钱包</strong></span>
            <el-tooltip
              class="box-item"
              effect="dark"
              content="用于平台接口调用"
              placement="top"
            >
              <span>字体图标感叹号</span>
            </el-tooltip>
          </div>
        </template>
        <div class="text">
          <span class="desc">
            <strong>金币：</strong>
          </span>
          <span class="money">888</span>
        </div>
      </el-card>
      <el-card class="box-card-mall" shadow="never">
        <template #header>
          <div class="box-card-mall-header">
            <span><strong>积分商城 💰️</strong></span>
          </div>
        </template>
        <div class="text item">111</div>
      </el-card>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.recharge-page {
  width: 1240px;
  .box-cards {
    .box-card-coins {
      margin-bottom: 20px;
      .text {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.88);
        .money {
          color: red;
        }
      }
    }
    .box-card-mall {
      .box-card-mall-header {
      }
    }
  }
}
</style>
