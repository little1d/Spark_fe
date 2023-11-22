<template>
  <div class="container">
    <div class="left-box">
      <div class="imgBox">
        <n-icon size="40">
          <game-controller-outline />
        </n-icon>
        <img src="@/assets/cat.png" class="">
      </div>
      <div class="goal"></div>
    </div>

    <div class="right-box">
      <div class="checkIn"></div>

      <div class="trend"></div>
    </div>
  </div>
</template>

<script setup>
import SpHeader from "@/components/SpHeader.vue";
import SpSidebar from "@/components/SpSidebar.vue";
</script>

<style scoped>
.container{
  display: flex;
  gap: 2rem;
}

.left-box{
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.right-box{
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.imgBox{
  width: 510px;
  height: 312px;
  background-color: red;
}

.goal{
  width: 510px;
  height: 312px;
  background-color: yellow;
}

.checkIn{
  width: 450px;
  height: 160px;
  background-color: #646cff;
}

.trend{
  width: 450px;
  height: 530px;
  background-color: #242424;
}
</style>
