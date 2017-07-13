/**
 * Created by Luffy on 2017/7/13.
 */
function FindGreatestSumOfSubArray(array){
    // write code here
    if(array.length == 0){
        return 0;
    }
    var sum = array[0]; //总和
    var tempSum = array[0]; //临时变量
    for(var i=1;i<array.length;i++){
        if(tempSum < 0){     //如果临时变量<0，那么与后面想加肯定变小，直接复制下一个
            tempSum = array[i];
        }else { //如果大于0,那么相加即可
            tempSum+=array[i];
        }
        sum = (tempSum > sum) ? tempSum : sum;
    }
    return sum;
}