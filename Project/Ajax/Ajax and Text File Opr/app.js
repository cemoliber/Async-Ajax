document.getElementById("btn").addEventListener("click",function(){
    //XMLHttpRequest

    const xhr = new XMLHttpRequest();

    //console.log(xhr);

    xhr.onprogress = function(){
        console.log("In Process..",this.readyState);
    }


    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
    }


    xhr.open("GET","example.txt",true);

    xhr.send();
});