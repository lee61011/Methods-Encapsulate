
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



/* 
    通过 myFormatTime() 这个方法可以来格式化时间字符串 
    @ 可以根据自己设置的模板来解析  myFormatTime('{1}-{2} {3}:{4}')、myFormatTime('{3}:{4}:{5}')……
*/
String.prototype.myFormatTime = function myFormatTime() {
    var ary = this.match(/\d+/g),
        template = arguments[0] || '{0}年{1}月{2}日 {3}时{4}分{5}秒';	//	如果传递自己的格式模板，就按传递的来解析，否则按照默认的模板解析
    template = template.replace(/\{(\d+)\}/g, function () {
        var value = ary[arguments[1]] || '0';
        value.length < 2 ? value = '0' + value : null;
        return value;
    });
    return template;
};