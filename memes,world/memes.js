const loadMeme= () =>{


    const URL ="https://meme-api.com/gimme/25"

    fetch(URL)
    .then((res) => res.json())
    .then((data) => showMeme(data.memes))
    .catch((error) =>{
        console.log(error);
    })
} 
loadMeme()

const showMeme =(memes) =>{
    memes.forEach((meme) => {
        console.log(meme.url);
       const memeContainer = document.getElementById("container")

       const div =document.createElement("div")
       div.innerHTML =`
       <div class="card w-full bg-base-100 shadow-2xl">
  <figure><img class="w-full h-64" src="${meme.url}" alt="Shoes" /></figure>
</div>
       `
       memeContainer.appendChild(div)
       
    });
     
}