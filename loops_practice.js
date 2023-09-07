// №1. Выведите с помощью цикла столбец чисел от 1 до 100.

for (let i = 1; i <= 100; i++) {
    console.log(i);
  }  

// №2. Выведите с помощью цикла столбец чисел от 100 до 1.

for (let i = 100; i >= 1; i--) {
    console.log(i);
  }  

// №3. Выведите с помощью цикла столбец четных чисел от 1 до 100.

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }  

// №4. Заполните массив 10-ю иксами с помощью цикла. 

let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push('x');
}
console.log(arr)

// №5. Заполните массив числами от 1 до 10 с помощью цикла. 

let arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push(i);
}

// №6. Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти. 

let arr = [2, 0, 3, 11, -1, 9, 16];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] < 10) {
    console.log(arr[i]);
  }
}

// №7. Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.

let arr = [3, 5, 10, 1, 0, 9, 11];
let has_5 = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 5) {
    has_5 = true;
    break;
  }
}
console.log(has_5);

// №8. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива. 

let arr = [3, 5, 10, 1, 0, 9, 11];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);


// №9. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива. 

let arr = [3, 5, 10, 1, 0, 9, 11];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i] ** 2;
}
console.log(sum);

// №10. Дан массив с числами. Найдите среднее арифметическое его элементов.

let arr = [3, 5, 10, 1, 0, 9, 11];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

let avg = sum / arr.length;
console.log(avg);

// №11. Напишите скрипт, который будет находить факториал числа.

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  let num = parseInt(prompt("Число: ")); 
  let result = factorial(num);
  console.log(result);
  
// №12. Заполните массив числами от 10 до 1 с помощью цикла.

let arr = [];
for (let i = 10; i >= 1; i--) {
  arr.push(i);
}

// №13. Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива. 

let arr = [-3, 5, -10, 1, 0, -9, 11];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum += arr[i];
  }
}
console.log(sum);

/* №14.  Дан массив числами, например:
    let arr = [10, 20, 30, 50, 235, 3000];
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5. */

let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
  let first_digit = String(arr[i])[0];
  if (first_digit === '1' || first_digit === '2' || first_digit === '5') {
    console.log(arr[i]);
  }
}

// №15. Дан массив с числами. Выведите элементы этого массива в обратном порядке. 

let arr = [10, 20, 30, 50, 235, 3000];

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

// №16. Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.

let arr = [0, 1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === i) {
    console.log(arr[i]);
  }
}

// №17. Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br. 

let arr = [3, 8, 12, 5, 0, 9, 11];

for (let i = 0; i < arr.length; i++) {
  document.write(arr[i] + '<br>');
}

// №18. Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.

let arr = [3, 8, 12, 5, 0, 9, 11];

for (let i = 0; i < arr.length; i++) {
  document.write('<p>' + arr[i] + '</p>');
}

// №19. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < days.length; i++) {
  if (i === 5 || i === 6) {
    document.write('<b>' + days[i] + '</b><br>');
  } else {
    document.write(days[i] + '<br>');
  }
}

// №20. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day. 

let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for (let i = 0; i < days.length; i++) {
  if (i === 'Четверг') {
    document.write('<i>' + days[i] + '</i><br>');
  } else {
    document.write(days[i] + '<br>');
  }
}

/* №21.  Дан следующий объект с работниками и их зарплатами:
let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
Увеличьте зарплату каждого работника на 10%. */

let obj = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};

for (let key in obj) {
  obj[key] *= 1.1;
}
console.log(obj)

// №22. Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400. 

let obj = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};

for (let key in obj) {
  if (obj[key] < 400 || obj[key] == 400) {
    obj[key] *= 1.1; 
  }
}
console.log(obj)

/* №23.  Даны следующие массивы:
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго. */

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj = {};

for (let i = 0; i < arr1.length; i++) {
  obj[arr1[i]] = arr2[i];
}
console.log(obj)

/* №24.  Дан следующий объект:
let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};

Найдите сумму ключей этого объекта и поделите ее на сумму значений. */

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};

let sum_keys = 0;
let sum_vals = 0;

for (let key in obj) {
  sum_keys += Number(key);
  sum_vals += obj[key];
}
console.log(sum_keys, sum_vals);

/* №25.  Дан следующий объект:
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

Запишите ключи этого объекта в один массив, а значения - в другой. */

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arr1 = []
let arr2 = []

for (let key in obj) {
  arr1.push(key)
  arr2.push(obj[key])
}

console.log(arr1, arr2)

/* №26.  Дан следующий объект:
let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};

Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. То есть у вас в результате получится вот такой массив:
[
	125,
	225,
	128,
	145,
	281,
]; */

let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
let arr = []

for (let key in obj) {
  if (String(obj[key]).charAt(0) == '1' || String(obj[key]).charAt(0) == '2' ) {
    arr.push(obj[key])
  }
}

console.log(arr)


/* №27.  Дан следующий массив:
let arr = ['a', 'b', 'c', 'd', 'e'];

Создайте из этого массива следующий объект:
{1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}; */

let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {}
for (let i = 0; i < arr.length; i++) {
  obj[i + 1] = arr[i]
}
console.log(obj);

/* №28.  Дан следующий массив:
let arr = ['a', 'b', 'c', 'd', 'e'];

Создайте из этого массива следующий объект:
{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; */

let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {}
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = i + 1 
}
console.log(obj);
