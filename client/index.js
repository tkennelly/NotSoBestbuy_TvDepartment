const submitButton = document.querySelector('#submit')
const searchBar = document.querySelector('input')
const sony = document.querySelector('#sony')
const infoList = document.querySelector('ul')

//if (sony.style.backgroundColor === '#D9D9D9'){
    submitButton.addEventListener('click',async()=>{
        await axios.get('http://localhost:3001/api/products')
        .then((res)=>{
            console.log(res.data.products)
            for(let i = 0;i<10;i++){
                infoList.insertAdjacentHTML('afterbegin',`<li>${res.data.products[i].name}</li>`)
            }
        })
        .catch((e)=>console.log(e))
    })
//}

