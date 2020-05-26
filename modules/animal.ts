namespace A {
    interface Animal {
        name: string;
        eat(str: string): void;
    }

    export class Dog implements Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        eat() {
            console.log(this.name + '吃粮食');
        }
    }

    export class Cat implements Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        eat(str: string) {
            console.log(this.name + str);
        }
    }
}

namespace B{
    interface Animal {
        name: string;
        eat(str: string): void;
    }

    export class Dog implements Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        eat() {
            console.log(this.name + '吃粮食');
        }
    }

    export class Cat implements Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        eat(str: string) {
            console.log(this.name + str);
        }
    }
}

export{
    A,
    B
}