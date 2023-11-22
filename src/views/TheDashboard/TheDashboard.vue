<template>
  <div>
    <div ref="chart" style="width: 600px; height: 400px;"></div>
    <n-button>按钮</n-button>
  </div>

  <SpHeader>111</SpHeader>

  <div class="font-bold">
    你好
  </div>


  <div class="grid grid-cols-3 gap-4 mt-8">
    <div class="bg-blue-200 p-4">Item 1</div>
    <div class="bg-green-200 p-4">Item 2</div>
    <div class="bg-yellow-200 p-4 font-bold">Item 3</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import SpHeader from '@/components/SpHeader.vue'

const chart = ref(null);

onMounted(() => {
  const myChart = echarts.init(chart.value);
  myChart.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  });
});
</script>
