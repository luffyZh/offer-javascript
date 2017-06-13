/**
 * Created by Luffy on 2017/6/13.
 */
/**
 * 思路：
 ① 如果 pHead1 和 pHead2 中有一个为空，则 result 是另一个；
 ② 如果 pHead1 的头结点值小于 pHead2，那么 result 的头结点为 pHead1 的头结点，其 next 为 pHead1.next 和 pHead2 比较的结果。同理对 pHead2 也一样。
 ③ 因此本题可采用递归的方法。
 * @param pHead1
 * @param pHead2
 * @returns {*}
 * @constructor
 */
function Merge(pHead1, pHead2) {
    // write code here
    if (pHead1 == null) {
        return pHead2;
    } else if (pHead2 == null) {
        return pHead1;
    }
    var result = {};
    if (pHead1.val < pHead2.val) {
        result = pHead1;
        result.next = Merge(pHead1.next, pHead2);
    } else {
        result = pHead2;
        result.next = Merge(pHead1, pHead2.next);
    }
    return result;
}