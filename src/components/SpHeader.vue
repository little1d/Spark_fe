<template>
  <div class="header">
    <div class="time">
      <span>运动总时长</span>
      <h3>286.3h</h3>
    </div>
    <div class="ranking">
      <n-icon size="20" color="rgba(255, 69, 136, 1)" >
        <CaretDown/>
      </n-icon>
      <div>1,294名</div>
    </div>
    <div class="hour">
      <n-icon size="20" color=" rgba(25, 195, 50, 1)" >
        <CaretUp/>
      </n-icon>
      <div>25.1h</div>
    </div>
<!--  搜索框文字有问题-->
    <n-space vertical>
      <n-input round placeholder="搜索">
        <template #suffix>
        </template>
      </n-input>
    </n-space>

    <div class="information">
      <n-icon size="30" color="rgb(0, 115, 255)" >
        <ChatBubbleOutlined/>
      </n-icon>
      <div class="new"></div>
    </div>
    <div class="information">
      <n-icon size="40" color="rgb(0, 115, 255)" >
        <Alert16Filled/>
      </n-icon>
      <div class="new alert"></div>
    </div>

    <img src="@/assets/头像@3x.png" alt="" class="avatar">
  </div>
</template>

<script setup>
import { } from 'vue'
import { Alert16Filled } from '@vicons/fluent'
import { ChatBubbleOutlined } from '@vicons/material'
import { CaretDown } from '@vicons/fa'
import { CaretUp } from '@vicons/fa'
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
  font-size: 16px;
  line-height: 22.4px;
  color: rgba(0, 0, 0, 1);
}

.time h3 {
  font-size: 28px;
  font-weight: 600;
  line-height: 39.2px;
  color: rgba(0, 0, 0, 1);
}

.ranking {
  display: flex;
}
.hour {
  display: flex;
}

.information {
  display: flex;
  position: relative;
}
.new {
  position: absolute;
  right: 0;
  width: 7.51px;
  height: 7.51px;
  background: rgba(255, 69, 136, 1);
  border-radius: 50%;
}
.alert {
  position: absolute;
  right: 8px;
  top: 2px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-size: cover;
}
</style>