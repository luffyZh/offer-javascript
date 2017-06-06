/**
 * Created by Luffy on 2017/6/6.
 */
//二叉树叶子节点
function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;
 }
/**
 * 思路，根节点是先序遍历的第一个节点，从根节点开始构建二叉树
 * 中序遍历节点，直到找到与根节点相同的节点，左侧为左子树，右侧为右子树
 * 之后，递归构建左右子树
 * @param preOrder 先序遍历序列
 * @param minOrder 中序遍历序列
 * @returns {*}
 */
function rebuildBinaryTree(preOrder,minOrder) {
    // write code here
    if(preOrder.length == 0 || minOrder.length == 0 ) {
        return null;
    }
    var treeNode = new TreeNode(preOrder[0]);
    for(var i = 0; i < preOrder.length; i++) {
        if (minOrder[i] === preOrder[0]) {
            treeNode.left = rebuildBinaryTree(preOrder.slice(1, i+1), minOrder.slice(0, i)); //左子树的先序和左子树的中序
            treeNode.right = rebuildBinaryTree(preOrder.slice(i+1),minOrder.slice(i+1)); //右子树的先序和右子树的中序
        }
    }
    return treeNode;
}
var pre=[1,2,4,7,3,5,6,8];
var min = [4,7,2,1,5,3,8,6];
var tree = rebuildBinaryTree(pre,min);
//先序遍历输出二叉树
function preOrder(node){//先序遍历
    if(node!=null){
        console.log(node.val);
        preOrder(node.left);
        preOrder(node.right);
    }
}
preOrder(tree); //12473568
