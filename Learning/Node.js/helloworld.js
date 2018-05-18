/*
 * @Author: Nick-qi
 * @Date: 2018-05-18 18:27:02
 * @LastEditors: Nick-qi
 * @LastEditTime: 2018-05-18 18:27:02
 * @Description: 
 * @Email: q7but@qq.com
 */

// module.exports 原理的简单推导
module.exports = {
    a: function a() { }
}
// 准备module对象:
var module = {
    id: 'hello',
    exports: {}
};
var load = function (module) {
    // 读取的hello.js代码:
    function greet(name) {
        console.log('Hello, ' + name + '!');
    }

    module.exports = greet;
    // hello.js代码结束
    return module.exports;
};
var exported = load(module);
// 保存module:
save(module, exported);


