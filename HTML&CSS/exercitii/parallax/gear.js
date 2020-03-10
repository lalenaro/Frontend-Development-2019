document
    .querySelector('.container')
    .addEventListener('scroll', rotate);

function rotate() {
    let dist = document
        .querySelector('.container')
        .scrollTop;

    document.querySelector('.gear')
        .style.transform = `rotate(${dist}deg)`;
}