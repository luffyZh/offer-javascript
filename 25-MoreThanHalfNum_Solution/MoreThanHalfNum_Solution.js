/**
 * Created by Luffy on 2017/7/12.
 */
function MoreThanHalfNum_Solution(numbers){
    // write code here
    var temp = {};
    var targetCount = 0;
    if(numbers.length==0){
        return 0;
    }
    if(numbers.length==1){
        return numbers[0];
    }
    //第一次使用的是targetCount = Math.ceil(numbers.length/2),这个情况如果恰好占一半也会通过
    targetCount = Math.floor(numbers.length/2)+1; //此处是关键，如果是偶数，一半是不符合题意的
    var result = 0;
    numbers.forEach(function(item){
        if(!temp[item]){
            temp[item] = 1;
        }else{
            temp[item]++;
            if(temp[item]>=targetCount){
                result = item;
            }
        }
    })
    return result;
}
var arr = [4,2,1,4,2,4];
console.log(MoreThanHalfNum_Solution(arr));