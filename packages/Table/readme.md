TODO

- 展开行
- 排序
- 筛选



## Table
| 参数 | 说明 | 类型 | 可选值 | 默认值 
|-|-|-|-|-|
| data | 要显示的数据集合 | Array |
| labels | 列的标题
| hover
| bordered
| striped
| responsive
| showPageSummary 

---

## Table-Column 

| 参数 | 说明 | 类型 | 可选值 | 默认值 
|-|-|-|-|-|
| type | 列的类型 | String | 
| attr | 要显示的属性 | String
| label | 列标题，如果未指定会读取table的labels参数 | String
| summary | 是否显示合计，仅当table的showPageSummary为true才有效 | Boolean
| format | 数据格式 | String,Array |
| formula | 公式 | Function 
| width | 列宽
