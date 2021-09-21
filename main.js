

const preview =document.getElementById("preview");
preview.addEventListener("click", prev)

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

    date.innerHTML =inDate
}
