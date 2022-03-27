const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const span = document.getElementById("span");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");
const span4 = document.getElementById("span4");
const span5 = document.getElementById("span5");
const p1 = document.getElementById("p1");
const paragrafy = document.querySelector(".paragrafy");
const spanValue = span.value;
let wynik = 0;
let need = 1;
let upgrade = 10;
let x = 1;


const handleChange =()=>{
    span.innerHTML = wynik += x;
    span3.innerHTML = "";
    localStorage.setItem("myData", JSON.stringify(wynik));
    const element = localStorage.getItem("myData");
    span.innerHTML = element;
    console.log(element);
}

const handleLocal=()=>{
    localStorage.setItem("myData", JSON.stringify(wynik));
    const element = localStorage.getItem("myData");
}

btn.addEventListener("click", handleChange);
btn.addEventListener("click", handleLocal);

const handleBuy =()=>{
    if(wynik >=upgrade){
        x += 0.5;
        wynik -= upgrade;
        span.innerHTML -= upgrade;
        upgrade += 5;
        span2.innerHTML = need += 0.5;
        span3.innerHTML = "";
        span4.innerHTML = upgrade;
    }
    else{
        span3.innerHTML = "Nie stać cię na ulepszenie!";
        span3.style.color = "red";
    }
}
btn2.addEventListener("click", handleBuy);

const handleUpgrade =()=>{
    btn2.style.display = "flex";
    p1.style.display = "flex";
    span4.style.display = "flex";
    span5.style.display = "flex";
    btn.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "flex";
    paragrafy.style.display = "flex";
}

btn3.addEventListener("click", handleUpgrade);

const handleDowngrade =()=>{
    btn2.style.display = "none";
    p1.style.display = "none";
    span4.style.display = "none";
    span5.style.display = "none";
    btn.style.display = "flex";
    btn3.style.display = "flex";
    btn4.style.display = "none";
    span3.innerHTML = "";
    paragrafy.style.display = "none";
}


btn4.addEventListener("click", handleDowngrade);