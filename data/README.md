# 📊 数据文件说明 (Data Dictionary)

| 文件 | 内容 |
|---|---|
| [`waiver_list.csv`](waiver_list.csv) | 全地区总表，以 `region` 列区分地区（目前仅含 `US`） |
| [`waiver_list_us.csv`](waiver_list_us.csv) | 美国分表 |

英国、新加坡数据上线后会写入总表，并新增 `waiver_list_uk.csv`、`waiver_list_sg.csv` 分表。新增或修改记录时，请同时更新总表和对应地区分表。

## 字段说明

| 字段 | 含义 | 示例 |
|---|---|---|
| `region` | 地区代码 | `US` / `UK` / `SG` |
| `school` | 学校英文全称 | `University of Pennsylvania` |
| `unit` | 学院 / 研究生院 | `Penn Engineering (SEAS)` |
| `programs` | 涉及项目，多个用 ` / ` 分隔 | `MSE CIS / DSAI` |
| `status` | 豁免状态，见下表 | `waived` |
| `det_accepted` | 是否接受 Duolingo (DET) | `yes` / `no` / `prefer_135` |
| `det_min` | DET 最低分，空值表示无要求或不适用 | `125` |
| `toefl_min` | TOEFL 要求（旧制总分或新制 1–6 分制，括号内为对应分数或小分要求） | `89 (4.5)` |
| `waiver_source` | 证据等级与来源 | `Level A (Admissions Manager Email)` |
| `verified_date` | 核验日期 (YYYY-MM-DD) | `2026-10-15` |
| `action_notes` | 结论要点与实操建议（英文） | `Upload MOI with transcript.` |

## 状态取值

| `status` | 含义 |
|---|---|
| `waived` ✅ | 凭 MOI 证明可完全豁免 |
| `uncertain` 🟡 | 需单独申请 Waiver、随审理裁定，或政策存疑 |
| `not_waived` ❌ | 国家白名单 / WHED 限制或明确拒免，必须提交考试成绩 |
| `unknown` ❔ | 尚无记录 |

## 证据等级

| 等级 | 来源 |
|---|---|
| `A` | 招生办书面邮件答复 / Portal 官方批免或拒免通知 |
| `B` | 网申 Portal 实测原文 / Checklist 状态 |
| `C` | 研究生院或院系官网当前周期政策 |
| `D` | 真实下发 Offer 上的条件 |
