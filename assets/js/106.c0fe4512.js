(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{618:function(v,_,t){"use strict";t.r(_);var a=t(0),s=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("关于数仓的基础知识")]),v._v(" "),_("p",[v._v("DataWarehousing("),_("code",[v._v("dw")]),v._v(": 数据仓库)")]),v._v(" "),_("h3",{attrs:{id:"数据的获取与分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据的获取与分析"}},[v._v("#")]),v._v(" 数据的获取与分析")]),v._v(" "),_("p",[v._v("数据的两个作用:")]),v._v(" "),_("ul",[_("li",[v._v("操作型记录的保存")]),v._v(" "),_("li",[v._v("分析型决策的制定")])]),v._v(" "),_("blockquote",[_("p",[v._v("操作型系统(数据生产方): 比如 "),_("code",[v._v("ERP")]),v._v(",  "),_("code",[v._v("CRM")]),v._v(" 等.  操作型系统, 一般不会维护历史数据, 只需要修改数据, 以反应最新的状态.")]),v._v(" "),_("p",[v._v("分析型系统(数据消费方): 比如 "),_("code",[v._v("DW")]),v._v(", "),_("code",[v._v("BI")]),v._v(" 等. 通常分析型系统, 要求保存历史环境.")])]),v._v(" "),_("h3",{attrs:{id:"dw-bi-的业务需求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dw-bi-的业务需求"}},[v._v("#")]),v._v(" "),_("code",[v._v("DW/BI")]),v._v(" 的业务需求")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("可以方便的存取信息. 内容必须易于理解. 对于业务用户来说, 数据需要有"),_("strong",[v._v("直观性")]),v._v(".")]),v._v(" "),_("ul",[_("li",[v._v("直观性: 不能仅针对开发人员. 数据结构与标识要符合业务用户的思维过程和词汇.")]),v._v(" "),_("li",[v._v("业务用户能以各种形式"),_("strong",[v._v("分割")]),v._v(", "),_("strong",[v._v("合并")]),v._v(", "),_("strong",[v._v("分析数据")]),v._v(".")])])]),v._v(" "),_("li",[_("p",[v._v("必须以一致的形式展现信息. 数据必须是"),_("strong",[v._v("可信的")]),v._v(".")]),v._v(" "),_("ul",[_("li",[v._v("组织"),_("strong",[v._v("不同来源的数据")])]),v._v(" "),_("li",[v._v("实现数据清洗")]),v._v(" "),_("li",[v._v("确保保数据质量")]),v._v(" "),_("li",[v._v("数据在真正适合用户需要时发布")]),v._v(" "),_("li",[v._v("数据可在不同数据源共用")])])]),v._v(" "),_("li",[_("p",[v._v("必须能够"),_("strong",[v._v("适应变化")])]),v._v(" "),_("ul",[_("li",[v._v("用户需求")]),v._v(" "),_("li",[v._v("业务环境")]),v._v(" "),_("li",[v._v("数据")])]),v._v(" "),_("blockquote",[_("p",[v._v("设计"),_("code",[v._v("DW/BI")]),v._v("系统时,  要考虑使其能够方便的处理无法避免的变化.")]),v._v(" "),_("p",[v._v("如果需要修改 "),_("code",[v._v("DW/BI")]),v._v("系统中的描述性数据("),_("strong",[v._v("元数据")]),v._v(")时, 在能以适当的方式描述变化. 且变化对用户透明.")])])]),v._v(" "),_("li",[_("p",[v._v("必须能够及时展现信息")]),v._v(" "),_("ul",[_("li",[v._v("在发布未做数据清洗的数据时, 预期与期待.")])])]),v._v(" "),_("li",[_("p",[v._v("保证信息财产的安全")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("DW/BI")]),v._v(" 的成功, 取决于接入的"),_("code",[v._v("业务群体")])])])]),v._v(" "),_("h4",{attrs:{id:"数据清洗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据清洗"}},[v._v("#")]),v._v(" 数据清洗")]),v._v(" "),_("h4",{attrs:{id:"数据质量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据质量"}},[v._v("#")]),v._v(" 数据质量")]),v._v(" "),_("h4",{attrs:{id:"数据生命周期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据生命周期"}},[v._v("#")]),v._v(" 数据生命周期")]),v._v(" "),_("h4",{attrs:{id:"ods"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ods"}},[v._v("#")]),v._v(" ODS")]),v._v(" "),_("blockquote",[_("p",[v._v("操作性数据(Operational Data Store) 简称 ODS")])]),v._v(" "),_("p",[v._v("与数据仓库在物理结构上不同。ODS存储的是当前的数据情况，给使用者提供当前的状态，提供即时性的、操作性的、集成的全体信息的需求")]),v._v(" "),_("p",[v._v('ODS作为数据库到数据仓库的一种过渡形式，能提供高性能的响应时间，ODS设计采用混合设计方式。ODS中的数据是"实时值"，而数据仓库的数据却是"历史值"，一般ODS中储存的数据不超过一个月，而数据仓库为10年或更多')]),v._v(" "),_("ul",[_("li",[v._v("ODS直接存放从业务抽取过来的数据，这些数据从结构和数据上与业务系统保持一致，降低了数据抽取的复杂性")]),v._v(" "),_("li",[v._v("转移一部分业务系统的细节查询功能，因为ODS存放的数据与业务系统相同，原来有业务系统产生的报表，现在可以从ODS中产生")]),v._v(" "),_("li",[v._v("完成数据仓库中不能完成的功能，ODS存放的是明细数据，数据仓库DW或数据集市DM都存放的是汇聚数据，ODS提供查询明细的功能")]),v._v(" "),_("li",[v._v("ODS数据只能增加不能修改，而且数据都是业务系统原样拷贝，所以可能存在数据冲突的可能，解决办法是为每一条数据增加一个时间版本来区分相同的数据")])]),v._v(" "),_("h4",{attrs:{id:"dw"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dw"}},[v._v("#")]),v._v(" DW")]),v._v(" "),_("h4",{attrs:{id:"dm"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dm"}},[v._v("#")]),v._v(" DM")]),v._v(" "),_("h3",{attrs:{id:"维度建模"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#维度建模"}},[v._v("#")]),v._v(" 维度建模")])])}),[],!1,null,null,null);_.default=s.exports}}]);