# ts-base
ts基础

初写ts的时候，需要把ts编译为js文件，通过命令tsc --init生成tsconfig.json文件和一个对应的js文件夹,并将tsconfig.json文件的outDir修改为如图：

![image](https://github.com/cuminzh/ts-base/raw/master/img/WX20200527-161150.png)

我们还需要随时将写的ts代码，编译为js

![image](https://github.com/cuminzh/ts-base/blob/master/img/WX20200527-162254.png)

![image](https://github.com/cuminzh/ts-base/blob/master/img/WX20200527-162337.png)

![image](https://github.com/cuminzh/ts-base/blob/master/img/WX20200527-162422.png)

这时候终端就会运行，实现对ts的监听，从而转化为js代码，可以在js文件夹中找到对应的js文件，当修改ts文件时，相应的js文件也会修改
