// github: https://github.com/jashkenas/underscore
// blog：https://underscorejs.org/

/** underscore.js是js实用库，提供类似Prototype.js的一些功能。它提供了80多个函数
常用如map, select, invoke, 还有更多的专业的辅助函数。如：函数绑定，javascript模板功能，强类型相等测试；

 */

 (function(){
   var root = this;

   var _ = function(obj) {
     if(obj instanceof _) return obj;
     if(!(this instanceof _)) return new _(obj);
     this._wrapped = obj;
   }

   if (typeof exports !== 'undefined') {
     if(typeof module !== 'undefined' && module.exports) {
       exports = module.exports = _;
     }
     exports._ = _;
   } else {
     root._ = _;
   }

   _.minxin = function(obj) {
     _.each(_.function(obj),function(name) {
       _.prototype[name] = function() {
         var args = [this._wrapped]
         push.aply(args, arguments);
         return obj[name].apply(_, args)
       }
     })
   }

 }.call(this))


