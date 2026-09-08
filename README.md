# AegisOps — 設計稿預覽（測試 repo）

黑客松期間快速展示 AegisOps 的 UI 設計稿。**這是暫時的預覽 repo**，正式團隊開發會另外開一個 repo。

## 線上預覽

**https://cathayhackathon.github.io/aegisops-mockup/**

（透過 GitHub Pages 直接看，不用 clone。）

## 本機開啟

```bash
git clone https://github.com/CathayHackathon/aegisops-mockup.git
cd aegisops-mockup
# 因為 HTML 引用了本地 CSS/JS，直接雙擊在部分瀏覽器可能受 CORS 限制，
# 建議用簡單 http server 打開：
python -m http.server 8000
# 打開 http://localhost:8000
```

## 檔案結構

- `index.html` — 主設計稿（原檔名 `AegisOps.dc.html`）
- `assets/` — 圖片資源（nodata / success / fix 等 SVG）
- `support.js` — 互動 script
- `_ds/` — 設計系統 bundle（字型、色票、元件 CSS，缺了畫面會裂）
