export default function triangle(n)
{
    let str = '';
    for(let i=1; i<=n; i++)
    {
        for(let k=1; k<=n-i; k++)
        {
            str += " ";
        }
        for(let j=1; j<=i; j++)
        {
            str += "* ";

        }
        console.log(str);
        str = "";
        //console.log('');
    }
}

