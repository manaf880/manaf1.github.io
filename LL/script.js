var products = [
    { name: "منتج 1", price: 10 },
    { name: "منتج 2", price: 20 },
    // أضف المزيد من المنتجات هنا
];

// متغير لتخزين العربة
var cart = [];

// دالة لإضافة منتج إلى العربة
function addToCart(productIndex) {
    cart.push(products[productIndex]);
    updateCart();
}

// دالة لتحديث العربة وحساب السعر الإجمالي
function updateCart() {
    var cartList = document.getElementById("cart-items");
    var totalPrice = 0;

    // مسح العربة الحالية وإعادة بنائها
    while (cartList.firstChild) {
        cartList.removeChild(cartList.firstChild);
    }

    cart.forEach(function (product) {
        var item = document.createElement("li");
        item.textContent = product.name + ": $" + product.price;
        cartList.appendChild(item);
        totalPrice += product.price;
    });

    var totalPriceElement = document.getElementById("total-price");
    totalPriceElement.textContent = "السعر الإجمالي: $" + totalPrice;
}

// استدعاء دالة تحديث العربة
updateCart();
