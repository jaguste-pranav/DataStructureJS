//Find the max number times the number was repeated
var diceDict = new Object();
var diceDict = {};
let count=0;
let diceNum=0;
while(true)
{
    if(diceDict[diceNum]>9)
    {
        break;
    }
    else
    {
        diceNum=Math.floor(Math.random() * 6) + 1;
        if (!diceDict.hasOwnProperty(diceNum)) 
        {
            diceDict[diceNum] = 1;
        }
        else
        {
            diceDict[diceNum]++;
        }
    }
}
for(var key in diceDict)
{
    if(diceDict[key]==10)
    {
        console.log(key);
    }
}