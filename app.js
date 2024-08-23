const inputBox=document.querySelector('.input-box')
const listContainer=document.querySelector('.list-container')


function addTask(){
if(inputBox.value===''){

    alert('Please, add task')
} else{

    let li=document.createElement('li')
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li)
    let span=document.createElement('span')
    span.innerHTML='X'
    li.appendChild(span)

}

inputBox.value='';
saveData()


}

listContainer.addEventListener('click',(event)=>{

    if(event.target.tagName===('LI')){

        event.target.classList.toggle('checked')
        event.target.style.textDecoration='line-through'
        saveData()


    } else if(event.target.tagName===('SPAN')){

        event.target.parentElement.remove()
        saveData()

    }

})


function saveData(){

    localStorage.setItem('data',listContainer.innerHTML)


}

function showData(){

    listContainer.innerHTML=localStorage.getItem('data')
}

showData()