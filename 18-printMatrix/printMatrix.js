/**
 * Created by Luffy on 2017/7/11.
 */
var matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
function printMatrix(matrix) {
    var row = matrix.length;
    var col = matrix[0].length;
    var result = [];
    if(row==0||col==0){
        return result;
    }
    //定义上下左右位置
    var left = 0, //从左到右，第一次是从0开始
        top = 0, //从上到下，第一次从0开始
        right = matrix[0].length-1, // 从右到左，第一次从倒数第一行倒数第二个开始
        bottom = matrix.length -1; // 从下到上，第一次从第一列倒数第二个开始
    //循环条件，当left<right ,top<bottom时
    while(left<=right && top<=bottom){
        //从左到右
        for(var i=left;i<=right;i++){
            result.push(matrix[top][i]);
        }
        //从上到下
        for(var j=top+1;j<=bottom;j++){
            result.push(matrix[j][right]);
        }
        //从右到左
        if(top!=bottom){
            for(var m=right-1;m>=left;m--){
                result.push(matrix[bottom][m]);
            }
        }
        //从下到上
        if(left!=right){
            for(var n=bottom-1;n>top;n--){
                result.push(matrix[n][left]);
            }
        }
        left++;
        top++;
        right--;
        bottom--;
    }
    return result;
}
console.log(printMatrix(matrix));