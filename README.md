# FTSM English Language Proficiency Waiver & Admission Requirements Database (US Edition)
# 全英授课本科（马来西亚公立大学 UKM FTSM 等）申请美国研究生英语语言豁免 (MOI) 与标化要求全量核验总库

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Scope: US Engineering & CS](https://img.shields.io/badge/Scope-US%20CS%20%26%20Engineering%20Master-blue.svg)](data/waiver_list_us.csv)
[![Verified: 2026-10-19](https://img.shields.io/badge/Verified-Fall%202027-success.svg)](README.md)

---

## 📌 项目背景与开源初衷

在英美名校研究生申请中，针对本科在英联邦双语国家公立大学（如**马来西亚国立大学 Universiti Kebangsaan Malaysia, UKM**）完成**四年全英文授课计算机 / 软件工程专业**的毕业生，各校对 **英语授课证明（Medium of Instruction, MOI Letter）** 能否替代 TOEFL / IELTS / Duolingo (DET) 标化考试的要求差异极大：

1. **有的顶尖名校格外开明**：如宾夕法尼亚大学（UPenn SEAS）、康奈尔科技学院（Cornell Tech）、布朗大学（Brown）、斯坦福大学（Stanford）等，官方招生办书面确认凭院系出具的官方 MOI 信函或网申勾选即可**完全免除标化语言考试**；
2. **有的学校政策看似宽松，实则暗藏门槛**：如加州大学系统（UCSD、UCLA）严格死磕联合国教科文组织 IAU WHED 数据库（若机构语言登记包含 Malay 则一票否决）；
3. **有的学校明确设立国家语言白名单**：如哥伦比亚大学工学院（Columbia SEAS）、杜克大学工学院（Duke Pratt）、伊利诺伊大学香槟分校（UIUC）、加州大学伯克利分校（UC Berkeley），即使项目 100% 全英授课，也会因非原生英语国而**正式拒绝豁免**；
4. **拒免后的高效备考替代路径（DET 优势）**：若不幸被拒免，部分学校（如 WashU、Columbia GSAS、Duke、Notre Dame）**极力推荐或接受 Duolingo (DET)**，相比托福 100+ / 5.0 或雅思 7.5，考取 DET 125~135 的备考周期和通过率高出数倍！

本项目由马来西亚公立大学（UKM FTSM）2027 Fall 计算机申请者发起，**基于 25 所美国顶尖工学院/计算机系 100% 官方页面原文、网申系统内部表单实测、以及 35 封发往美国招生办的一手邮件实测回复**深度整理，全部数据去除了所有个人敏感隐私，完全开源，供所有海外全英文教学背景的同学参考与共建！

---

## ⚡ 核心结论速览 (Key Takeaways)

| 豁免分类 | 对应美国名校（CS / ECE / 工学硕士） | 核心应对策略 |
|:---:|---|---|
| 🟢 **已获确认 / 政策明确可豁免** (8 校) | **UPenn** (SEAS), **Cornell Tech**, **Brown** (CS/ECE), **Stanford**, **Johns Hopkins** (WSE), **Emory**, **Notre Dame** | 网申直接上传官方 MOI 证明或系统勾选，**无需提交任何托福/雅思/DET 成绩**。 |
| 🟡 **审核制 / 自报系统 / 政策放宽中** (8 校) | **UChicago** (MPCS), **Boston Univ** (MET), **WashU**, **Georgia Tech**, **Yale**, **Northwestern**, **Dartmouth**, **UNC** | 网申提供 MOI 证明并提申请，由审核委员会在审理时判定；或系统免卡语言缺件（如 UChicago）。 |
| 🔴 **明确拒免 / 严卡国家或WHED** (12 校) | **NYU** (Tandon), **Duke** (Pratt), **Columbia** (SEAS/GSAS/SPS), **UIUC**, **UC Berkeley**, **UCSD**, **UCLA**, **USC**, **UMich**, **Cornell** (Ithaca), **Harvard**, **Vanderbilt** | 无法豁免。**优先选考 DET（如 WashU DET 125、Columbia GSAS DET 135、Duke DET 125）**；若申 Berkeley / Harvard / Cornell Ithaca 则必须备战托福 5.0+ 或雅思 7.0+。 |

---

## 📊 25 所美国名校研究生语言豁免全量核验总表

> **数据源级别说明**：
> - **Level A (招生办官方书面确认)**：招生负责人或 admissions 官方邮箱就 MOI 证明给予正式回复，附往来时间与原文。
> - **Level B (网申 Portal / Checklist 实测)**：登录网申系统，查阅语言豁免下拉菜单、上传入口及提交后 Checklist 实际状态。
> - **Level C (官网当前周期规定)**：研招办（Graduate Admissions）或工学院官网 Fall 2027 最新公布政策。

| # | 学校 / 学院 | 涉及项目 | 证据级别 | 核验日期 | 豁免状态 | 官方结论、网申实操与备考底线 |
|---:|---|---|:---:|:---:|:---:|---|
| 1 | **宾夕法尼亚大学 (UPenn)**<br>Penn Engineering (SEAS) | MSE CIS / DSAI / SSC / SE | **A** (邮件确认) | 2026-09-22 | 🟢 **已获官方确认免除** | 招生主管 Jess Wagner 明确书面回复：*“Yes, this is sufficient for the waiver. Please upload the MOI verification into the application with your transcript.”*<br>**实操**：在网申上传成绩单处，将 MOI 证明与成绩单一并上传即可，无最低分门槛。 |
| 2 | **康奈尔纽约校区 (Cornell Tech)** | MEng CS | **A** (邮件确认) | 2026-10-15 | 🟢 **已获官方确认免除** | 招生办书面明确答复：*“Yes, the attached document can serve as a waiver for the language requirement. Be sure to submit this as part of your application.”*<br>**实操**：随网申提交官方 MOI 证明信，无需另考托福/雅思。 |
| 3 | **布朗大学 (Brown University)**<br>Master's Programs / GS | ScM CS / ScM ECE | **A** (邮件确认) | 2026-10-13 | 🟢 **招生办回信：自动豁免** | 官方回复：*“There's no need to apply for a separate waiver. Simply select your institution and indicate that English was the primary language of instruction in the Academic History section... requirement will clear automatically!”*<br>**实操**：网申 Academic History 选原校并注明 English 为主要教学语言，系统自动免除。 |
| 4 | **斯坦福大学 (Stanford University)** | MS CS / MS EE | **C** (官网政策) | 2026-10-15 | 🟢 **经历豁免通道免交** | 官方政策支持过去 10 年内具备“2 年以上全日制英语教育经历”者豁免。全日制全英本科在申请时**不要求寄送考试成绩**，录取后提交项目全英文官方声明即可（4.5 也达最低线）。 |
| 5 | **约翰霍普金斯大学 (JHU)**<br>Whiting School (WSE) | MSE CS / MSSI / MSE ECE | **B/C** (官网与网申) | 2026-09-20 | 🟢 **工学院政策支持豁免** | 工学院官方政策明确全日制全英语授课学士学位具备豁免资格。网申直接选择 MOI 豁免通道，且 Whiting 工学院全额免申请费（$0）。*(注：CS 系 FAQ 曾提及 100 分偏好，MSSI/ECE 政策更友好)*。 |
| 6 | **埃默里大学 (Emory University)** | MS CS | **C** (官网政策) | 2026-10-15 | 🟢 **全英授课院校免除** | 本科在“英语为授课语言”的国家或院校完成即可直接豁免。若交分，最低旧制 85、推荐 90（新制 4.5 达标）。 |
| 7 | **圣母大学 (Notre Dame)** | MS CSE / ECE | **C** (官网政策) | 2026-10-15 | 🟢 **认可 MOI 信豁免** | 官方支持全英授课本科凭证明信豁免。若提交成绩，新制托福平均 4.5（各项 ≥ 4.0）或 DET 120 均免去分项风险。 |
| 8 | **芝加哥大学 (UChicago)**<br>Physical Sciences Division | MPCS (MS in CS) | **B** (Portal 实测) | 2026-10-12 | 🟡 **网申系统免卡 / 自报可选** | 网申 Portal 明确规则：*“UChicago does not require formal English proficiency scores for applicants who feel mastery of the English language is already demonstrated in their application.”* 成绩自报为选填，状态页 Checklist 中**无任何语言缺件项**（可把 MOI 作为 Other 补充上传）。 |
| 9 | **波士顿大学 (BU)**<br>Metropolitan College (MET) | MS CS | **B** (Portal 实测) | 2026-09-29 | 🟡 **随申请审理 / 保留要分权** | MOI 证明已作为补充材料上传，Portal 显示已收到；但网申明确注明审核委员会 *"reserves the right to request an English proficiency exam score upon review"*。 |
| 10 | **华盛顿大学圣路易斯 (WashU)**<br>McKelvey School | MS CS / ECE | **A/C** (邮件答复) | 2026-10-02 | 🟡 **随完整申请审理** | 招生办书面回复：豁免资格须在全套申请材料递交后由委员会综合审理；**若考语言，强烈推荐考 DET 125（全校新制托福 5.0，而 DET 125 极其容易达到）**。 |
| 11 | **佐治亚理工学院 (Georgia Tech)** | MSCS / MS ECE | **C** (官网核验) | 2026-10-18 | 🟡 **研究生院放宽 / FAQ 存疑** | 研究生院 Fall 2027 专页已开放接受 degree-programme 级别的 MOI 证明；但研究生院 FAQ #130 仍留有 "sole" 限制；ECE 系已公布新制托福标准线：总分 4.5（R/L/W ≥ 4, S ≥ 3.5）。不收 DET。 |
| 12 | **耶鲁大学 (Yale University)** | MS ECE / CS | **B/C** (Portal 原文) | 2026-10-14 | 🟡 **满足 3 年全英可免** | 网申规定：本科院校 “English is the primary language of instruction” 且在校读满 3 年即可豁免，视院系对公立大学 primary 的最终认定。不收 DET。 |
| 13 | **西北大学 (Northwestern)**<br>McCormick School | MS CS / ECE | **C** (官网政策) | 2026-10-15 | 🟡 **网申内可申请豁免** | 公开线为旧制托福 90（新制 4.5 达标）；网申系统内可申请豁免，审核结果随录取发放。不收 DET。 |
| 14 | **达特茅斯学院 (Dartmouth)** | MS CS | **C** (官网政策) | 2026-10-15 | 🟡 **网申内可申请豁免** | 豁免政策措辞为 sole / primary English instruction 院校；网申内可提交申请。不收 DET。 |
| 15 | **北卡罗来纳大学教堂山 (UNC)** | MS CS | **C** (官网政策) | 2026-10-15 | 🟡 **豁免须整校 SOLE 英语** | 研究生院推荐最低 5.0（非硬线）；豁免要求前置学校 SOLE 语言为英语，公立双语学校较难通过，建议提交成绩。不收 DET。 |
| 16 | **纽约大学 (NYU)**<br>Tandon School of Engineering | MS CS | **A/B** (实测正式拒免) | 2026-10-15 | 🔴 **官方正式拒免 (Denied)** | 网申内提交 MOI 豁免申请，官方正式下发拒绝通知：*“Your English Language Test Waiver Request has been denied. Please submit one of the following: TOEFL, IELTS, Duolingo, PTE...”* 必须补交标化成绩（托福旧制 90 / DET 130）。 |
| 17 | **杜克大学 (Duke University)**<br>Pratt School of Engineering | MEng ECE / MS ECE | **A** (邮件拒免) | 2026-10-14 | 🔴 **不符合国家语言条件** | 招生办回信明确拒绝：*“Our waiver requires that not only the courses be taught in English, but English is the predominant language spoken in the country in which you study.”* 要求所在国也必须以英语为主语言。**官方建议考 Duolingo（MEng 无最低分，为首选考试；MS 期望 DET 125）**。 |
| 18 | **哥伦比亚大学 (Columbia)**<br>Fu Foundation (SEAS) | MS AI / CS 各类工学硕士 | **B** (Portal 原文) | 2026-09-25 | 🔴 **不予豁免 (严格国家白名单)** | 网申白纸黑字写明：仅在美、英、加、澳、新西兰、新加坡等列明国家取得学位才豁免；明确注明 *“This requirement applies to applicants from countries in Southeast Asia”*；系统无 MOI 上传入口。 |
| 19 | **哥伦比亚大学 GSAS / SPS** | MA Statistics / MS 各项目 | **C** (官网政策) | 2026-10-15 | 🔴 **不予豁免 / 推荐 DET 135** | GSAS 豁免要求院校官方授课语言为英语（新制托福 5.5 硬线，**但强烈推荐考 DET 135，相比托福 5.5 极其占便宜**）；SPS 要求全校英语授课，托福旧制 100。 |
| 20 | **伊利诺伊香槟 (UIUC)**<br>Grainger / Graduate College | MCS (Urbana 校内版) | **B/C** (Portal 原文) | 2026-09-25 | 🔴 **不予豁免 (30 国白名单)** | 官方仅豁免在 30 个 Approved Countries（含新加坡、菲律宾，**无马来西亚**）取得学位的申请人，不提第三方 MOI。Full status 线为新制 5.0 / IELTS 7.5 / DET 135；4.0~4.99 进校须考 EPT。 |
| 21 | **加州大学伯克利 (UC Berkeley)**<br>College of Engineering | MEng EECS | **B/C** (国家表硬性要求) | 2026-09-25 | 🔴 **不予豁免 / 不收 DET** | 按学位授予机构所在国判定，官方国家表中 **Malaysia 明确标注必须提交 TOEFL / IELTS**；不认 MOI；**绝对不收 DET**。要求新制托福 ≥ 5.0（S/W ≥ 4.5）或雅思 ≥ 7.0（S/W ≥ 6.5）。 |
| 22 | **加州大学圣地亚哥 (UCSD)**<br>Jacobs School of Engineering | MS CS (CSE) / ECE | **A/C** (官网死磕 WHED) | 2026-10-15 | 🔴 **死磕 WHED 数据库** | 官网明文规定：豁免严格只按联合国教科文组织 IAU WHED 判定，*“No other documentation (e.g. letters, language certificates) may be used in place of WHED”*；WHED 登记 UKM 为 `Malay; English`，直接拒免。ECE 标化线 4.5 / DET 120。 |
| 23 | **加州大学洛杉矶 (UCLA)**<br>Samueli School of Engineering | MS CS / ECE | **C** (官网政策) | 2026-10-15 | 🔴 **死磕 WHED 数据库** | 同样要求 WHED 上登记的授课语言必须仅有英语（English only），双语公立大学不满足。标化线为旧制 87 / 新制 4.5。低于 5.0 入学考 ESLPE。**不收 DET**。 |
| 24 | **南加州大学 (USC)**<br>Viterbi School of Engineering | MS CS / MS Analytics | **C** (官方简章) | 2026-10-18 | 🔴 **非原生英语国全英不免** | 官网明文规定：非英语国家的英语授课项目不予豁免；但新制托福 4.5（各项 ≥ 4.0）可免除入学后的 ISE 英语分班测试。 |
| 25 | **密歇根大学安娜堡 (UMich)**<br>College of Engineering | MS CSE / ECE | **C** (学院 FAQ) | 2026-10-15 | 🔴 **严格限制 Exclusive 英语** | 豁免条件要求前置院校必须为 *“English-only / exclusive”* 授课机构。最低托福旧制线为 84。不收 DET。 |
| 26 | **康奈尔伊萨卡本校 (Cornell)**<br>Bowers CIS / Engineering | MEng CS / MEng ECE | **C** (官网硬指标) | 2026-10-15 | 🔴 **不予豁免 / 口语高分门槛** | 非列明英语国必须交分，**不收 DET**。CS MEng 要求口语 ≥ 5.5、写作 ≥ 4；ECE MEng 要求写作 ≥ 5.0、口语 ≥ 4.5。雅思只要求总分 7.0（建议雅思替代）。 |
| 27 | **哈佛大学 (Harvard University)**<br>SEAS / GSAS | SM / ME (CSE) | **C** (官网政策) | 2026-10-15 | 🔴 **严格 Primary / 不收 DET** | 豁免严格只认机构 primary 语言为英语。托福新制总分 ≥ 5.0、口语 ≥ 4.5；雅思总分 ≥ 7.0、口语 ≥ 6.5。**不收 DET**。 |
| 28 | **范德堡大学 (Vanderbilt)**<br>School of Engineering | MS CS / MEng | **C** (学院规定) | 2026-10-15 | 🔴 **不受理豁免 / 收 DET 130** | 公开线旧制托福 89；不受理双语大学豁免请求；接受 DET 130。 |
| 29 | **莱斯大学 (Rice University)**<br>Brown Engineering | MCS / ECE | **C** (官网要求) | 2026-10-15 | 🔴 **要求机构官方语言为英语** | 豁免要求所在大学官方语言为英语。 |

---

## 🎯 考试选择策略与 DET 投机红宝书 (Duolingo vs. TOEFL vs. IELTS)

对于 **豁免未获批 (Denied)** 的学校，千万不要盲目死磕托福！根据 Duolingo (DET)、ETS 与各校官方录取要求，**善用 DET 的院校性价比极高**：

### 1. DET 分数线与政策对比表

| 项目 / 学院 | 接受 DET？ | DET 录取线 | 同校 TOEFL / IELTS 要求 | 考 DET 占便宜吗？ | 对申请者的实战意义 |
|---|:---:|:---:|:---:|:---:|---|
| **Columbia GSAS** (MA Stats 等) | ✅ **收** | **135** | 新制 5.5 / IELTS 7.5 | 🌟 **巨大优势！** | DET 135 约仅对应雅思 7.0 / 托福 105，但托福 5.5 相当于雅思 7.5~8.0。考 DET 难度断崖式下降！ |
| **WashU** (CS / ECE) | ✅ **收** | **125** | 新制 5.0 / IELTS 6.5 | 🌟 **非常划算！** | DET 125 仅相当于雅思 6.5，而托福 5.0 相当于雅思 7.0。强烈建议考 DET 替代托福！ |
| **Duke Pratt** (MEng ECE) | ✅ **首选** | **无公布最低线** | 无公布最低分 | 🌟 **最友好！** | Pratt 招办邮件推荐考 DET，未豁免者录取后本来也用 DET 分班。 |
| **Duke Graduate School** (MS ECE) | ✅ **收** | **期望 125** (带分项) | 期望 5.0 / IELTS 7.0 | 👍 **小幅占便宜** | 均为软性期望分，带分项成绩即可。 |
| **Notre Dame** (CSE / ECE) | ✅ **收** | **120** (无分项) | 新制 4.5 (各项≥4) / IELTS 7.0 | 👍 **省去分项风险** | 无单项小分限制。 |
| **UCSD** (Jacobs CSE / ECE) | ✅ **收** | **120** | 新制 4.5 / IELTS 7.0 | ⚖️ **持平** | 门槛较低。 |
| **Emory** (MS CS) | ✅ **收** | **120** | 旧制 85 / IELTS 7.0 | ⚖️ **持平** | 可 MOI 豁免，也可直接交分。 |
| **NYU Tandon** (MS CS) | ✅ **收** | **130** | 旧制 90 / IELTS 7.0 | ⚖️ **持平** | 豁免被拒后最快的补救考试（出分只需 48 小时）。 |
| **Vanderbilt** (CS / MEng) | ✅ **收** | **130** | 旧制 89 / IELTS 7.0 | ⚠️ **略高** | DET 130 略高于旧制 89 的对应关系。 |
| **JHU** (MSE CS) | ⚠️ 偏好 | **135** | 100 / IELTS 7.0 | ⚠️ **略吃亏** | 建议走工学院 MOI 豁免通道，不建议用 DET。 |
| **绝对不收 DET 的名校** | ❌ **不收** | — | — | 🚫 **无法使用** | **Harvard、UC Berkeley、Cornell Ithaca (CS/ECE)、Georgia Tech、UCLA、Brown CS、Yale、Columbia SPS** |

---

### 2. 豁免被拒后的“一次考试解锁方案”

| 考试选择方案 | 能解锁的被拒/硬卡学校 | 仍无法覆盖的学校（因不收该考试） |
|---|---|---|
| 方案 A：**DET 135** | **Columbia GSAS, WashU, Duke, NYU Tandon, Notre Dame, UCSD** | Harvard, Berkeley, Cornell Ithaca（都不收 DET） |
| 方案 B：**IELTS 7.0**<br>(口语/写作 ≥ 6.5) | **Harvard** (7/口语6.5), **Berkeley** (7/各6.5), **Cornell Ithaca** (页面只列总分 7.0), **WashU, Duke, JHU, NYU** | Columbia GSAS（要求 7.5，该校建议改走 DET 135） |
| 方案 C：**TOEFL 5.0**<br>(口语/写作 ≥ 4.5) | **Harvard, Berkeley, WashU, JHU MSE CS** | Cornell Ithaca（口语硬卡 5.5 / 写作 5.0）、Columbia GSAS（硬卡 5.5） |

> 💡 **决策捷径**：
> 1. 如果你的选校清单里**没有** Harvard、UC Berkeley 或 Cornell Ithaca：**直接报考 DET（目标 125~135）**，在家考、1 小时完成、48 小时出分，成本极低；
> 2. 如果**必申** Cornell Ithaca：强烈建议改考 **IELTS 7.0**，因为 Cornell Ithaca CS 对托福口语设立了 **5.5 的变态硬指标**，但对雅思只要求总分 7.0，极易规避！

---

## 📬 招生办一手回复原文归档 (Verbatim Correspondence)

### 1. 宾夕法尼亚大学 (UPenn Engineering) · 官方确认豁免
- **沟通对象**：Jess Wagner (Master's Admissions Manager, Penn Engineering)
- **咨询问题**：成绩单未明标授课语言，UKM 出具四年全英授课官方证明信是否足以豁免语言？
- **官方回信原文**：
  > *"Yes, this is sufficient for the waiver. Please upload the MOI verification into the application with your transcript."*

### 2. 康奈尔纽约校区 (Cornell Tech) · 官方确认豁免
- **沟通对象**：Cornell Tech Admissions (Lyam)
- **咨询问题**：附上 UKM Assistant Registrar 签发的四年全英授课证明，能否豁免 MEng CS 语言？
- **官方回信原文**：
  > *"Yes, the attached document can serve as a waiver for the language requirement. Be sure to submit this as part of your application."*

### 3. 布朗大学 (Brown University) · 官方确认系统自动豁免
- **沟通对象**：Brown Master's Admissions Team (`masters_admissions@brown.edu`)
- **官方回信原文**：
  > *"There's no need to apply for a separate waiver. Simply select your institution and indicate that English was the primary language of instruction in the Academic History section of your application, and the requirement will clear automatically!"*

### 4. 纽约大学 (NYU Tandon) · 官方正式拒免通知
- **渠道**：网申内 Language Test Waiver Request
- **通知原文**：
  > *"Your English Language Test Waiver Request has been denied. Please submit one of the following English Language exams to complete your application: TOEFL, IELTS, Duolingo, PTE Academic, Cambridge English. We look forward to reviewing your completed application after your scores are received."*

### 5. 杜克大学 (Duke Pratt Engineering) · 明确拒免并建议考 DET
- **沟通对象**：Duke Pratt Admissions and Recruiting (`pratt_masters@duke.edu`)
- **官方回信原文**：
  > *"Our waiver requires that not only the courses be taught in English, but English is the predominant language spoken in the country in which you study. We recommend applicants take the Duolingo English Test (with subscores) to fulfill the language requirement."*

### 6. 华盛顿大学圣路易斯 (WashU McKelvey) · 审核制答复
- **沟通渠道**：McKelvey Admissions
- **官方回信原文摘要**：
  > 招生办回复说明豁免资格须在全套申请材料递交后由审核委员会裁定，不接受预审。

---

## 📝 官方咨询邮件模板 (Email Inquiry Template)

如果你需要向其他美国院校招生办发信确认 MOI 豁免政策，可以直接使用以下经过实战检验的高效模板：

```email
Subject: English Proficiency Waiver Inquiry - [Your Major] Master's Program - Fall 2027

Dear Admissions Team,

I am writing to respectfully inquire about the English language proficiency requirement for the [Program Name, e.g., MS in Computer Science] program for Fall 2027.

I completed my four-year Bachelor's degree in [Your Major, e.g., Software Engineering] at [University Name, e.g., Universiti Kebangsaan Malaysia (UKM)]. The entire curriculum, assessments, and examinations of my degree program were conducted strictly in English.

My university has issued an official "Medium of Instruction (MOI) Verification Letter" signed by the Registrar's Office, officially certifying that English was the sole medium of instruction throughout my four years of undergraduate study.

Could you please advise:
1. Whether this official Medium of Instruction letter is sufficient to waive the English proficiency exam (TOEFL/IELTS) requirement for your program?
2. If yes, should I upload this verification letter together with my academic transcript in the application portal, or is there a separate waiver request procedure?

I have attached a copy of my official Medium of Instruction letter and unofficial transcript for your reference.

Thank you very much for your time and guidance.

Sincerely,
[Your Name]
[Your Undergraduate Institution]
```

---

## 🤝 贡献与共建指南 (Contributing)

本清单完全开源，欢迎广大留学生、海外本科校友共同维护！

- **汇报新学校 / 院系政策**：请前往 [Issues](../../issues) 点击 **"Add School Waiver"** 模板提交；
- **修正已有政策**：若某校政策调整，请提交 PR 或在 Issue 中附上官网 `.edu` 最新链接或招生办回执截图；
- **格式规范**：必须遵守脱敏原则，不得提交任何包含个人敏感隐私（姓名、邮箱、护照、申请号）的信息。

---

## ⚖️ 免责声明 (Disclaimer)

1. 本数据库所有信息整理自各校官方招生简章、系统网申测试及招生办实际往来回信，具有特定申请周期的参考价值；
2. 美国各高校研究生院及具体院系（Departmental Level）拥有对语言政策的最终解释权，申请政策可能随招生周期发生变动。请在最终提交前务必核对当季官方网申系统与院系官网。
