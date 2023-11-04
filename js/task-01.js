const categoriesList = document.getElementById("categories");

const listItems = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${listItems.length}`)

const categoriesData = [];
listItems.forEach(item => {
    const categoryTitle = item.querySelector("h2").textContent;
    const subCategories = item.querySelectorAll("li").length;
    categoriesData.push({category: categoryTitle, count: subCategories});
});

categoriesData.forEach(data => {
    console.log(`Category: ${data.category}`);
    console.log(`Elements: ${data.count}`);
});