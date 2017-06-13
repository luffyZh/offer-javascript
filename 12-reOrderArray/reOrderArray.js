/**
 * Created by Luffy on 2017/6/13.
 */
/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 *  思路：利用两个临时数组，一个存奇数，一个存偶数，然后将偶数添加到奇数后面
 *  @param array
 * @returns {*}
 */
function reOrderArray(array) {
    // write code here
    if(array.length==0||array.length==1){
        return array;
    }
    var jArr = [];
    var oArr = [];
    for(var i = 0,len=array.length;i<len;i++){
        if(array[i]%2==0){
            oArr.push(array[i]);
        }else{
            jArr.push(array[i]);
        }
    }
    //第一种方式，prototype
    Array.prototype.push.apply(jArr,oArr);
    //第二种方式
    jArr.concat(oArr);
    delete oArr;//删除额外空间
    return jArr;
}