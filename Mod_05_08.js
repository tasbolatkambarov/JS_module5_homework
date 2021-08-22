// Задание 8. Ассоциативные массивы
// Создайте произвольный массив Map. 
// Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.

let map = new Map([
    ['x', 'y'],
    ['1', '2'],
    ['true', 'false']
  ]);
  
  for (let [key, value] of map) {
    console.log(`Ключ — ${key}, значение — ${value}`)
  }