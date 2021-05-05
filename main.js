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
            })
        })
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

    displayQuestion();

    
        




    // })

    // const ul = document.querySelector('ul');
    // const question = document.getElementById('question');
    // question.textContent = '問題';
    // const selections = document.querySelectorAll('ul > li');
    // console.log(selections);
    // selections.forEach(select => {
    //     select.addEventListener('click', () => {
    //         select.textContent = '達磨';
    //     })
        
    // });

    // var obj = ['pon-poko', 'kon-kon', 'nyan-nyan' ];
    // var obj = { tanuki:'pon-poko', kitsune:'kon-kon', neko:'nyan-nyan' };
    // Object.keys(obj).forEach(item => {
    //     console.log(item);
    // });


    

    
        // const res = await fetch('https://opentdb.com/api.php?amount=10');
        // const users = await res.json();
        // console.log(users);
        // // users.forEach(user => {
        // //     console.log(user);
        // // });
    
    // async function callApi() {
    //     const res = await fetch('https://opentdb.com/api.php?amount=10');
    //     const users = await res.json();
    //     // console.log(users);
    //     for(let i = 0; i === users.length; i++) {
    //         const user = users[i];
    //         console.log(user);
    //     }
    //     // Object.keys(users).forEach(user =>{
    //     //     console.log(user);
    //     // });
    //     // console.log(users[0].type);
    //     // users.forEach(user =>{
    //     //     console.log(user);
    //     // });
    // }

    // let url = 'https://opentdb.com/api.php?amount=10';

    const img = document.getElementById(image);
    const  url = 'https://dog.ceo/api/breeds/image/random';
    const options = {
        method: 'GET'
    };

    // const fetchTest = fetch(url, options);
    // console.log(fetchTest);

    // const fetchTest2 = fetch(url, options)
    // .then( response => response.json());
    // console.log(fetchTest2.message);

    function getDogImage(url, options) {
        return fetch(url, options)
        .then(response => response.json());
    }

    async function getImage(url, options) {
      const response = await getDogImage(url, options);
      console.log(response.message);
      const image = document.createElement('img');
      image.src = response.message;
      img.appendChild(image);
    }

    getImage(url, options);



    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     });

    



    

    // callApi();


}


