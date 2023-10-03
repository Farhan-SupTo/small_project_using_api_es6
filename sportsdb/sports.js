const searchAllData = () =>{
const inputELement =document.getElementById("search-value")
document.getElementById("singlePlayerDetails").innerHTML =""
document.getElementById("male").classList.add("d-none")
document.getElementById("female").classList.add("d-none")
const inputValue =inputELement.value
// console.log(inputValue);
const URL =`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputValue}`
fetch(URL)
.then((res) => res.json())
.then((data) => showPlayerData(data.player))
}

const showPlayerData =(players) =>{
    const container =document.getElementById("player-info")
    document.getElementById("search-value").value =""
    container.innerHTML =""
players.forEach(player => {
    console.log(player);
    const div = document.createElement("div")
    div.innerHTML =`
    <div class="card">
      <img src="${player.strThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${player.strPlayer}</h5>
        <p class="card-text">Nationality :${player.strNationality }</p>
        <div class="my-2">
        <button onclick="singlePlayer('${player.idPlayer}')" type="button" class="btn btn-primary">Details</button>
        <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>
    `
 container.appendChild(div)
});
    
}

const singlePlayer = (id) =>{
        //  console.log(id);
         const URL =`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`
       
         fetch(URL)
         .then(res => res.json())
         .then(data => showSinglePlayerData(data.players[0]))
}
const showSinglePlayerData =(data) =>{
  console.log(data);
       const container =document.getElementById("singlePlayerDetails")
       const div =document.createElement("div")
       if (data.strGender === "Male"){
        const element =document.getElementById("male")
        element.classList.remove("d-none")
       }else{
        const element =document.getElementById("female")
        element.classList.remove("d-none")
       }
       div.innerHTML =`
       <div class="card mb-3 h-100 w-100 my-2">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data.strThumb}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.strPlayer}</h5>
        <p class="card-text">${data.strDescriptionEN.slice(0, 80) + "..."}</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
       `

       container.appendChild(div)
}