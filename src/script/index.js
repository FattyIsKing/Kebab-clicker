const klik = document.getElementById("klik");
const cash = document.getElementById("cash");
const worth1 = document.getElementById("worth1");
const buy1 = document.getElementById("buy1");
const bonus = document.getElementById("bonus");
const wrapper_rules = document.getElementById("wrapper_rules");
const come = document.getElementById("come");
const upgrade = document.getElementById("upgrade");
const main = document.getElementById("main");
const kebab = document.getElementById("kebab");
const Return = document.getElementById("return");

const Returning =()=>{
    main.style.display = "none";
    kebab.style.display = "flex";
}

Return.addEventListener("click", Returning);

const Upgrades =()=>{
    main.style.display = "flex";
    kebab.style.display = "none";
}

upgrade.addEventListener("click", Upgrades);

if (localStorage.getItem("data") === null) {
    localStorage.setItem("data", "0");
}

if (localStorage.getItem("bonus") === null) {
    localStorage.setItem("bonus", "1");
}

if (localStorage.getItem("worth1") === null) {
    localStorage.setItem("worth1", "10");
}

let mn = parseFloat(localStorage.getItem("bonus"));
let points = parseFloat(localStorage.getItem("data"));
let worth1Val = parseInt(localStorage.getItem("worth1"));

cash.innerHTML = points;
bonus.innerHTML = localStorage.getItem("bonus");
worth1.innerHTML = worth1Val;

const Upgrade =()=>{
    if(points < worth1Val){
        alert("Nie stać cię na ulepszenie!");
    }
    else{
        mn += 0.5;
        points -= worth1Val;
        cash.innerHTML = points;
        worth1Val += 5;
        localStorage.setItem("bonus", JSON.stringify(mn));
        localStorage.setItem("data", JSON.stringify(points));
        bonus.innerHTML = mn;
        worth1.innerHTML = worth1Val;
        localStorage.setItem("worth1", JSON.stringify(worth1Val));
    }
}
buy1.addEventListener("click", Upgrade);




const Click =()=>{
    points += mn;
    localStorage.setItem("data", JSON.stringify(points));
    cash.innerHTML = points;
}

klik.addEventListener("click", Click);

if(localStorage.getItem("WrapperCheck") == "Ok"){
    wrapper_rules.style.display = "none";
}

const wrapperMove =()=>{
    wrapper_rules.style.transform = "translateX(-100%)";
    localStorage.setItem("WrapperCheck", "Ok");
}


come.addEventListener("click", wrapperMove);
