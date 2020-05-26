"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbUrl = '';
exports.dbUrl = dbUrl;
function getData() {
    console.log('获取数据库的数据');
    return [
        {
            title: '123'
        }
    ];
}
exports.getData = getData;
function save() {
    console.log('保存数据');
}
exports.save = save;
/*
export default 默认导出
每个模块都可以有一个default导出。默认导出使用default关键字标记，并且一个模块只能够有一个default导出，需要使用一种特殊的形式引入
*/
// export default getData;
