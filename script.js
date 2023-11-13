 const questions=[
    {
        question:'Which is the biggest animal in the world ?',
        options:[
            {
                answer:'Whale',
                correct:true

            },
            {
                answer:'qwert',
                correct:false
            },
            {
                answer:'zxcv',
                correct:false
            },
            {
                answer:'fghj',
                correct:false
            }
        ]
    },
    {
        question:'How many wonders are there in the world ?',
        options:[
            {
                answer:'asd',
                correct:false

            },
            {
                answer:' 7 ',
                correct:true
            },
            {
                answer:'zxcv',
                correct:false
            },
            {
                answer:'fghj',
                correct:false
            }
        ]
    },
    {
        question:'Which is the governing body for the cricket in the world ? ',
        options:[
            {
                answer:'asdf',
                correct:false

            },
            {
                answer:'qwert',
                correct:false
            },
            {
                answer:'International Cricket council',
                correct:true
            },
            {
                answer:'fghj',
                correct:false
            }
        ]
    },
]

const quest=document.getElementById('question');
const btn1= document.getElementsByClassName('btn');
const nxt=document.getElementById('nxt');
const btn2=Array.from(btn1);
const div= document.getElementById('options');
const rebtn=document.getElementById('restart');
rebtn.addEventListener('click', startquiz);

 let currentquestionindex=0;
 let score=0;
 let questionno=0;
 
 function startquiz(){
    currentquestionindex=0;
    score=0;
    div.style.display='block';
    rebtn.style.display='none';
    showquestion()
 }
  function showquestion(){
    quest.innerHTML=questions[currentquestionindex].question;
    let i=0;
    Array.from(btn1).forEach(btn=>{
       
        btn.innerHTML=questions[currentquestionindex].options[i].answer;
        if(questions[currentquestionindex].options[i].correct){
        btn.dataset.correct='true';
        }
        btn.addEventListener('click',selectd);
        i++;
       

    })
  }
  function selectd(e){
    let selectedbtn=e.target;
    if(selectedbtn.dataset.correct=='true'){
        selectedbtn.classList.add('correct');
        score++;
        
    }
    else{
        selectedbtn.classList.add('incorrect');
        
        
        }
        Array.from(btn1).forEach(btn=>{
            if(btn.dataset.correct=='true'){
               btn.classList.add('correct');
    
            }btn.disabled=true;
       

    });
   
    nxt.style.display='block';
}
nxt.addEventListener('click', handler); 

 function handler(){
    currentquestionindex++;
    Array.from(btn1).forEach(btn =>{
        btn.dataset.correct="";
        btn.classList.remove('correct','incorrect');
        btn.disabled=false;
     });
     nxt.style.display='none';
    if(currentquestionindex<questions.length){
       
        showquestion();
    }
    else{
        quest.innerHTML='Your done with quiz and your score is '+`${score}/${questions.length}`;
        div.style.display='none';
        rebtn.style.display='block';
        
        
        
    }
 }
 startquiz();