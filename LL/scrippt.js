// تحقق مما إذا كان هناك بيانات محفوظة في Local Storage
if (localStorage.getItem('cartItems')) {
    // استرجاع العناصر المحفوظة من Local Storage
    var cartItems = JSON.parse(localStorage.getItem('cartItems'));

    // عرض العناصر في العربة
    var cartList = document.getElementById("cart-items");
    var totalPrice = 0;

    // مسح العربة الحالية وإعادة بنائها باستخدام البيانات المحفوظة
    while (cartList.firstChild) {
        cartList.removeChild(cartList.firstChild);
    }

    cartItems.forEach(function (product) {
        var item = document.createElement("li");
        item.textContent = product.name + ": $" + product.price;
        cartList.appendChild(item);
        totalPrice += product.price;
    });

    var totalPriceElement = document.getElementById("total-price");
    totalPriceElement.textContent = "السعر الإجمالي: $" + totalPrice;
}

