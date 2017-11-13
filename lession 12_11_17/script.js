function fizzbuzz(maxNumber)
{
    for(let i = 1; i < maxNumber; i++)
    {
        let out = ""
        if(i % 3 === 0){
            out += "fizz"
        }    
        if(i % 5 === 0){
            out += "bazz"
        }
        out ? console.log(out) : console.log(i)
    }
    console.log()
}

fizzbuzz(30)
