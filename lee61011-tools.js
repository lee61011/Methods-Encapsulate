
/* 
    去除字符串首尾空格（trim 方法有兼容问题）
    @ str.myTrim()
*/
String.prototype.myTrim = function myTrim() {
    return this.replace(/^\s+|\s+$/g, '');
};