var num=34562
var p=num;
var sum=0;
while(num>0)
{
    sum+=num%10;
    num=Math.floor(num/10);
}
if(p.toString().length!=5)
    var str=" The length of no. is not valid!! ";
else
    var str=sum;
console.log(str);