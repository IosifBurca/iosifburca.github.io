//variables 
const questions = document.getElementsByClassName('questions');
const answers = document.getElementsByClassName('answers');
const nextBtn = document.getElementById('next');
const finishBtn = document.getElementById('finish');
const nextBtnContainer = document.getElementById('next-btn-container');
const finishBtnContainer = document.getElementById('finish-btn-container');
let answerCheck = false;
let qCounter = 0;
const results = document.getElementById('result');
const questionsContainer = document.getElementById('questions-container');
const resultDesc = document.getElementById('result-desc');

nextBtn.addEventListener('click', next);

for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener('click', select);
}

finishBtn.addEventListener('click', showResults);


//Functions

function next() {
    if (document.getElementsByClassName('selected').length + 1 === qCounter + 2) {
        if (!document.querySelector('.warning').classList.contains('hide')) {
            document.querySelector('.warning').classList.add('hide');
        }
        if (qCounter < questions.length - 2) {
            questions[qCounter].classList.add('hide');
            questions[qCounter].classList.remove('show');
            if (questions[qCounter + 1].classList.contains('hide')) {
                questions[qCounter + 1].classList.remove('hide');
                questions[qCounter + 1].classList.add('show');
            };
            answerCheck = false;
            qCounter++;
        } else if (qCounter == questions.length - 2) {
            questions[qCounter].classList.add('hide');
            questions[qCounter].classList.remove('show')
            if (questions[qCounter + 1].classList.contains('hide')) {
                questions[qCounter + 1].classList.remove('hide');
                questions[qCounter + 1].classList.add('show');
            };
            answerCheck = false;
            qCounter++;
            finishBtnContainer.classList.remove('hide');
            nextBtnContainer.classList.add('hide');
        }
    } else {
        document.querySelector('.warning').classList.remove('hide');
    }
}

function select() {
    if (answerCheck === false) {
        this.classList.add('selected');
        answerCheck = true;
    } else {
        for (let i = 0; i < document.querySelectorAll('.show .answers').length; i++) {
            if (document.querySelectorAll('.show .answers')[i].classList.contains('selected')) {
                document.querySelectorAll('.show .answers')[i].classList.remove('selected');
            }
        }
        this.classList.add('selected');
        answerCheck = true;
    }
}

function showResults() {
    if (document.getElementsByClassName('selected').length + 1 === qCounter + 2) {
        if (!document.querySelector('.warning').classList.contains('hide')) {
            document.querySelector('.warning').classList.add('hide');
        };
        let ie = 50;
        let ns = 50;
        let tf = 50;
        let pj = 50;
        let ieSelected = document.querySelectorAll('.i-e .selected');
        let nsSelected = document.querySelectorAll('.n-s .selected');
        let tfSelected = document.querySelectorAll('.t-f .selected');
        let pjSelected = document.querySelectorAll('.p-j .selected');
        let mbti = '';

        for (let i = 0; i < ieSelected.length; i++) {
            if (ieSelected[i].dataset.framework === 'strongly-a') {
                ie += 10;
            } else if (ieSelected[i].dataset.framework === 'agree') {
                ie += 6;
            } else if (ieSelected[i].dataset.framework === 'slightly-a') {
                ie += 3;
            } else if (ieSelected[i].dataset.framework === 'uncertain') {
                ie += 0;
            } else if (ieSelected[i].dataset.framework === 'slightly-d') {
                ie -= 3;
            } else if (ieSelected[i].dataset.framework === 'disagree') {
                ie -= 6;
            } else if (ieSelected[i].dataset.framework === 'strongly-d') {
                ie -= 10
            }
        };
        for (let i = 0; i < nsSelected.length; i++) {
            if (nsSelected[i].dataset.framework === 'strongly-a') {
                ns += 10;
            } else if (nsSelected[i].dataset.framework === 'agree') {
                ns += 6;
            } else if (nsSelected[i].dataset.framework === 'slightly-a') {
                ns += 3;
            } else if (nsSelected[i].dataset.framework === 'uncertain') {
                ns += 0;
            } else if (nsSelected[i].dataset.framework === 'slightly-d') {
                ns -= 3;
            } else if (nsSelected[i].dataset.framework === 'disagree') {
                ns -= 6;
            } else if (nsSelected[i].dataset.framework === 'strongly-d') {
                ns -= 10;
            }
        };
        for (let i = 0; i < tfSelected.length; i++) {
            if (tfSelected[i].dataset.framework === 'strongly-a') {
                tf += 10;
            } else if (tfSelected[i].dataset.framework === 'agree') {
                tf += 6;
            } else if (tfSelected[i].dataset.framework === 'slightly-a') {
                tf += 3;
            } else if (tfSelected[i].dataset.framework === 'uncertain') {
                tf += 0;
            } else if (tfSelected[i].dataset.framework === 'slightly-d') {
                tf -= 3;
            } else if (tfSelected[i].dataset.framework === 'disagree') {
                tf -= 6;
            } else if (tfSelected[i].dataset.framework === 'strongly-d') {
                tf -= 10;
            }
        };
        for (let i = 0; i < pjSelected; i++) {
            if (pjSelected[i].dataset.framework === 'strongly-a') {
                pj += 10;
            } else if (pjSelected[i].dataset.framework === 'agree') {
                pj += 6;
            } else if (pjSelected[i].dataset.framework === 'slightly-a') {
                pj += 3;
            } else if (pjSelected[i].dataset.framework === 'uncertain') {
                pj += 0;
            } else if (pjSelected[i].dataset.framework === 'slightly-d') {
                pj -= 3;
            } else if (pjSelected[i].dataset.framework === 'disagree') {
                pj -= 6;
            } else if (pjSelected[i].dataset.framework === 'strongly-d') {
                pj -= 10;
            }
        };
        if (ie <= 50) {
            mbti += 'I';
        } else {
            mbti += 'E';
        };
        if (ns <= 50) {
            mbti += 'S';
        } else {
            mbti += 'N';
        };
        if (tf <= 50) {
            mbti += 'T';
        } else {
            mbti += 'F';
        };
        if (pj <= 50) {
            mbti += 'P';
        } else {
            mbti += 'J';
        };
        results.textContent = 'Congratulations, you are an ' + mbti;
        results.classList.remove('hide');
        questionsContainer.classList.add('hide');
        resultDesc.classList.remove('hide');
        document.getElementsByClassName(mbti)[0].classList.remove('hide');
        document.querySelector('.intro').classList.add('hide');
    } else {
        document.querySelector('.warning').classList.remove('hide');
    }
}




