/**
 * Created by Luffy on 2017/6/8.
 */
/**
 * 常规递归解法：时间复杂度以及栈空间不允许，不是好解法
 * @param n
 * @returns {*}
 * @constructor
 */
function Fibonacci(n)
{
    // write code here
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return Fibonacci(n-2)+Fibonacci(n-1);
}
/**
 * 合理解法，只需要把每一次求出来的结果存起来，不断用前两次相加即可。
 * @param n
 * @returns {number}
 * @constructor
 */
function Fibonacci(n)
{
    // write code here
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    var frontOne = 1; //前一个结果也就是f(n-1)
    var frontTwo = 0; //前两个结果,也就是f(n-2)
    var fiboN = 0; //第n个
    for(var i=2;i<=n;i++){
        fiboN = frontOne + frontTwo; //前两个相加
        frontTwo = frontOne;  //f(n-2) => f(n-1)
        frontOne = fiboN; //f(n-1) => f(n)
    }
    return fiboN;
}