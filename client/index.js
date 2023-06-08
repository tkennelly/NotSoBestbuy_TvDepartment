const submitButton = document.querySelector('#submit')
const searchBar = document.querySelector('input')
const infoList = document.querySelector('ul')

const sony = document.querySelector('#sony')
const samsung = document.querySelector('#samsung')
const lg = document.querySelector('#lg')
const tcl = document.querySelector('#tcl')
const vizio = document.querySelector('#vizio')

const clickedSony = false
const clickedSamsung = false
const clickedLG = false
const clickedTCL = false
const clickedVIZIO = false

sony.addEventListener('click', ()=> {
    if (clickedSony === false){
        clickedSony = true
        sony.style.color = '#00AAD2'
    } else if (clickedSony === true){
        clickedSony = false 
        sony.style.color = '#d9d9d9'
    }
})

if (clickedSony === true){
    submitButton.addEventListener('click',async()=>{
        await axios.get('http://localhost:3001/api/products/find/query?brand=Sony')
        .then((res)=>{
            console.log(res.data.products)
            infoList.insertAdjacentHTML('afterbegin',`<li>${res.data.products[i].name}</li>`)
        })
        .catch((e)=>console.log(e))
    })
} else if (clickedSamsung === true){
    submitButton.addEventListener('click',async()=>{
        await axios.get('http://localhost:3001/api/products')
        .then((res)=>{
            console.log(res.data.products)
            for(let i = 0;i<10;i++){
                if (res.data.products[i].brand === 'Samsung'){
                    infoList.insertAdjacentHTML('afterbegin',`<li>${res.data.products[i].name}</li>`)
                } else {
                    console.log('not samsung')
                }
            }
        })
        .catch((e)=>console.log(e))
    })
} else if (clickedLG === true){
    submitButton.addEventListener('click',async()=>{
        await axios.get('http://localhost:3001/api/products')
        .then((res)=>{
            console.log(res.data.products)
            for(let i = 0;i<10;i++){
                if (res.data.products[i].brand === 'LG'){
                    infoList.insertAdjacentHTML('afterbegin',`<li>${res.data.products[i].name}</li>`)
                } else {
                    console.log('not lg')
                }
            }
        })
        .catch((e)=>console.log(e))
    })
} else if (clickedTCL === true){
    submitButton.addEventListener('click',async()=>{
        await axios.get('http://localhost:3001/api/products')
        .then((res)=>{
            console.log(res.data.products)
            for(let i = 0;i<10;i++){
                if (res.data.products[i].brand === 'TCL'){
                    infoList.insertAdjacentHTML('afterbegin',`<li>${res.data.products[i].name}</li>`)
                } else {
                    console.log('not tcl')
                }
            }
        })
        .catch((e)=>console.log(e))
    })
} else if (clickedVIZIO === true){
    submitButton.addEventListener('click',async()=>{
        await axios.get('http://localhost:3001/api/products')
        .then((res)=>{
            console.log(res.data.products)
            for(let i = 0;i<10;i++){
                if (res.data.products[i].brand === 'VIZIO'){
                    infoList.insertAdjacentHTML('afterbegin',`<li>${res.data.products[i].name}</li>`)
                } else {
                    console.log('not vizio')
                }
            }
        })
        .catch((e)=>console.log(e))
    })
}


//if (sony.style.backgroundColor === '#D9D9D9'){
    submitButton.addEventListener('click',async()=>{
        await axios.get('http://localhost:3001/api/products/find/query?brand=Sony')
        .then((res)=>{
            console.log(res.data.products)
            for(let i = 0; i < res.data.products.length;i++){
                infoList.insertAdjacentHTML('afterbegin',`<li>${res.data.products[i].name}</li>`)
            }
        })
        .catch((e)=>console.log(e))
    })
//}

