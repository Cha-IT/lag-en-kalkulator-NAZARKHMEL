let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");
let res = document.getElementById("res");

function plus(){
    res.innerHTML = "Res: " + Number(t1.value) + Number(t2.value);
}
function minus(){
    res.innerHTML = "Res: " + (Number(t1.value) - Number(t2.value));
}
function divide(){
    res.innerHTML = "Res: " + Number(t1.value) / Number(t2.value);
}
function substract(){
    res.innerHTML = "Res: " + Number(t1.value) * Number(t2.value);
}