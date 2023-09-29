const searchAllData = () =>{
const inputELement =document.getElementById("search-value")
const inputValue =inputELement.value
// console.log(inputValue);
const URL =`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputValue}`
fetch(URL)
.then((res) => res.json())
.then((data) => showPlayerData(data.player))
}

const showPlayerData =(players) =>{
    const container =document.getElementById("player-info")
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
        <div class="d-flex flex-row my-2">
        <button type="button" class="btn btn-primary">Details</button></div>
        <button type="button" class="btn btn-danger">Delete</button></div>
      </div>
    `
 container.appendChild(div)
});
    
}