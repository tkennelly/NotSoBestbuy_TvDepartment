const submitButton = document.querySelector('#submit')
const searchBar = document.querySelector('input')

let productName = document.querySelector('#name')
let productPrice = document.querySelector('#price')
let productDescription = document.querySelector('#description')
let productBrand = document.querySelector('#brand')
let productSize = document.querySelector('#size')
let productModel = document.querySelector('#model')
let productStock = document.querySelector('#stock')
let brandName = document.querySelector('#brand-name')
let priceRange = document.querySelector('#price-range')
let brandNumber = document.querySelector('#brand-number')
let img = document.querySelector('#image')

const star1 = document.querySelector('#star1')
const star2 = document.querySelector('#star2')
const star3 = document.querySelector('#star3')
const star4 = document.querySelector('#star4')
const star5 = document.querySelector('#star5')
let reviewSubmit = document.querySelector('#submit2')

let score = 'unknown'
star1.addEventListener('click',()=>score = 1)
star2.addEventListener('click',()=>score = 2)
star3.addEventListener('click',()=>score = 3)
star4.addEventListener('click',()=>score = 4)
star5.addEventListener('click',()=>score = 5)

const addReview = async() => {
    console.log('working', score, reviewSubmit.value)
    await axios.create(`http://localhost:3001/api/reviews?score=${score}&comment=${reviewSubmit.value}&productId=${productModel.innerHTML.substring(6)}`)
}

reviewSubmit.addEventListener('submit', addReview)

//let selectedBrand = document.getElementById('brandDropdown').value
// console.log(selectedBrand)
// let selectedSize = document.getElementById('sizeDropdown').value
// console.log(selectedSize)
// const findProductsFromDropdown = async() =>{
//     const response = await axios.get(`http://localhost:3001/api/products/find/query?brand=${selectedBrand}&size=${selectedSize}`)
//     console.log(response)
// }
// submitButton.addEventListener('click', findProductsFromDropdown)

const searchProducts = async() => {
    console.log('searchBar')
    const response = await axios.get(`http://localhost:3001/api/products`)
    const response2 = await axios.get(`http://localhost:3001/api/brands`)
    str = searchBar.value
    let index = null
    if (str.match(/micro\s*led/gi)) {index = 0}
    else if (str.match(/neo\s*qled/gi)) {index = 1}
    else if (str.match(/c2\s*series/gi)) {index = 2}
    else if (str.match(/uq75\s*series/gi)) {index = 3}
    else if (str.match(/bravia\s*xr\s*x92/gi)) {index = 4}
    else if (str.match(/bravia\s*xr\s*z9k/gi)) {index = 5}
    else if (str.match(/3-series\s*hd/gi)) {index = 6}
    else if (str.match(/3-series\s*fhd/gi)) {index = 7}
    else if (str.match(/d-series\s*led/gi)) {index = 8}
    else if(str.match(/d-series\s*full/gi)) {index = 9}
    console.log(index)
    if (index != null) {
        img.innerHTML = `<img src="${response.data.products[index].img}"/>`
        productName.innerHTML = `name: ${response.data.products[index].name}`
        productPrice.innerHTML = `price: ${response.data.products[index].price}`
        productDescription.innerHTML = `description: ${response.data.products[index].description}`
        productBrand.innerHTML = `brand: ${response.data.products[index].brand}`
        productSize.innerHTML = `size: ${response.data.products[index].size}`
        productModel.innerHTML = `model: ${response.data.products[index].modelNum}`
        productStock.innerHTML = `stock: ${response.data.products[index].itemsInStock}`
        brandName.innerHTML = `brand name: ${response2.data.brands[index].name}`
        priceRange.innerHTML = `price range: ${response2.data.brands[index].priceRange}`
        brandNumber.innerHTML = `brand number: ${response2.data.brands[index].brandNum}`
    }
    
}

submitButton.addEventListener('click', searchProducts)

// const sony = document.querySelector('.sony')
// const samsung = document.querySelector('.samsung')
// const lg = document.querySelector('.lg')
// const tcl = document.querySelector('.tcl')
// const vizio = document.querySelector('.vizio')

// const brands = [sony,samsung,lg,tcl,vizio]
// const brandString = ['Sony','Samsung','LG','TCL','VIZIO']

//let clicked = 'none'
// let clickedSony = false
// let clickedSamsung = false
// let clickedLG = false
// let clickedTCL = false
// let clickedVIZIO = false

// const showProducts = async(brand) => {
//     await axios.get(`http://localhost:3001/api/products/find/query?brand=${brand}`)
//     .then((res)=>{
//         console.log(res.data.products)
//         for(let i = 0;i<res.data.products.length;i++){
//             productName.insertAdjacentHTML('beforeend',`${res.data.products[i].name}`)
//         }
//     })
//     .catch((e)=>console.log(e))
// }

// for(let i = 0;i<5;i++){
//     brands[i].addEventListener('click', ()=> {
//         clicked = brandString[i]
//         if (clicked === brandString[i]){
//             brands[i].style.color = '#00AAD2'
//             console.log(this)
//             showProducts(brandString[i])
//             clicked = 'been clicked'
//         } else {
//             brands[i].style.color = 'black'
//             console.log('clicked sony is true')
//         }
//     })
// }


// const sonyFunction = async() => {
//     await axios.get(`https://localhost:3001/api/products/find/query?brand=Sony`)
//     .then((res)=>{
//         console.log(res.data.products)
//         for(let i = 0;i<res.data.products.length;i++){
//             infoList.insertAdjacentHTML('afterbegin',`<li>${res.data.products[i].name}</li>`)
//         }
//     })
//     .catch((e)=>console.log(e))
// }

// const samsungFunction = async()=>{
//     await axios.get(`https://localhost:3001/api/products/find/query?brand=Samsung`)
//     .then((res)=>{
//         console.log(res.data.products)
//         for(let i = 0;i<10;i++){
//             infoList.insertAdjacentHTML('afterbegin',`<li>${res.data.products[i].name}</li>`)
//         }
//     })
//     .catch((e)=>console.log(e))
// }

// const lgFunction = async() =>{
//     await axios.get(`https://localhost:3001/api/products/find/query?brand=LG`)
//     .then((res)=>{
//         console.log(res.data.products)
//         for(let i = 0;i<10;i++){
//             infoList.insertAdjacentHTML('afterbegin',`<li>${res.data.products[i].name}</li>`)
//         }
//     })
//     .catch((e)=>console.log(e))
// }

// const tclFunction = async() =>{
//     await axios.get(`https://localhost:3001/api/products/find/query?brand=TCL`)
//     .then((res)=>{
//         console.log(res.data.products)
//         for(let i = 0;i<10;i++){
//             infoList.insertAdjacentHTML('afterbegin',`<li>${res.data.products[i].name}</li>`)
//         }
//     })
//     .catch((e)=>console.log(e))
// }

// const vizioFunction = async() =>{
//     await axios.get(`https://localhost:3001/api/products/find/query?brand=VIZIO`)
//     .then((res)=>{
//         console.log(res.data.products)
//         for(let i = 0;i<10;i++){
//             infoList.insertAdjacentHTML('afterbegin',`<li>${res.data.products[i].name}</li>`)
//         }
//     })
//     .catch((e)=>console.log(e))
// }

// if (clickedSony === true){
//     submitButton.addEventListener('click', sonyFunction())
// } else {
//     submitButton.removeEventListener('click', sonyFunction())
// }

