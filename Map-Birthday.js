//Finding Birth Month of 50 individuals with people having birthdays in same month
var birthMonth = new Map();
for(var i = 1; i<= 50; i++)
{
    var random = Math.floor((Math.random()*12) + 1);
    birthMonth.set(i, random+"/"+1992);
}
var commonBirthDay = new Map();//For grouping common birthdays
for(var i = 1; i<13; i++)
{
    var birthday = i+"/"+1992;
    var commonBirthDayList = new Array();
    for(var j = 1; j<= 50; j++)
    {
        if(birthMonth.get(j) == birthday)
        commonBirthDayList.push(j);
    }
    commonBirthDay.set(birthday, commonBirthDayList);
}
console.log("Common Birthdays are as follows")
console.log(commonBirthDay);