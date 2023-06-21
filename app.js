const soruData = [
    {
        soru:'En aktif twitter kullanıcıs?',
        a:'Fatih',
        b:'Ahmet',
        c:'İlker',
        d:'Azmi',
        e:'Şeref',
        correct:'a',
    },
    {
        soru:'En komik twitter kullanıcıs?',
        a:'Fatih',
        b:'Ahmet',
        c:'İlker',
        d:'Azmi',
        e:'Şeref',
        correct:'b',
    },
    {
        soru:'En gezen twitter kullanıcıs?',
        a:'Fatih',
        b:'Ahmet',
        c:'İlker',
        d:'Azmi',
        e:'Şeref',
        correct:'c',
    },
    {
        soru:'En üretgen twitter kullanıcıs?',
        a:'Fatih',
        b:'Ahmet',
        c:'İlker',
        d:'Azmi',
        e:'Şeref',
        correct:'d',
    },
    {
        soru:'En pasif twitter kullanıcıs?',
        a:'Fatih',
        b:'Ahmet',
        c:'İlker',
        d:'Azmi',
        e:'Şeref',
        correct:'e',
    },
];

const quiz = document.getElementById('quiz');
const answerS = document.querySelectorAll('.answer');
const cevaplar = document.querySelectorAll('.cevap');
const btn = document.querySelector('.btn');
const soruEl = document.getElementById('sorular');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    const currentQuizData = soruData[currentQuiz]

    deSelectedAnswers();
    soruEl.innerText = currentQuizData.soru;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
    btn.innerHTML = `
    <button class="submit" id="submit">Doğru Olduğunu Düşündüğpün Şıkkı Seç ❓</button>
    `
}

function deSelectedAnswers(){
    answerS.forEach(answerEl => {
        answerEl.checked = false;
    });
}

function getSelected(){
    let answer;

    answerS.forEach(answerEl => {
        if(answerEl.checked == true){
            answer = answerEl.id;
        }
    });
    return answer;
}

cevaplar.forEach(cevap => {
    cevap.addEventListener('click', () => {
        btn.innerHTML = `
        <button class="submit" id="submit" style="background-color: #f87da9; outline: none;">Evet, Bence Bu Doğru 👍</button>
        `

        document.getElementById('submit').addEventListener('click', () => {
            const answer = getSelected();
            if(answer){
                if(answer === soruData[currentQuiz].correct){
                    score++
                }
                currentQuiz++
        
                if(currentQuiz < soruData.length){
                    loadQuiz();
                }else{
                    quiz.innerHTML = `
                        <h2>Test Tamamlandı, ${score * 20} puan aldınız. ${score < 3 ? `😄` : `🤑`} </h2>
                        ${score == soruData.length ?
                             `
                            <button class="submit" onClick="location.reload()"> Tebrikler Hepsi Doğru 🤝
                            </button>
                            `
                            :
                            `
                            <button class="submit" onClick="location.reload()"> Tekrar Dene 🔁</button>
                            `}
                            
                    `
                }
            }
        })
    })
});

