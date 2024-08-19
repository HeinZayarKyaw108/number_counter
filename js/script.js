const element =document.querySelector("h1");
const title =document.querySelector("#count_title");
var number = 0;

function increment(){
    title.textContent= number+=1;
    console.log(number);
}
function decrement(){
    title.textContent= number-=1;
    console.log(number);
}
function Reset(){
    title.textContent= number=0;
    console.log(number);
}
