const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        entry.isIntersecting ? entry.target.classList.add('show') : entry.target.classList.remove('show');
    })
});

const hiddenElement = document.querySelectorAll('.hiddenL');
hiddenElement.forEach((el) => observer.observe(el))