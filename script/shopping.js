// Modal
var modal = document.getElementById("myModal");
var BTN_GioHang = document.getElementById("btn-giohang");
var close = document.getElementsByClassName("close")[0];
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];

BTN_GioHang.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}

close_footer.onclick = function () {
    modal.style.display = "none";
}

order.onclick = function () {
    alert("Đơn hàng đặt thành công")
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





var remove_cart = document.getElementsByClassName("btn-danger");
var quantity_input = document.getElementsByClassName("cart-quantity-input");
var remove_cart = document.getElementsByClassName("btn-danger");



var myArr = [
    ["Macbook Air", 100, "IMG/mac1.jpg", "Xám"],
    ["Imac 24 Inch", 100, "IMG/imac2.jpg", "trắng"],
    ["Ipad 5", 300, "IMG/ipad.jpg", "Đen"],
    ["Ipod Touch", 200, "IMG/ipod.jpg", "trắng"],
    ["Macbook Pro 2020", 400, "IMG/mac1.jpg", "Đen"],
    ["Macbook pro 2021", 200, "IMG/mac2.jpg", "Đen"],
    ["Macbook 2022", 400, "IMG/mac1.jpg", "Trắng"],

]

function load_img() {
    for (const [ten, gia, img_src] of myArr) {
        var anh = new Image();
        anh = [img_src];
    }
}



// Render sản phẩm 
function showProduct() {
    for (const [ten, gia, img_src, color] of myArr) {
        var hienthi_sp = document.getElementById("noidung");
        var gan_block = hienthi_sp.getElementsByClassName("list-card")[0];
        gan_block.innerHTML += `
    <!-- card -->
       <div class="card">
           <a href="#">
               <img src="${img_src}" alt="card-img" class="card-img" id="img_sp">
               <div class="card-body">
                   <div class="thongtin-title">
                       <h5 class="card-title">${ten}</h5>
                       <span><b>Màu ${color}</b></span>
                       <span>$</span>
                       <span class="gia">${gia} </span>
                   </div>
                   <button id="add-card"
                       class="add-card-sp" onclick="addProduct()">Add to
                       card</button>
               </div>
           </a>
       </div>
       `;
    }
}






// search sản phẩm
function search_sp() {
    // xoá nội dung
    var hienthi_sp = document.getElementById("noidung");
    var gan_block = hienthi_sp.getElementsByClassName("list-card")[0];
    gan_block.innerHTML = "";
    console.log(gan_block);
    // lấy thông tin
    var input_search = document.getElementById("search-box").value;
    input_search.trim();

    if (input_search.length == 0) {
        alert("search không được bỏ trống");
        return false;
    }

    // chuyền để so sánh
    input_search.toLowerCase();

    // kiểm tra trạng thái
    var tim_stt = false;
    // kiểm tra xem có tìm thấy không. Nếu không thì huỷ
    for (const [ten, gia, img_src, color] of myArr) {
        var title = ten.toLowerCase()
        if (title.lastIndexOf(input_search) != -1) {
            // gan_block.style.display = "block";
            gan_block.innerHTML +=
                `
       <!-- card -->
       <div class="card">
           <a href="#">
               <img src="${img_src}" alt="card-img" class="card-img">
               <div class="card-body">
                   <div class="thongtin-title">
                       <h5 class="card-title">${ten}</h5>
                       <span><b>Màu ${color}</b></span>
                       <span>$</span>
                       <span class="gia">${gia} </span>
                   </div>
                   <button id="add-card"
                   class="add-card-sp" onclick="addProduct()">Add to
                   card</button>
               </div>
           </a>
       </div>
   `
            tim_stt = true
        }
    }

    if (tim_stt == false) {
        noidung.innerHTML = `<h3>Không tìm thấy sản phẩm </h3><br>
            <a href="../index.html"><button class="back"><i class="fas fa-arrow-left"></i>Trở về trang chủ<button>
        `

    }

}




// lọc sản phẩm
function filterProDuct() {
    var filter_Value = document.getElementsByTagName("select")[0].value;
    var hienthi_sp = document.getElementById("noidung");
    var gan_block = hienthi_sp.getElementsByClassName("list-card")[0];
    let i = 0;
    for (const [ten, gia, img_src, color] of myArr) {
        if (filter_Value == gia || color.indexOf(filter_Value) != -1) {
            if (i == 0) {
                i++;
                var sl_xoa = document.getElementsByClassName("card")
                for (let i = 0; i < sl_xoa.length; i++) {
                    let xoa = document.getElementsByClassName("card")[i];
                    xoa.style.display = "none";
                }
            }


            gan_block.innerHTML += `
    <!-- card -->
       <div class="card">
           <a href="#">
               <img src="${img_src}" alt="card-img" class="card-img">
               <div class="card-body">
                   <div class="thongtin-title">
                       <h5 class="card-title">${ten}</h5>
                       <span><b>Màu ${color}</b></span>
                       <span>$</span>
                       <span class="gia">${gia} </span>
                   </div>
                   <button id="add-card"
                       class="add-card-sp" onclick="addProduct()">Add to
                       card</button>
               </div>
           </a>
       </div>
    `;

        }

    }
    // chê độ mặc định sẽ xoá tất sản phẩm đã lọc và hiển thị tất sản phẩm
    if (filter_Value == "default") {
        i = 0;
        var sl_xoa = document.getElementsByClassName("card")
        for (let i = 0; i < sl_xoa.length; i++) {
            let xoa = document.getElementsByClassName("card")[i];
            xoa.style.display = "none";
        }

        showProduct();

    }
}


function addProduct() {

    var add_cart = document.getElementsByClassName("add-card-sp");
    // lặp qua tất cả phần tử có Add sp
    for (var i = 0; i < add_cart.length; i++) {
        var add = add_cart[i];
        // lắng nghe xem card nào đã click
        add.addEventListener("click", function (event) {
            var button = event.target;
            var product = button.parentElement.parentElement;
            var src_img = product.parentElement.getElementsByClassName("card-img")[0].src
            var titleProduct = product.getElementsByClassName("card-title")[0].innerText;
            var priceProdct = product.getElementsByClassName("gia")[0].innerText;
            // show modol while click add
            modal.style.display = "block";
            showProductToModal(src_img, titleProduct, priceProdct);
        })
    }

}


function showProductToModal(src_img, titleProduct, priceProdct) {

    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('hienthi-sp')[0];
    var cart_title = cartItems.getElementsByClassName('cart-item-title');
    var dem= 0;
    for (let i = 0; i < cart_title.length; i++) {
        if (cart_title[i].innerText === titleProduct ) {
                console.log(cart_title[i].innerText,"tt:"+titleProduct);
            // alert('Sản Phẩm Đã Có Trong Giỏ Hàng');
            return ;
           
        }
    }

    var cartRowContents = "";
    cartRowContents += `<div class="cart-item cart-column">`;
    cartRowContents += `<span class="cart-item-title">${titleProduct}</span>`;
    cartRowContents += ` <img class="cart-item-image" src="${src_img}" width="100" height="100">`
    cartRowContents += `</div>`;
    cartRowContents += `<div class="cart-item cart-column">`;
    cartRowContents += ` <p class="gia_md">$</p> `;
    cartRowContents += ` <span class="cart-price cart-column">${priceProdct}</span> <span>`;
    cartRowContents += `</div>`;
    cartRowContents += `<div class="cart-item cart-column">`;
    cartRowContents += `<input class="cart-quantity-input" type="number" value="1" min="1">`;
    cartRowContents += `<button class="btn btn-danger" type="button" >Xóa</button>`;
    cartRowContents += `</div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',
        function (event) {
            var button_remove = event.target;
            button_remove.parentElement.parentElement.remove();
        })

    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        } else {
            updateCard();
        }
    })

    updateCard();

    var btn_remove = cartRow.getElementsByClassName("cart-price");
    console.log(btn_remove);
}



// add sp vào giỏ hàng 
function updateCard() {
    var cart_item = document.getElementsByClassName("hienthi-sp")[0];
    var cart_rows = cart_item.getElementsByClassName("cart-row");
    var total = 0;

    for (var i = 0; i <= cart_rows.length; i++) {
        var cart_row = cart_rows[i];
        var price_item = cart_row.getElementsByClassName("cart-price")[0];
        var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0];
        var price = parseFloat(price_item.innerText)
        var quantity = quantity_item.value;
        quantity = parseFloat(quantity);
        if (price == 0) {
            document.getElementsByClassName("cart-total-price")[0].innerHTML = `0 VNĐ`;

        } else {
            total = total + (price * quantity);
            document.getElementsByClassName("cart-total-price")[0].innerHTML = `$ ${total}`;
        }
    }
}












