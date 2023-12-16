// JavaScript to handle adding items to the cart

const cartItems = [];

function addToCart(productName, price) {
    cartItems.push({ productName, price });
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    cartItemsElement.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        cartItemsElement.innerHTML += `
            <div class="cart-item">
                <p>${item.productName}</p>
                <p>$${item.price}</p>
            </div>
        `;
        total += item.price;
    });

    cartTotalElement.textContent = total;
}
// JavaScript to handle displaying multiple product images
const productImages = document.querySelectorAll('.product-images img');

productImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        // Reset all images to their default opacity
        productImages.forEach(img => img.style.opacity = 1);

        // Set the clicked image to full opacity
        image.style.opacity = 1;

        // You can add additional functionality here, such as displaying the clicked image in a larger view.
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const orderForm = document.getElementById('order-form');

    orderForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get order details from the form
        const customerName = document.getElementById('customer-name').value;
        const customerAddress = document.getElementById('customer-address').value;
        const quantity = document.getElementById('quantity').value;

        // Create a message with the order details
        const message = `New Order:\nProduct Name: Product 5\nCustomer Name: ${customerName}\nDelivery Address: ${customerAddress}\nQuantity: ${quantity}`;

        // Replace 'your-whatsapp-number' with your actual WhatsApp number
        const whatsappNumber = '9557978110';
        
        // Generate the WhatsApp link with the message
        const whatsappLink = `https://wa.me/${9557978110}?text=${encodeURIComponent(message)}`;

        // Open a new window or tab with the WhatsApp link
        window.open(whatsappLink);

        // Optionally, you can reset the form fields after submission
        orderForm.reset();
    });
});