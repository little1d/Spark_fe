<template>
  
  <div class="container">
    <div class="upper">
      <div class="upload">
        <div class="title">数据上传</div>
        <n-icon size="60" color="#333" >
            <CloudUpload/>
        </n-icon>
      </div>
      <div class="download">
        <div class="title">数据下载</div>
        <n-icon size="60" color="rgb(195, 126, 195)" >
            <CloudDownload/>
        </n-icon>
      </div>
      <div class="edit">
        <div class="title">批量编辑</div>
        <n-icon size="60" color="rgb(201, 181, 69)" >
            <EditArrowBack20Filled/>
        </n-icon>
      </div>
    </div>
    <div class="lower">
      <div class="record">
        <img src="@/assets/Datepage/record.png" alt="" class="record-pic">
      </div>
      <div class="trend">
        <img src="@/assets/Datepage/trend.png" alt="" class="trend-pic">
      </div>
    </div>
  </div>

</template>

<script setup>
import { CloudUpload } from '@vicons/tabler'
import { CloudDownload } from '@vicons/tabler'
import { EditArrowBack20Filled } from '@vicons/fluent'
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 28px;
}

.upper {
  display: flex;
  width: 100%;
  gap: 2rem;
}
.title {
    margin: 10px 0 0 10px;
    font-size: 18px;
    font-weight: 700;
    line-height: 25.2px;
    color: rgba(255, 255, 255, 1);
    text-align: left;
}
.upload {
    width: 273px;
    height: 127px;
    border-radius: 15px;
    background: linear-gradient(135deg, rgba(80, 222, 191, 1) 0%, rgba(111, 247, 247, 1) 100%);
    box-shadow: 0px 2px 10px  rgba(175, 137, 255, 0.15);
}
.download {
    width: 273px;
    height: 127px;
    border-radius: 15px;
    background: linear-gradient(135deg, rgba(242, 226, 182, 1) 0%, rgba(242, 182, 182, 100) 100%);
    box-shadow: 0px 2px 10px  rgba(175, 137, 255, 0.15);
}
.edit {
    width: 273px;
    height: 127px;
    border-radius: 15px;
    background: linear-gradient(135deg, rgba(214, 35, 254, 1) 0%, rgba(242, 48, 48, 1) 100%);
    box-shadow: 0px 2px 10px  rgba(175, 137, 255, 0.15); 
}

.lower {
  display: flex;
  justify-content: space-around;
}

.record-pic {
  width: 286px;
  height: 90%;
}

.trend-pic {
  width: 583px;
  height: 90%;
}
</style>