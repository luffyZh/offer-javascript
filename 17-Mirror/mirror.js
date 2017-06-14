/**
 * Created by Luffy on 2017/6/14.
 */
/**
 * 思路：
 ① 有关二叉树的算法问题，一般都可以通过递归来解决。那么写一个正确的递归程序，首先一定要分析正确递归结束的条件。
 ② 先前序遍历这棵树的每个结点，如果遍历到的结点有子结点，就交换它的两个子节点；
 ③ 当交换完所有的非叶子结点的左右子结点之后，就得到了树的镜像。
 * @param root
 * @constructor
 */
function Mirror(root) {
    // write code here
    if(root === null) {
        return;
    }
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    Mirror(root.left);
    Mirror(root.right);
}