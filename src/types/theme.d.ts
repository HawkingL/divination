/** 定义主题TypeScript类型 **/

// 定义每个主题需要配置哪些动态内容
export type ThemeType =  'chaoshan' | 'cyberpunk' | 'nature' | 'mystic'

export interface ThemeConfig {
    key: ThemeType;
    title: string;            //页面标题
    vesselImg: string;        //中间器皿的图片路径
    blockImg: string;         //圣杯样式图片路径    TODO：后期可以使用的3D动画替换
    buttonText:string;        //按钮文字
    analysisResult: string;   //圣杯结果分析
}