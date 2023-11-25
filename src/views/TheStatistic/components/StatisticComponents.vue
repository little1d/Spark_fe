<template>
  <div class="container">
    <div class="left-box">
      <div class="grade">
        <img src="@/assets/头像@3x.png" alt="" class="avator">
        <img src="@/assets/MedalPage/stage.png" alt="" class="stage">
      </div>
      <div class="statistic"></div>
    </div>
    <div class="right-box">
      <div class="history">查看运动历史</div>
      <div class="type"></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  gap: 28px;
}
.left-box {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.right-box {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.history {
  width: 461px;
  height: 127px;
  border-radius: 15px;
  background: linear-gradient(135deg, rgba(242, 226, 182, 1) 0%, rgba(242, 182, 182, 100) 100%);
  box-shadow: 0px 2px 10px  rgba(175, 137, 255, 0.15);
}
.type {
  width: 461px;
  height: 498px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 25.5px  rgba(242, 245, 233, 1);
}
</style>