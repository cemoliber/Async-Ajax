function getTextFile(){
    
    fetch("example.txt")
    .then(response =>response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err));

}
getTextFile();

function getJsonFile(){
    fetch("example.json")
    .then(response => response.json())
    .then(data =>console.log(data))
    .catch(err => console.log(err));
}

function getExternalAPI(){
    fetch("http://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(data =>console.log(data))
    .catch(err => console.log(err));
}

getJsonFile();
getExternalAPI();