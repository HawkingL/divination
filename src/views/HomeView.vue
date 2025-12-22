<script setup lang="ts">
import type { ThemeType, ThemeConfig } from '../types/theme';
import { themes } from '../ThemeConfig/themeConfigData';

import RitualVessel from '../components/RitualVessel.vue';
import QuestionInput from '../components/QuestionInput.vue';
import ActionButton from '../components/ActionButton.vue';
import ResultBlocks from '../components/ResultBlocks.vue';

// 当前选中的主题（默认是潮汕风格）
const currentTheme = ref<ThemeType>('chaoshan');

// 获取当前主题的配置
const themeConfig = computed(() => themes[currentTheme.value]);

// TODO:开始占卜的回调函数
const handleThrow = () => {
    console.log("开始占卜。。。。。。");
    // 调用 ResultBlocks 组件的方法进行刷播放
    
}

</script>

<template>
    <!-- 最外层容器：通过data-theme属性控制全局样式 -->
    <div class="divination-container" :data-theme="currentTheme">
        <!-- 背景层 -->
        <div class="bg-layer"></div>
        <!-- 内容层 -->
        <main class="content">
            <!-- 标题区 -->
            <header class="header">
                <h1>{{ themeConfig.title }}</h1>
            </header>
            <!-- 香炉等器皿 -->
            <RitualVessel></RitualVessel>
            <!-- 祈愿输入框 -->
            <QuestionInput></QuestionInput>
            <!-- 掷圣杯的动画 -->
            <ResultBlocks></ResultBlocks>
            <!-- 投掷按钮 -->
            <ActionButton></ActionButton>
        </main>
    </div>
</template>

<style scoped lang="scss">
// 引入主题样式
@use '../styles/themes/chaoshan' as chaoshan;

.divination-container{
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    .header {
        margin-top: 10vh;
    }
    .content {
        z-index: 10;
        width: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
// 匹配对应主题的样式
.divination-container[data-theme = 'chaoshan'] {
    @include chaoshan.theme-styles;
}
</style>