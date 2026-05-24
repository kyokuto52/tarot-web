# 神秘塔罗占卜

部署在 GitHub Pages 的静态塔罗占卜网站，无需后端服务器。

## 功能

- **开场动画**：布帘从中间向左右拉开
- **RPG 对话**：巫师引导选择抽牌方式与主题
- **抽一张牌**：今日运势、问题解答、人生建议
- **抽三张牌**：运势 / 情感 / 生活 / 事业，按过去、现在、未来解读
- **抽牌动画**：牌从中央放大并移动到牌位，再翻开显示 JSON 解说

## 本地开发

```bash
npm install
npm run generate-data   # 生成 public/data/interpretations.json
npm run dev             # http://localhost:5173
```

## 构建

```bash
npm run build
npm run preview
```

## 部署到 GitHub Pages

1. 将本仓库推送到 GitHub
2. 若使用 **项目页**（`https://用户名.github.io/仓库名/`），修改 `vite.config.js` 中的 `base`：

   ```js
   base: '/你的仓库名/',
   ```

3. 仓库 **Settings → Pages → Build and deployment** 选择 **GitHub Actions**
4. 推送 `main` 分支后，Actions 工作流会自动构建并发布

若使用 **用户/组织页**（`https://用户名.github.io/`），保持 `base: './'` 或将仓库命名为 `用户名.github.io`。

## 项目结构

```
├── index.html
├── public/data/interpretations.json   # 78 张 · 正/逆位各 30 种场景 · 共 2340 条
├── src/
│   ├── main.js
│   ├── styles/main.css
│   └── js/          # 配置、抽牌、对话、动画
└── scripts/generate-data.js
```

## 自定义

- 修改 `scripts/lib/voice/`（解说文风与牌义），运行 `npm run generate-data` 重新生成 JSON（78 张 × 15 场景 × 正逆位 = 2340 条）
- 替换 `index.html` / CSS 中的巫师与布帘样式，或放入 `public/images/` 使用真实图片
# tarot-web
