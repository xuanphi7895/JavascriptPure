$(".checkout").on("click", function(e) {
    //Lấy thông tin được lưu trữ từ loacalStorage để hiển thị các sản phẩm đã được thêm
    var listProductLocalStorage = JSON.parse(
        window.localStorage.getItem("products")
    );
    console.log(listProductLocalStorage);
    $("#cartModal").modal("show");
    //Refresh page when add product
    $(".show-list-product").empty();
    //Update Cart
    updateCart(listProductLocalStorage);

    e.preventDefault();
});
//Có chức năng xóa thông tin sản phẩm.
$(".show-list-product").on("click", ".delete-item", function(event) {
    var id = $(this).data("id");
    console.log(id);
    //Tìm kiếm giá trị productId tương ứng trong array, nếu tìm thấy xóa giá trị đó đi.
    const valueRemove = listProductLocalStorage.filter(
        (data) => data.productId === id
    );
    console.log(listProductLocalStorage.splice(valueRemove, 1));
    listProductLocalStorage = listProductLocalStorage.splice(valueRemove, 1);

    //Refresh page when add product
    $(".show-list-product").empty();
    updateCart(listProductLocalStorage);
});

function updateCart(listProduct) {
    //Cập nhật sản phẩm được thêm mới vào Giỏ hàng
    $('.price').empty();
    var sumTotal = 0;
    $.each(listProduct, function(index, value) {
        //Tính tiền sản phẩm
        const tempPrice = value.productPrice * value.productQuantity;
        sumTotal = sumTotal + tempPrice;
        console.log(value);
        $(".show-list-product").append(`<tr>
        <td class="number"> ${index + 1}</td>
    <td class="w-25">
        <img src="/${value.urlImage}" class="img-fluid img-thumbnail" alt="${value.productName}" />
    </td>
    <td>${value.productName}</td>
    <td>${value.productPrice}</td>
    <td class="qty">
        <input type="text" class="form-control" id="input1" value="${value.productQuantity}" />
    </td>
    <td>178$</td>
    <td>
    <button class="delete-item btn btn-danger" data-id=${
      value.productId
    }  ><i class="fas fa-trash-alt"></i></button>
    </td>
    </tr>`);
    });

    $('.price').append('$ ' + sumTotal);
}