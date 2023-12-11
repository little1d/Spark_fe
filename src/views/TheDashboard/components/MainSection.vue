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
      <img src="@/assets/MainSection/close.png" alt="" class="close" @click="closePopup">
      <!-- 其他弹窗内容 -->
      <div class="popup-container">
        <form action="https://api.kites262.top" method="post" class="info" autocomplete="off" @submit="handleSubmit">
          <div class="motionData">数据上传</div>
          <div class="useridInput prompt">用户名输入：</div>
          <input type="text" class="userid select" placeholder="用户名为学号/工资号">
          <div class="passwordInput prompt">密码输入:</div>
          <input type="password" class="password select">
          <div class="sportType prompt">运动类型选择：</div>
          <select class="sportTypeSelect select">
            <option value="跑步">跑步</option>
            <option value="步行">步行</option>
            <option value="篮球">篮球</option>
            <option value="羽毛球">羽毛球</option>
            <option value="滑板">滑板</option>
            <option value="游泳">游泳</option>
            <option disabled selected value="">请选择</option>
          </select>
          <div class="sportData prompt">运动日期：</div>
          <div class="data">{{ currentTime }}</div>
          <div class="sportDuration prompt">运动时长：</div>
          <input type="text" class="duration select">
          <button class="btn">提交打卡</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'; // 导入需要的模块或变量
// 创建一个响应式变量来表示当前时间
const currentTime = ref('');
// 创建一个响应式变量来表示弹窗的显示状态
const isPopupOpen = ref(false);
// 获取当前时间
const currentDate = new Date();
const currentTimeString = currentDate.toLocaleString();
// 将时间字符串转换为 Date 对象
const Time = new Date(currentTimeString);
// 获取年、月、日、小时、分钟和秒
const year = Time.getFullYear();
const month = (Time.getMonth() + 1).toString().padStart(2, '0');
const day = Time.getDate().toString().padStart(2, '0');
const hours = Time.getHours().toString().padStart(2, '0');
const minutes = Time.getMinutes().toString().padStart(2, '0');
const seconds = Time.getSeconds().toString().padStart(2, '0');
// 格式化为指定形式的时间字符串
const formattedTime = `${year}-${month}-${day}_${hours}:${minutes}:${seconds}`;
// 将当前时间赋值给响应式变量
currentTime.value = formattedTime;
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
  const userid = document.querySelector('.userid').value;
  const type = document.querySelector('.sportTypeSelect').value;
  const date = document.querySelector('.data').textContent;
  const duration = document.querySelector('.duration').value;
  // 创建一个对象来存储表单数据
  const formData = {
    userid,
    type,
    date,
    duration
  };
  // 将表单数据存储到本地存储中
  localStorage.setItem('formData', JSON.stringify(formData));
  try {
    // 发送POST请求给后端API
    const response = await fetch('https://api.xuanxi.me', {
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
      document.querySelector('.userid').value = '';
      document.querySelector('.password').value = '';
      document.querySelector('.sportTypeSelect').value = '';
      document.querySelector('.duration').value = '';
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

.add:hover {
  cursor: pointer;
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
  position: relative;
  background-color: #fff;
  border-radius: 36px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.close {
  position: absolute;
  cursor: pointer;
  height: 30px;
  z-index: 2;
  top: 2rem;
  right: 2rem;
}

.popup-container {
  padding: 2rem;
  width: 420px;
  height: 647px;
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
  font-size: 16px;
  color: rgba(24, 103, 214, 1);
  text-align: left;
}

.select {
  padding: 0 10px;
  width: 331px;
  height: 36px;
  border-radius: 5px;
}

.data {
  padding: 8px 10px;
  width: 331px;
  height: 36px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: flex-start;
}

.btn {
  width: 152px;
  height: 53px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 1);
  font-size: 18px;
}
</style>