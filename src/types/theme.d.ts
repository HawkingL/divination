/** 定义主题TypeScript类型 **/

// 定义每个主题需要配置哪些动态内容
export type ThemeType =  'chinese' | 'cyberpunk' | 'nature' | 'mystic'

export interface ThemeCohfig {
    key: ThemeType;
    title: string;         //页面标题
}