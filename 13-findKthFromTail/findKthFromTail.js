/**
 * Created by Luffy on 2017/6/13.
 */
/**
 * 输出链表的倒数k个节点
 * 思路：定义两个指针p,q分别指向头指针，p向前移动k-1个，之后q和p不断向后移动，直到p到链表尾部，q就指向链表倒数第k个
 * @param head
 * @param k
 * @returns {*}
 * @constructor
 */
function ListNode(x){
 this.val = x;
 this.next = null;
 }
function FindKthfromTail(head, k) {
    if(!head||k<=0){
        return null;
    }else{
        var q=head;
        var p=head;
        for(var i=0;i<k-1;i++){
            if(p.next) {
                p=p.next;
            }else{
                return null;
            }
        }
        for(;p.next;p=p.next){
            q=q.next;
        }
        return q;
    }
}