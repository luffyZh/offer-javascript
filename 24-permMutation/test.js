function swap(arr,ch1,ch2) {
    var item = arr[ch1];
    arr[ch1] = arr[ch2];
    arr[ch2] = item;
}
function perm(arr,begin,end,res) {
    var result="";
    if(end==begin){         //一到递归的出口就输出数组，此数组为全排列
        for(var i=0;i<=end;i++){
            result+=arr[i];
        }
        res.push(result);
    }else {
        for(var j=begin;j<=end;j++){
            swap(arr,begin,j);      //for循环将begin~end中的每个数放到begin位置中去
            perm(arr,begin+1,end,res);  //假设begin位置确定，那么对begin+1~end中的数继续递归
            swap(arr,begin,j);      //换过去后再还原
        }
    }
    return res;
}
function Permutation(str) {
    // write code here
    var result=[];
    if(str.length==0){
        return result;
    }
    var arr = str.split("").sort();
    result = perm(arr,0,arr.length-1,[]);
    var res = [];
    var temp = {};
    result.forEach(function (item) {
        if(!temp[item]){
            temp[item] = true;
            res.push(item);
        }
    })
    return res.sort(); //将全排列进行排序,返回需要的结果
}