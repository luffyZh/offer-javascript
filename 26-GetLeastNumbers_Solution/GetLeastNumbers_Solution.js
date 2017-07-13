/**
 * Created by Luffy on 2017/7/13.
 */
function GetLeastNumbers_Solution(input, k){
    // write code here
    if(k>input.length){
        return [];
    }
    var arr = input.sort(function (a,b) { //调用数组的排序函数，高阶函数进行整数的排序
        return a-b;
    });
    return arr.slice(0,k);
}