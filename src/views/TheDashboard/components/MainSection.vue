<template>
  <div class="container">
    <div class="left-box">
      <div class="imgBox">
        <img src="@/assets/MainSection/cat.png" class="cat">
      </div>
      <div class="goal">
        <img src="@/assets/MainSection/goal.png" class="sportsGoal">
      </div>
    </div>

    <div class="right-box">
      <div class="checkIn">
        <div class="unCheckIn">今日未打卡</div>
        <div class="execute">
          <img src="@/assets/MainSection/add.png" alt="" class="add">
          <div class="title">打卡</div>
        </div>
      </div>
 
      <div class="trend">
        <img src="@/assets/MainSection/trend.png" class="spotsTrend">
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
  gap: 30px;
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
  width: 490px;
  height: 300px;
  border-radius: 15px;
  background: linear-gradient(135deg, rgba(107, 170, 252, 1) 0%, rgba(48, 95, 236, 1) 100%);
  box-shadow: 0px 2px 10px  rgba(175, 137, 255, 0.15);
}
.cat {
  display: block;
  margin: auto;
}

.goal{
  width: 490px;
  height: 340px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 10px  rgba(175, 137, 255, 0.15);
}
.sportsGoal {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

.checkIn{
  width: 440px;
  height: 158px;
  border-radius: 15px;
  background: linear-gradient(135deg, rgba(214, 35, 254, 1) 0%, rgba(165, 48, 242, 1) 100%);
  box-shadow: 0px 2px 10px  rgba(175, 137, 255, 0.15);
}
.unCheckIn {
  margin: 10px 0 0 20px;
  font-size: 18px;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  text-align: left;
}
.execute {
  display: flex;
  justify-content: center;
  gap: 30px;
}
.add {
  width: 84px;
  height: 84px;
}
.title {
  font-size: 60px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 84px;
  color: rgba(255, 255, 255, 1);
}

.trend{
  width: 440px;
  height: 500px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 10px  rgba(175, 137, 255, 0.15);
}
.spotsTrend {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
</style>
