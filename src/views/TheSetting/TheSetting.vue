<template>
    <div class="out-container">
        <SpSidebar/>
        <div class="right">
          <SettingComponents/>
        </div>
      </div>
</template>
    
<script setup>
import SpSidebar from "@/components/SpSidebar.vue";
import SettingComponents from "@/views/TheSetting/components/SettingComponents.vue";
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
    box-shadow: 0 16px 40px rgba(99, 160, 222, 0.4);
  }
</style>