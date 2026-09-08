# RootNG_v2 設計系統（RootNG_v2 Design System）

**RootNG_v2** 是一套**通用的後台管理系統（admin / backend portal）設計系統**——適用於資料表格、表單、查詢／篩選、詳情頁、設定頁、儀表板等典型後台管理介面。它提供完整的設計 token、圖示字型與現成元件，讓各種後台產品能以一致的視覺與互動規範快速組裝。

本設計系統最初以 **Angular** 撰寫（`cub-lib-view-rootng`），並搭配兩個工具套件使用：

| 套件 | 內容 |
| --- | --- |
| `cub-lib-view-utilities` | SCSS token、reset、調色盤、字型、間距、主題 |
| `cub-lib-view-iconfont`  | `CubIconFont` 圖示字型——432 個單線字符 |
| `cub-lib-view-rootng`    | Angular 元件庫——**49 個元件**（按鈕、輸入框、對話框、日期選擇器、表格、步驟條、上傳等） |

系統並行提供兩套**主題**；中性色／狀態色共用，僅**品牌**色階不同：

- **`uxd-green`**（**預設**）——`--brand-7: #00994e`。元件預設搭載的主題。
- **`tech-blue`**——`--brand-7: #1176d9`。替代主題，透過 `<html data-theme="tech-blue">` 啟用。

所有 class 前綴一律為 **`cub-`**——`cub-button`、`cub-card`、`cub-icon-arrow-left`、`cub-form-field` 等。

---

## 來源

本系統由單一 GitHub repo 重建：

- <https://github.com/cathaybk2026/merchant-portal-design-system>——上述三個 Angular 函式庫套件。`rootng-design-system` 分支為最新版本（v2.1.0，2026 年 3 月）。可匯入的原始 SCSS 位於 `cub-lib-view-utilities/scss/`；圖示字型定義位於 `cub-lib-view-iconfont/`。元件原始碼以編譯後的 `.d.ts` + 預編譯 `_*-theme.scss` 形式提供——可讀,但非原始 `.ts`。

本 kit 的元件樣式並非僅靠推斷——每個元件都另以該元件 demo 頁的實際 rendered HTML 逐一校正過（rendered DOM 結構 + 對應 CSS 比對）。設計 token 與元件主題 SCSS 則作為版面與配色的基礎。

> 有權限存取上述 repo 者可進一步探索。`sources/rootng/component/*/index.d.ts` 中的元件 `.d.ts` 檔記錄了完整的 Angular API 介面（`@Input()` 選擇器、型別等）——若你要做正式產品程式碼並對齊真實元件契約,這些很有用。

---

## 索引——本專案內容

```
README.md                  ← 你正在看這份
SKILL.md                   ← Agent skill 主檔（鐵則總綱）
SKILL-layout.md            ← 版面骨架（header / sidebar / content / footer）
SKILL-token-system.md      ← Token 雙層模型（色 / 字 / 間距 / 圓角 / 陰影）
SKILL-spec-alignment.md    ← cub-* 元件校正（對齊原始 SCSS）

colors_and_type.css        ← 所有 token 攤平成 CSS 變數。務必匯入此檔。
cub-components.css          ← 現成元件 CSS（cub-button / cub-card / cub-table…）。純 CSS。
cub-utilities.css          ← 間距 / 排版等 utility class
styles.css                 ← 設計系統編譯入口

components/                ← 個別元件 / token 的獨立 skill（一元件一資料夾，
                             各含 SKILL.md：標準結構、變體、狀態、token 對應、範例）
  foundation-reference-palette/   ← 原始調色盤（hex 值、11 階刻度）
  foundation-semantic-colors/     ← 語義色 token（--text/--bg/--border）
  component-button-filled/        ← 實心按鈕（主要動作）
  component-button-secondary/     ← 次要按鈕（outline / text / plain）
  component-card/                 ← 卡片
  component-checkbox/             ← 勾選框
  component-chip/                 ← chip
  component-collapsible-menu/     ← 側邊收合導航
  component-table/                ← 資料表格

fonts/
  CubIconFont.ttf|woff     ← 圖示字型二進位檔
  cub-iconfont.css         ← @font-face + 所有 .cub-icon-* class 規則

assets/
  icon-list.json           ← 每個圖示名稱 + 字符（432 個圖示）
  illustrations/*.svg      ← 品牌插畫（busy、clean、deny、fix、
                             laptop、nodata、notice、phone_secret、report、
                             speechless、success、bg_preview）

sources/                   ← 原始來源檔,保留供參考
  scss/                    ← cub-lib-view-utilities/scss/ 原樣匯入
  rootng/                  ← cub-lib-view-rootng 的 .d.ts + 主題 SCSS
  templates/               ← 16 個官方 UXD 後台頁面模板
                             （workbench、list-1..5、dialog-1、form-1..4、
                             settings-1..2、detail-1..3）的 .mhtml +
                             解碼後的 .html。詳見 TEMPLATES.md 目錄——
                             任何後台畫面從這裡開始。

preview/                   ← 設計系統頁籤卡片（顏色、字型、間距、
                             元件、品牌）。每張可獨立呈現。

ui_kits/
  merchant-portal/         ← 後台介面的 React 重現版
    index.html             ← 互動骨架（儀表板 + 表格 + 對話框）
    *.jsx                  ← 元件檔
    README.md              ← 涵蓋範圍說明
```

---

## 內容基本原則（CONTENT FUNDAMENTALS）

> 語氣、調性、文案慣例——擷取自 SCSS 註解、README changelog 與 Angular API 介面。（產品本身無法存取,故以下由設計系統作者所寫的文案推斷。）

**語言**

產品以**繁體中文**為主,**英文**為輔（用於技術／品牌名詞）。原始 repo 中每一則 commit 訊息、程式註解、區段標題與 changelog 皆為繁體中文。摘自 SCSS 的範例：

- `/* 主題色（藍） */`——區段標籤
- `/* 通用文字色 */`
- `/* 邏輯例外處理 - 中性色 selected 與 主題色 selected 相同 */`
- `/* 設定按鈕主題色 */`

UI 文字（按鈕標籤、表格標頭、狀態標籤）應**簡短、正式、以繁體中文書寫**。搭配公司標準的**半形標點**處理英文／數字,**全形**處理中文（例如 `匯款 NT$1,200,000`）。

**調性**

- **正式、制度化、略為精簡**——這是銀行後台,不是消費端 App。避免第一／第二人稱代名詞,優先用名詞片語。用「查詢交易」而非「您的交易」；用「下載對帳單」而非「點我下載」。
- **動作導向的標籤**——動詞 + 名詞,結尾不加標點。`查詢`、`匯出`、`新增門市`、`下載對帳單`。
- **穩重、絕不俏皮**——無 emoji、無驚嘆號、無「Oops」。
- **系統語氣直接。** 錯誤訊息以中性語言說明哪裡錯、如何修正：`查無資料，請更換查詢條件`,而非「Hmm, we couldn't find anything.」。
- **數字與表格密度高屬正常。** 一張表格有 8–12 欄交易資料是常態。

**大小寫**

- **標題中的英文：** 產品名用 Title Case（"Merchant Portal"）,描述性標籤用 sentence case。
- **縮寫**全大寫（`API`、`POS`、`MID`、`TID`）。
- **狀態標籤**為簡短中文標籤：`成功`、`失敗`、`處理中`、`已退款`、`已撥款`。除非無對應中文,否則避免英文。

**Emoji 與裝飾字元**

- 產品 UI **永不使用 emoji**。品牌所有字符皆用其**圖示字型**；emoji 會顯得突兀。
- **不使用裝飾性 unicode**（★ ▶ ✓）——改用 `cub-icon-star`、`cub-icon-play`、`cub-icon-check`。

**數字、日期、貨幣**

- 貨幣：**`NT$` 前綴,千分位逗號**——`NT$1,234,567` 或 `NT$1,234,567 元`。台幣通常省略小數點後的角分。
- 日期：**`YYYY/MM/DD`** 斜線分隔（台灣慣例）。法律文件有時用民國紀年 `民國 113 年`。
- 時間：**24 小時制 `HH:mm:ss`**。
- 電話：市話 `(02) 1234-5678`,行動 `0912-345-678`。

**氛圍**

想像一個 2026 年的台灣銀行後台：密集的資料表、藍色介面、大量篩選器與日期選擇器、每個動作都可確認、每一列都有狀態標籤、什麼都能下載。它**值得信賴、快速、不刻意裝可愛**。靠清晰而非溫情親近使用者。

語氣範例段落：

> 「今日交易明細已更新。如需匯出完整資料，請點選右上角『匯出 Excel』按鈕，系統將依您目前的篩選條件產出檔案。檔案產製可能需要 30 秒至 1 分鐘。」

---

## 視覺基礎（VISUAL FOUNDATIONS）

### 顏色

調色盤以**11 階色階**建構（`-1` 最淺、`-11` 最深）,涵蓋**品牌、中性、成功、警告、錯誤**。僅品牌色階會隨主題切換；成功／警告／錯誤／中性色為共用。

- **品牌**（uxd-green,預設）——第 7 階錨點 **`#00994e`**。用於主要按鈕、focus 環、selected 狀態、品牌 chip、標頭強調、連結文字。替代的 **tech-blue** 主題將此色階換成 `#1176d9`；中性／狀態色不變。
- **中性**——**暖灰**色階,從 `#fcfcfc` → `#292929`。產品畫布坐落於 `neutral-2`（`#f5f5f5`）,卡片用 `neutral-white`。**硬性規則：頁面畫布（content 區底色）一律用 `--bg-neutral-light`（= neutral-2 `#f5f5f5`）。**內文用 `neutral-10`、標題 `neutral-11`、placeholder `neutral-4`。
- **成功**——綠色階,錨點 **`#00994e`**（與替代品牌色相同）。承載 **`已撥款` / `成功`** 語意。
- **警告**——橘色階,錨點 **`#de7800`**。用於「處理中」、「需注意」、「待處理」、「接近上限」。
- **錯誤**——紅色階,錨點 **`#e21d28`**。保留給硬性失敗、退款、驗證錯誤。

系統**絕不在應用層自創新色相**。需要「資訊」色——用品牌色。需要「中性狀態」——用 neutral-7 主填色。

### 字型

- **字型堆疊：** `CubFont, "PingFang TC", "微軟正黑體", Helvetica, Arial, sans-serif`。`CubFont` 是透過 `@font-face` 宣告的虛擬字型家族,以 local 來源 fallback——Apple 取 **PingFang TC**、Windows 取 **微軟正黑體**,並透過 `unicode-range: U+00-024F` 將拉丁字元切換為 Helvetica/Arial。產品**不提供內文用的 web font**,仰賴系統字型堆疊。
- **級距：** 12 → 48px,共 12 個參考階（`--font-size-1`…`-12`）。內文為 `--font-size-3`（16px）；標題 `H1` 為 `--font-size-7`（24px）；`Display L` 為 `--font-size-12`（48px）。
- **字重**單純：**400 regular** 與 **700 bold**。系統中無 500/600/300。
- **行高**為字級固定 **+8px**（`--line-height-common: 0.5rem`）。16px 內文行高即 24px；營造密集但易讀的台灣銀行表單質感。
- **斜體**僅作為工具類存在（`.cub-font-italic`）——絕不用於語意。

### 間距

- **參考級距：** 0、2、4、6、8、12、14、16、20、24、28、32、36、40、48、56、64、72px（`--size-1`…`-18`）。所有元件的 padding／margin／尺寸 token 皆為其別名。
- **元件 padding** 範圍 0 → 24（`-5xs` → `-xl`）,按鈕／輸入框／卡片共用同一套詞彙。
- **頁面內距：** 桌機 **水平 24px / 垂直 16px**,行動裝置 16px / 16px。浮動動作的**視口偏移**：桌機距角落 **48px**。

### 背景

- **單色、扁平填色。** 元件表面不用漸層——每個填色都是調色盤中的單一顏色。
- **品牌插畫是彩色但扁平／插畫風的 SVG**——見 `assets/illustrations/`。用於**空狀態**、**錯誤頁**與**資訊海報**。它們**不是**照片,也不是背景圖。置中放在空狀態上方,搭配一句簡短訊息。
- **無滿版照片**、無 hero 圖、無重複圖樣、無紋理、無雜訊／顆粒。美學是「類 Material,但更扁平、更偏亞洲商務而非 Google」。

### 動態

- **Hover 轉場：互動卡片 `ease 0.2s`**（SCSS 中唯一明確的計時）。顏色 hover 為即時（`_button-theme.scss` 未對文字／邊框宣告轉場）。
- **無彈跳、無 spring、無視差。** 對話框與抽屜以 Angular CDK 預設值滑入／淡入（約 225ms ease-out）。系統沒有任何「驚喜」動態。
- **載入狀態：** opacity 降至 0.7 + 內容換成置中 spinner（`.cub-button-loading` mixin）。函式庫中無 shimmer 骨架屏。

### Hover 狀態

- **按鈕：** Material 風格的 **ripple 疊層**（見 `ripple-inline` mixin）。Plain/Text 變體額外將文字加深至 `text-{variant}-hover`(對應到 **5** 階——較**淺**而非較深,因為色階是按動作狀態鍵控的)。
- **卡片**（`.cub-interactive`）：hover 時以 `ease 0.2s` 取得 `shadow-layer-1`。
- **表單欄位：** 邊框於 hover 時由 `neutral-light` 切換為 `border-neutral-hover`(等於 `brand-7`)。
- **指標/觸控感知：** 使用 `support-hover-state()` mixin → hover 樣式僅在 pointer:fine 裝置套用。

### 按壓 / active 狀態

- **填色按鈕：** ripple 疊層以 `state-active-opacity: 0.20` 在底色上閃現。
- **Text/Plain 按鈕：** 文字色 → `text-{variant}-active`(最深的 `-10` 階)。
- **無基於 transform 的縮放**(`scale(0.98)` 等)——系統以顏色表現按壓,而非動態。

### Focus

- **2px outline 環**,色為 `border-neutral-focused`(= brand-7 @ 20% alpha)。在輸入框／下拉以 `outline: 2px solid …` 設定,**而非** box-shadow。與 hover 有別。

### 邊框

- 每個有邊框的表面皆 **1px solid**——`border-width: 1px`、`border-style: solid` 在 SCSS 中硬寫。
- **邊框色階：** 靜止狀態用 `border-{variant}-light`(例如表單欄位的 `neutral-4` = `#bdbdbd`),hover/active 用 `-main`,卡片邊用 `-lighter`(`neutral-3`),反灰狀態用 `-disabled`。
- 元件庫中**無虛線／點線邊框**。

### 陰影

- 三組**分層陰影** + 四組**方向性**陰影,定義於 `--shadow-layer-1` 到 `--shadow-direction-right`。
  - **Layer 1**——卡片 hover、輕度抬升。
  - **Layer 2**——浮動動作按鈕、下拉、popover。
  - **Layer 3**——對話框／modal。
- 方向性陰影用於把固定的標頭／頁尾與下方內容分隔。
- **無內陰影**、無發光效果。陰影一律為多重擴散的 RGBA 黑色分層(5% / 8% / 12% 等)。
- **卡片預設無陰影**——僅以 `border-neutral-lighter` 描邊。hover 時加上 layer-1。

### 透明 / 模糊

- **透明度**僅用於**狀態疊層**(`hover-opacity 0.10`、`active 0.20`、`selected 0.08`、`focused 0.20`)與**背景遮罩**：
  - `--backdrop-dark` = `neutral-10 @ 20%`——使對話框背景變暗
  - `--backdrop-light` = `white @ 70%`——使載入遮罩呈霧白
- 來源中**無 `backdrop-filter: blur(…)`**。霧化以 white@70% 遮罩達成,而非模糊。

### 圓角

預設銳利;這是本系統最強烈的視覺訊號之一。

| Token | 數值 | 用於 |
| --- | --- | --- |
| `--radius-m`  | **2px** | 表單欄位、輸入框、下拉 |
| `--radius-l`  | **4px** | 按鈕、卡片、警示、chip |
| `--radius-xl` | **8px** | 對話框、抽屜 |
| `--radius-round`  | 999px | 藥丸徽章、全圓按鈕 |
| `--radius-circle` | 50%  | 頭像、圓點、FAB |

2/4/8 這組刻意收得很緊——國泰產品的圓角**近乎方正**,絕不圓潤。

### 卡片

- **背景：** `bg-neutral-base`(白)
- **邊框：** `1px solid border-neutral-lighter`(`#e9e9e9`)
- **圓角：** `--radius-l`(4px)
- **預設無陰影**;互動卡片 hover 時以 `ease 0.2s` 取得 `shadow-layer-1`。
- **標頭：** `--component-padding-xs` × `--component-padding-l`(8 × 20px),`font-title-s` 標題,可選深色變體(`bg-neutral-light` 條)。
- **內容：** `--component-padding-l`(20px)四周。

### 版面規則

- **12 欄格線**,16px 間隔(`--grid-columns: 12, gutter: 16`)。
- **斷點**——`xs 0, sm 576, md 768, lg 1024, xl 1440`。
- **頁面內距**——桌機內容距頁緣水平 24px / 垂直 16px。
- **浮動動作**靠齊 `viewport-offset`(桌機距角落 48px,行動 16px)。

### 影像色彩氛圍

- 品牌插畫(`assets/illustrations/`)為**扁平、明亮、多色卡通風**,造型圓潤——綠、橘、藍配白底。非照片、非灰階、非顆粒感。溫暖但略為去飽和。
- 無黑白。無雙色調。無濾鏡照片。

---

## 圖示系統（ICONOGRAPHY）

系統**自帶圖示字型 `CubIconFont`**,v2.1.0 共 **432 個字符**。用法一致且定義明確：

- **機制：** 一個圖示即 `<span class="cub-icon-xxx"></span>`。CSS 規則 `[class^=cub-icon-]` 設定 `font-family:'CubIconFont'`,透過 `::before` 套用 unicode 私有區碼位,並以標準 `font-size` 調整尺寸。顏色以 `color:` 控制。
- **預設尺寸：** **24px**(`font-size: 24px`);元件層在按鈕、輸入框、警示中透過 `--icon-body-s/-m/-l`(14/16/18px)覆寫。
- **涵蓋範圍：** 432 個圖示涵蓋**箭頭(30)、檔案／文件(22)、使用者／人物(22)、格式化(22)、檔案類型(15)、圖表(14)、放大鏡／搜尋(9)、盾牌(9)、訊息(9)、金錢／貨幣(11)、建築(5)、信用卡／支付(3)、QR Code／掃描(2)** 等。完整清單與 unicode 碼位見 `assets/icon-list.json`。
- **風格：** 單線／外框／單一字重;這是單一單色字型,非多風格套組。
- **命名：** 功能性命名——`cub-icon-arrow-left`、`cub-icon-magnifier`、`cub-icon-credit-card`、`cub-icon-document`、`cub-icon-user-shield`、`cub-icon-trash`、`cub-icon-eye`、`cub-icon-chevron-down`。部分有變體後綴(`cub-icon-user-circle`、`cub-icon-user-circle-fill`)。
- 元件庫中**不使用 SVG 圖示**——一切皆走圖示字型以維持基線對齊一致。
- **無 emoji**、無 unicode 字符(★ → 用 `cub-icon-star`)。

使用方式：引入 `fonts/cub-iconfont.css`,寫 `<span class="cub-icon-{name}"></span>`。圖示字型已併入 `colors_and_type.css`。

若 432 個字符中缺少所需圖示,**標記出來**,並以最接近的 **Lucide** 替代(單線字重相近)——勿自創一次性 SVG,也勿混入 Material Icons / Heroicons(視覺不搭)。

---

---

## 如何使用本系統

1. **在每份 HTML 產出中**,於 `<head>` 依序連結這三個檔案(勿仰賴巢狀 @import——部分沙箱會斷鏈)：
   ```html
   <link rel="stylesheet" href="fonts/cub-iconfont.css">
   <link rel="stylesheet" href="colors_and_type.css">
   <link rel="stylesheet" href="cub-components.css">
   ```
2. 透過 CSS 自訂屬性套用 token：
   ```css
   .my-button {
     background-color: var(--bg-brand-main);
     color: var(--text-brand-contrast);
     padding: var(--component-padding-3xs) var(--component-padding-xs);
     border-radius: var(--radius-l);
     font: var(--font-body-m);
   }
   ```
3. 放入圖示：`<span class="cub-icon-arrow-left"></span>`。
4. 較複雜的元件(含副標的表單欄位、警示樣式、對話框、側邊導航)請見 `ui_kits/merchant-portal/` 的可運作 React JSX 重現版。
5. 切換替代主題：`<html data-theme="tech-blue">`。

---

## 注意事項

- 元件樣式已以各元件 demo 頁的實際 rendered HTML 逐一校正;整頁產品畫面的版面則由設計 token + 元件主題 SCSS 組裝,並非直接擷取自線上 App。若有真實的國泰商家後台截圖,可進一步提升整頁版面的準確度。
- **`CubFont` 是虛擬字型家族**——並無實際 web font 檔。在 macOS/iOS 以外檢視的設計會使用微軟正黑體(Windows)或退回通用 sans。我們**未替換為 Google Font**,因系統明確選擇不下載 web font;若設計需要可托管的等效字型,**Noto Sans TC** 是最接近的免費選擇。
- UI kit 中的文案為示意性繁體中文;正式使用前請校對。
