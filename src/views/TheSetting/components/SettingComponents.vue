<template>
    <div class="container">
        <div class="search"></div>
        <div class="upper">
            <div class="avatar">
                <img src="@/assets/头像@3x.png" alt="" class="avatar-pic">
            </div>
            <div class="name">西小喵</div>
            <div class="data">
                <div class="statistic">
                    <div class="title">关注</div>
                    <div class="count">3</div>
                </div>
                <div class="statistic">
                    <div class="title">粉丝</div>
                    <div class="count">15</div>
                </div>
                <div class="statistic">
                    <div class="title">获赞</div>
                    <div class="count">128</div>
                </div>
            </div>
        </div>
        <div class="lower">
            <div class="left-box">
                <div class="account">
                    <h2>账号</h2>
                    <div class="topic">
                        <div class="information">个人资料</div>
                        <div class="information">账号与安全</div>
                        <div class="information">隐私设置</div>
                    </div>
                </div>

                <div class="common">
                    <h2>通用</h2>
                    <div class="topic">
                        <div class="information">消息与提醒</div>
                        <div class="information">通用设置</div>
                        <div class="information">健康状况修改</div>
                    </div>
                </div>
            </div>
            <div class="right-box">
                <div class="about">
                    <h2>关于</h2>
                    <div class="topic">
                        <div class="information">个人信息收集清单</div>
                        <div class="information">隐私政策摘要</div>
                        <div class="information">协议与条款</div>
                    </div>
                </div>
                <div class="tool">
                    <div class="line">
                        <n-icon size="20" color="#333" >
                            <BeenhereOutlined/>
                        </n-icon>
                        <div class="content">实名认证</div>
                        <n-icon size="20" color="#333" >
                            <AngleRight/>
                        </n-icon>
                    </div>
                    <div class="line">
                        <n-icon size="20" color="#333" >
                            <IosInformationCircleOutline/>
                        </n-icon>
                        <div class="content">关于我们</div>
                        <n-icon size="20" color="#333" >
                            <AngleRight/>
                        </n-icon>
                    </div>
                    <div class="line">
                        <n-icon size="20" color="#333" >
                            <QuestionCircleRegular/>
                        </n-icon>
                        <div class="content">帮助中心</div>
                        <n-icon size="20" color="#333" >
                            <AngleRight/>
                        </n-icon>
                    </div>
                    <div class="line">
                        <n-icon size="20" color="#333" >
                            <CommentOutlined/>
                        </n-icon>
                        <div class="content">意见反馈</div>
                        <n-icon size="20" color="#333" >
                            <AngleRight/>
                        </n-icon>
                    </div>
                    <div class="line">
                        <n-icon size="20" color="#333" >
                            <Power/>
                        </n-icon>
                        <div class="content">退出登录</div>
                        <n-icon size="20" color="#333" >
                            <AngleRight/>
                        </n-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { AngleRight } from '@vicons/fa'
import { BeenhereOutlined } from '@vicons/material'
import { IosInformationCircleOutline } from '@vicons/ionicons4'
import { QuestionCircleRegular } from '@vicons/fa'
import { CommentOutlined } from '@vicons/material'
import { Power } from '@vicons/carbon'
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
    justify-content: space-around;
    align-items: center;
    margin: 20px 0 10px 0;
    width: 100%;
}
.avatar {
    width: 95px;
    height: 95px;
}
.name {
    width: 100px;
    font-size: 20px;
    line-height: 30px;
    color: rgba(0, 0, 0, 1);
}
.data {
    display: flex;
    margin-left: 50px;
}
.statistic {
    display: flex;
    justify-content: space-around;
    width: 150px;
}
.title {
    font-size: 20px;
    line-height: 30px;
    color: rgba(72, 139, 204, 1);
}
.count {
    font-size: 20px;
    line-height: 30px;
    color: rgba(0, 0, 0, 1);
}

.lower {
    display: flex;
    gap: 2rem;
}
.left-box {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

h2 {
    font-size: 18px;
    line-height: 26.06px;
    color: rgba(72, 139, 204, 0.66);
    text-align: left;
}

.topic {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 220px;
}
.information {
    padding-left: 20px;
    width: 352px;
    height: 54px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-weight: 700;
    line-height: 54px;
    color: rgba(0, 0, 0, 1);
    text-align: left;
}

.right-box {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.tool {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;
    width: 356px;
    height: 273px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 1);
}
.line {
    display: flex;
}
.content {
    margin: 0 200px 0 10px;
    font-size: 16px;
    font-weight: 700;
    line-height: 23.17px;
    color: rgba(102, 102, 102, 1);
}
</style>