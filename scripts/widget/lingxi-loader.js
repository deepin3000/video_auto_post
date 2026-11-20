// 灵犀 · iPhone 小组件加载器（Scriptable）—— 只需粘贴一次，以后自动更新
// 每次刷新从灵犀拉最新的小组件代码（/api/widget/code）来运行；拉不到就用上次存下的那份。
// 灵犀地址和小组件口令：从灵犀的 /widget 页面复制的版本已经填好。
const LINGXI = '__LINGXI_URL__';
const TOKEN = '__WIDGET_TOKEN__';

const fm = FileManager.local(), CORE = fm.joinPath(fm.documentsDirectory(), 'lingxi-core.js');
let code = null;
try {
  const r = new Request(`${LINGXI}/api/widget/code?t=${encodeURIComponent(TOKEN)}`); r.timeoutInterval = 6;
  code = await r.loadString();
  if (r.response.statusCode !== 200 || !/Script\.complete\(\)/.test(code)) throw new Error('代码不完整');
  fm.writeString(CORE, code);
} catch (e) {
  code = fm.fileExists(CORE) ? fm.readString(CORE) : null;
}
if (!code) {
  const w = new ListWidget(); w.url = LINGXI;
  const t = w.addText('🌾 连不上灵犀'); t.font = Font.boldSystemFont(14);
  if (config.runsInWidget) Script.setWidget(w); else await w.presentSmall();
  Script.complete();
} else {
  const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
  await new AsyncFunction(code)();
}
