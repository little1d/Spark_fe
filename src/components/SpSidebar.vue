<template>
  <div class="container">
    <n-icon size="63" class="icon" color="#C4C4C4">
      <PowerSettingsNewOutlined/>
    </n-icon>
    <n-menu mode="vertical" :options='menuOptions' class="menu"/>

    <div class="text">
      <span class="text1">条款与服务隐私政策</span>
      <span>本项目由学生团队开发</span>
    </div>
  </div>
</template>

<script setup>
import renderIcon from "../utils/naive.js";
import {h} from 'vue'
import {ref} from "vue";
import {RouterLink} from "vue-router";
import {
  DashboardOutlined as DashboardIcon,
  DataThresholdingOutlined as DataIcon,
  AccessibilityNewRound as InformationIcon,
  SettingsOutlined as SettingsIcon,
} from "@vicons/material";
import {PowerSettingsNewOutlined} from '@vicons/material'
import {AnimalCat24Regular as PetIcon} from "@vicons/fluent"
import {Medal as MedalIcon, BuildingCommunity as CommunityIcon} from "@vicons/tabler"

const menuOptions = ref([
  {
    label: () => h(
        RouterLink,
        {
          to: {
            path: "/",
            params: {}
          },
        },
        {default: () => "仪表盘"}
    ),
    key: "dashboard",
    icon: renderIcon(DashboardIcon),
    class: 'menu-item'
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            path: "/Statistic",
            params: {}
          },
        },
        {default: () => "数据"}
    ),
    key: "data",
    icon: renderIcon(DataIcon),
    class: 'menu-item'
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            path: "/PetKeeping",
            params: {}
          },
        },
        {default: () => "养宠"}
    ),
    key: "pet",
    icon: renderIcon(PetIcon)
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            path: "/MedalPage",
            params: {}
          },
        },
        {default: () => "奖牌"}
    ),
    key: "medal",
    icon: renderIcon(MedalIcon)
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            path: "/AboutUs",
            params: {}
          },
        },
        {default: () => "关于"}
    ),
    key: "about",
    icon: renderIcon(InformationIcon)
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            path: "/TheSetting",
            params: {}
          },
        },
        {default: () => "设置"}
    ),
    key: "settings",
    icon: renderIcon(SettingsIcon)
  },
  {
    label: () => h(
        'a',
        {
          href: 'https://sports.kites262.top/',
          // 在新的标签页中打开链接
          target: '_blank'
        },
        {default: () => "前往社区"}
    ),
    key: "community",
    icon: renderIcon(CommunityIcon)
  }
])
</script>

<style scoped>
.container {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
}


.icon {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.menu {
  font-size: 16px;
  font-weight: 600;
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.text {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  bottom: 2rem;
  color: #B9B9B9;
}

.text1 {
  cursor: pointer;
}
</style>
