/**
 * Created by Luffy on 2017/7/12.
 */
function sortString(arr, sortTemp, res) {
    if (arr.length == 0) {
        res.push(sortTemp);
    } else {
        var isRepeat = {};
        for (var i = 0; i < arr.length; i++) {
            if (!isRepeat[arr[i]]) {
                var temp = arr.splice(i, 1)[0]; // 取出第i个字符
                sortTemp+= temp; // 第i个字符设为前缀
                sortString(arr, sortTemp, res);
                arr.splice(i, 0, temp); // 补全取出的元素，恢复原字符串
                sortTemp= sortTemp.slice(0, sortTemp.length - 1); // 清空sortTemp
                isRepeat[temp] = true;
            }
        }
    }
    return res;
}
function Permutation(str) {
    var result = [];
    if (str.length <= 0) {
        return [];
    }
    var sortTemp= "";
    var arr = str.split("");
    result = sortString(arr, sortTemp, []);
    return result;
}
console.log(Permutation("aac"));