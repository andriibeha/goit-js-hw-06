const categoriesListRef = document.querySelector('#categories');
console.log('Number of categories: ', categoriesListRef.children.length);

const categoriesListTitleRef = document.querySelectorAll('.item h2');

const categoriesListNameRef = document.querySelectorAll('.item ul')

for (let index = 0; index < categoriesListTitleRef.length; index += 1) {

    console.log(`Category: ${categoriesListTitleRef[index].textContent}`);
    console.log(`Elements: ${categoriesListNameRef[index].children.length}`)

};


