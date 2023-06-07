const submitButton = document.querySelector('#submit')
const searchBar = document.querySelector('input')

submitButton.addEventListener('click',async()=>{
    const lookup = await axios.get('https://localhost:3001/api')
    console.log(lookup)
})
