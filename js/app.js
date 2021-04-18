// DOM Listeners and front end fucntions
document.addEventListener('DOMContentLoaded', () => {
const newItemform = document.querySelector('#new-item-form');
newItemform.addEventListener('submit', handleNewItemFormSubmit)

const button = document.querySelector('#delete-btn');
button.addEventListener('click', handleDeleteButtonClick)
})

// Functions
const handleNewItemFormSubmit = function(event){
    event.preventDefault();
    
    const name = event.target.name.value;
    const material = event.target.material.value;
    const grade = event.target.grade.value;
    const type = event.target.type.value;
    const size = event.target.size.value;
    const thread = event.target.thread.value;
    const pitch = event.target.pitch.value;
    const thLength = event.target.thLength.value;
    const nominal = event.target.nominal.value;
    const style = event.target.style.value;
    

    const newFastener = document.createElement('li');
    newFastener.textContent = `Name: ${name} 
    Material: ${material}
    Material Grade: ${grade} 
    Thread Type: ${type}
    Size: ${size} 
    Thread Type: ${thread} 
    Pitch: ${pitch} 
    Thread Length: ${thLength} 
    Nominal Length: ${nominal} 
    Head Type: ${style}`
    
    const fastenerList = document.querySelector('#fastener-list');
    fastenerList.appendChild(newFastener);
    event.target.reset();

};

const handleDeleteButtonClick = function(b){
    const fastenerList = document.querySelector('#fastener-list')
    fastenerList.innerHTML = "";
};