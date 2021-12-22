init();

function init(){
    getAllDogs()
   
   
}
 

//DOM Selectors 



//fetch
function getAllDogs(){
    fetch('http://localhost:3000/pups')
    .then(res => res.json())
    .then(dogObj=> dogObj.forEach(dog =>renderDog(dog)))
}


function renderDog(dog){
    let dogBar = document.getElementById('dog-bar')
    let span = document.createElement('span')
    span.textContent = dog.name
    dogBar.append(span)

    span.addEventListener('click', ()=> getDogInfo(dog))
}

function getDogInfo(dog){
    let dogInfo = document.getElementById('dog-info')
    const dogImg = document.createElement('img')
    dogImg.src = dog.image

    const dogName = document.createElement('h2')
    dogName.textContent= dog.name

    const dogButton = document.createElement('button')
    dogButton.textContent= dog.isGoodDog
    if(dog.isGoodDog === true){
        dogButton.textContent= 'Good Dog!'
    }else{
        dogButton.textContent = 'Bad Dog!'
    }

    dogButton.addEventListener('click', (event)=>toggleDog(event))



    dogInfo.innerText = ''
    dogInfo.append(dogImg, dogName, dogButton)

//     <img src="dog_image_url" />
// <h2>Mr. Bonkers</h2>
// <button>Good Dog!</button>
}

function toggleDog(event){
    if(event.target.innerText === "Good Dog!"){
        event.target.innerText = "Bad Dog!"
    }else{
        event.target.innerText === "Bad Dog!"
    }

}
