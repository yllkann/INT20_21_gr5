const koordinatat = [50,150,250,350,170,330];
const shumz = 10000;

funksKanvasi1();
funksKanvasi6();
funksKanvasi7();
function funksKanvasi1()
{
    var c = document.getElementById("kanvasi1");
    var ctx = c.getContext("2d");

    var grd=ctx.createLinearGradient(0,0,400,0);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"orange");
    
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(koordinatat[1],koordinatat[1]);
    ctx.lineTo(koordinatat[2],koordinatat[2]);
    ctx.lineTo(koordinatat[3],koordinatat[1]);
    ctx.lineTo(koordinatat[2],koordinatat[0]);
    ctx.lineTo(koordinatat[1],koordinatat[1]);   
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(koordinatat[4],koordinatat[1]);
    ctx.lineTo(koordinatat[2],koordinatat[2]);
    ctx.lineTo(koordinatat[5],koordinatat[1]);
    ctx.lineTo(koordinatat[2],koordinatat[0]);
    ctx.lineTo(koordinatat[4],koordinatat[1]);
    ctx.fillStyle="black";
    ctx.fill();   
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(250,150,30,0,2*Math.PI,false);
    ctx.fillStyle="white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.font = "40px Impact";
    ctx.fillStyle="black";
    ctx.fillText("WT",225,167);
    
}
function funksKanvasi6()
{
    var c = document.getElementById("kanvasi6");
    var ctx = c.getContext("2d");
    
    var grad=ctx.createRadialGradient(250,150,100,250,150,300);
    grad.addColorStop(0,"rgb(255, 194, 80)");
    grad.addColorStop(1,"coral");


    ctx.beginPath();
    ctx.fillStyle=grad;
    ctx.fillRect(0,0,499,299);
    ctx.fill();
    ctx.closePath();

    var grd=ctx.createLinearGradient(0,0,400,0);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"orange");
    
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(koordinatat[1],koordinatat[1]);
    ctx.lineTo(koordinatat[2],koordinatat[2]);
    ctx.lineTo(koordinatat[3],koordinatat[1]);
    ctx.lineTo(koordinatat[2],koordinatat[0]);
    ctx.lineTo(koordinatat[1],koordinatat[1]);   
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo(koordinatat[4],koordinatat[1]);
    ctx.lineTo(koordinatat[2],koordinatat[2]);
    ctx.lineTo(koordinatat[5],koordinatat[1]);
    ctx.lineTo(koordinatat[2],koordinatat[0]);
    ctx.lineTo(koordinatat[4],koordinatat[1]);
    ctx.fillStyle="black";
    ctx.fill();   
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(250,150,30,0,2*Math.PI,false);
    ctx.fillStyle="rgb(255, 194, 80)";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.font = "40px Impact";
    ctx.fillStyle="black";
    ctx.fillText("WT",225,167);
}

function funksKanvasi7()
{
    var c = document.getElementById("kanvasi7");
    var ctx = c.getContext("2d");
    var img = document.getElementById("drawImage");
    ctx.drawImage(img,-20,0);
}

// NDERRIMI I BACKGROUND

var datta = new Date();
var a = -1;
var part1 = false;
if(datta.getHours()>=12)
{
    document.body.style.backgroundImage = "url('images/fresh_snow.png')";        
    document.querySelector("nav").style.backgroundImage = "url('images/fresh_snow.png')";        
}
else 
{
    document.body.style.backgroundImage = "url('images/fresh_snow1.png')";       
    document.querySelector("nav").style.backgroundImage = "url('images/fresh_snow1.png')";        
}

// Loja per discount

function filloLoja()
{
    var data = new Date();
    var kohaFill, kohaPerf, numriSakt=0,intervali;
    var emri="";
    var pergjigja;
    var nr1, nr2, nr3;
    while(emri=="")
    {
        emri = prompt("Enter your name:");
        if(emri==null)
        {
            return;
        }
    }
    if(confirm("Hi there " + emri + ", are you ready to begin the quiz?"))
    {
        // Pyetjet 1,2,3
        while(numriSakt<=2)
        {
            data = new Date();
            kohaFill = data.getTime();
            nr1 = parseInt(Math.random()*shumz)%10+Math.sin(Math.PI/2);
            nr2 = parseInt(Math.random()*shumz)%10+Math.cos(0);
            nr3 = parseInt(Math.random()*shumz)%100+Number(true);
            switch(numriSakt)
            {
                case 0:
                    pergjigja = prompt("What is " + nr1 + "*" + nr2 + "-" + nr3);
                    break;
                case 1:
                    pergjigja = prompt("What is " + nr1 + "-" + nr2 + "+" + nr3);
                    break;
                case 2:
                    pergjigja = prompt("What is " + nr1 + "*" + nr2 + "+" + nr3);
                    break;
            }
            try
            {
                if(isNaN(pergjigja)) throw "The input is not a number!";
                if(pergjigja>250) throw "Impossible, result too big!";
                if(pergjigja<-250) throw "Impossible, result too low!";
            }
            catch(err)
            {
                alert(err);
                return;
            }
            data = new Date();
            kohaPerf = data.getTime();
            intervali = (kohaPerf - kohaFill)/1000;
            if(intervali>=2)
            {
                perfundoiLoja(emri,intervali,numriSakt);
                return;
            }   
            switch(numriSakt)
            {
                case 0:
                    if(pergjigja==(nr1*nr2-nr3))
                    {
                        alert("Correct!");
                        numriSakt++;

                    }
                    else
                    {
                        alert("Incorrect! You lose " + emri + "!");
                        return;
                    }
                    break;
                case 1:
                    if(pergjigja==(nr1-nr2+nr3))
                    {
                        alert("Correct!");
                        numriSakt++;
                    }
                    else
                    {
                        alert("Incorrect! You lose " + emri + "!");
                        return;
                    }
                    break;
                case 2:
                    if(pergjigja==(nr1*nr2+nr3))
                    {
                        alert("Correct!");
                        numriSakt++;
                    }
                    else
                    {
                        alert("Incorrect! You lose " + emri + "!");
                        return;
                    }
                    break; 
            }
        }
        // Pyetjet 4,5,6
        var pergjP;
        for(numriSakt=3;numriSakt<=5;numriSakt++)
        {
            data = new Date();
            kohaFill = data.getTime();
            switch(parseInt(Math.random()*shumz)%15)
            {
                case 0:
                {
                    pergjigja = prompt("What is the capital of Albania?");
                    pergjP="Tirana";
                    break;
                }
                case 1:
                {
                    pergjigja = prompt("What is the capital of Spain?");
                    pergjP="Madrid";
                    break;
                }
                case 2:
                {
                    pergjigja = prompt("What is the capital of Kosovo?");
                    pergjP="Pristina";
                    break;
                }
                case 3:
                {
                    pergjigja = prompt("What is the capital of Canada?");
                    pergjP="Ottawa";
                    break;
                }
                case 4:
                {
                    pergjigja = prompt("What is the capital of Croatia?");
                    pergjP="Zagreb";
                    break;
                }
                case 5:
                {
                    pergjigja = prompt("What is the capital of France?");
                    pergjP="Paris";
                    break;
                }
                case 6:
                {
                    pergjigja = prompt("What is the capital of Japan?");
                    pergjP="Tokyo";
                    break;
                }
                case 7:
                {
                    pergjigja = prompt("What is the capital of Italy?");
                    pergjP="Rome";
                    break;
                }
                case 8:
                {
                    pergjigja = prompt("What is the capital of Peru?");
                    pergjP="Lima";
                    break;
                }
                case 9:
                {
                    pergjigja = prompt("What is the capital of Yemen?");
                    pergjP="Sanaa";
                    break;
                }
                case 10:
                {
                    pergjigja = prompt("What is the capital of Algeria?");
                    pergjP="Algiers";
                    break;
                }
                case 11:
                {
                    pergjigja = prompt("What is the capital of Austria?");
                    pergjP="Vienna";
                    break;
                }
                case 12:
                {
                    pergjigja = prompt("What is the capital of Azerbaijan?");
                    pergjP="Baku";
                    break;
                }
                case 13:
                {
                    pergjigja = prompt("What is the capital of Brazil?");
                    pergjP="Brasilia";
                    break;
                }
                case 14:
                {
                    pergjigja = prompt("What is the capital of Chile?");
                    pergjP="Santiago";
                    break;
                }
            }
            data = new Date();
            kohaPerf = data.getTime();
            intervali = (kohaPerf - kohaFill)/1000;
            if(intervali>=2)
            {
                perfundoiLoja(emri,intervali,numriSakt);
                return;
            }
            if(pergjigja.replace(/[0-9]/,"").match(pergjP) || pergjigja.replace(" ","").match(pergjP))
            {
                alert("Correct!");
            }
            else
            {
                alert("Incorrect! You got " + numriSakt +" correct answers You lose " + emri + "!");
                return;
            }
        }
        var codept1;
        codept1 = parseInt(Math.random()*10000000);
        alert("Congratulations, you have finished the first part succesfully! The first code is: " + codept1);
        part1 = true;
        document.getElementById("kodiloja1").innerHTML = "The first code: " + codept1;
    }
}

function perfundoiLoja(emri,intervali,numriSakt)
{
    alert("You answered in " + intervali + " seconds. You got " + numriSakt + " correct answers." + "You lose " + emri );
}

// DRAG AND DROP FUNCTIONS
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

var getjQ;
$(document).ready(function()
{
    getjQ = $("#jQpurp").text();
});

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    if(a!=0 && a!=1 && part1==true)
    {
        a = parseInt((Math.random()*shumz))%2;
        if(a==0)
        {
            alert("We are really sorry, but no " + getjQ + " for you today! Try again tomorrow!");
        }
        else if(a==1)
        {
            var codept2;
            codept2 = parseInt(Math.random()*10000000);
            alert("Congratulations, you have won a 10% coupon!Your second code is KK" + codept2 + "FXV");
            document.getElementById("kodiloja2").innerHTML = "The second code: KK" + codept2 + "FXV";
        }
    }
}

$(document).ready(function()
{
    $("#numberMath").click(function()
    {
        alert("A really big number :" + Number.MAX_VALUE);
        alert("A really small number :" + Number.MIN_VALUE);
    });
});
