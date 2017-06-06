/**
 * Created by Luffy on 2017/6/6.
 */
/**
 * 旋转数组之中的最小元素
 * @param arr
 * @returns {*}
 */
function minNumberInRotateArray(arr) {
    // write code here
    var left = 0;
    var right = arr.length-1;
    var mid = left;
    
    if (arr.length == 0) return;
    
    while(arr[left] >= arr[right]){
        if(right-left == 1){
            mid = right;
            break;
        }
        mid = Math.floor((left+right)/2)
        if(arr[mid] >= arr[left]){
            left = mid;
        }
        else if(arr[mid] < arr[left]){
            right = mid;
        }
        else if(arr[mid] == arr[right] && arr[mid] == arr[left]){
            return inOrder(arr);
        }
    }
    return arr[mid];
}
function inOrder(arr){
    var min = arr[0];
    for(var i = 0; i<arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}