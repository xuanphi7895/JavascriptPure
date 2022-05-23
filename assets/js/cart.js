//Biến khởi tạo localStorage
var productLocalStorage = [];
$(".addToCard").on('click', function() {
    window.localStorage.clear();
    var showItem = 0;
    //Lấy tổng số sản phẩm hiển thị trên Layout
    let products = $('.product-grid .product-item');
    //Lấy giá trị id được chọn
    let currentItemId = $(this).attr("data-id");


    //Tạo biến chứa thông tin product lưu trữ dữ liệu
    const productName = products[currentItemId - 1].getElementsByClassName("product_name")[0].innerText;
    const productPrice = products[currentItemId - 1].getElementsByClassName("product_price")[0].innerText;
    const productImage = products[currentItemId - 1].getElementsByClassName("product_image")[0].getElementsByTagName('img')[0].getAttribute('src');
    const productId = currentItemId;

    // Tìm sản phẩm đã được thêm trước đó
    //Tìm kiếm giá trị productId tương ứng trong array, nếu tìm thấy thêm số lượng sản phẩm.
    const duplicateProductIndex = listProductLocalStorage.filter(
        (data) => data.productId === productId
    );
    var quantity = 0;
    if (duplicateProductIndex) {

        console.log(duplicateProductIndex[0].productQuantity);

        listProductLocalStorage = listProductLocalStorage.splice(0, 1);
        quantity = duplicateProductIndex[0].productQuantity + 1;
    } else {
        quantity += 1;
    }
    var productAddToCart = {
        productName: productName,
        productPrice: productPrice,
        productId: productId,
        urlImage: productImage,
        productQuantity: quantity
    };

    //add Product to local storage
    productLocalStorage.push(productAddToCart);
    //Thêm 1 sản phẩm mới vào giỏ hàng, đếm giá trị hiển thị tăng lên 1.
    showItem = productLocalStorage.length;
    //Hiển thị số sản phẩm đã thêm vào giỏ hàng.
    $("#checkout_items").html(showItem);
    //Thêm mới vào localStorage
    window.localStorage.setItem("products", JSON.stringify(productLocalStorage));
    console.log(productLocalStorage);

});