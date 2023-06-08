const submitButton = document.querySelector('#submit')
const searchBar = document.querySelector('input')
const infoList = document.querySelector('ul')

const sony = document.querySelector('#sony')
const samsung = document.querySelector('#samsung')
const lg = document.querySelector('#lg')
const tcl = document.querySelector('#tcl')
const vizio = document.querySelector('#vizio')

let clickedSony = false
let clickedSamsung = false
let clickedLG = false
let clickedTCL = false
let clickedVIZIO = false

sony.addEventListener('click', ()=> {
    if (clickedSony === false){
        clickedSony=true
        sony.style.color = '#00AAD2'
        console.log(clickedSony)
    } else if (clickedSony === true){
        clickedSony = false 
        sony.style.color = 'black'
        console.log('clicked sony is true')
    }
})

sonyKey = '6480cfccdf37ae300c0b0a8b'
samsungKey = '6480cfccdf37ae300c0b0a89'
lgKey = '6480cfccdf37ae300c0b0a8a'
tclKey = '6480cfccdf37ae300c0b0a8c'
vizioKey = '6480cfccdf37ae300c0b0a8d'



const sonyFunction = async()=>{
    console.log('running')
    await axios.get(`http://localhost:3001/api/products/find/query?brand=${sonyKey}`)
    .then((res)=>{
        console.log(res)
        for(let i = 0; i < res.data.products.length;i++){
            infoList.insertAdjacentHTML('afterbegin',`<li>${res.data.products[i].name}</li>`)
        }
    })
    .catch((e)=>console.log(e))
}

const samsungFunction = async()=>{
    await axios.get(`https://localhost:3001/api/products/find/query?brand=${samsungKey}`)
    .then((res)=>{
        console.log(res.data.products)
        for(let i = 0;i<10;i++){
            infoList.insertAdjacentHTML('afterbegin',`<li>${res.data.products[i].name}</li>`)
        }
    })
    .catch((e)=>console.log(e))
}

const lgFunction = async() =>{
    await axios.get(`https://localhost:3001/api/products/find/query?brand=${lgKey}`)
    .then((res)=>{
        console.log(res.data.products)
        for(let i = 0;i<10;i++){
            infoList.insertAdjacentHTML('afterbegin',`<li>${res.data.products[i].name}</li>`)
        }
    })
    .catch((e)=>console.log(e))
}

const tclFunction = async() =>{
    await axios.get(`https://localhost:3001/api/products/find/query?brand=${tclKey}`)
    .then((res)=>{
        console.log(res.data.products)
        for(let i = 0;i<10;i++){
            infoList.insertAdjacentHTML('afterbegin',`<li>${res.data.products[i].name}</li>`)
        }
    })
    .catch((e)=>console.log(e))
}

const vizioFunction = async() =>{
    await axios.get(`https://localhost:3001/api/products/find/query?brand=${vizioKey}`)
    .then((res)=>{
        console.log(res.data.products)
        for(let i = 0;i<10;i++){
            infoList.insertAdjacentHTML('afterbegin',`<li>${res.data.products[i].name}</li>`)
        }
    })
    .catch((e)=>console.log(e))
}

if (clickedSony === true){
    submitButton.addEventListener('click', sonyFunction())
} else {
    submitButton.removeEventListener('click', sonyFunction())
}




