function find_duplicate_in_array(array) 
{
    var duplicateNumbers = [];

    for (let i = 0; i<array.length; i++)
    {
        for(let j = i+1; j<array.length; j++)
        {
            if(array[i] === array[j])
            {
                duplicateNumbers.push(array[i]);
            }
        }
    }
    return duplicateNumbers;

}
var numbers = [9, 8, 2, 6, 1, 8, 5, 3, 4, 6, 4]; 
console.log(find_duplicate_in_array(numbers)); 