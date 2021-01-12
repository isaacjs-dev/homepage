
(function () {

    html = {
        navbar: document.querySelector('.navbar'),
        menuBtn: document.querySelector('.menu-btn'),
        menuMobile: document.querySelector('.navbar .menu'),
        carousel: document.querySelector('.carousel'),
        scrollUpBtn: document.querySelector('.scroll-up-btn'),
    }

    document.onscroll = () => {
        if (this.scrollY > 20) {
            html.navbar.classList.add('sticky');
        } else {
            html.navbar.classList.remove('sticky');
        }

        if (this.scrollY > 100) {
            html.scrollUpBtn.classList.add('show');
        } else {
            html.scrollUpBtn.classList.remove('show');
        }
    }

    html.scrollUpBtn.addEventListener('click', () => {
        document.querySelector('html').scrollTop = 0
    })

    let typed = new Typed(".typing", {
        strings: ["de Software", "Web", "Mobile" ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    let typed2 = new Typed(".typing-2", {
        strings: ["de Software", "Web", "Mobile" ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
                
    // Toggle Menu/Navbar script
    html.menuBtn.addEventListener('click', () => {
        html.menuMobile.classList.toggle('active');
        html.menuBtn.querySelector('i').classList.toggle('active');
    })

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            },
        }
    })
})()