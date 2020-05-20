"use strict";
/*
接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。
接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规范这批类里必须提供
某些方法，提供这些方法的类就可以满足实际需要。ts中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等
*/
//1、属性接口
/*
ts中定义方法传入参数

    function printLable(label:string):void{
        console.log('printLable')
    }

    printLable('哈哈哈')
*/
/*
ts中自定义方法传入参数，对json进行约束



function printLable(labelInfo:{label:string}):void{
    console.log('printLable')
}

// printLable('hhh'); //错误写法

// printLable({name:'张三'}); //错误写法


printLable({label:'张三'}); //正确写法
*/
/*对批量方法传入参数进行约束

//接口：行为和动作的规范，对批量方法进行约束

interface fullName {
    firstName: string; //注意;结束
    secondName: string;
}
function printName(name: fullName) {
    //传入对象必须包含 firstName secondName
    console.log(name.firstName + '--' + name.secondName);

}

var obj = { //传入的参数必须包含 firstName secondName
    age: 20,
    firstName: '张',
    secondName: '三'
};
printName(obj);
*/
/*
interface Config{
    type:string;
    url:string;
    data?:string;
    dataType: string;
}
//原生js封装ajax
function ajax(config:Config){
  var xhr= new XMLHttpRequest();
  xhr.open(config.type, config.url, true)
  xhr.send(config.data)
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status===200){
      
      if(config.dataType==='json'){
        console.log(JSON.parse(xhr.responseText))
      }else{
        console.log(xhr.responseText)
      }
    }
  }
}

ajax({
  type:'get',
  url: 'http://a.itying.com/api/productlist',
  dataType: 'json'
})
*/
/*
//函数类型接口：对方法传入的参数以及返回值进行约束


//加密的函数类型接口

interface encrypt {
    (key: string, value: string): string;
}

var md5: encrypt = (key1: string, value1: string): string => {
    return key1 + '---' + value1;
}

console.log(md5('name', '张三'));
*/
//可索引接口：数组、对象的约束 （不常用）
//ts定义数组的方式
/*
var arr:number[]=[11, 22]

var arr1:Array<string>=['aa', 'dd']
*/
//可索引接口 对数组的约束
// interface userArr{
//     [index:number]:string
// }
// var arr:userArr=['aa', 'bb']
// console.log(arr[0])
//可索引接口 对对象的约束
// interface userObj {
//     [index: string]: string
// }
// var obj: userObj = { name: '张三', mobile: '12234' }
/*
//类类型接口：对类的约束 和 抽象类有点相似

interface Animal {
    name: string;
    eat(str: string): void;
}

class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {
        console.log(this.name + '吃粮食');
    }
}

var d = new Dog('小狗');
d.eat();

class Cat implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat(str: string) {
        console.log(this.name + str);
    }
}

var c = new Cat('小猫');
c.eat('老鼠');
*/
//接口扩展：接口可以继承接口
// interface Animal {
//     eat(): void;
// }
// interface Person extends Animal {
//     work(): void;
// }
// class Web implements Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     work() {
//         console.log(this.name + '写代码');
//     }
//     eat() {
//         console.log(this.name + '喝果汁');
//     }
// }
// var w = new Web('小强');
// w.work();
// w.eat();
/*
interface Animal {
    eat(): void;
}

interface Person extends Animal {
    work(): void;
}

class Programmer{
    public name:string;
    constructor(name:string){
        this.name=name;
    }

    coding(code:string):void{
        console.log(this.name+code)
    }
}

class Web extends Programmer implements Person {
    constructor(name: string) {
        super(name)
    }

    work() {
        console.log(this.name + '写代码');
    }

    eat() {
        console.log(this.name + '喝果汁');
    }
}

var w = new Web('小强');
w.work();
w.eat();
w.coding('写ts');
*/ 
