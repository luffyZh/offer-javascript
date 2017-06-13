/**
 * Created by Luffy on 2017/6/13.
 */
/**
 * 反转链表
 * 思路，不断将指针反转，然后将最后一个节点返回，就是反转之后的链表
 * @param pHead
 * @returns {*}
 * @constructor
 */
function ReverseList(pHead) {
    var pCur = null;
    var pNext = null;
    while(pHead !== null){
        pNext = pHead.next;
        pHead.next = pCur;
        pCur = pHead;
        pHead = pNext;
    }
    return pCur;
}