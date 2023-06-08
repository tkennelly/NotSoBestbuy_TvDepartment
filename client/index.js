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

const score = 'unknown'
star1.addEventListener('click',()=>score = 1)
star2.addEventListener('click',()=>score = 2)
star3.addEventListener('click',()=>score = 3)
star4.addEventListener('click',()=>score = 4)
star5.addEventListener('click',()=>score = 5)

const addReview = async() => {
    await axios.create(`http://localhost:3001/api/reviews?score=${score}&comment=${reviewSubmit.value}&productId=${productModel.innerHTML.substring(6)}`)
}

reviewSubmit.addEventListener('click',()=>{
    if (score !== 'unknown'){
        addReview()
    } else {
        console.log('no review to submit')
    }
})

let selectedBrand = document.getElementById('brandDropdown').value
console.log(selectedBrand)
let selectedSize = document.getElementById('sizeDropdown').value
console.log(selectedSize)
const findProductsFromDropdown = async() =>{
    const response = await axios.get(`http://localhost:3001/api/products/find/query?brand=${selectedBrand}&size=${selectedSize}`)
    console.log(response)
}
// submitButton.addEventListener('click', findProductsFromDropdown)

const searchProducts = async() => {
    const response = await axios.get(`http://localhost:3001/api/products`)
    const response2 = await axios.get(`http://localhost:3001/api/brands`)
    if (searchBar.value.includes('Micro LED') === true || searchBar.value.includes('micro LED') === true || searchBar.value.includes('micro led') === true || searchBar.value.includes('microled') === true){
        img.innerHTML = `<img src="${response.data.products[0].img}"/>`
        productName.innerHTML = `name: ${response.data.products[0].name}`
        productPrice.innerHTML = `price: ${response.data.products[0].price}`
        productDescription.innerHTML = `description: ${response.data.products[0].description}`
        productBrand.innerHTML = `brand: ${response.data.products[0].brand}`
        productSize.innerHTML = `size: ${response.data.products[0].size}`
        productModel.innerHTML = `model: ${response.data.products[0].modelNum}`
        productStock.innerHTML = `stock: ${response.data.products[0].itemsInStock}`
        brandName.innerHTML = `brand name: ${response2.data.brands[0].name}`
        priceRange.innerHTML = `price range: ${response2.data.brands[0].priceRange}`
        brandNumber.innerHTML = `brand number: ${response2.data.brands[0].brandNum}`
    } else if (searchBar.value.includes('Neo QLED') === true || searchBar.value.includes('neo QLED') === true || searchBar.value.includes('neo qled') === true || searchBar.value.includes('neoqled') === true){
        img.innerHTML = `<img src="${response.data.products[1].img}"/>`
        productName.innerHTML = `name: ${response.data.products[1].name}`
        productPrice.innerHTML = `price: ${response.data.products[1].price}`
        productDescription.innerHTML = `description: ${response.data.products[1].description}`
        productBrand.innerHTML = `brand: ${response.data.products[1].brand}`
        productSize.innerHTML = `size: ${response.data.products[1].size}`
        productModel.innerHTML = `model: ${response.data.products[1].modelNum}`
        productStock.innerHTML = `stock: ${response.data.products[1].itemsInStock}`
        brandName.innerHTML = `brand name: ${response2.data.brands[1].name}`
        priceRange.innerHTML = `price range: ${response2.data.brands[1].priceRange}`
        brandNumber.innerHTML = `brand number: ${response2.data.brands[1].brandNum}`
    } else if (searchBar.value.includes('C2 Series') === true || searchBar.value.includes('c2 Series') === true || searchBar.value.includes('c2 series') === true || searchBar.value.includes('c2series') === true){
        img.innerHTML = `<img src="${response.data.products[2].img}"/>`
        productName.innerHTML = `name: ${response.data.products[2].name}`
        productPrice.innerHTML = `price: ${response.data.products[2].price}`
        productDescription.innerHTML = `description: ${response.data.products[2].description}`
        productBrand.innerHTML = `brand: ${response.data.products[2].brand}`
        productSize.innerHTML = `size: ${response.data.products[2].size}`
        productModel.innerHTML = `model: ${response.data.products[2].modelNum}`
        productStock.innerHTML = `stock: ${response.data.products[2].itemsInStock}`
        brandName.innerHTML = `brand name: ${response2.data.brands[2].name}`
        priceRange.innerHTML = `price range: ${response2.data.brands[2].priceRange}`
        brandNumber.innerHTML = `brand number: ${response2.data.brands[2].brandNum}`
    } else if (searchBar.value.includes('UQ75 Series') === true || searchBar.value.includes('uq75 Series') === true || searchBar.value.includes('uq75 series') === true || searchBar.value.includes('uq75series') === true){
        img.innerHTML = `<img src="${response.data.products[3].img}"/>`
        productName.innerHTML = `name: ${response.data.products[3].name}`
        productPrice.innerHTML = `price: ${response.data.products[3].price}`
        productDescription.innerHTML = `description: ${response.data.products[3].description}`
        productBrand.innerHTML = `brand: ${response.data.products[3].brand}`
        productSize.innerHTML = `size: ${response.data.products[3].size}`
        productModel.innerHTML = `model: ${response.data.products[3].modelNum}`
        productStock.innerHTML = `stock: ${response.data.products[3].itemsInStock}`
        brandName.innerHTML = `brand name: ${response2.data.brands[3].name}`
        priceRange.innerHTML = `price range: ${response2.data.brands[3].priceRange}`
        brandNumber.innerHTML = `brand number: ${response2.data.brands[3].brandNum}`
    } else if (searchBar.value.includes('BRAVIA XR X92') === true || searchBar.value.includes('Bravia XR X92') === true || searchBar.value.includes('bravia xr x92') === true || searchBar.value.includes('bravia XR X92') === true){
        img.innerHTML = `<img src="${response.data.products[4].img}"/>`
        productName.innerHTML = `name: ${response.data.products[4].name}`
        productPrice.innerHTML = `price: ${response.data.products[4].price}`
        productDescription.innerHTML = `description: ${response.data.products[4].description}`
        productBrand.innerHTML = `brand: ${response.data.products[4].brand}`
        productSize.innerHTML = `size: ${response.data.products[4].size}`
        productModel.innerHTML = `model: ${response.data.products[4].modelNum}`
        productStock.innerHTML = `stock: ${response.data.products[4].itemsInStock}`
        brandName.innerHTML = `brand name: ${response2.data.brands[4].name}`
        priceRange.innerHTML = `price range: ${response2.data.brands[4].priceRange}`
        brandNumber.innerHTML = `brand number: ${response2.data.brands[4].brandNum}`
    } else if (searchBar.value.includes('BRAVIA XR Z9K') === true || searchBar.value.includes('Bravia XR Z9K') === true || searchBar.value.includes('bravia xr Z9K') === true || searchBar.value.includes('bravia xr z9k') === true){
        img.innerHTML = `<img src="${response.data.products[5].img}"/>`
        productName.innerHTML = `name: ${response.data.products[5].name}`
        productPrice.innerHTML = `price: ${response.data.products[5].price}`
        productDescription.innerHTML = `description: ${response.data.products[5].description}`
        productBrand.innerHTML = `brand: ${response.data.products[5].brand}`
        productSize.innerHTML = `size: ${response.data.products[5].size}`
        productModel.innerHTML = `model: ${response.data.products[5].modelNum}`
        productStock.innerHTML = `stock: ${response.data.products[5].itemsInStock}`
        brandName.innerHTML = `brand name: ${response2.data.brands[5].name}`
        priceRange.innerHTML = `price range: ${response2.data.brands[5].priceRange}`
        brandNumber.innerHTML = `brand number: ${response2.data.brands[5].brandNum}`
    } else if (searchBar.value.includes('3-Series HD') === true || searchBar.value.includes('3-series HD') === true || searchBar.value.includes('3-Series hd') === true || searchBar.value.includes('3Series HD') === true){
        img.innerHTML = `<img src="${response.data.products[6].img}"/>`
        productName.innerHTML = `name: ${response.data.products[6].name}`
        productPrice.innerHTML = `price: ${response.data.products[6].price}`
        productDescription.innerHTML = `description: ${response.data.products[6].description}`
        productBrand.innerHTML = `brand: ${response.data.products[6].brand}`
        productSize.innerHTML = `size: ${response.data.products[6].size}`
        productModel.innerHTML = `model: ${response.data.products[6].modelNum}`
        productStock.innerHTML = `stock: ${response.data.products[6].itemsInStock}`
        brandName.innerHTML = `brand name: ${response2.data.brands[6].name}`
        priceRange.innerHTML = `price range: ${response2.data.brands[6].priceRange}`
        brandNumber.innerHTML = `brand number: ${response2.data.brands[6].brandNum}`
    } else if (searchBar.value.includes('3-Series FHD') === true || searchBar.value.includes('3-series FHD') === true || searchBar.value.includes('3-Series fhd') === true || searchBar.value.includes('3Series FHD') === true){
        img.innerHTML = `<img src="${response.data.products[7].img}"/>`
        productName.innerHTML = `name: ${response.data.products[7].name}`
        productPrice.innerHTML = `price: ${response.data.products[7].price}`
        productDescription.innerHTML = `description: ${response.data.products[7].description}`
        productBrand.innerHTML = `brand: ${response.data.products[7].brand}`
        productSize.innerHTML = `size: ${response.data.products[7].size}`
        productModel.innerHTML = `model: ${response.data.products[7].modelNum}`
        productStock.innerHTML = `stock: ${response.data.products[7].itemsInStock}`
        brandName.innerHTML = `brand name: ${response2.data.brands[7].name}`
        priceRange.innerHTML = `price range: ${response2.data.brands[7].priceRange}`
        brandNumber.innerHTML = `brand number: ${response2.data.brands[7].brandNum}`
    } else if (searchBar.value.includes('D-Series LED') === true || searchBar.value.includes('D-series LED') === true || searchBar.value.includes('d-series LED') === true || searchBar.value.includes('d-series led') === true){
        img.innerHTML = `<img src="${response.data.products[8].img}"/>`
        productName.innerHTML = `name: ${response.data.products[8].name}`
        productPrice.innerHTML = `price: ${response.data.products[8].price}`
        productDescription.innerHTML = `description: ${response.data.products[8].description}`
        productBrand.innerHTML = `brand: ${response.data.products[8].brand}`
        productSize.innerHTML = `size: ${response.data.products[8].size}`
        productModel.innerHTML = `model: ${response.data.products[8].modelNum}`
        productStock.innerHTML = `stock: ${response.data.products[8].itemsInStock}`
        brandName.innerHTML = `brand name: ${response2.data.brands[8].name}`
        priceRange.innerHTML = `price range: ${response2.data.brands[8].priceRange}`
        brandNumber.innerHTML = `brand number: ${response2.data.brands[8].brandNum}`
    } else if (searchBar.value.includes('D-Series Full') === true || searchBar.value.includes('D-series Full') === true || searchBar.value.includes('d-series full') === true || searchBar.value.includes('D-Series full') === true){
        img.innerHTML = `<img src="${response.data.products[9].img}"/>`
        productName.innerHTML = `name: ${response.data.products[9].name}`
        productPrice.innerHTML = `price: ${response.data.products[9].price}`
        productDescription.innerHTML = `description: ${response.data.products[9].description}`
        productBrand.innerHTML = `brand: ${response.data.products[9].brand}`
        productSize.innerHTML = `size: ${response.data.products[9].size}`
        productModel.innerHTML = `model: ${response.data.products[9].modelNum}`
        productStock.innerHTML = `stock: ${response.data.products[9].itemsInStock}`
        brandName.innerHTML = `brand name: ${response2.data.brands[9].name}`
        priceRange.innerHTML = `price range: ${response2.data.brands[9].priceRange}`
        brandNumber.innerHTML = `brand number: ${response2.data.brands[9].brandNum}`
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

