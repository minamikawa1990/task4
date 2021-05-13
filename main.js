'use strict'

{

    const todos = [
        {q: '質問1', c: ['a1','a2','a3','a4'], genre: 'A', l: 'Level1'},
        {q: '質問2', c: ['b1','b2','b3','b4'], genre: 'B', l: 'Level2'},
        {q: '質問3', c: ['c1','c2','c3','c4'], genre: 'C', l: 'Level3'},
    ];

    todos.forEach(todo => {
        console.log(todo.q);
    })
    
    const number = document.getElementById('number');
    const genre = document.getElementById('genre');
    const level = document.getElementById('level');
    const question = document.getElementById('question');
    const ul = document.getElementById('ul');

    let currentNum = 0;
    let score = 0;

    function displayFinal() {
        if (currentNum === todos.length - 1) {
            ul.textContent = '';
            number.textContent = `あなたの正解数は${score}です`;
            question.textContent = '再度挑戦したい場合は以下をクリック';
            const btn = document.createElement('button');
            btn.textContent = 'homeに戻る';
            ul.appendChild(btn);
            btn.addEventListener('click', () => {
                currentNum = 0;
                displayQuestion();
            })
        }
    }

    function checkAnswer(li) {
        if(li.textContent === todos[currentNum].c[0]) {
            score++;
        }
    }
    
    function displayQuestion() {
        ul.textContent = '';
        number.textContent = (` ${currentNum + 1}問目`);
        genre.textContent = todos[currentNum].genre;
        level.textContent = todos[currentNum].l;
        question.textContent = todos[currentNum].q;
        todos[currentNum].c.forEach(todo => {
            const li = document.createElement('li');
            const btn = document.createElement('button');
            btn.textContent = todo;
            li.appendChild(btn);
            ul.appendChild(li);
            li.addEventListener('click', () => {
                currentNum++;
                displayQuestion();
                checkAnswer(li);
                displayFinal();
            })
        })
    }

    displayQuestion();

    function getQuestion(items,array) {
        items.forEach(item => {
            array.push(item.question);
        })
    }

    async function getApi(num,i) {
        const res = await fetch('https://opentdb.com/api.php?amount=10');
        const items = await res.json();
        const results = items.results;
        const array = [];
        results.forEach(result => {
            array.push(result[num]);
        })
        return array;
        // console.log(array[i]);
        // const arr = array[i];
        // return arr
    }
    getApi('difficulty',2);
    // const numNum = getApi('difficulty',2);
    // console.log(numNum);

    
//     const li = document.createElement('li');
//     li.textContent = getApi('difficulty',2);
//     ul.appendChild(li);
//    console.log(getApi('difficulty',2));
//    getApi('question');

   
    


    
    



//     const question = document.getElementById('question');
//    const choices = document.getElementById('choices');
//    const btn = document.getElementById('btn');
//    const result = document.getElementById('result');
//    const scoreLabel = document.querySelector('#result > p');

//    const quizSet = [
//      {q: 'What is A?', c: ['A0','A1','A2']},
//      {q: 'What is B?', c: ['B0','B1','B2']},
//      {q: 'What is C?', c: ['C0','C1','C2']},
//    ];

//    let currentNum = 0;
//    let isAnswered;
//    let score = 0;

//    function shuffle(arr) {
//      for (let i = arr.length - 1; i > 0; i--) {
//        const j = Math.floor(Math.random() * (i + 1));
//        [arr[j], arr[i]] = [arr[i], arr[j]];
//       }
//       return arr;
//     }

//     function checkAnswer(li) {
//       if (isAnswered) {
//         return;
//       }
//       isAnswered = true;
//       if(li.textContent === quizSet[currentNum].c[0]){
//         li.classList.add('correct');
//         score++;
//       } else {
//         li.classList.add('wrong');
//       }

//       btn.classList.remove('disabled');
//     }

//     function setQuiz() {
//       isAnswered = false;
//       question.textContent = quizSet[currentNum].q;

//       while(choices.firstChild) {
//         choices.removeChild(choices.firstChild);
//       }

//       const shuffledChoices = shuffle([...quizSet[currentNum].c]);
//       shuffledChoices.forEach(choice => {
//         const li = document.createElement('li');
//         li.textContent = choice;
//         li.addEventListener('click', () => {
//           checkAnswer(li);
//         });
//         choices.appendChild(li);
//       });

//       if (currentNum === quizSet.length - 1) {
//         btn.textContent = 'Show Score';
//       }
//     }
    
//     setQuiz();
    
//     btn.addEventListener('click', () => {
//       if (btn.classList.contains('disabled')) {
//         return;
//       }
//       btn.classList.add('disabled');
//       if (currentNum === quizSet.length - 1) {
//         scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
//         result.classList.remove('hidden');
//       }
//       currentNum++;
//       setQuiz();
//     })

    

    


    
        




   
 

   

}


