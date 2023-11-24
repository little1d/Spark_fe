<template>
    <div class="container">
        <!-- 头部导航 -->
        <div class="header">
            <img src="@/assets/AboutUs/logo.png" alt="" class="logo">
        </div>
        <!-- 运动社区 -->
        <div class="community">
            <img src="@/assets/Landing/dot.png" alt="" class="dot">
            <img src="@/assets/Landing/community.png" alt="" class="community-pic">  
        </div>
        <!-- 创作理念 -->
        <div class="creat">
            <img src="@/assets/Landing/think-big.png" alt="" class="think-big">
            <div class="idea">
                <h2 class="title">创作理念</h2>
                <p class="content">我们的创作理念是激发用户的内在动力和积极性。<br> 通过设立个人目标、定期打卡和记录，我们帮助用户建立健康运动习惯，并鼓励他们不断挑战自我、超越自我。</p>
                <p class="content">我们利用数据可视化来驱动用户的进步和成就。<br> 通过打卡记录和数据分析，我们提供用户的运动统计和个人成就，帮助用户了解自己的表现，并为他们提供有针对性的反馈和建议</p>
                <p class="content">我们致力于建立一个互助和支持的社区。<br> 我们相信通过社区成员之间的互动、分享和鼓励，用户可以相互帮助、共同成长。我们鼓励用户分享自己的成功经验、困惑和挑战，以及互相提供建议和支持。</p>
                <p class="content">我们重视用户的个性化体验。<br> 我们提供根据用户需求定制奖励系统，希望每位用户都能在我们的平台上找到适合自己的运动方式。</p>
                <p class="content">我们致力于不断创新和改进我们的社区软件。<br> 我们倾听用户的反馈和建议，不断优化用户体验，引入新的功能和活动，以保持用户的参与度和兴趣。</p>
            </div>
        </div>
        <!-- 页脚 -->
        <div class="footer">
            <img src="@/assets/AboutUs/logo.png" alt="" class="logo">
            <img src="@/assets/Landing/sparkSports.png" alt="" class="">
        </div>
        <!-- 备案信息 -->
    </div>
</template>

<script setup>
</script>

<style>
.container{
    width: 90vw;
    height: 5000px;
    background-image: url(@/assets/Landing/背景@3x.png);
}

.header {
    position: relative;
    width: 100%;
    height: 80px;
    background: rgba(188, 237, 245, 1);
}
.logo {
    position: absolute;
    margin:25px 0 0 25px;
    width: 180px;
    height: 35px;
}

.community {
display: flex;
width: 100%;
height: 904px;
background: rgba(254, 229, 218, 0.48);
}
.dot {
    margin-top: 100px;
    width: 100px;
    height: 100px;
}
.community-pic {
    margin: 90px 0 0 50px;
    width: 716px;
    height: 93px;

}

.creat {
    display: flex;
    width: 100%;
    height: 1050px;
    border-radius: 15px;
    background: rgba(88, 174, 224, 0.44);
}
.think-big {
    margin: 10px 40px 0 40px;
    width: 100px;
    height: 100px;
}
.title {
font-size: 50px;
font-weight: 900;
letter-spacing: 1.4px;
line-height: 120px;
color: rgba(0, 0, 0, 1);
text-align: left;
}
.content {
margin: 40px 100px 40px 0;
font-size: 24px;
line-height: 35px;
color: rgba(0, 0, 0, 1);
text-align: left;

}
</style>