/**
 * Created by jinalshah on 12/10/20.
 */
var age =parseInt(prompt('Enter your age: '));

   if(age > 60)
    {
        location.replace("earlybirds.html");
    }
    else if(age > 40)
    {
        location.replace("authentic.html");
    }
    else if(age > 12)
    {
        location.replace("foodholic.html");
    }
// if(isNaN(age))
// {
//     location.replace("index.html");
// }