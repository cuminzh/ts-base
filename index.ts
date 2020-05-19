// function getInfo(name: string, age: number): string {
//     return name
// }

// alert(getInfo('zhang', 20))

//定义类

// class Person {
//     name: string; //属性 前面省略了public关键词
//     constructor(n: string) { //构造函数 实例化类的时候触发的方法
//         this.name = n
//     }
//     run(): void {
//         alert(this.name)
//     }
// }

// var p = new Person('张三')
// p.run()


// class Person {
//     name: string; //属性 前面省略了public关键词
//     constructor(name: string) { //构造函数 实例化类的时候触发的方法
//         this.name = name
//     }
//     getName():string{
//         return this.name;
//     }
//     setName(name:string):void{
//         this.name =name;
//     }
// }

// var p = new Person('张三');
// alert(p.getName());

// p.setName('李四');
// alert(p.getName());

//ts实现继承 extends、super
// class Person{
//     name:string;
//     constructor(name:string){
//         this.name=name
//     }
//     run():string{
//         return `${this.name}在运动`
//     }

// }

// class Web extends Person{
//     constructor(name:string){
//         super(name);
//     }

//     run():string{
//         return `${this.name}在运动-子类`
//     }

//     work(){
//         alert(`${this.name}在工作`)
//     }
// }

// var w = new Web('李四');
// alert(w.run());

// w.work();

//类里面的修饰符 ts里面定义属性的时候给我们提供了 三种修饰符

/*
    public:公有 在类里面、子类、类外面都可以访问
    protected：保护类型 在类里面、子类里面可以访问，在类外部没法访问
    private：私有 在类里面可以访问，子类、类外部都没法访问

    属性如果不加修饰符 默认就是 公有public
*/

// class Person{
//     public name:string; //公有属性
//     constructor(name:string){
//         this.name=name
//     }
//     run():string{
//         return `${this.name}在运动`
//     }

// }

// class Web extends Person{
//     constructor(name:string){
//         super(name);
//     }

//     run():string{
//         return `${this.name}在运动-子类`
//     }

//     work(){
//         alert(`${this.name}在工作`)
//     }
// }

// var w = new Web('李四');
// w.work();


//在类外部访问公有属性
// class Person{
//     public name:string; //公有属性
//     constructor(name:string){
//         this.name=name
//     }
//     run():string{
//         return `${this.name}在运动`
//     }

// }

// var p=new Person('哈哈哈')
// alert(p.name)


//protected:保护类型 在类里面、子类里面可以访问，在类外部没法访问

// class Person{
//     protected name:string; //公有属性
//     constructor(name:string){
//         this.name=name
//     }
//     run():string{
//         return `${this.name}在运动`
//     }

// }

// class Web extends Person{
//     constructor(name:string){
//         super(name);
//     }

//     run():string{
//         return `${this.name}在运动-子类`
//     }

//     work(){
//         alert(`${this.name}在工作`)
//     }
// }

// var w = new Web('李四');
// w.work();

//在类外部没法访问公有属性
// class Person{
//     protected name:string; //公有属性
//     constructor(name:string){
//         this.name=name
//     }
//     run():string{
//         return `${this.name}在运动`
//     }

// }

// var p=new Person('哈哈哈')
// alert(p.name)


//private：私有 在类里面可以访问，子类、类外部都没法访问

// class Person{
//     private name:string; //公有属性
//     constructor(name:string){
//         this.name=name
//     }
//     run():string{
//         return `${this.name}在运动`
//     }

// }

// var p=new Person('哈哈哈');
// alert(p.run());

// var p=new Person('哈哈哈')
// alert(p.name)

// class Web extends Person{
//     constructor(name:string){
//         super(name);
//     }

//     work(){
//         alert(`${this.name}在工作`)
//     }
// }