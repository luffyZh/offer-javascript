/**
 * Created by Luffy on 2017/6/14.
 */
/* function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;
 } */
/**
 * 思路：
 ① 有关二叉树的算法问题，一般都可以通过递归来解决。那么写成一个正确的递归程序，首先一定要分析正确递归结束的条件。
 ② 如果根节点相同则递归调用 isSubtree()，如果根节点不相同，则判断 root1 的左子树和 root2 是否相同，再判断右子树和 tree2 是否相同;
 ③ 注意 null 的条件，HasSubTree 中，如果两棵树都不为空才进行判断，isSubtree 中，如果 root2 为空，则说明第二棵树遍历完了，即匹配成功;
 ④ root1 为空有两种情况：(1) 如果 root1为空 && root2 不为空说明不匹配，(2) 如果 root1 为空，root2 为空，说明匹配。
 * @param root1
 * @param root2
 * @returns {*}
 */
function isSubtree(root1, root2) {
    if (root2 == null) return true;
    if (root1 == null) return false;
    if (root1.val == root2.val) {
        return isSubtree(root1.left, root2.left)
            && isSubtree(root1.right, root2.right);
    } else {
        return false;
    }
}
function HasSubtree(pRoot1, pRoot2)
{
    if (pRoot1 == null || pRoot2 == null) {
        return false;
    }
    return isSubtree(pRoot1, pRoot2)
        || HasSubtree(pRoot1.left, pRoot2)
        || HasSubtree(pRoot1.right, pRoot2);
}