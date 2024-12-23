document.getElementById("change").addEventListener("click",change);

function change(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangeratesapi.io/v1/latest?access_key=9b38dff8c36c6078522a95856154e12e");
    
    xhr.onload = function(){
        if(this.status){
            //console.log(this.responseText);
            const respone = JSON.parse(this.responseText);

            const rate = respone.rates.TRY
            const amount = document.getElementById("amount").value;
            document.getElementById("tl").value = amount * rate;
            console.log(amount * rate);
        }
    }

    xhr.send();


}