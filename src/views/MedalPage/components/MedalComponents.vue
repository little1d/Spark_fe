<template>
    <div class="container">
        <div class="left-box">
            <div class="grade">
                <img src="@/assets/头像@3x.png" alt="" class="avator">
                <img src="@/assets/MedalPage/stage.png" alt="" class="stage">
            </div>
            <div class="acquire">
                <div class="number">您已获得 3 块奖牌</div>
                <div class="SpecificAwards">
                    <h2 class="title">坚持跑步奖</h2>
                    <span class="content">您已坚持跑步15天</span>
                </div>
                <div class="SpecificAwards">
                    <h2 class="title">花样运动奖</h2>
                    <span class="content">您尝试了多种运动形式</span>
                </div>
                <div class="SpecificAwards">
                    <h2 class="title">积极活动奖</h2>
                    <span class="content">您多次参与社区活动并表现优异</span>
                </div>
            </div>
        </div>
        <div class="right-box">
            <div class="lose">
                <img src="@/assets/MedalPage/medal.png" alt="" class="medal">
                <div class="tip">待获得的奖牌</div>
                <div class="count">28枚</div>
            </div>
            <div class="picture">
                <img src="@/assets/MedalPage/basketball.png" alt="" class="basketball">
            </div>
        </div>
    </div>
</template>

<script setup>
import SpHeader from "@/components/SpHeader.vue";
import SpSidebar from "@/components/SpSidebar.vue";
</script>

<style scoped>
.container {
    display: flex;
    width: 100%;
    gap: 28px;
}

.left-box {
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.avator {
    margin-right: 40px;
    width: 81px;
    height: 81px;
}
.stage {
    width: 244px;
    height: 52px;
}
.grade {
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 390px;
    height: 110px;
}
.acquire {
    width: 390px;
    height: 477px;
    background-image: url(@/assets/MedalPage/acquire.png);
    background-size: cover;
}
.number {
    margin-top: 30px;
    font-size: 24px;
    line-height: 34.75px;
    color: rgba(122, 81, 37, 1);
}
  
.right-box {
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.lose {
    display: flex;
    justify-content: space-around;
    width: 441px;
    height: 109px;
    border-radius: 10px;
    background: linear-gradient(104.78deg, rgba(204, 204, 204, 0.44) 0%, rgba(255, 204, 77, 0.78) 100%);
}
.medal {
    margin-top: 30px;
    width: 46px;
    height: 46px;
}
.SpecificAwards {
    margin: 45px 0 0 150px;
    width: 50%;
    height: 16%;
}
.title {
    font-size: 24px;
    line-height: 34.75px;
    color: rgba(0, 0, 0, 1);
    text-align: left;
}
.content {
    display: block;
    font-size: 12px;
    line-height: 17.38px;
    color: rgba(166, 166, 166, 1);
    text-align: left;
}

.tip {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 26.06px;
    color: rgba(0, 0, 0, 1);
}
.count {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 26.06px;
    color: rgba(0, 0, 0, 1);
}
.basketball {
    width: 441x;
    height: 490px;
}
</style>