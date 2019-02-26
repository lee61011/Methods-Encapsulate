
/* 
    去除字符串首尾空格（trim 方法有兼容问题）
    @ str.myTrim()
*/
String.prototype.myTrim = function myTrim() {
    return this.replace(/^\s+|\s+$/g, '');
};



/* 
    这个方法可以快速将 url 传参值进行解析
    @ url.myQueryURLParameter()
    @ 返回一个对象，包含 url 中所有参数的键值对
*/
String.prototype.myQueryURLParameter = function myQueryURLParameter() {
    var obj = {};
    this.replace(/([^?&=#]+)=([^?&=#]+)/g, function () {
        obj[arguments[1]] = arguments[2];
    });
    this.replace(/#([^?=&#]+)/g, function () {
        obj['HASH'] = arguments[1];
    });
    return obj;
};