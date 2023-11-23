<template>
  <div class="out-container">
    <SpSidebar/>
    <div class="right">
      <SpHeader/>
      <MainSection/>
    </div>
  </div>

</template>

<script setup>
import SpSidebar from "@/components/SpSidebar.vue";
import MainSection from "@/views/TheDashboard/components/MainSection.vue";
import SpHeader from "../../components/SpHeader.vue";
</script>

<style scoped>
.out-container {
  display: flex;
  justify-content: space-between;
  border: 2px solid #ffffff;
  width: 100%;
  min-width: 1000px;
  height: 100vh;
  padding: 1rem;
  gap: 2rem;
  background-color: #F8F7FC;
  border-radius: 25px;
  box-shadow: 16px 16px 4px rgba(109, 141, 173, 0.15);
}
</style>
