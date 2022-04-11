/* Напиши скрипт, який:

Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль
текст заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).

ВИВЕСТИ:
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5*/

const categoriesListRef = document.querySelector('#categories');
console.log('Number of categories: ', categoriesListRef.children.length);

const categoriesListTitleRef = document.querySelectorAll('.item h2');

const categoriesListNameRef = document.querySelectorAll('.item ul')

for (let index = 0; index < categoriesListTitleRef.length; index += 1) {

    console.log(`Category: ${categoriesListTitleRef[index].textContent}`);
    console.log(`Elements: ${categoriesListNameRef[index].children.length}`)

};


