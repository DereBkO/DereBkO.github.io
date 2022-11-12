window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
});

/* const el=document.querySelector('.reasons_round_2');{
    if (window.innerWidth > 1200) el.classList.remove('reasons_round_2');
}; */
/* @document.querySelector('reasons_round_2')(window.innerWidth > 1200);{
    document.getElementById('round2').classList.remove('reasons_round_2');
}; */
/* document.getElementById('descr2').classList.remove('reasons_descr_2') */

/* И перед этим нужный элемент нужно найти - 
const придумай_название = document.querySelector('.название класса'), а уже после к в условии к этой переменной писать classList.remove()

А если js, то через условие -  if (window.innerWidth < 1200) нужный_элемент.classList.remove('название класса') . Это если совсем просто делать */

/* kwork.ru/user/l1beri */