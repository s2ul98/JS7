// box에 배경색 설정
function onClick() {

const box = document.querySelector('.box');
box.style.background = 'yellow';
}

// HTML 문서가 완전히 생성되기 전에 스크립트를 실행하면 아직 div가 생성되지 않았기 때문에 null이 반환됨