const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 7;
const select = [];

function calResult(){
    var pointArray = [
        { name: 'france', value: 0, key: 0},
        { name: 'mongol', value: 0, key: 1},
        { name: 'china', value: 0, key: 2},
        { name: 'uk', value: 0, key: 3},
        { name: 'korea', value: 0, key: 4},
        { name: 'newzealand', value: 0, key: 5},
        { name: 'vietnam', value: 0, key: 6},
        { name: 'tiwan', value: 0, key: 7},
        { name: 'usa', value: 0, key: 8},
        { name: 'japan', value: 0, key: 9}
    ]
    for(let i = 0; i < endPoint; i++){
        var target = qnaList[i].a[select[i]];
        for(let j = 0; j<target.type.length; j++){
            for(let k = 0; k < pointArray.length; k++){
                if(target.type[j] === pointArray[k].name){
                    pointArray[k].value +=1;
                }
            }
        }
    }

    var resultArray = pointArray.sort(function (a,b){
        if(a.value > b.value){
            return -1;
        }
        if(a.value < b.value){
            return 1;
        }
        return 0;
    });
    console.log(resultArray);
    let resultword = resultArray[0].key;
    return resultword;
}

function goResult(){
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s"
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block"
        },450)
    })
    calResult();
}

function addAnswer(answerText,qIdx,idx){
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
            select[qIdx] = idx;
            for(let i = 0; i < children.length; i++){
                children[i].style.display = 'none'; //클릭한 버튼 제외하고 나머지 사라짐
            }
        goNext(++qIdx);
        },450)
    },false);
}
function goNext(qIdx){
    if(qIdx === endPoint){
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){ //총 3번 반복
        addAnswer(qnaList[qIdx].a[i].answer,qIdx,i);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx+1) +'%';
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