const submitButton = document.querySelector('#submit')
const searchBar = document.querySelector('input')

submitButton.addEventListener('click',async()=>{
    axios.get('http://localhost:3001/api/brands')
    .then((res)=>console.log(res.data.brands))
    .catch((e)=>console.log(e))
})
