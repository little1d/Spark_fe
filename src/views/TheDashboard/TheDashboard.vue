<template>
  <div class="container">
    <SpSidebar />
    <MainSection />
  </div>

</template>

<script setup>
import SpSidebar from "@/components/SpSidebar.vue";
import MainSection from "@/views/TheDashboard/components/MainSection.vue";
</script>

<style scoped>
.container{
  display: flex;

}
</style>
