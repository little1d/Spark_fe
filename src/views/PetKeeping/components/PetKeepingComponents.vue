<template>
    <div class="container">
        <div class="left-box">
            <div class="CheckIn">
                <img src="@/assets/PetKeeping/CheckIn.png" alt="" class="exchange">
            </div>
            <div class="feeding">
                <img src="@/assets/PetKeeping/feeding.png" alt="" class="feeding-pic">
            </div>
        </div>
        <div class="right-box">
            <div class="extra">
                <div class="topic">
                    <img src="@/assets/PetKeeping/medal.png" alt="" class="medal">
                    <div class="title">额外任务成就</div>
                </div>
                <div class="task">
                    <p class="acomplishment">1.完成三日打卡挑战</p>
                    <span class="reward">猫粮+1</span>
                </div>
                <div class="task">
                    <p class="acomplishment">2.完成国庆节竞走活动</p>
                    <span class="reward">猫粮+2</span>
                </div>
            </div>
            <div class="state">
                <div class="background">
                    <img src="@/assets/PetKeeping/cat.png" alt="" class="cat">   
                </div>
                <div class="description">猫猫状态良好，继续保持哦！</div>
            </div>
        </div>
    </div>
</template>

<script setup>
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
.CheckIn {
    width: 296px;
    height: 195px;
}

.right-box {
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.feeding {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 296px;
    height: 440px;
    background-color: white;
    border-radius: 30px;
}
.feeding-pic {
    width: 280px;
    height: 420px;
}

.extra {
    width: 532px;
    height: 194px;
    border-radius: 15px;
    background: rgba(247, 235, 195, 1); 
}
.topic {
    display: flex;
    align-items: center;
    width: 100%s;
    height: 70px;
}
.medal {
    margin: 0 30px 0 30px;
    width: 34px;
    height: 34px;
}
.title {
    font-size: 20px;
    line-height: 29px;
    color: rgba(110, 79, 26, 1);
}
.task {
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    font-size: 18px;
    line-height: 30px;
    color: rgba(204, 126, 37, 0.5);
}
.task p {
    margin: 0 150px 0 30px;
    
}

.state {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 532px;
    height: 440px;
    background-color: white;
    border-radius: 30px;
}
.background {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 340px;
    border-radius: 15px;
    background: rgba(245, 242, 225, 1);   
}
.cat {
    width: 334px;
    height: 277px
}
.description {
    font-size: 20px;
    line-height: 30px;
    color: rgba(158, 109, 24, 1);
}

</style>