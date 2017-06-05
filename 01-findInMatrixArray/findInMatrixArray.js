/**
 * Created by Luffy on 2017/6/5.
 */
/**
 * @param target 目标
 * @param array 原数组
 * @returns {boolean} 结果，查找到true，未查找到false
 *思路
 * 因为二维数组排序方式是特别的，从左到右从上到下依次递增，因此采取从左下角或者右上角作为起点去排查
 * 每一次排查至少可以去掉一列或者一行或者直接找到元素
 */
function findInMatrix(target, array) {
    var row = array.length;  // 行数
    var col = array[0].length;  // 列数
    // 从左下角开始比较
    var currentRow = row - 1; //当前行数
    var currentColumn = 0; //当前所在列数
    while(currentRow >= 0 && currentColumn <= col - 1) { // 注意这里有等于号
        if (target > array[currentRow][currentColumn]) {
            currentColumn++;
        } else if (target < array[currentRow][currentColumn]) {
            currentRow--;
        } else {
            return true; //找到目标
        }
    }
    return false; //未找到目标
}