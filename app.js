const canvas = document.querySelector('#canvas');
const pen = canvas.getContext('2d');

function getMousePosition(canvas,event){
    let rect = canvas.getBoundingClientRect();
    return{
        x: (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}

window.addEventListener('load', ()=>{
    const canvas = document.querySelector('#canvas');
    const pen = canvas.getContext('2d');

    //resizing
    // canvas.height = 500;
    // canvas.width = 500;

    //variables
    let painting = false;

    function startPosition(e){
        painting = true;
        paint(e);
    }
    function stopPosition(){
        painting = false;
        pen.beginPath();
    }
    function paint(e){
        if(!painting) return;

        let position = getMousePosition(canvas,e);

        pen.lineWidth = 10;
        pen.lineCap = 'round';

        pen.lineTo(position.x, position.y);
        pen.stroke();
        pen.beginPath();
        pen.moveTo(position.x, position.y);
    }

    //event listeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', stopPosition);
    canvas.addEventListener('mousemove', paint);

});