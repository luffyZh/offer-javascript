/**
 * Created by Luffy on 2017/6/8.
 */
/**
 * 菲波那切数列的变形
 * 如果只有一个台阶，只有一种方法，如果有两个台阶，有两种方法
 * 当台阶>2时,第一次跳跃有两种不同的选择：第一种跳一个台阶，此时跳法数目等于后面n-1个台阶的跳法数目
 * 第二种是第一次跳两个台阶，剩下的跳法数目等于后面n-2个台阶的跳法数目
 * 因此：f(n) = f(n-1)+f(n-2)
 * @param number
 * @returns {number}
 */
function jumpFloor(number)
{
    // write code here
    if(number == 1){
        return 1;
    }
    if(number == 2){
        return 2;
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
/**
 * 跳台阶变形，由数学归纳法可以知道，每个台阶对于青蛙来说有两种可能，跳或者不挑
 * 因此，n个台阶的跳法应为2的(n-1)次幂
 * @param number
 * @returns {*}
 */
function jumpFloorII(number) {
    if (number < 0) return;
    if (number >= 0 && number <= 2) return number;
    return 2 * jumpFloorII(number - 1)
}