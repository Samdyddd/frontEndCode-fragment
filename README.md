# frontEndCode-fragment
前端代码知识片段

1. 如何判断数据类型
  * 数组
  es5
  Array.isArray([]) // true
  <!-- not es5 -->
  if(typeof Array.isArray === "undefined") {
    Array.isArray = function(arg) {
      return Object.prototype.toString.call(arg) === "[object Array]";
    }
  }
  * 函数


  * 


2. typeof, instanceof, constructor, Object.prototype.toString()都是js中检查类型的方法，如何区分它们？
  * typeof 不能检测Array,json, null, Date(), Error类型
  * instanceof 不能完全检测，会将function检测成Object, 将null和undefined检测为Object类型
  * constructor 是对象上属性，指向构造函数；除了undefined和null，其他类型变量均能使用constructor判断类型。
  * Object.prototype.toString.call()输出字符串，但是判断''这个是"[Object String]"，和string类型一样。
  