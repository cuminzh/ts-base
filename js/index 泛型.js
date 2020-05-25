"use strict";
/*
泛型：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

在像c#和java这样的语言中，可以使用泛型来创建可重用的结构，一个组件可以支持多种类型的数据。这样用户就可以以自己的数据类型来使用组件。

通俗理解：泛型就是解决 类、接口、方法的重用性，以及对不特定数据类型的支持。
 */
//只能返回string类型数据
/*function getData(value: string): string {
    return value
}
*/
//同时返回string类型和number类型
/*function getData(value:any):any{
    return value
}

getData(123)

getData('aaa')
*/
//any放弃了类型检查，传入什么就返回什么。 比如：传入number类型必须返回number类型 传入string类型必须返回string类型
//传入的参类型和返回的参数类型可以不一致
/*function getData(value:any):any{
    return '哈哈哈'
}
*/
//泛型：可以支持不特定的数据类型 要求：传入的参数和返回的参数一致
// function getData<T>(value:T):T{
//     return value
// }
// getData<number>(123)
// getData<number>('123') /*错误写法 */
// function getData<T>(value:T):any{
//     return 'fefd'
// }
// getData<number>(123) /*参数必须是number*/
//泛型类：比如有个最小堆算法 需要同时支持返回数字和字符串两种类型。通过类的泛型来实现
/*class MinClass {
    public list: number[] = [];

    add(num: number) {
        this.list.push(num);
    }

    min(): number {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}

var m = new MinClass();

m.add(3);
m.add(23);
m.add(100);
m.add(1);
console.log(m.min());
*/
//类泛型
// class MinClass<T>{
//     public list:Array<T>=[];
//     add(value:T):void{
//         this.list.push(value)
//     }
//     min():T {
//         var minNum = this.list[0];
//         for (var i = 0; i < this.list.length; i++) {
//             if (minNum > this.list[i]) {
//                 minNum = this.list[i];
//             }
//         }
//         return minNum;
//     }
// }
// var m = new MinClass<number>(); // 实例化类 并且制定了类的 T代表的类型是number
// m.add(33);
// m.add(2);
// m.add(233);
// console.log(m.min());
// var m1=new MinClass<string>(); // 实例化类 并且制定了类的T代表的类型是string
// m1.add('h');
// m1.add('c');
// m1.add('g')
// console.log(m1.min());
/*函数类型接口 */
// interface ConfigFn{
//     (value1:string, value2:string):string;
// }
// var setData=function(value:string, value1:string):string{
//     return value+value1;
// }
// setData('name','张三');
/* 泛型接口*/
/*interface ConfigFn {
    <T>(value: T): T;
}

var getData = function <T>(value: T): T {
    return value;
}

getData<string>('name');
*/
/*interface ConfigFn<T> {
    (value: T): T;
}

function getData<T>(value: T): T {
    return value;
}

var myGetData: ConfigFn<string> = getData;

myGetData('20');
*/
/*
定义一个user的类 这个类的作用就是映射数据库字段
然后定义一个MysqlDb的类 这个类用于操作数据库
然后把user类作为参数传入到MysqlDb中
*/
// class User {
//     userName: string | undefined;
//     passWord: string | undefined;
// }
//把类作为参数来约束数据传入的类型
// class MysqlDb {
//     add(user: User): boolean {
//         console.log(user);
//         return true;
//     }
// }
// var u = new User();
// u.userName = '张三';
// u.passWord = '123';
// var Db = new MysqlDb();
// Db.add(u)
//操作数据库的泛型类
// class MysqlDb<T> {
//     add(info: T): boolean {
//         console.log(info);
//         return true;
//     }
//     update(info: T, id: number): boolean {
//         console.log(info, id)
//         return true
//     }
// }
//想给User表增加数据
//1、定义一个User类 和数据库进行映射
// class User {
//     userName: string | undefined;
//     passWord: string | undefined;
// }
// var u = new User();
// u.userName = '张三';
// u.passWord = '123';
// var Db = new MysqlDb<User>();
// Db.add(u);
//2、定义一个ArticleCate类 和数据库进行映射
// class ArticleCate {
//     title: string | undefined;
//     desc: string | undefined;
//     status: number | undefined;
//     constructor(params: {
//         title: string | undefined,
//         desc: string | undefined,
//         status?: number | undefined,
//     }) {
//         this.title = params.title;
//         this.desc = params.desc;
//         this.status = params.status
//     }
// }
//增加操作
// var a = new ArticleCate({
//     title: '分类',
//     desc: '国内'
// });
// var Db = new MysqlDb<ArticleCate>();
// Db.add(a);
//更新操作
// var a = new ArticleCate({
//     title: '分类1',
//     desc: '国内新闻'
// });
// a.status = 0
// var Db = new MysqlDb<ArticleCate>();
// Db.update(a, 12)
