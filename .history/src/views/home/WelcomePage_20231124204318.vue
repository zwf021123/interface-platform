<template>
  <el-card class="box-card">
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </el-card>
</template>

<style lang="scss" scoped>
.box-card {

}
</style>