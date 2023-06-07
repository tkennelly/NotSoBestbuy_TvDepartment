const submitButton = document.querySelector('#submit')
const searchBar = document.querySelector('input')
const sony = document.querySelector('#sony')
const clicked = false

submitButton.addEventListener('click',async()=>{
    if(searchBar.value === 'brands'){
        axios.get('http://localhost:3001/api/brands')
        .then((res)=>{
            res.send
            console.log(res.data.brands)
        })
        .catch((e)=>console.log(e))
    }
})
