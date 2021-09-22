

const preview =document.getElementById("preview");
preview.addEventListener("click", prev)

function loadImage(event){
    const image = document.getElementById("img");
    image.src = URL.createObjectURL(event.target.files[0]);
}

function prev(){
    const inName = document.getElementById("inName").value;
    const inDesignation = document.getElementById("inDesignation").value;
    const inNum = document.getElementById("inNum").value;
    const inDate = document.getElementById("inDate").value;
    const name = document.getElementById("name");
    const num = document.getElementById("num");
    const desig = document.getElementById("desig");
    const date = document.getElementById("date");
    
    name.innerHTML = inName;

    desig.innerHTML = inDesignation;

    num.innerHTML = inNum;

    date.innerHTML =inDate;

    const canvas = document.getElementById("result");

    // canvas.width = 500;
    canvas.height = canvas.width/1.616;
    const ctx = canvas.getContext("2d");
    ctx.font = "20px Helvetica";

    ctx.fillStyle = "#159";
    ctx.rect(0, 0, 300, 56);
    ctx.fill();

    ctx.fillStyle = "#fff";
    ctx.fillText("Ligmus360", 10, 25);
    ctx.font = "16px Arial";
    ctx.fillText("Engineering", 15, 45);

    const logo =  document.getElementById("logo");
    ctx.drawImage(logo, 230, 3, 50, 50)

    ctx.fillStyle = "#000";
    ctx.fillText(name.innerHTML, 110,90);
    ctx.fillText(desig.innerHTML, 110,115);
    ctx.fillText(num.innerHTML, 110, 140);
    ctx.fillText(date.innerHTML, 110, 165);

    const image = document.getElementById("img");
    ctx.drawImage(image, 10, 65, 80, 105)

}

const down = document.getElementById("down");
down.addEventListener("click", function(){
    const canvas = document.getElementById("result");

    const a = document.createElement("a")
    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "ID.png";
    a.click();
    document.body.removeChild(a);

}
)


