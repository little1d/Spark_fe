<template>
  <div class="header">
    <div class="time">
      <span>运动总时长</span>
      <h3>286.3h</h3>
    </div>
<!--  -->
    <n-space vertical>
      <n-input round placeholder="搜索">
        <template #suffix>
        </template>
      </n-input>
    </n-space>
    <img src="@/assets/头像@3x.png" alt="" class="avatar">
  </div>
</template>

<script setup>
import { } from 'vue'

</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
}

.time span {
  width: 80px;
  height: 23px;
  font-size: 16px;
  line-height: 22.4px;
  color: rgba(0, 0, 0, 1);
}

.time h3 {
  width: 93px;
  height: 40px;
  font-size: 28px;
  font-weight: 600;
  line-height: 39.2px;
  color: rgba(0, 0, 0, 1);
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-size: cover;
}
</style>