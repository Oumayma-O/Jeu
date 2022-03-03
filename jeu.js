
function play(){
    let c = Math.random()*10;
    var  i=0;
    var  luck=false;
    var d = document.querySelector("select").value;
    alert("let's play !")
    do{
        var e = prompt("Guess the number :)");

        i++;
        if (c==e) luck=true;
    }while((i<d)&&(luck===false))

    if (luck===true){
        alert("you won !");
    }
    else{
        alert ("you lost !");
        var y =confirm("Do u wanna reply ?")
        if (y){
        let text = document.querySelector("button");
        text.textContent= "Replay";
        }
    }
}


