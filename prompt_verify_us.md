# 美国工学院 · 语言豁免官网政策核对 Prompt

> **用途**：将下面整段内容复制给具备联网检索能力的 AI（如 ChatGPT、Claude Search、Perplexity 或 Gemini），对未收到招生办回信的美国院校官网政策进行标准化、无死角的原文抓取与核验。

---

## 复制以下 Prompt 发送给 AI：

```markdown
你是严谨的学术资料核对员。你的任务是针对下列【美国研究生工学院】抄录官网上现行（针对 Fall 2026 / Fall 2027 申请季）的【英语语言能力豁免（English Proficiency Waiver / Exemption）政策官方原文】。

这份清单是为马来西亚国立大学（UKM）四年全日制全英文授课本科（学位全英文教学与考试，但马来西亚为非原生英语国家）申请美研所用。

### 必须严格遵守的规则：
1. 【只抄官方英文原文，绝不自行改写】：将找到的政策原句放入 markdown 引用块 `>` 中。不得翻译、不得总结、不得添加“通常/一般/可能/应该”等主观臆测。
2. 【严格限定权威域名】：信息源只能是 `.edu` 域名下的官方页面（优先级：研究生院总语言要求页 > 工程学院/计算机系 Admissions 页 > 官方 FAQ）。严禁使用第三方留学中介、论坛、Reddit、小红书等非官方内容。
3. 【找不到就标明未找到】：找不到就写【未找到】，打不开写【无法访问】并给出 URL。截断内容标【原文截断】，严禁自行补全。
4. 【不直接做主观推论，只回答 3 个事实判断问题】：根据官方原句，针对性回答：
   - Q1：原文是否明确列出免考国家/地区名单（Exempt Country List）？名单中是否包含 Malaysia？
   - Q2：原文是否明确接受大学出具的英文授课证明信（Medium of Instruction Letter / Registrar's Statement / Transcript Notation）？
   - Q3：原文是否要求前置院校必须为“Sole / Only / Exclusive / Primary”英语授课，或者规定只依据联合国教科文组织 WHED 数据库判定？

### 每所学校请按以下标准模板输出：

### [学校全称] · [学院/研究生院] · [涉及项目]
- 官方 URL：<完整有效链接>
- 检索核对日期：YYYY-MM-DD
- 政策发布层级：研究生院 (Graduate School) / 工程学院 (College of Engineering) / 系所项目 (Department)
- 豁免政策官方原文：
  > "<逐字照录英文官方原句；若有国家白名单请完整复制>"
- 事实判断问答（仅答 是 / 否 / 原文未提，并附对应原句）：
  1. 是否有国家白名单？含 Malaysia 吗？【是/否/原文未提】
  2. 是否接受 MOI 证明信？【是/否/原文未提】
  3. 是否限制 Sole/Primary 或依据 WHED？【是/否/原文未提】
- 针对全英本科的最终判定建议：【✅ 明确可免 / 🟡 需审核或存疑 / ❌ 明确不可免】

---

### 需要核对的美国院校清单（共 18 所）：

1. Stanford University · Graduate Admissions · MS CS / MS EE
2. Georgia Institute of Technology · Graduate Studies + College of Computing · MSCS / MS ECE
3. University of Notre Dame · Graduate School · MS CSE / ECE
4. Emory University · Laney Graduate School · MS CS
5. Johns Hopkins University · Whiting School of Engineering · MSE CS
6. Northwestern University · McCormick / The Graduate School · MS CS / MS ECE
7. Dartmouth College · Guarini School · MS CS
8. Boston University · Metropolitan College (MET) · MS CS
9. Duke University · The Graduate School · MS ECE
10. Columbia University · Fu Foundation School of Engineering (SEAS) · MS AI / CS 通用
11. University of Illinois Urbana-Champaign · Graduate College / Grainger · MCS
12. University of California, Berkeley · Graduate Division · MEng EECS
13. University of California, San Diego · Jacobs School / Graduate Division · MS CS / ECE
14. University of California, Los Angeles · Graduate Division / Samueli · MS CS / ECE
15. University of Southern California · Graduate Admission / Viterbi · MS CS / MS Analytics
16. University of Michigan, Ann Arbor · Rackham / College of Engineering · MS CSE / ECE
17. Harvard University · GSAS / SEAS · SM / ME
18. Cornell University · Duffield Engineering (Ithaca 主校区) · MEng CS / ECE
```
