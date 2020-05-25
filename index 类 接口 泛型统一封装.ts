/*
功能：定义一个操作数据库的库 支持Mysql Mssql MongoDb

要求1： Mysql Mssql MongoDb功能一样 都有 add update delete 个体方法

注意：约束统一的规范、以及代码重用

解决方案：需要约束规范所以要定义接口，需要代码重用所以用到泛型
    1、接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范
    2、泛型 通俗理解：泛型就是解决 类 接口 方法的复用性
*/

// interface DBI<T> {
//     add(info: T): boolean;
//     update(info: T, id: number): boolean;
//     delete(id: number): boolean;
//     get(id: number): any[]
// }

//定义一个操作Mysql数据库的类

// class MysqlDb<T> implements DBI<T>{
//     add(info: T): boolean {
//         console.log(info);
//         return true;
//     }
//     update(info: T, id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     delete(id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     get(id: number): any[] {
//         var list = [{
//             title: '张三',
//             desc: 'HHH'
//         }]

//         return list;
//     }

// }

//定义一个操作Mssql数据库的类

// class MssqlDb<T> implements DBI<T>{
//     add(info: T): boolean {
//         throw new Error("Method not implemented.");
//     }
//     update(info: T, id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     delete(id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     get(id: number): any[] {
//         var list = [{
//             title: '张三',
//             desc: 'HHH'
//         }]

//         return list;
//     }

// }

//操作用户表 定义一个user类和数据表做映射

// class User {
//     userName: string | undefined;
//     passWord: string | undefined;
// }

// var u=new User();
// u.userName='张三';
// u.passWord='123';

// var oMysql= new MysqlDb<User>(); //类作为参数来约束数据传入的类型
// oMysql.add(u)

// var u = new User();
// u.userName = '张三';
// u.passWord = '123';

// var oMssql = new MssqlDb<User>(); //类作为参数来约束数据传入的类型
// oMssql.add(u);

// //获取User表 id=4的数据
// var data = oMssql.get(4);
// console.log(data);