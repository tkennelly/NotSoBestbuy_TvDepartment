const submitButton = document.querySelector('#submit')
const searchBar = document.querySelector('input')

submitButton.addEventListener('click',async()=>{
    const lookup = await axios.get('localhost:3001')
    console.log(lookup)
})
