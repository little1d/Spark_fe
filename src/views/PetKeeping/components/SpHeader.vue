<template>
    <div class="header">
      <div class="weight">
        <span>猫猫体重</span>
        <h3>4.15kg</h3>
      </div>
      <div class="change">
        <n-icon size="20" color=" rgba(25, 195, 50, 1)" >
          <CaretUp/>
        </n-icon>
        <div class="count">0.05kg</div>
      </div>
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
 
  import { Alert16Filled } from '@vicons/fluent'
  import { ChatBubbleOutlined } from '@vicons/material'
  import { CaretUp } from '@vicons/fa'
  </script>
  
  <style scoped>
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  
  .weight span {
    font-size: 16px;
    font-weight: 500;
    line-height: 22.4px;
    color: rgba(0, 0, 0, 1);
  }
  
  .weight h3 {
    font-size: 28px;
    font-weight: 600;
    line-height: 39.2px;
    color: rgba(0, 0, 0, 1);
  }

  .change {
    display: flex;
    margin: 0 320px 0 90px;
  }
  .count {
    font-size: 14px;
    font-weight: 500;
    line-height: 16.8px;
    color: rgba(25, 195, 50, 1);
  }
  
  .information {
    display: flex;
    position: relative;
    margin-right: 50px;
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