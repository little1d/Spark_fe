<template>
  <div class="container">
    <div class="left-box">
      <div class="grade">
        <img src="@/assets/头像@3x.png" alt="" class="avatar">
        <img src="@/assets/MedalPage/stage.png" alt="" class="stage">
      </div>
      <div class="statistic">
        <img src="@/assets/TheStatistic/grade.png" alt="" class="test">
      </div>
    </div>
    <div class="right-box">
      <div class="history">查看运动历史</div>
      <div class="type">
        <img src="@/assets/TheStatistic/type.png" alt="" class="sprots">
      </div>
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
  gap: 3rem;
}
.grade {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar {
  margin: 40px 0 10px 0;
  width: 150px;
  height: 150px;
}
.stage {
  width: 240px;
  height: 55px;
}
.statistic {
  width: 350px;
  height: 341px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 25.5px  rgba(242, 245, 233, 1);
}
.test {
  width: 350px;
  height: 341px;
  border-radius: 10px;
}
.right-box {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.history {
  display: flex;
  width: 461px;
  height: 127px;
  border-radius: 15px;
  background: linear-gradient(135deg, rgba(242, 226, 182, 1) 0%, rgba(242, 182, 182, 100) 100%);
  box-shadow: 0px 2px 10px  rgba(175, 137, 255, 0.15);
  font-size: 24px;
  color: rgba(255, 255, 255, 1);
  align-items: center;
  justify-content: center;
}
.type {
  width: 461px;
  height: 498px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 25.5px  rgba(242, 245, 233, 1);
}
.sprots {
  width: 461px;
  height: 498px;
  border-radius: 10px;
}
</style>