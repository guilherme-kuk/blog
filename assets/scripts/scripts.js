let btnHeart = document.querySelector('.heart-icon');

document.addEventListener('click', (e) => {
    let el = e.target;

    if(el.classList.contains('fa-regular')){
        // el.classList.toggle('fa-solid');
        el.classList.remove('fa-regular');
        el.classList.add('fa-solid');
    } else if (el.classList.contains('fa-solid')){
        el.classList.remove('fa-solid');
        el.classList.add('fa-regular');
    }
});