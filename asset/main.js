let precio = 680000;
let stock = 125;
let cantidad =0
let total = 0;

const Precio = document.querySelector(".precio");
const Sto = document.querySelector(".stock");
const Cant = document.querySelector(".Cant");
const Tot = document.querySelector(".Total");
const Suma = document.querySelector(".Sumar");
const Resta = document.querySelector(".Restar");

Precio.innerHTML = "Precio: $" +precio
Sto.innerHTML = "Stock: "+stock
Cant.innerHTML = cantidad;
Tot.innerHTML = "$" +total;

function sumarTotal(){
    cantidad++;
    stock--;
    total = (precio*cantidad);
    Sto.innerHTML=`Stock: ${stock}`;
    Cant.innerHTML = cantidad;
    Tot.innerHTML = "$"+total;
}
function restaTotal(){
    cantidad--;
    stock++;
    Sto.innerHTML =`Stock: ${stock}`;
    total = (precio*cantidad);
    Cant.innerHTML = cantidad;
    Tot.innerHTML = "$"+total;
}

Suma.addEventListener("click",sumarTotal);
Resta.addEventListener("click",restaTotal);