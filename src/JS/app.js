const slider = document.querySelectorAll('.slider')
const imgSelect = document.querySelectorAll('.img-select')

let counter = 1

slideTurn(counter)

function addSlide(i){
    counter +=i;
    slideTurn(counter)
}

function selectCurrent(i){
    counter = i;
    slideTurn(counter)
}

function slideTurn(x){
    let i;

    for(i=0 ; i<slider.length ; i++){
        slider[i].style.display = 'none';
    }

    for(i=0 ; i<imgSelect.length;i++){
        imgSelect[i].classList.remove('active');
    }

    if(x>slider.length){
       counter = 1
    }

    else if (x<1){
        counter = slider.length
    }

    slider[counter - 1].style.display = "block";
    imgSelect[counter - 1].classList.add('active');
}
