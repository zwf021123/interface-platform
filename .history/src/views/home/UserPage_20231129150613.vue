<template>
  <div class="user-page">
    <el-card shadow="never">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <el-button class="button" text>Operation button</el-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
        <template #footer>Footer content</template>
      </el-card>
    </el-card>
  </div>
</template>
