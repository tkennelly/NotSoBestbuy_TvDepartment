const submitButton = document.querySelector('#submit')
const searchBar = document.querySelector('input')
const sony = document.querySelector('#sony')

    submitButton.addEventListener('click',async()=>{
            await axios.get('https://localhost:3001/api/brands')
            .then((res)=>console.log(res.data.brands))
            .catch((e)=>console.log(e))
        })

