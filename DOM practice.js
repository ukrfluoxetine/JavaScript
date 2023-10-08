//№1 Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.

let input = document.querySelector('input'); 
let p = document.querySelector('p');

input.addEventListener('blur', function() {
    p.textContent += this.value;
})

//№2 Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.

let button = document.querySelector('button');
let p = document.querySelector('p');
let sum = 0;

button.addEventListener('click',function func() {
    let inputList = document.querySelectorAll('input');
    inputList.forEach(function(input) {
        sum += parseInt(input.value);
    })
    p.textContent = sum;

    this.removeEventListener('click',func)
})

//№3 Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа. 

let input = document.querySelector('input');

input.addEventListener('blur', function() {
    function getNumbersSum(num){
        return num.toString().split('').reduce(function(a, b) {
            return +a + +b;
        })
   }

   console.log(getNumbersSum(input.value))
})

// №4 Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).

let input = document.querySelector('input');

input.addEventListener('blur',function() {
    let inputNumbersList = input.value.split(',').map(el => Number(el));
    let sum = 0;
    for (const num of inputNumbersList) {
        sum += num;
    }
    let avg = sum/inputNumbersList.length;
    console.log(avg)
})

// №5 Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута. 

let inputList = document.querySelectorAll('input')

inputList[0].addEventListener('blur', function() {
    let fio = inputList[0].value.split(' ');
    inputList[1].value = fio[0];
    inputList[2].value = fio[1];
    inputList[3].value = fio[2];
})

// №6 Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом,
// введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте). 

let input = document.querySelector('input');

input.addEventListener('blur', function() {
    let fio = input.value.split(' ');
    fio = fio.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    input.value = fio.join(' ');
})

// №7 Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.

let input = document.querySelector('input')

input.addEventListener('blur', function() {
    console.log(input.value.split(' ').length);
})

// №8 Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31. 

input = document.querySelector('input');

input.addEventListener('blur',function() {
    string = this.value.split('.');
    input.value = string.reverse().join('-');
})

// №9 Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).

let input = document.querySelector('input');
let button = document.querySelector('button')

button.addEventListener('click',function() {
    if (input.value == input.value.split('').reverse().join('')) {
        console.log(true);
    }
    else {console.log(false);}
})

// №10 Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.

let input = document.querySelector('input');

input.addEventListener('blur', function() {

    if ('3' in input.value.split('')) {
        console.log(true);
    }

    else {console.log(false);}
})

// №11 Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.

let pList = document.querySelectorAll('p');
let button = document.querySelector('button');

button.addEventListener('click',function () {
    for (let i = 0; i < pList.length; i++) {
        pList[i].textContent += i + 1; 
    }
})

// №12 Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.

let aList = document.querySelectorAll('a');

for (let i = 0; i < aList.length; i++) {
    aList[i].textContent += '(' + aList[i].href + ')';
}

// №13 Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).

let aList = document.querySelectorAll('a');

var elem = document.querySelectorAll('a');
for ( var i = 0; i < elem.length; i++ ) {
    if (elem[i].href.indexOf('http://') === 0) {
        elem[i].append('→')
    }
}

// №14 Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится. 

let pList = document.querySelectorAll('p')

for (const p of pList) {
    p.addEventListener('click',function() {
        this.textContent = Number(this.textContent) ** 2;
    })
}

// №15 Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату. 

let daysOfWeek = { 0: 'Воскресенье', 1: 'Понедельник', 2: 'Вторник', 
3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота'};
    
let input = document.querySelector('input');

input.addEventListener('blur', function () {
    let dateArray = input.value.split('.');
    let date = new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
    console.log('date array at 1: ', dateArray[1]);
    let dayOfWeek = daysOfWeek[date.getDay()];
    console.log(dayOfWeek);
});

// №16 Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля. 

let input = document.querySelector('input');
let buttonsArray = document.querySelectorAll('button');

let [plusButt, minusButt] = buttonsArray;

plusButt.addEventListener('click', function() {
    input.value = Number(input.value) + 1;   
});

minusButt.addEventListener('click', function() {
    if (input.value <= 0) {
        input.value = 0;
    } else {
        input.value = Number(input.value) - 1;   
    }
});

// №18 На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста.

let divsArray = document.querySelectorAll('div');

for (const div of divsArray) {
    div.textContent = div.textContent.slice(0, 10) + '...';
}

// №19 Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут. 

let input = document.querySelector('input'), 
button = document.querySelector('button'),
result = '',
chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

button.addEventListener('click', function() {
    for (let i = 0; i < 8; i++) {
        input.value += chars.charAt(Math.floor(Math.random() * chars.length)); 
    }
})

// №20 Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.

let input = document.querySelector('input');
let button = document.querySelector('button');


button.addEventListener('click', function() {
    let inputArray = input.value.split('');
    let shuffledArray = [...inputArray];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    input.value = shuffledArray.join('');
})

// №21 Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. По клику на кнопку выведите в абзац температуру в градусах Цельсия. 

let input = document.querySelector('input');
input.type = "number";
let button = document.querySelector('button');
let p = document.querySelector('p');

button.addEventListener('click', function() {
    p.textContent = input.value * 1.8 + 32;
})

// №22 Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.

let input = document.querySelector('input');
let button = document.querySelector('button');
let p = document.querySelector('p');

button.addEventListener('click', function() {
    let factorial = 1;
    for (let i = input.value; i > 1; i--) {
        factorial *= i; 
    }
    p.textContent = factorial;
})

// №23 Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац. 

let inputList = document.querySelectorAll('input');
let button = document.querySelector('button');
let p = document.querySelector('p');

let [input1, input2, input3] = inputList;

button.addEventListener('click', function() {
    let a = parseFloat(input1.value);
    let b = parseFloat(input2.value);
    let c = parseFloat(input3.value);

    let discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        p.textContent = `x1 = ${x1}, x2 = ${x2}`;
    } else if (discriminant === 0) {
        let x = -b / (2 * a);
        p.textContent = `x = ${x}`;
    } else {
        p.textContent = 'нет корней';
    }
});

