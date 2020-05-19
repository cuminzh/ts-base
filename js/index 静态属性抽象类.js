"use strict";
//静态属性 静态方法
// class Person {
//     public name:string;
//     static sex='男';
//     constructor(name:string) {
//          this.name=name
//     }
//     run(){
//         alert(`${this.name}在运动`);
//     }
//     work(){
//         alert(`${this.name}在工作`);
//     }
//     static print(){ /*静态方法 里面没法直接调用类里面的属性  */
//         // alert('静态方法'+this.name)
//         alert('静态方法'+this.sex)
//     }
// }
// // var p=new Person('张三')
// // p.work();
// Person.print()
//多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
//多态属于继承
// class Animal {
//     name:string
//     constructor(name:string) {
//         this.name=name
//     }
//     eat(){
//     }
// }
// class Dog extends Animal {
//     constructor(name:string) {
//         super(name)
//     }
//     eat(){
//         return this.name+'吃肉'
//     }
// }
// class Cat extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         return this.name+'吃老鼠'
//     }
// }
//ts中的抽象类，它是提供其他类继承的基类，不能直接被实例化
//用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
//abstract抽象方法只能放在抽象类里面
// abstract class Animal {
//     public name:string;
//     constructor(name:string) {
//         this.name=name;
//     }
//     abstract eat():void
// }
// class Dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         alert(`${this.name}吃狗粮`);
//     }
// }
// class Cat extends Animal {
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         alert(`${this.name}吃老鼠`)
//     }
// }
// var d=new Dog('小花花');
// d.eat();
// var c=new Cat('小花猫');
// c.eat();
