console.log(1)
document.querySelector('.header__burger').addEventListener('click', (event)=>{
    event.currentTarget.classList.toggle('active')
    document.querySelector('.header__menu').classList.toggle('active')
    document.body.classList.toggle('lock')
})