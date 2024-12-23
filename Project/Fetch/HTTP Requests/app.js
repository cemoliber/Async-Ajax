class Request{
    //GET
    get(url){

        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(response =>response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

    //POST
    post(url,data){
        return new Promise((resolve,reject) => {
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers:{
                    "Content-type":"application/json; charset=UTF-8"
                }
            })
            .then(response =>response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })   
    }

    //PUT
    put(url,data){
        return new Promise((resolve,reject) => {
            fetch(url,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-type":"applicatiom/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data = resolve(data))
            .catch(err => reject(err))
        })     
    }

    //DELETE
    delete(url){
        return new Promise((resolve,reject) => {
            fetch('https://jsonplaceholder.typicode.com/albums/1',{
                method: 'DELETE'
            })
            .then(response => resolve("Success"))
            .catch(err => reject(err));
            })
        }
    }


const request = new Request();
let albums;

request.get("https://jsonplaceholder.typicode.com/albums")
.then(data =>{
    albums = data;
    console.log(albums);
})
.catch(err => console.log(err));

request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Thriller"})
.then(newAlbum =>console.log(newAlbum))
.catch(err => console.log(err));

request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,Title:"Tarkan Karma"})
.then(album =>console.log(album))
.catch(err => console.log(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1",{userId:10,Title:"Tarkan Karma"})
.then(message =>console.log(message))
.catch(err => console.log(err));
