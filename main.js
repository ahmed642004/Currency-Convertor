var myHeaders = new Headers();
myHeaders.append("apikey", "E8ixR180Q8WxxtD5xrt39cbAYY944ECf");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};
let From, To, Amount;
let button = document.getElementById("button");
button.onclick = function () {
  From = document.getElementById("from").value;
  To = document.getElementById("to").value;
  Amount = parseInt(document.getElementById("amount").value);
  fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${To}&from=${From}&amount=${Amount}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    return result.result
  }).then((finall)=>{
    let resss = finall
    let ress = document.querySelector(".res span")
    ress.innerHTML = resss
    if(resss === "undefined"){
      ress.innerHTML = "Enter Amount"
    }
  })
  .catch(error => console.log('error', error));
};
