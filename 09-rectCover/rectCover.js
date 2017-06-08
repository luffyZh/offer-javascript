/**
 * Created by Luffy on 2017/6/8.
 */
/**
 * 还是斐波那契数列
 * 如果第一个小矩形竖着放，则还剩下f(n-1)种摆法
 * 如果第一个小矩形横着放，那么对应着下方的也必须是一个横着放的小矩形，右侧就剩下f(n-2)种方法
 * @param n
 * @returns {*}
 */
function rectCover(n)
{
    // write code here
    if(n==0){
        return 0;
    }
    if(n==1 || n==2){
        return n;
    }
    var frontOne = 2; //前一个结果也就是f(n-1)
    var frontTwo = 1; //前两个结果,也就是f(n-2)
    var fiboN = 0; //第n个
    for(var i=3;i<=number;i++){
        fiboN = frontOne + frontTwo; //前两个相加
        frontTwo = frontOne;  //f(n-2) => f(n-1)
        frontOne = fiboN; //f(n-1) => f(n)
    }
    return fiboN;
}