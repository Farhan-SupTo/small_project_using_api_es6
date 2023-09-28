const loadCountryData = () => {
    const URL ="https://restcountries.com/v3.1/all"
     fetch(URL)
     .then((res) => res.json())
     .then((data) => showCountryData(data.slice(0, 6)))
}
loadCountryData()

const showCountryData = (countries) => {
  const country_container =document.getElementById("details-container")
  country_container.innerHTML =""
   countries.forEach(country => {
    // console.log(country.population);
    const div =document.createElement("div")
    div.innerHTML =`
    <div class="card w-full h-96 bg-base-100 shadow-2xl bg-slate-500 text-white">
  <figure class="px-10 pt-10">
    <img src="${country.flags.png}" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${country.name.common}</h2>
    <p>Population: ${country.population}</p>
    <div class="card-actions">
      <button class="btn btn-primary">See all</button>
    </div>
  </div>
</div>
    `
    country_container.appendChild(div)

    
    
   });
}

const showAllData =() =>{
  const URL ="https://restcountries.com/v3.1/all"
  fetch(URL)
  .then((res) => res.json())
  .then((data) => showCountryData(data))
}