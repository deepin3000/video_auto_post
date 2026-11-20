// 作者的教程和交流入口。灵犀开源免费，只在「卡住了」的几个地方留一个链接：
// 安装向导结束、出错通知（每天最多一次）、没接站点时的转化页。
// 不想看到：config.json 里加 "learnLinks": false。链接带 utm，只用来让知识站知道访客从灵犀来，灵犀本身不收集任何数据。
const BASE = 'https://www.mdldm.club/ai-course-promotion';
export const learnUrl = (campaign) => `${BASE}?utm_source=lingxi&utm_medium=app&utm_campaign=${campaign}`;
export const GROUP_URL = 'https://github.com/deepin3000/lingxi#交流群';
export const learnOn = (cfg) => !cfg || cfg.learnLinks !== false;
