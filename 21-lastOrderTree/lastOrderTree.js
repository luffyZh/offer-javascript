/**
 * Created by Luffy on 2017/7/11.
 */
/*
相关知识：
二叉查找树 (Binary Search Tree)，(又：二叉搜索树，二叉排序树) 它或者是一棵空树，或者是具有下列性质的二叉树：
若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值； 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
它的左、右子树也分别为二叉排序树。
思路：
① 根据二叉搜索树的特点，序列的最后一个元素是根结点，其左子树全都比根结点小，右子树全都比根节点大。
② 将根结点前面的数组分为左右连个部分，左侧部分都小，右侧部分都大；
③ 如果右侧部分有比根节点小的元素，那么就不是后序遍历，如此递归进行。
*/
function VerifySquenceOfBST(sequence) {
    // write code here
    var n = sequence.length;
    var i = 0;
    if (n == 0) {
        return false;
    }
    while (n--) {
        while (sequence[i] < sequence[n])
            i++;
        while (sequence[i] > sequence[n])
            i++;
        
        if (i < n) return false;
        
        i = 0;
    }
    return true;
}