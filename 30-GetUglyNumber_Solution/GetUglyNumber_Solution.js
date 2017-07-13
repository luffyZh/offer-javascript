/**
 * Created by Luffy on 2017/7/13.
 */
/*
思路：
① 按顺序将丑数保存在数组中，然后求下一个丑数；
② 下一个丑数是由数组中某个丑数 A * 2，B * 3，C * 5 中的最小值得来的。
③ 按照题目规定，第一个丑数是 1，存入数组中；
④ 第二个丑数为 1 * 2，1 * 3，1 * 5 三个中的最小值；
⑤ 第三个丑数为 2 * 2，1 * 3，1 * 5 三个中的最小值，依次类推，求出第 N 个数组。
*/

function GetUglyNumber_Solution(index){
    // write code here
    if(index == 0){
        return 0;
    }
    var uglyNum = [1];
    var factor2 = 0,factor3 = 0,factor5 = 0;
    for(var i=1;i<index;i++){
        uglyNum[i] = Math.min(uglyNum[factor2]*2,uglyNum[factor3]*3,uglyNum[factor5]*5);
        if(uglyNum[i] == uglyNum[factor2]*2){
            factor2++;
        }
        if(uglyNum[i] == uglyNum[factor3]*3){
            factor3++;
        }
        if(uglyNum[i] == uglyNum[factor5]*5){
            factor5++;
        }
    }
    return uglyNum[index-1];
}