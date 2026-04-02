// Products.html – тауар қосу
const productForm = document.getElementById("productForm");
const productTableBody = document.querySelector("#productTable tbody");

productForm?.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;

    if(name && price && quantity){
        const row = document.createElement("tr");
        row.innerHTML = `<td>${name}</td><td>${price}</td><td>${quantity}</td>`;
        productTableBody.appendChild(row);

        productForm.reset();
        alert("Тауар қосылды!");
    }
});

// Sales.html – сатуды бастау
const sellBtn = document.getElementById("sellBtn");
sellBtn?.addEventListener("click", function() {
    alert("Сату басталды!");
});

// Index.html – басты бет кнопкасы
document.querySelector(".btn")?.addEventListener("click", function() {
    alert("Жүйе іске қосылды!");
});