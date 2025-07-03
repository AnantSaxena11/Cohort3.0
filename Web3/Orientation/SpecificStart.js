const crypto = require('crypto')

let input = 0

while(true)
{
    let inputStr = input.toString();
    let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
    if(hash.startsWith("anant"))
    {
        console.log(hash+ " "+ inputStr)
        return ;
    }
    input++;
}