<script setup>

import { ArrowAltCircleRightRegular } from '@vicons/fa'
import TeamInformation from "@/views/AboutUs/components/TeamInformation.vue";
</script>

<template>
    <TeamInformation/>
    <div class="container">
        <!-- 头部导航 -->
        <div class="header">
            <img src="@/assets/AboutUs/logo.png" alt="" class="logo">
        </div>
        <!-- 封面 -->
        <div class="cover">
            <img src="@/assets/AboutUs/cover-pic.png" alt="" class="cover-pic">
            <img src="@/assets//AboutUs/theme.png" alt="" class="theme">
        </div>
        <!-- 团队信息 -->
        <div class="information">
            <span class="EnglishTitle">team information</span>
            <h3 class="ChineseTitle1">
                <img src="@/assets//AboutUs/team1.png" alt="" class="team-pic">
                <img src="@/assets//AboutUs/team3.png" alt="" class="team-pic">
                <img src="@/assets//AboutUs/team2.png" alt="" class="team-pic last">团队信息
            </h3>
            
            <div class="specificInformation">
                <ul>
                    <li>
                        <div class="title">团队使命</div>
                        <p class="content">鼓励人们养成可持续的运动习惯，提供个性化的激励与支持，建立互动性的运动社区。</p>
                    </li>
                    <li>
                        <div class="title">团队背景</div>
                        <p class="content">我们由一群热爱运动的成员组成，我们期待能为西电大学生的运动健康和交流互动做出贡献。</p>
                    </li>
                    <li>
                        <div class="title">团队价值观</div>
                        <p class="content">积极向上、鼓励互助。</p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 社区理念 -->
        <div class="conception">
            <span class="EnglishTitle">community concept</span>
            <h3 class="ChineseTitle2">社区理念</h3>
            <img src="@/assets/AboutUs/community.png" alt="" class="conception-pic">
            <div class="conceptOne"><h2 class="topic">共同成长</h2><p class="substance">让平台上的用户能够共同成长。通过互相激励、分享经验和完成活动，社区成员可以相互鼓励，达成实现个人的运动目标和提高健康水平的效果</p></div>
            <div class="conceptTwo"><h2 class="topic">激励奖励</h2><p class="substance">通过激励和奖励机制来推动用户的参与和努力。通过设立挑战、目标达成奖励、排行榜等方式，社区成员可以获得积极的激励，增加参与度和动力。</p></div>
            <div class="conceptThree"><h2 class="topic">社区建设和互动</h2><p class="substance">希望通过平台上的社交功能，促进用户之间的互动、交流和合作，让运动成为一种有趣和社交的体验。</p></div>
        </div>
        <!-- 页脚 -->
        <div class="footer">
            <p class="contactUs">We've been fortunate to work with<br>some amazing partners.<br>If you think we're a good fit, <a href="#">contact<br>us.</a></p>
            <n-icon size="50px" color="#C4C4C4">
                <ArrowAltCircleRightRegular/>
            </n-icon>
        </div>
    </div>
</template>

<style scoped>
.container{
    width: 90vw;
    height: 100vh;
}
.header {
    position: relative;
    width: 100%;
    height: 80px;
    background: rgba(82, 187, 247, 0.75);
}
.logo {
    position: absolute;
    margin:25px 0 0 25px;
    width: 180px;
    height: 35px;
}

.cover {
    position: relative;
    width: 100%;
    height: 517px;
}
.cover-pic{
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1px 1px, 58px, 31px;
}
.cover .theme {
    position: absolute;
    margin-top: 137px;
    margin-left: 200px;
    width: 929px;
    height: 244px;
    z-index: 2;
}

.information {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    width: 100%;
}
.specificInformation {
    margin-top: 40px;
    width: 90%;
    height: 380px;
    background: rgba(166, 166, 166, 0.06);
    border-radius: 30px;
}
ul {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: 100%;
}
li {
    display: flex;
    flex-grow: 1;
}
.title {
    margin: 40px 40px 0 60px;
    width: 120px;
    height: 51px;
    border-radius: 6px;
    background: rgba(164, 221, 253, 1);
    font-size: 20px;
    line-height: 51px;
    color: rgba(0, 0, 0, 1);
}
.content {
    font-size: 16px;
    line-height: 127px;
    color: rgba(0, 0, 0, 1);
}

.conception {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 60px;
    width: 100%;
}
.EnglishTitle {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.5px;
    line-height: 28px;
    color: rgba(38, 150, 255, 1);
}
.ChineseTitle1 {
    display: flex;
    width: 700px;
    font-size: 56px;
    font-weight: 700;
    letter-spacing: 1.4px;
    line-height: 70px;
    color: rgba(39, 36, 68, 1);
}
.ChineseTitle2 {
    font-size: 56px;
    font-weight: 700;
    letter-spacing: 1.4px;
    line-height: 70px;
    color: rgba(39, 36, 68, 1);
}
.team-pic {
    margin: 50px 30px 0 0;
    width: 20px;
    height: 20px;
}
.last {
    margin-right: 110px;
}
.conception-pic {
    margin-top: 40px;
    width: 85%;
    height: 650px;
}
.conceptOne {
    position: absolute;
    width: 700px;
    height: 213px;
    top: 160px;
    right: 130px;
    z-index: 2;
}
.conceptTwo {
    position: absolute;
    width: 700px;
    height: 213px;
    top: 390px;
    right: 130px;
    z-index: 2;
}
.conceptThree {
    position: absolute;
    width: 700px;
    height: 213px;
    top: 620px;
    right: 130px;
    z-index: 2;
}
.topic {
    font-size: 24px;
    line-height: 50px;
    color: rgba(0, 0, 0, 1);
    text-align: left;
}
.substance {
    margin-top: 20px;
    font-size: 18px;
    color: rgba(0, 0, 0, 1);
    text-align: left;
}

.footer {
    position: relative;
    margin-top: 60px;
    width: 100%;
    height: 417px;
    opacity: 1;
    background: linear-gradient(180deg, rgba(76, 197, 224, 0.08) 35.07%, rgba(76, 197, 224, 1) 100%);
    box-shadow: 0px 2px 4px  rgba(0, 0, 0, 0.25);
}
.contactUs {
    position: absolute;
    margin-top: 26px;
    margin-left: 144px;
    font-size: 48px;
    font-weight: 300;
    line-height: 58.51px;
    color: rgba(66, 94, 143, 1);
    text-align: left;
}
.contactUs a {
    font-size: 48px;
    font-weight: 300;
    line-height: 58.51px;
    color: rgba(77, 155, 219, 1);
}
</style>