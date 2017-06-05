/**
 * Created by Luffy on 2017/6/5.
 */
//从尾到头打印链表元素
/**
 * 思路:从头遍历链表将值以unshift的方式存入数组中，从头打印数组即可
 * @param list 目标链表
 */
function ListNode(x){
 this.val = x;
 this.next = null;
 }
var head = new ListNode(1);
var a = new ListNode(2);
head.next = a;
var b = new ListNode(3);
a.next = b;
function printListTailToHead(list) {
    var res=[]; //将链表的值存入数组，存入方式为unshift
    while(list){
        res.unshift(list.val);  // unshift()：向数组的开头添加一个或更多元素,并返回新的长度
        list=list.next;
    }
    return res;
}
console.log(printListTailToHead(head)); //3,2,1从尾开始打印链表