let form= document.querySelector("form");



form.addEventListener("submit", (e)=>{
e.preventDefault();
let height= parseInt(document.querySelector("#height").value);
let weight= parseInt(document.querySelector("#weight").value);
// let button= document.querySelector("button");
let result= document.querySelector(".result");

if(height == "" || height<=0 || isNaN(height)){
  result.innerText="please give a valid height"
}
else if(weight === "" || weight<=0 || isNaN(weight)){
  result.innerText="please give a valid weight"
}
else{
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  result.innerText= `${bmi}`;
}





})

