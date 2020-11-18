//Find prime factors of a number
function findPrimeFactors(n)
{
    var factors = [];
    divisor = 2;
  
    while(n>=2)
    {
        if(n % divisor === 0)
        {
            factors.push(divisor); 
            n = n/divisor;
        }
        else
        {
            divisor++;
        }
    }     
    return factors;
}

let fact = findPrimeFactors(42)
console.log(fact);