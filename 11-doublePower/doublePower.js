/**
 * Created by Luffy on 2017/6/8.
 */
/**
 * JavaScript方便解法，调用Math函数的pow方法
 * @param base
 * @param exponent
 * @returns {number}
 * @constructor
 */
function Power(base, exponent) {
    // write code here
    return Math.pow(base,exponent);
}
/**
 * 常规解法：需要考虑到底数为0以及指数小于0的情况
 */
var INVALID_INPUT = false; //判断输入是否合法
function Power(base,exponent) {
    //非法输入，返回0.0
    if(equal(base,0.0) && exponent <0){
        INVALID_INPUT = true;
        return 0.0;
    }
    var absExpomemt = Math.abs(exponent);
    var result = 1.0;
    for(var i = 1;i<=absExpomemt;i++){
        result *= base;
    }
    if(exponent < 0){
        result = 1.0/result;
    }
    return result;
}
/**
 * javascript中的浮点数减法不是精确的，用一个函数来近似相等
 * @param num1
 * @param num2
 */
function equal(num1,num2) {
    if((num1-num2>-0.0000001)&&(num1-num2)<0.0000001){
        return true;
    }else {
        return false;
    }
}