const myname = 'Jamar i come from afar allah uakbar';
const div = document.getElementById('nameDiv');
    
    


function buttonClicked() {
    const currentTime=new Date();
    const newElement=document.createElement('div');
    newElement.innerText= `Created at ${currentTime}`;
    document.body.appendChild(newElement);
}

changeText(div);