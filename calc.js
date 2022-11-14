var a,b,res,opr;
function num1(n1)
{document.f1.t12.value+= n1;}
function equl()
{
    var p = document.getElementById("res").value;
    var q = eval(p);
    document.getElementById("res").value = q;
}

function ar()
{
   document.f1.t12.value="";
}
function sqrt()
{
    var p = document.getElementById("res").value;
    var q = Math.sqrt(p);
    document.getElementById("res").value = q;  
}
function per()
{
    var p = document.getElementById("res").value;
    var q = p/100;
    document.getElementById("res").value = q; 
}
function ln()
{
    var p = document.getElementById("res").value;
    var q = Math.log(p);
    document.getElementById("res").value = q;  
}
