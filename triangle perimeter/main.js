//variables
let calcBtn = document.getElementById("calc-btn");
let distAB = document.getElementById("distanceAB");
let distBC = document.getElementById("distanceBC");
let distAC = document.getElementById("distanceAC");
let perimeterABC = document.getElementById("perABC");
let XAinput = document.getElementById("xA");
let YAinput = document.getElementById("yA");
let XBinput = document.getElementById("xb");
let YBinput = document.getElementById("yb");
let XCinput = document.getElementById("xc");
let YCinput = document.getElementById("yc");
//event listeners
calcBtn.addEventListener("click",calcBtnClicked)
function dist(xA,yA,xb,yb) {
    let inputAX = xA.value;
    let inputAY = yA.value;
    let inputBX = xb.value;
    let inputBY = yb.value;
distAB.innerHTML = Math.sqrt((inputBX-inputAX)*(inputBX-inputAX) + (inputBY-inputAY)*(inputBY-inputAY));
}

function dist1(xA,yA,xc,yc) {
    let inputAX = xA.value;
    let inputAY = yA.value;
    let inputCX = xc.value;
    let inputCY = yc.value;
    distAC.innerHTML = Math.sqrt((inputCX-inputAX)*(inputCX-inputAX) + (inputCY-inputAY)*(inputCY-inputAY));
}
function dist3(xb,yb,xc,yc) {
    let inputBX = xb.value;
    let inputBY = yb.value;
    let inputCX = xc.value;
    let inputCY = yc.value;
    distBC.innerHTML = Math.sqrt((inputCX-inputBX)*(inputCX-inputBX) + (inputCY-inputBY)*(inputCY-inputBY));
}
function dist4(xA,yA,xb,yb,xc,yc) {
    let inputAX = xA.value;
    let inputAY = yA.value;
    let inputBX = xb.value;
    let inputBY = yb.value;
    let inputCX = xc.value;
    let inputCY = yc.value;
perimeterABC.innerHTML = Math.sqrt((inputBX-inputAX)*(inputBX-inputAX)  + (inputBY-inputAY)*(inputBY-inputAY)) + Math.sqrt((inputCX-inputAX)*(inputCX-inputAX) + (inputCY-inputAY)*(inputCY-inputAY)) + Math.sqrt((inputCX-inputBX)*(inputCX-inputBX) + (inputCX-inputBY)*(inputCX-inputBY))
}
function calcBtnClicked(){
   
    dist(xA,yA,xb,yb)
    dist1(xA,yA,xc,yc)
    dist3(xb,yb,xc,yc)
    dist4(xA,yA,xb,yb,xc,yc)
}



//distAC.innerHTML = Math.sqrt((xc-xA)*(xc-xA) + (yc-yA)*(yc-yA));
//distBC.innerHTML = Math.sqrt((xc-xb)*(xc-xb) + (yc-yb)*(yc-yb));
//perimeterABC.innerHTML = Math.sqrt((xb-xA)*(xb-xA)  + (yb-yA)*(yb-yA)) + Math.sqrt((xc-xA)*(xc-xA) + (yc-yA)*(yc-yA)) + Math.sqrt((xc-xb)*(xc-xb) + (yc-yb)*(yc-yb))

  



