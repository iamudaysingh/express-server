function triangle(n)
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
    let str1 = '';
    for(let i=1; i<=n; i++)
    {
        for(let k=1; k<i; k++)
        {
            str1 += " ";
        }
        for(let j=i; j<=n; j++)
        {
            str1 += "* ";

        }
        console.log(str1);
        str1 = "";
       //console.log('');
    }
}
triangle(5);
