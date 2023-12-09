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
          <img src="@/assets/MainSection/add.png" alt="" class="add" @click="handleAddClick">
          <div class="title">打卡</div>
        </div>
      </div>

      <div class="trend">
        <img src="@/assets/MainSection/trend.png" class="spotsTrend">
      </div>
    </div>
  </div>

  <!-- 弹窗组件 -->
  <div v-if="isPopupOpen" class="popup">
    <!-- 弹窗内容 -->
    <div class="popup-content">
      <!-- 弹窗关闭按钮 -->
      <button class="close-button" @click="closePopup">关闭</button>
      <!-- 其他弹窗内容 -->
      <div class="popup-container">
        <form action="" method="post" class="info" autocomplete="off" @submit="handleSubmit">
          <div class="motionData">数据上传</div>
          <div class="sportType prompt">运动类型选择：</div>
          <select class="sportTypeSelect select">
            <option value="跑步">跑步</option>
            <option value="步行">步行</option>
            <option value="篮球">篮球</option>
            <option value="羽毛球">羽毛球</option>
            <option value="滑板">滑板</option>
            <option value="游泳">游泳</option>
          </select>
          <div class="sportData prompt">运动日期：</div>
          <input type="text" class="data text">
          <div class="sportDuration prompt">运动时长：</div>
          <input type="text" class="duration text">
          <div class="sportSensation prompt">运动感受：</div>
          <select class="sportSensationSelect select">
            <option value="满意">满意</option>
            <option value="良好">良好</option>
            <option value="一般">一般</option>
            <option value="失望">失望</option>
          </select>
          <button class="btn">提交打卡</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'; // 导入需要的模块或变量
// 创建一个响应式变量来表示弹窗的显示状态
const isPopupOpen = ref(false);
// 点击事件处理函数
const handleAddClick = () => {
  isPopupOpen.value = true;
};
// 关闭弹窗的函数
const closePopup = () => {
  isPopupOpen.value = false;
};
// 监听表单提交事件
const handleSubmit = async (event) => {
  event.preventDefault(); // 阻止表单默认提交行为
  // 获取表单元素的值
  const sportType = document.querySelector('.sportTypeSelect').value;
  const sportDate = document.querySelector('.data').value;
  const sportDuration = document.querySelector('.duration').value;
  const sportSensation = document.querySelector('.sportSensationSelect').value;
  // 创建一个对象来存储表单数据
  const formData = {
    sportType,
    sportDate,
    sportDuration,
    sportSensation
  };
  // 将表单数据存储到本地存储中
  localStorage.setItem('formData', JSON.stringify(formData));
  try {
    // 发送POST请求给后端API
    const response = await fetch('https://example.com/api/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // 请求成功处理
      console.log('数据发送成功');
      // 清空表单输入
      document.querySelector('.sportTypeSelect').value = '';
      document.querySelector('.data').value = '';
      document.querySelector('.duration').value = '';
      document.querySelector('.sportSensationSelect').value = '';
      // 关闭弹窗
      closePopup();
    } else {
      // 请求失败处理
      console.error('数据发送失败');
    }
  } catch (error) {
    // 错误处理
    console.error('发生错误', error);
  }
};
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

.imgBox {
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 490px;
  height: 300px;
  border-radius: 15px;
  background: linear-gradient(135deg, rgba(107, 170, 252, 1) 0%, rgba(48, 95, 236, 1) 100%);
  box-shadow: 0px 2px 10px rgba(175, 137, 255, 0.15);
}

.cat {
  display: block;
  margin: auto;
}

.goal {
  width: 490px;
  height: 340px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 10px rgba(175, 137, 255, 0.15);
}

.sportsGoal {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

.checkIn {
  width: 440px;
  height: 158px;
  border-radius: 15px;
  background: linear-gradient(135deg, rgba(214, 35, 254, 1) 0%, rgba(165, 48, 242, 1) 100%);
  box-shadow: 0px 2px 10px rgba(175, 137, 255, 0.15);
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

.trend {
  width: 440px;
  height: 500px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 10px rgba(175, 137, 255, 0.15);
}

.spotsTrend {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.popup-container {
  padding: 2rem;
  width: 320px;
  height: 547px;
  border-radius: 36px;
  background: rgba(248, 247, 252, 1);
}

.motionData {
  font-size: 35px;
  font-weight: 700;
  text-align: left;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.prompt {
  font-size: 14px;
  color: rgba(24, 103, 214, 1);
  text-align: left;
}

.select {
  width: 231px;
  height: 32px;
  border-radius: 5px;
}

.text {
  width: 132px;
  height: 30px;
  border-radius: 5px;
}

.btn {
  width: 152px;
  height: 53px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 1);
}
</style>