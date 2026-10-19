# 贡献指南 (Contributing Guide)

感谢你关注并愿意为 **UKM / 大马全英本科硕士申请语言豁免清单** 贡献力量！

这份清单能够帮助到很多正在为托福、雅思以及选校规则焦虑的 FTSM 及英联邦全英本科同学。为了保证本数据库的**真实性、可靠性与隐私安全**，请在提交补充或修正时遵守以下准则。

---

## 核心原则

1. **真实一手**：我们只收录以下三类信息：
   - 招生办公室（Admissions Office）的官方书面邮件答复；
   - 网申系统（Portal）在实际操作中的判定、提示语或截屏说明；
   - 学校/学院官方网站（`.edu` / `.ac.uk` / `.edu.hk` / `.edu.sg` 等）上的现行政策条款。
2. **严禁推测**：不接受“听说能免”、“中介说可以”、“感觉应该行”等推测性内容。查不到或不确定时标记为 `❔`。
3. **严格脱敏（重中之重）**：
   - **禁止** 包含任何个人姓名、个人电子邮箱、电话、护照号、马来西亚学号（如 `A19xxxx`）、申请编号（Application Reference Number）。
   - **禁止** 上传含有个人身份信息的原始邮件截图、成绩单或 Offer 原件。
   - 招生官的个人姓名请统一替换为部门名（例如：`Jess Wagner` 替换为 `Penn Engineering Master's Admissions`）。

---

## 怎么参与贡献？

### 途径一：提交 Issue（最简便）

如果你收到了某所学校招生办的邮件回复，或者在网申系统中发现了新的政策，可以直接在 GitHub 提交一个 [Issue](../../issues)。

**请在 Issue 中提供以下信息**：
```markdown
### 学校与项目
- 地区（US / UK / SG / AU / NZ 等）：
- 学校英文全称：
- 学院与项目：

### 豁免结论
- 状态（✅ 可豁免 / 🟡 需审核或带条件 / ❌ 不予豁免 / ❔ 政策未知）：
- 发生时间（例如 2026-10）：

### 官方原话 / 依据
- 邮件原文（英文摘录，请隐去个人隐私）：
- 网申 Portal 说明或官方链接：

### 操作建议（若有）
- （例如：在网申哪一个环节上传 MOI、是否需单独发邮件说明等）
```

---

### 途径二：发起 Pull Request (PR)

如果你熟悉 Git 与 Markdown / CSV 操作，欢迎直接提交 PR：

1. **Fork** 本仓库并 Clone 到本地。
2. 新建分支：`git checkout -b update/add-university-name`。
3. **同步修改以下文件**：
   - **[`README.md`](README.md)**：将你的实测学校与项目加入表格中；
   - **[`data/waiver_list.csv`](data/waiver_list.csv)**（全地区总表）及对应地区分表（如 [`data/waiver_list_us.csv`](data/waiver_list_us.csv)）：在末尾追加对应的 CSV 记录行（字段：`region,school,unit,programs,status,det_accepted,det_min,toefl_min,waiver_source,verified_date,action_notes`）；
   - **[`replies.md`](replies.md)**（若有官方回复）：按“同意豁免 / 拒绝豁免 / 随审理裁定”分类，摘录英文原话。
4. 本地检查隐私信息无误后，提交 Commit：
   ```bash
   git commit -m "docs: add [School Name] [Program Name] waiver outcome"
   ```
5. 推送并创建 PR，我们会在审核后合并。

---

## 状态与证据等级规范

- **状态 (Status)**：
  - `waived`（`✅`）：凭 MOI 信可完全豁免。
  - `uncertain`（`🟡`）：需申请单独 Waiver、网申不卡但入学核验、或需逐案人工审理。
  - `not_waived`（`❌`）：学校限制白名单或明确拒绝，必须提交考试成绩。
  - `unknown`（`❔`）：尚无记录。
- **证据等级 (Source Level)**：
  - `A`：招生办书面邮件答复 / Portal 官方拒免或批免通知。
  - `B`：申请人实测的网申 Portal 原文 / 研究生院正式法规。
  - `C`：院系官方招生 FAQ / 简章。
  - `D`：真实下发 Offer 上的条件 / 申请人申报实操。

---

再次感谢你为所有英联邦 / 大马全英本科申请人所作出的开源贡献！❤️
