const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
    const head = skill.querySelector('.head');
    head.addEventListener('click', () => {
        skills.forEach(s => {
            if (s !== skill) s.classList.remove('active');
        });
        skill.classList.toggle('active');
    });
});

const swiper = new Swiper('.swiper', {
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});