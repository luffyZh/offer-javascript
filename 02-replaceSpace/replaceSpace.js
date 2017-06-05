/**
 * Created by Luffy on 2017/6/5.
 */
/**
 *
 * @param str 目标字符串
 * @returns {string|void|XML}
 *JavaScript天生优势，正则表达式替换语句，将字符串中的空格替换为%20
 */
function replaceSpace1(str) {
    // write code here
    //使用JavaScript之中的正则表达式进行替换
    return str.replace(/\s/g,'%20');
}
/**
 * 利用字符串拼接特性，临时字符串不断将空格拼接成%20也可以
 * @param str
 * @returns {string}
 */
function replaceSpace2(str) {
    var newString="";
    for(var i=0;i<str.length;i++)
    {
        if(str[i]===' ')
        {
            newString=newString+"%20";
            continue;
        }
        newString+=str[i];
    }
    return newString;
}