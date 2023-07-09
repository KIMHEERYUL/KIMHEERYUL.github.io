// document는 문서 전체에 대한 정보를 가진 객체(함수도 가지고 있음)
// window.document.querySelector(); 보통은 window를 생략
// Header에 페이지 아래로 스크롤시 다크스타일링 적용
const header = document.querySelector('.header');
const headerRect = header.getBoundingClientRect();
console.log(headerRect);
const headerHeight = headerRect.height;
document.addEventListener('scroll',() => {
    console.log(window.scrollY);
    if(window.scrollY> headerHeight){
        header.classList.add('header--dark');
    } else{
        header.classList.remove('header--dark');
    }
});

//Home섹션을 아래로 스크롤시 투명하게 처리
 const home = document.querySelector('.home__container');
 const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Arrow up버튼을 아래로 스크롤시 나타나게 함
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight/2){
        arrowUp.style.opacity = 1;
    }else{
        arrowUp.style.opacity = 0;
    }
});
