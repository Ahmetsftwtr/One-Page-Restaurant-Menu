var products = document.getElementById("products");
var categorylist = document.getElementById("categorylist");

window.onload = (event) => {


products.style.display = "none";

const categoryitem = document.querySelectorAll("#categoryitem");


categoryitem.forEach((item) =>
{
    item.addEventListener("click" ,function (ShowProducts)
    {
        var x = document.getElementById("product-head-title");
        x.textContent = item.dataset.category;
        document.getElementById("product-head-img").src = item.dataset.img;
        categorylist.style.display = "none";
        products.style.display = "block";

        var x2 = document.querySelectorAll("#product-title");
        x2.forEach((x2item) =>
        {
            x2item.textContent = item.dataset.category;
        })

        var x3 = document.querySelectorAll("#product-img");
        x3.forEach((x2item) =>
        {
            x2item.src = item.dataset.img;
        })
    })
})


  };



function GotoMain()
{
    categorylist.classList.add("category_animation");
    categorylist.style.display = "flex";
        products.style.display = "none";
}