let api='https://api.github.com/users/'
const loader=document.getElementById("loader")
const notfound=document.getElementById("notfound")
const userInput=document.getElementById("userInput")
const error=document.getElementById('error')
const card=document.querySelector('.card')
function searchprofile(e){
    e.preventDefault()
    card.style.display='none'
    error.innerHTML=''
    notfound.style.display='none'
    loader.style.display='block'
    loader.classList.add('hidden')

    fetch(api+userInput.value)
    .then(res=>res.json())
    .then(data=>{
        if(data.message=="Not Found"){
            notfound.style.display='block'
        }
        else{
            card.style.display='block'
            Showcard(data)
        }
    })
    .catch(e=>{
        error.innerHTML=e
})
    .finally(()=>{
        loader.style.display='none'
    })
userInput.value=''
}
function Showcard(data){
    let innerHTML=`
     <div class="card-top">
            <img src="${data.avatar_url}"  alt="">
            <div>
                <h2>${data.name}</h2>
                <h2>@${data.login}</h2>
                <h2>${data.followers} Followers</h2>
                <h2> ${data.following}Following</h2>
            </div>
            </div>
        <div class="card-bottom">
            <h1>${data.bio}</h1>
            <div class="flex"><a href="${data.html_url}"  target="_blank">Visit Profile</a>
            <p>repositories : ${data.public_repos}</p>
            </div> 
         </div>`
         card.innerHTML=innerHTML

}