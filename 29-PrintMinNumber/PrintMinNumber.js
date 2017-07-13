/**
 * Created by Luffy on 2017/7/13.
 */
/*
思路：
① 本题关键点是制定排序规则，设计比较器；
② 排序规则如下：
若ab > ba 则 a > b，
若ab < ba 则 a < b，
若ab = ba 则 a = b；
1.例如：比较 3 和 31 时，'331' > '313'，所以返回结果是 '3' > '31'。
2.根据指定排序规则对数组进行排序，然后从小到大拼接即为所求结果。
*/

function Comparator(a, b) {
    var s1 = a + "" + b;
    var s2 = b + "" + a;
    for (var i = 0; i < s1.length; i++) {
        if (s1.charAt(i) > s2.charAt(i)) {
            return 1;
        }
        if (s1.charAt(i) < s2.charAt(i)) {
            return -1;
        }
    }
    return 1;
}
function PrintMinNumber(numbers) {
    numbers.sort(Comparator);
    var result = "";
    for (var i = 0; i < numbers.length; i++) {
        result = result + numbers[i];
    }
    return result;
}