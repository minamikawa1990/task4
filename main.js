'use strict'

{

    const todos = [
        {q: '質問1', c: ['a1','a2','a3','a4'], genre: 'A', l: 'Level1'},
        {q: '質問2', c: ['b1','b2','b3','b4'], genre: 'B', l: 'Level2'},
        {q: '質問3', c: ['c1','c2','c3','c4'], genre: 'C', l: 'Level3'},
    ];
    
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

    async function callApi() {
        const res = await fetch('https://opentdb.com/api.php?amount=10');
        const users = await res.json();
        console.log(users);
    }

    callApi();
    
    

    


    
        




   
 

   

}


