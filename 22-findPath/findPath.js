/**
 * Created by Luffy on 2017/7/11.
 */
/*
思路：
① 前序遍历二叉树，每次更新当前路径的和 curtSum；
② 判断当前结点是否是叶子结点，以及 curtSum 是否等于 expectNumber。如果是，把当前路径保存在 res 结果中；
③ 若不符合条件，则弹出此结点。
*/
function FindPath(root, expectNumber) {
    var result = [];
    if (root === null) {
        return result;
    }
    dfsFind(root, expectNumber, [], 0, result);
    return result;
}
//深度遍历，知道找到一条路径和为目标值，之后将路径push到result中，result中存的是路径数组
function dfsFind(root, expectNumber, path, currentSum, result) {
    currentSum += root.val;
    path.push(root.val);
    if (currentSum == expectNumber && root.left == null && root.right == null) {
        result.push(path.slice(0));
    }
    if (root.left != null) {
        dfsFind(root.left, expectNumber, path, currentSum, result);
    }
    if (root.right != null) {
        dfsFind(root.right, expectNumber, path, currentSum, result);
    }
    path.pop();
}