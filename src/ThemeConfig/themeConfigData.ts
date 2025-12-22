import type { ThemeType, ThemeConfig } from "../types/theme";

// 主题配置数据
export const themes: Record<ThemeType, ThemeConfig> = {
  cyberpunk: {
    key: 'cyberpunk',
    title: '诚心祈问',
    vesselImg: '/assets/images/cyberpunk/burner.png',
    blockImg: '/assets/images/cyberpunk/cube1.png',
    buttonText: '【激活随机数生成器】',
    analysisResult: '【断开链接】'
  },
  // ... 其他主题配置
  nature: {
      key: "chaoshan",
      title: "",
      vesselImg: "",
      blockImg: "",
      buttonText: "",
      analysisResult: ""
  },
  mystic: {
      key: "chaoshan",
      title: "",
      vesselImg: "",
      blockImg: "",
      buttonText: "",
      analysisResult: ""
  },
  chaoshan: {
      key: "chaoshan",
      title: "诚心祈福",
      vesselImg: "/assets/images/cyberpunk/burner.png",
      blockImg: "/assets/images/cyberpunk/burner.png",
      buttonText: "恭请圣示",
      analysisResult: ""
  }
};