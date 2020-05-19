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


interface Config{
    type:string;
    url:string;
    data?:string;
    dataType: string;
}
//原生js封装ajax
function ajax(){

}
