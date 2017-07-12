/**
 * Created by Luffy on 2017/7/11.
 */
function IsPopOrder(pushV, popV){
    // write code here
    var stack = [];
    for(var i=0,j=0;i<pushV.length;i++){
        stack.push(pushV[i]);//先按照顺序压入元素
        //当stack的最后一个元素和出栈的元素顺序相等的时候，进行出栈
        while(j < popV.length && stack[stack.length - 1] == popV[j]){
            j++;
            stack.pop();
        }
    }
    //上述过程结束之后如果stack为空，表示是一个出栈顺序，否则不是一个出栈顺序
    if(stack.length==0){
        return true;
    }else{
        return false;
    }
}