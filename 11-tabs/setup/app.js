const buttons = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');
const about = document.querySelector('.about');

about.addEventListener('click', (e) => {
    //console.log(e.target);
    const id = e.target.dataset.id;

    if(id){
        // remove 'active' class from all buttons
        buttons.forEach((btn) => {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        //hide other acticles that are not 'active'
        articles.forEach((article) => {
            article.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
        //console.log(element);
    };
})