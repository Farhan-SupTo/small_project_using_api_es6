let count =0;
const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => showData(data))
    .catch((error) =>{
        console.log(error);
    })
}

const showData = (data) => {
    for(let singleData of data.slice(0, 20)){
        // console.log(singleData);
        
        count +=1;
        const container = document.getElementById("info")
        const div =document.createElement("div")
        div.innerHTML =`
        
        <h1 class="text-3xl text-center font-semibold p-2">${count}. ${singleData.title}</h1>
        `;

        container.appendChild(div);
    }

}
loadData()