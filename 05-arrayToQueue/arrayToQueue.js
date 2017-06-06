/**
 * Created by Luffy on 2017/6/6.
 */
//用两个栈实现队列，包含pop和push操作
/**
 * 思路：首先声明一个栈的数据结构，包含push和pop操作
 * 队列是先进先出的，因此需要两个栈，一个用来存所有入队的元素，一个用来存所有出队的元素
 * push操作：将数据压入stack1即可
 * pop操作：因为是先进先出，所以stack2的顺序应该与stack1顺序相反，那么可以将stack1的元素不断弹出并压入stack2
 * 每次出队操作都需要将stack2弹出即可
 * @constructor
 */
function Stack(){
    var arr = [];
    this.push = function (node){
        arr.push(node);
        return arr;
    };
    this.pop = function(){
        return arr.pop();
    };
    this.isEmpty = function(){
        return arr.length === 0;
    };
}
var stack1 = new Stack();
var stack2 = new Stack();
function push(node) {
    // write code here
    stack1.push(node);
}
function pop() {
    // write code here
    if(stack1.isEmpty() && stack2.isEmpty()){
        throw new Error("empty queue");
    }
    if(stack2.isEmpty()){
        while(!stack1.isEmpty()){
            stack2.push(stack1.pop());
        }
    }
    return stack2.pop();
}