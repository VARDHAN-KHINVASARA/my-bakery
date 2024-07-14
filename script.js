function orderProduct(productName) {
    document.getElementById('productName').value = productName;
    document.getElementById('order-form').style.display = 'block';
}

function submitOrder(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById('orderForm'));

    // Here you would send the form data to the backend using fetch or similar
    // For now, let's just log it to the console
    console.log('Order Submitted', Object.fromEntries(formData.entries()));

    alert('Order submitted successfully!');
    document.getElementById('orderForm').reset();
    document.getElementById('order-form').style.display = 'none';
}