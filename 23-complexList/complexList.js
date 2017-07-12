/**
 * Created by Luffy on 2017/7/12.
 */
function RandomListNode(x) {
    this.label = x;
    this.next = null;
    this.random = null;
}
function Clone(pHead) {
    if (!pHead) {
        return null;
    }
    // 复制头结点
    var node = new RandomListNode(pHead.label);
    node.random = pHead.random;
    // 递归其他节点
    node.next = Clone(pHead.next);
    return node;
}