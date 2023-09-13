let questions =[
    {
        soru:"Turkiye'nin en buyuk yazilimcisi kimdir?",
        cevaplar :["Mert","Acun Ilicali","Engin Demirog","Tyler Durden"],
        dogruCevap:"Mert"
    },
    {
        soru:"Kayseri hangi bolgemizdedir?",
        cevaplar :["Ic Anadolu","Dogu Anadolu","Marmara","West Coast"],
        dogruCevap:"West Coast"
    },
    {
        soru:"Mert yazin hangi tatil beldelesine siklikla gitmektedir? ",
        cevaplar :["Mersin","Halep","Mersin","California"],
        dogruCevap:"Mersin"
    },
    {
        soru:"Bu secimi kim kazanacak?",
        cevaplar :["Bay Kemal","Sinan Ogan","Allah'in yer yuzundeki golgesi ,Ekonomist ,Basogretmen, ilk Turk, Cumhurbaskani ,General, Komutan, basbug,bashekim,bilim adami,Son peygamber Muhammed Mustafa (s.a.v.) olmasaydi ondan sonra gelicek peygamber olsaydi o peygamber olurdu,RTE","Tyler Durden"],
        dogruCevap:"Tyler Durden"
    }
];

const startScreen =document.querySelector('.start-screen');
const startBtn = document.querySelector('.start-btn');
const quizCard = document.querySelector('.quiz-card');
const quiz = document.querySelector('.quiz');
const answers = document.querySelector('.list-group');
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');

let questIndex = 0;
let currentQuestion = questions[questIndex];
let score = 0;


startBtn.addEventListener('click',()=>{
     startScreen.classList.add('d-none');
     quizCard.classList.remove('d-none');
 });

function soruGetir(){
   quiz.innerHTML = currentQuestion.soru;
    currentQuestion.cevaplar.forEach(cevap=>{
        let li = document.createElement('li');
        li.textContent = cevap;
        li.classList.add("list-group-item");
        answers.appendChild(li);

        li.addEventListener('click',soruSecme);
    });    
};

soruGetir();

function soruSecme(e){
    if(e.target.textContent == currentQuestion.dogruCevap){
        e.target.classList.add('success');
        score ++;
    }else{
        e.target.classList.add('danger');
    }
}

nextBtn.addEventListener('click',()=>{
    answers.innerHTML = '';
    questIndex++;
    currentQuestion = questions[questIndex];
    soruGetir();
})

previousBtn.addEventListener('click',()=>{
    answers.innerHTML = '';
    questIndex--;
    currentQuestion = questions[questIndex];
    soruGetir();
})








