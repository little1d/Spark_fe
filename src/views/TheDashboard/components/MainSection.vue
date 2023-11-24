<template>
  <div class="container">
    <div class="left-box">
      <div class="imgBox">
        <img src="@/assets/cat.png" class="cat">
      </div>
      <div class="goal">
        <img src="@/assets/goal.png" class="sportsGoal">
      </div>
    </div>

    <div class="right-box">
      <div class="checkIn">
        <span>今日未打卡</span>
        <h1>打卡</h1>
      </div>
 
      <div class="trend">
        <img src="@/assets/trend.png" class="spotsTrend">
      </div>
    </div>
  </div>
</template>

<script setup>
import SpHeader from "@/components/SpHeader.vue";
import SpSidebar from "@/components/SpSidebar.vue";
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
  gap: 40px;
}

.right-box {
  display: flex;
  flex-direction: column;
  gap: 15px;
}


.imgBox{
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 507px;
  height: 312px;
  border-radius: 15px;
  background: linear-gradient(135deg, rgba(107, 170, 252, 1) 0%, rgba(48, 95, 236, 1) 100%);
  box-shadow: 0px 2px 10px  rgba(175, 137, 255, 0.15);
}
.cat {
  display: block;
  margin: auto;
}

.goal{
  width: 507px;
  height: 344px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 10px  rgba(175, 137, 255, 0.15);
}

.checkIn{
  display: flex;
  width: 453px;
  height: 158px;
  border-radius: 15px;
  background: linear-gradient(135deg, rgba(214, 35, 254, 1) 0%, rgba(165, 48, 242, 1) 100%);
  box-shadow: 0px 2px 10px  rgba(175, 137, 255, 0.15);
}
.checkIn span {
  padding: 10px 0 0 13px;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  color: rgba(255, 255, 255, 1);
}
.checkIn h1 {
  font-size: 60px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 158px;
  color: rgba(255, 255, 255, 1);
}

.trend{
  width: 453px;
  height: 525px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 10px  rgba(175, 137, 255, 0.15);
}
</style>
