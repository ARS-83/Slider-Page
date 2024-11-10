const slides = document.querySelectorAll('.slider-item');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const SliderEnd = document.querySelector('.slider-end');
const EndFooter = document.querySelector('.slider-footer');
const btnStart = document.querySelector('.btn-start');
const totalSlides = slides.length;
let content;
let image;
console.log(slides)
console.log(totalSlides)
let index = 0;

next.addEventListener("click", function() {
    Slides('next')
})
prev.addEventListener("click", function() {
    Slides('prev')
})

function Slides(params) {
    if (params == 'next') {
        if (index == totalSlides - 1) {
            index = 0;

        } else {
            index += 1

        }
    } else {
        if (params == 'prev') {
            if (index == 0) {
                index = totalSlides - 1;
            } else {
                index--;
            }
        }
    }
    for (let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove('active');

        console.log("success")
    }
    console.log(index)
    slides[index].classList.add('active');
    if (index === totalSlides - 1) {
        EndFooter.style.display = "none";

    }


}
btnStart.addEventListener("click", function() {

    slides[3].classList.remove('active');
    slides[0].classList.add('active');
    EndFooter.style.display = 'flex';
});
//sider other
const sliderItem = document.querySelectorAll('.slider-item');
const shareBox = document.querySelector('.share-box');
const shareContent = shareBox.querySelector('.share-content');
var link;
const copy = document.querySelector('.copy');
const copied = document.querySelector('.checkmark');
const closebtn = document.querySelector('.close-btn');
const savebox = document.querySelector('.save-box');
const saveContent = document.querySelector('.save-content')
closebtn.addEventListener("click", function() {

    shareContent.classList.add('remove-sharebox');
    setTimeout(function() { shareBox.classList.remove('active'); }, 600)

});
copy.addEventListener("click", function() {
    navigator.clipboard.writeText(link);
    copied.classList.remove('hide');
    setTimeout(function() { copied.classList.add('hide'); }, 1300)

});
sliderItem.forEach((element) => {
    element.querySelector('.heart').addEventListener('click', function() {
        element.querySelector('.heart').classList.add('hide');
        element.querySelector('.hearted').classList.remove('hide');
    })
    element.querySelector('.hearted').addEventListener('click', function() {
            element.querySelector('.heart').classList.remove('hide');
            element.querySelector('.hearted').classList.add('hide');
        })
        // share
    element.querySelector('.share').addEventListener("click", function() {
            shareBox.classList.add('active');
            link = element.querySelector('.share').getAttribute('data-target');
            shareContent.classList.remove('remove-sharebox');

        })
        // save
    element.querySelector('.save').addEventListener('click', function() {

        element.querySelector('.save').classList.add('hide');
        element.querySelector('.saved').classList.remove('hide');

        savebox.classList.add('active');
        setTimeout(() => {
            saveContent.classList.add('remove-sharebox');
        }, 2000);
        setTimeout(() => {
            savebox.classList.remove('active');
        }, 3000);

    })
    element.querySelector('.saved').addEventListener('click', function() {
        element.querySelector('.save').classList.remove('hide');
        element.querySelector('.saved').classList.add('hide');
        saveContent.classList.remove('remove-sharebox');

    })
});