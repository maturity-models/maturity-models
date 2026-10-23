# 成熟度模型

<img src="README.png" alt="成熟度模型" style="width: 100%;"/>

成熟度模型是一种商业工具，用于评估人员/文化、流程/结构以及对象/技术。

参见 https://en.wikipedia.org/wiki/Maturity_model

目录：

- [成熟度模型的等级](#成熟度模型的等级)
- [成熟度模型示例](#成熟度模型示例)
- [成熟度模型的流程视角](#成熟度模型的流程视角)
- [自上而下与自下而上](#自上而下与自下而上)
- [建模成熟度等级](#建模成熟度等级)
- [对成熟度模型的反驳](#对成熟度模型的反驳)
- [相关评估指标](#相关评估指标)
- [常见问题](#常见问题)
  - [我可以创建成熟度模型吗？](#我可以创建成熟度模型吗)
  - [谁来决定成熟度模型中包含什么？](#谁来决定成熟度模型中包含什么)
  - [成熟度模型是某一时刻的快照，还是未来的计划？](#成熟度模型是某一时刻的快照还是未来的计划)
  - [成熟度模型是描述性的还是规定性的？](#成熟度模型是描述性的还是规定性的)
  - [成熟度模型会随时间演进吗？](#成熟度模型会随时间演进吗)
  - [成熟度模型有终点状态吗？](#成熟度模型有终点状态吗)
  - [成熟度模型与科学模型不同吗？](#成熟度模型与科学模型不同吗)
  - [成熟度模型可以验证吗？](#成熟度模型可以验证吗)

## 成熟度模型的等级

成熟度模型的等级通常是一系列由简到精的步骤，例如：

- 0 级：不适用
- 1 级：起步（Initiate）
- 2 级：发展（Develop）
- 3 级：标准化（Standardize）
- 4 级：管理（Manage）
- 5 级：编排（Orchestrate）

成熟度模型的等级在不同行业中有一系列术语，例如：

- 0 级：无、从未、可忽略、不适用。
- 1 级：起步、调研、隐性、面向个人、非正式使用。
- 2 级：发展、描述、复制、面向直接管理、部门级使用。
- 3 级：标准化、明确规定、规模化、面向服务、细分群体使用。
- 4 级：管理、度量、主流化、面向使命、大众使用。
- 5 级：编排、优化、首创、面向机遇、超大规模使用。

## 成熟度模型示例

欢迎提供成熟度模型的示例。如果您知道某个成熟度模型，请通过创建 GitHub 议题（issue）和/或拉取请求（pull request）告诉我们。

通用成熟度模型：

- [美国国立卫生研究院（NIH）熟练度量表](examples/技能/美国国立卫生研究院熟练度量表/index.md)
- [德雷福斯技能习得模型](examples/技能/德雷福斯技能习得模型/index.md)
- [英国政府数字与数据职业能力框架](examples/技能/英国政府数字与数据职业能力框架/index.md)

https://ddat-capability-framework.service.gov.uk/

按主题分类的成熟度模型：

- 敏捷（Agile）
  - [敏捷团队成熟度的敏捷指南针](examples/敏捷/敏捷指南针-敏捷团队成熟度/index.md)
  - [敏捷流畅度](examples/敏捷/敏捷流畅度/index.md)
  - [慧与（Hewlett Packard Enterprise，HPE）的敏捷 DevOps 成熟度模型](examples/敏捷/敏捷开发运维成熟度模型-hpe/index.md)
  - [ThoughtWorks 敏捷成熟度模型](examples/敏捷/敏捷成熟度模型-thoughtworks/index.md)
  - [Prowareness 敏捷团队成熟度模型](examples/敏捷/敏捷团队成熟度模型-prowareness/index.md)
- 人工智能
  - [国家医疗服务体系的人工智能成熟度模型](examples/人工智能/国家医疗服务体系人工智能成熟度模型/index.md)
- 能力（Capability）
  - [Capability Maturity Model Integration (CMMI) for Development by Carnegie Mellon Software Engineering Institute (SEI)](http://resources.sei.cmu.edu/asset-files/TechnicalReport/2006-005-001-14771.pdf)
  - [Capability Maturity Model Integration (CMMI) for Acquisition by Carnegie Mellon Software Engineering Institute (SEI)](http://resources.sei.cmu.edu/asset-files/TechnicalReport/2007-005-001-14897.pdf)
- 持续改进
  - [持续改进会议成熟度模型](examples/持续改进/持续改进会议成熟度模型/index.md)
- 持续交付
  - [Xebia 持续交付成熟度模型](examples/持续交付/持续交付成熟度模型-xebia/index.md)
- 数据中心
  - [Xebia 数据中心自动化成熟度模型](examples/数据中心/数据中心自动化成熟度模型-xebia/index.md)
- 企业架构
  - [企业架构：TOGAF 成熟度模型](examples/软件/企业架构/togaf-成熟度模型/index.md)
  - [基于 CMMI CM SEI 的企业架构成熟度模型](examples/软件/企业架构/基于cmmi-cm-sei的企业架构成熟度模型/index.md)
- EIM：企业信息管理
  - [高德纳（Gartner）企业信息管理成熟度模型](examples/企业信息管理/高德纳企业信息管理成熟度模型/index.md)
- 绿色软件
  - [Green Software Maturity Matrix](https://maturity-matrix.greensoftware.foundation/)
- IAM：身份与访问管理
  - [高德纳（Gartner）身份与访问管理计划成熟度模型](examples/身份与访问管理/高德纳身份与访问管理计划成熟度模型/index.md)
- 基础设施即代码（IaC）
  - [Joel Parker Henderson 的基础设施即代码（IaC）成熟度模型](examples/基础设施即代码/基础设施即代码成熟度模型-乔尔-帕克-亨德森/index.md)
  - [基础设施即代码（IaC）成熟度模型](examples/基础设施即代码/基础设施即代码成熟度模型-斯塔福德/index.md)
- IT：信息技术
  - [创新价值研究所（IVI）的 IT 能力成熟度框架](examples/信息技术/信息技术能力成熟度框架-创新价值研究所/index.md)
  - [Poss 的技术领导力职业阶梯](examples/信息技术/技术领导力职业阶梯-波斯/index.md)
- 管理
  - [高德纳（Gartner）项目集与组合管理成熟度模型](examples/管理/高德纳项目集与组合管理成熟度模型/index.md)
  - [Priority Systems 的项目组合管理成熟度等级](examples/管理/项目组合管理成熟度等级-priority-systems/index.md)
  - [英国政府商务办公室（OGC）的组合、项目群与项目管理成熟度模型（P3M3）](examples/管理/p3m3-成熟度模型-英国政府商务办公室/index.md)
- 开源
  - [开源成熟度模型](examples/软件/开源/开源成熟度模型/index.md)
- 产品
  - [Kwan 的产品需求层次](examples/产品/关氏产品需求层次/index.md)
- PS：专业服务
  - [SPI Research 的专业服务（PS）成熟度记分卡](examples/专业服务/专业服务成熟度记分卡-spi-research/index.md)
- 技能
  - [程序员能力矩阵](examples/编程/程序员能力矩阵/index.md)
  - [Prowareness 技能成熟度模型](examples/技能/技能成熟度模型-prowareness/index.md)
- 六西格玛
  - [精益六西格玛成熟度评估](examples/六西格玛/精益六西格玛成熟度模型/index.md)
  - [六西格玛成熟度模型](examples/六西格玛/六西格玛成熟度模型/index.md)
- 社交媒体
  - [社交媒体成熟度模型](examples/社交媒体/社交媒体成熟度模型/index.md)
- 软件文档
  - [README 成熟度模型](examples/软件文档/readme-成熟度模型/index.md)
- 团队
  - [novumAVI 团队能力成熟度模型](examples/团队/团队能力成熟度模型-novumavi/index.md)
  - [团队绩效成熟度模型](examples/团队/团队绩效成熟度模型/index.md)
- 供应商
  - [Apache Project Maturity Model](https://community.apache.org/apache-way/apache-project-maturity-model.html)

## 成熟度模型的流程视角

P3M3® 描述了若干流程视角。可以在成熟度模型的所有等级上对其进行评估。

- 控制管理（Control Management）：组织对当前“在途”举措保持控制的程度。
- 效益管理（Benefits Management）：组织定义、跟踪并确保从投资中实现绩效改进的程度。
- 财务管理（Financial Management）：组织通过商业论证和预算控制来管理和控制投资的程度。
- 利益相关方管理（Stakeholder Management）：各项举措与外部环境互动和沟通，以尽量减少互动可能带来的负面影响的程度。
- 组织治理（Organizational Governance）：组织控制投资的启动并使其与企业战略保持一致的程度。
- 风险管理（Risk Management）：组织关注并减轻威胁的影响、同时利用机遇的程度。
- 资源管理（Resource Management）：组织培养自身人才并利用供应链提供的机会来克服高峰与低谷的程度。

## 自上而下与自下而上

设计成熟度模型有两种方法：

- 自上而下的方法：首先确定固定数量的成熟度阶段或等级，然后用特征（通常以具体评估项的形式）加以佐证，这些特征支持关于成熟度如何演进的最初假设。

- 自下而上的方法：首先确定不同的特征或评估项，然后在第二步中将其聚类为成熟度等级，从而对成熟度演进的不同步骤形成更为总体的认识。

## 建模成熟度等级

建模成熟度等级（Modeling Maturity Levels）是 Anneke Kleppe 和 Jos Warmer 在其著作《MDA Explained》（Addison-Wesley）中定义的一种分类体系。这些等级刻画了建模在软件项目中的作用。这一概念与使用能力成熟度模型（Capability Maturity Model）对软件过程进行评级的方式相似。

参见：

- https://en.wikipedia.org/wiki/Modeling-Maturity-Levels
- http://www.devx.com/enterprise/Article/26664

共有 6 个等级：

- <b>0 级：无规格说明</b>：软件的规格说明没有写下来，只存在于开发人员的头脑中

- <b>1 级：文本规格说明</b>：软件的规格说明由自然语言文本（无论是英语、汉语还是其他语言）描述，写在一份或多份文档中

- <b>2 级：文本加模型</b>：文本规格说明辅以若干模型，以展示系统的一些主要结构

- <b>3 级：模型加文本</b>：软件的规格说明写在一个或多个模型中。除这些模型之外，还使用自然语言文本来解释模型的细节、背景和动机，但规格说明的核心在于模型。

- <b>4 级：精确模型</b>：软件的规格说明写在一个或多个模型中。自然语言仍可用于解释模型的背景和动机，但其作用与源代码中的注释相同。

- <b>5 级：仅模型</b>：模型足够精确和详细，可以完整地生成代码。此级别的代码生成器已像编译器一样值得信赖，因此开发人员甚至无需查看生成的代码。

## 对成熟度模型的反驳

- [Immaturity of Maturity Models by James Bach](http://www.satisfice.com/blog/archives/581)
- [Maturity Models Have It Backwards by Michael Bolton](http://www.developsense.com/blog/2009/10/maturity-models-have-it-backwards/)
- [No Best Practices by James Bach](http://www.satisfice.com/blog/archives/27)
- [The Immaturity of CMM](http://www.satisfice.com/articles/cmm.shtml)
- [Why Maturity Models Don’t Work by Barry O'Reilly](https://barryoreilly.com/explore/blog/why-maturity-models-dont-work/)

## 相关评估指标

- [汤姆·彼得斯的卓越审计十大要点](examples/卓越/卓越审计十大要点-汤姆-彼得斯/index.md)
- [卓越的专业服务公司——汤姆·彼得斯](examples/卓越/卓越专业服务公司-汤姆-彼得斯/index.md)

## 常见问题

### 我可以创建成熟度模型吗？

可以。任何人都可以创建成熟度模型。例如，许多组织创建自己的成熟度模型，有时基于公开的成熟度模型，有时利用内部机密信息，有时与专家和顾问协商，等等。本仓库链接了由许多人和许多组织创建的众多成熟度模型。

### 谁来决定成熟度模型中包含什么？

创建成熟度模型的团队决定其中包含什么。创建您自己的成熟度模型时，我们建议使用“决策记录”，它可以帮助您的团队研究想要纳入的内容，并记录您的选择，以便帮助其他人理解并利用您的工作。

### 成熟度模型是某一时刻的快照，还是未来的计划？

快照。优秀的团队会利用这份快照来制定未来的计划，例如朝着更高的成熟度等级努力的计划。

### 成熟度模型是描述性的还是规定性的？

描述性的。成熟度模型描述各个等级及其条目，并不规定团队如何从一个等级迈向下一个等级，或如何获得条目。在少数情况下，特定的成熟度模型可能会提供附带的建议，但这是成熟度模型本身固有的。

### 成熟度模型会随时间演进吗？

会。随着组织的演进，其每个成熟度模型都可以演进。例如，一些组织喜欢每年回顾自己的每个成熟度模型，以确保每个成熟度模型仍然有用，并根据组织的目标和能力按需更新每个模型。

### 成熟度模型有终点状态吗？

有。成熟度模型的终点状态是它对团队不再有用的时候。例如，当团队认为其当前的能力已经足够，或者团队因达到最高等级并希望进一步改进而超越了某个成熟度模型时，就会发生这种情况。

### 成熟度模型与科学模型不同吗？

不同。成熟度模型旨在成为一份快速简便的摘要，帮助团队交流其当前的能力，并规划未来的能力。“模型”一词的含义是“代表另一事物的小事物，而后者通常更大、更复杂或更抽象”。相比之下，“科学模型”旨在解释和预测真实对象或系统的行为，例如可以将科学对象置于具体情境中的可视化模型，或者可以预测科学系统的预测模型。

### 成熟度模型可以验证吗？

可以。成熟度模型可以用定性指标和/或定量指标来描述其等级和条目。例如，程序员可以用“编写一个打印 Hello World 的程序”来描述 1 级“起步”，直至用“与我们的主要合作伙伴协同运行一个全球分布式系统”来描述 5 级“编排”。
