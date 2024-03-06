// Створюємо новий об'єкт XMLHttpRequest
var xhr = new XMLHttpRequest();

// Указуємо метод запиту та шлях до файлу
xhr.open("GET", "10m.txt", true);

// Встановлюємо обробник події, який буде викликаний при успішному завершенні запиту
xhr.onload = function () {
  if (xhr.status === 200) {
    // Отримуємо вміст файлу
    var fileContent = xhr.responseText;

    // Розбиваємо рядок на масив чисел
    var numbersArray = fileContent.split("\n").map(Number);

    // Знаходимо максимальне число в масиві за допомогою циклу
    var maxNumber = numbersArray[0];
    for (var i = 1; i < numbersArray.length; i++) {
      if (numbersArray[i] > maxNumber) {
        maxNumber = numbersArray[i];
      }
    }

    // Виводимо максимальне число в консоль
    console.log("Максимальне число в файлі:", maxNumber);

    // Знаходимо мінімальне число в масиві за допомогою циклу
    var minNumber = numbersArray[0];
    for (var i = 1; i < numbersArray.length; i++) {
      if (numbersArray[i] < minNumber) {
        minNumber = numbersArray[i];
      }
    }

    // Виводимо мінімальне число в консоль
    console.log("Мінімальне число в файлі:", minNumber);

    // Сортуємо масив чисел
    numbersArray.sort(function (a, b) {
      return a - b;
    });

    // Знаходимо медіану
    var median;
    var length = numbersArray.length;

    if (length % 2 === 0) {
      // Якщо кількість елементів парна, беремо середнє з двох центральних значень
      var middle1 = numbersArray[length / 2 - 1];
      var middle2 = numbersArray[length / 2];
      median = (middle1 + middle2) / 2;
    } else {
      // Якщо кількість елементів непарна, беремо центральне значення
      median = numbersArray[Math.floor(length / 2)];
    }

    // Виводимо медіану в консоль
    console.log("Медіана в файлі:", median);

    // Обчислюємо суму всіх чисел в масиві
    var sum = numbersArray.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);

    // Обчислюємо середнє арифметичне
    var average = sum / numbersArray.length;

    // Виводимо середнє арифметичне в консоль
    console.log("Середнє арифметичне в файлі:", average);

    // Знаходимо найдовшу зростаючу послідовність
    var currentSequence = [numbersArray[0]];
    var longestSequence = [];

    for (var i = 1; i < numbersArray.length; i++) {
      if (numbersArray[i] > numbersArray[i - 1]) {
        currentSequence.push(numbersArray[i]);
      } else {
        // Якщо послідовність закінчилась, порівнюємо її з найдовшою
        if (currentSequence.length > longestSequence.length) {
          longestSequence = currentSequence.slice();
        }
        // Починаємо нову послідовність
        currentSequence = [numbersArray[i]];
      }
    }

    // Порівнюємо останню послідовність з найдовшою
    if (currentSequence.length > longestSequence.length) {
      longestSequence = currentSequence.slice();
    }

    // Виводимо найдовшу зростаючу послідовність в консоль
    console.log("Найдовша зростаюча послідовність:", longestSequence);

    // Знаходимо найдовшу зменшувальну послідовність
    var currentSequence = [numbersArray[0]];
    var longestSequence = [];

    for (var i = 1; i < numbersArray.length; i++) {
      if (numbersArray[i] < numbersArray[i - 1]) {
        currentSequence.push(numbersArray[i]);
      } else {
        // Якщо послідовність закінчилась, порівнюємо її з найдовшою
        if (currentSequence.length > longestSequence.length) {
          longestSequence = currentSequence.slice();
        }
        // Починаємо нову послідовність
        currentSequence = [numbersArray[i]];
      }
    }

    // Порівнюємо останню послідовність з найдовшою
    if (currentSequence.length > longestSequence.length) {
      longestSequence = currentSequence.slice();
    }

    // Виводимо найдовшу зменшувальну послідовність в консоль
    console.log("Найдовша зменшувальна послідовність:", longestSequence);
  }
};

// Встановлюємо обробник події для випадку помилки
xhr.onerror = function () {
  console.error("Помилка при читанні файлу");
};

// Відправляємо запит
xhr.send();
