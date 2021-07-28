const main = document.querySelector("#main");
const qna = document.querySelector("#qna");


function addAnswer(answerText,qIdx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button'); //createElement 태그를 HTML에 만들어줌
    answer.classList.add('answerList'); //classList.add는 태그에 class이름을 추가 할 수 있음
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');
    a.appendChild(answer); //appendChild는 <div>안에 <button>이 포함되게 만들어줌 <div><button></button></div> 이렇게
    answer.innerHTML = answerText;

    answer.addEventListener("click",function(){
        var children = document.querySelectorAll('.answerList'); // querySelector은 한개 선택, querySelectorAll은 복수
        for(let i =0; i<children.length; i++){
            children[i].disabled = true; //클릭한 버튼 제외하고 나머지 비활성화
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {
            for(let i = 0; i < children.length; i++){
                children[i].style.display = 'none'; //클릭한 버튼 제외하고 나머지 사라짐
            }
        goNext(++qIdx);
        },450)
    },false);
}
function goNext(qIdx){
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){ //총 3번 반복
        addAnswer(qnaList[qIdx].a[i].answer,qIdx);
    }
}

function begin(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        },450)
        let qIdx = 0;
        goNext(qIdx);
    },450);
}