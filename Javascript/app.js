const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");

const searchHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();

  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const filterhandler = (event) => {
  const filter = event.target.dataset.filter;
};

searchInput.addEventListener("keyup", searchHandler);
buttons.forEach((button) => {
  button.addEventListener("click", filterhandler);
});
