
export function setTimer() {
    var timer, numofSlides, currentslideindex = 0;

    let slides = document.getElementsByClassName('carousel-image');
    let next_btn = document.getElementById("carousel-next-btn")
    let prev_btn = document.getElementById("carousel-prev-btn")

    numofSlides = slides.length

    function slide() {
        let nextindex = currentslideindex + 1;
        if (nextindex >= numofSlides) {
            nextindex = 0
        }

        slides[currentslideindex].style.opacity = '0';
        slides[nextindex].style.opacity = '1';

        currentslideindex = nextindex;
    }

    function next() {
        clearTimeout(timer);

        let nextindex = currentslideindex + 1;
        if (nextindex >= numofSlides) {
            nextindex = 0
        }

        slides[currentslideindex].style.opacity = '0';
        slides[nextindex].style.opacity = '1';

        currentslideindex = nextindex;
        timer = setInterval(slide, 4000);
    }

    function prev() {
        clearTimeout(timer);

        let previndex = currentslideindex - 1;
        if (previndex < 0) {
            previndex = numofSlides - 1;
        }

        slides[currentslideindex].style.opacity = '0'
        slides[previndex].style.opacity = "1"

        currentslideindex = previndex;
        timer = setInterval(slide, 5000);
    }

    timer = setInterval(slide, 5000);
    prev_btn.addEventListener('click', prev);
    next_btn.addEventListener('click', next);
}