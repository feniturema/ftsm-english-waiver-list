// 把 overview.html 渲染成 PNG 与 PDF：
//   node assets/infographic/render.cjs
// 可选：FONT_CSS=/path/to/noto-sans-sc/index.css 指定中文字体（未安装 PingFang / Noto Sans SC 时使用）
const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const dir = __dirname;
  const out = path.join(dir, "..");
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1200 }, deviceScaleFactor: 2 });
  await page.goto("file://" + path.join(dir, "overview.html"));
  if (process.env.FONT_CSS) await page.addStyleTag({ path: process.env.FONT_CSS });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);

  await page.screenshot({ path: path.join(out, "waiver_overview.png"), fullPage: true });
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.pdf({ path: path.join(out, "waiver_overview.pdf"), width: "1080px", height: height + 1 + "px", printBackground: true });

  await browser.close();
})();
