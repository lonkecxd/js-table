# pretty-table
## 可接收任何json数据的VueJS表格模板，集合了“分页”和“搜索”功能。

### 模板如下：

`<lazy_table v-bind:table_data="slide_data" :rows="config"></lazy_table>`

1. 把json数组传入table_data
2. 把配置信息传入rows。

### config格式：

`"title -> 标题"`     “->”两边各有一个空格。这样在展示表格的时候，就会把列标题从`title`改为`标题`。
多个配置用`,`隔开。

### ▣ 效果演示
![image](https://github.com/lonkecxd/pretty-table/blob/master/images/table.JPG)

### 对Firebase的说明：

想用Firebase实现的同学，把`.js`文件开头的注释信息反注释掉，将`vm.slide_data`替换成从Firebase提取的数据。
