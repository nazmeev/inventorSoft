const menu = document.querySelector('.header__nav');

document.addEventListener('scroll', () => {
    if (document.documentElement.clientWidth > 942 && window.pageYOffset !== 0) {
        menu.classList.add('moved')
    }
    else {
        menu.classList.remove('moved');
    }
});

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();

        const ID = item.getAttribute('href').substr(1);

        ID === "" ? window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
            : document.getElementById(ID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
    });
});


let offsets = [];

const sections = document.querySelectorAll('.section');

sections.forEach(item => {
    offsets.push({ id: item.getAttribute('id') !== undefined ? item.getAttribute('id') : '#', offsetTop: item.offsetTop, ofsetBottom: item.offsetTop + item.clientHeight })
})

document.addEventListener('scroll', () => {
    removeActive();
    offsets.map(item => {
        if (window.pageYOffset >= item.offsetTop && window.pageYOffset < item.ofsetBottom && item.id) {
            const activeSection = document.querySelector(`a[href*="#${item.id}"]`);
            activeSection.classList.add('active')
        }
    })
});

const removeActive = () => anchors.forEach(item => item.classList.remove('active'));