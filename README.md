### 仁者无敌__吴亮仁

> [我的简介](https://fashman.github.io/wuliangren/dist/index.html)

# 代码规范

## css样式规范

### 命名空间规范

* 组件：以 **um** 为命名空间，表示可复用、移植的组件模块，例如：um-slider、um-dropMenu。
* 钩子：以 **大写J** 为命名空间，表示特定给 JavaScript 调用的类名，例如：J-umPrev、J-umNext。

#### 不建议使用下划线 _ 进行连接

* 节省操作，输入的时候少按一个 shift 键
* 能良好区分 JavaScript 变量命名

### 数值与单位

* 当属性值或颜色参数为 0 – 1 之间的数时，省略小数点前的 0 
```
  // bad
  color: rgba(255, 255, 255, 0.5);
  
  // good
  color: rgba(255, 255, 255, .5);
```
* 当长度值为 0 时省略单位。
```
  // bad
  margin: 0px auto;

  // good
  margin: 0 auto;
```
* 十六进制的颜色属性值使用小写和尽量简写
```  
  // bad
  color: #ffcc00;
  
  // good
  color: #fc0;
```
### 合理使用使用引号

* font-family 内使用引号
```
  body {
    font-family: 'Microsoft YaHei', '黑体-简', '\5b8b\4f53';
  }
```
### 避免使用 !important

> 除去某些极特殊的情况，尽量不要不要使用 **!important**

> **!important** 的存在会给后期维护以及多人协作带来噩梦般的影响