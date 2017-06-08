/**
 * Created by Luffy on 2017/6/8.
 */
/**
 * 书上的优秀解法，有几个1就循环几次
 * @param n
 * @returns {number}
 * @constructor
 */
function NumberOf1(n) {
    var count = 0;
    while(n) {
        ++count;
        n = (n - 1) & n;
    }
    return count;
}
/**
 * 常规解法：从最低位开始循环判断那一位是否为1
 * @param n
 * @returns {*}
 * @constructor
 */
function NumberOf1(n) {
    var count = 0;
    var flag = 1;
    while(flag){
        if(n&flag){
            count++;
        }
        flag = flag << 1;
    }
    return count;
}
/**
 * javascript特有解法：如果n>0，将n转换成二进制字符串，然后循环判断里面1的个数
 * 如果n<0，将负数转换成正确的二进制补码形式在转换成字符串，在循环判断
 * @param n
 * @returns {*}
 * @constructor
 */
function NumberOf1(n) {
    // write code here
    //-123的二进制表示为-1111011，123的为1111011，因此首先要得到负数二进制的补码表示
    //其后面部分的补码0000101 = 122的正码1111011按位取反，
    //这个正码加上前面的0即是再全部按位取反即得-123的补码表示
    if(n < 0){
        n = -n;
        n = n-1;
        var str = (Array(32).join("0")+n.toString(2)).slice(-32);
        str = exchange(str);
    }else{
        var str = (Array(32).join("0")+n.toString(2)).slice(-32);
    }
    
    return cal(str);
}
//计算1的个数
function cal(str){
    var sum = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] == 1){
            sum ++;
        }
    }
    return sum;
}
//如果是负数，0变1，1变0
function exchange(str){
    var arr = str.split('');
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 0){
            arr[i] = 1;
        }else {
            arr[i] = 0;
        }
    }
    str = arr.join("");
    return str;
}