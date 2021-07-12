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



(function remove_sp() {
    for (var i = 0; i < remove_cart.length; i++) {
        var button = remove_cart[i]
        button.addEventListener("click", function (event) {
            var button_remove = event.target
            button_remove.parentElement.parentElement.remove()
            updatecart()
        })
    }
})()


// thay đổi số lượng
for (var i = 0; i < quantity_input.length; i++) {
    var input = quantity_input[i];
    input.addEventListener("change", function (event) {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updatecart()
    })
}




// Thêm vào giỏ
function addProduct() {
    var add_cart = document.getElementsByClassName("add-card-sp");
    for (var i = 0; i < add_cart.length; i++) {
        var add = add_cart[i];

        add.addEventListener("click", function (event) {

            var button = event.target;
            var product = button.parentElement.parentElement;
            var img = product.parentElement.getElementsByClassName("card-img")[0].src
            var title = product.getElementsByClassName("card-title")[0].innerText;
            var price = product.getElementsByClassName("gia")[0].innerText;
            addItemToCart(title, price, img);

            // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
            modal.style.display = "block";
            updatecart();
        })
    }



}




function addItemToCart(title, price, img) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('hienthi-sp')[0];
    var cart_title = cartItems.getElementsByClassName('cart-item-title');
    for (var i = 0; i < cart_title.length; i++) {
        if (cart_title[i].innerText === title) {
            // alert('Sản Phẩm Đã Có Trong Giỏ Hàng');
            // break
              return;
        }
    }
    var cartRowContents = "";
    cartRowContents += `<div class="cart-item cart-column">`;
    cartRowContents += `<span class="cart-item-title">${title}</span>`;
    cartRowContents += ` <img class="cart-item-image" src="${img}" width="100" height="100">`
    cartRowContents += `</div>`;
    cartRowContents += `<div class="cart-item cart-column">`;
    cartRowContents += ` <span class="cart-price cart-column">${price}</span> <span>`;
    cartRowContents += ` <p class="cart-price cart-column">VND</p> `;
    cartRowContents += `</div>`;
    cartRowContents += `<div class="cart-item cart-column">`;
    cartRowContents += `<input class="cart-quantity-input" type="number" value="1">`;
    cartRowContents += `<button class="btn btn-danger" type="button">Xóa</button>`;
    cartRowContents += `</div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function (event) {
        var button_remove = event.target
        button_remove.parentElement.parentElement.remove()
        updatecart()
    })
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        } else {
            updatecart()
        }
    })
}



// update cart 
function updatecart() {
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
        

    }
    // hiển thị lên trên modal
    total = total + (price * quantity);
        document.getElementsByClassName("cart-total-price")[0].innerHTML = `${total} VNĐ`;
}







// thêm sản phẩm

for (var i = 0; i < remove_cart.length; i++) {
    var button = remove_cart[i]
    button.addEventListener("click", function () {
        var button_remove = event.target
        button_remove.parentElement.parentElement.remove()
        updatecart()

    })
}


myArr = [["mac1", 100, "IMG/mac1.jpg"], ["mac2", 100, "IMG/imac2.jpg"], ["mac3", 300, "IMG/ipad.jpg"]
    , ["mac2", 200, "IMG/ipod.jpg"], ["mac4", 400, "IMG/mac1.jpg"], ["mac5", 200, "IMG/mac2.jpg"], 
    ["mac6", 400, "IMG/mac1.jpg"], ["mac2", 300, "IMG/mac1.jpg"]
   
]

function load_img() {
    for (const [ten, gia, img_src] of myArr) {
        var anh = new  Image();
        anh= [img_src];
      }
}

function showProduct() {
    for (const [ten, gia, img_src] of myArr) {
       
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
                       <span class="gia">${gia} </span>
                       <span>VND</span>
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







function search_sp() {

    let noidung = document.getElementById("noidung");
    noidung.innerHTML = "";

    var input_search = document.getElementById("search-box").value;
    input_search.trim();
    if (input_search.length == 0) {
        alert("không được bỏ trống");
        return false;
    }
    input_search.toLowerCase();
    var tim_stt = false;
    for (const [ten, gia, img_src] of myArr) {
        if (ten == input_search) {
            noidung.innerHTML +=
                `<div class="list-card">
       <!-- card -->
       <div class="card">
           <a href="#">
               <img src="IMG/mac1.jpg" alt="card-img" class="card-img">
               <div class="card-body">
                   <div class="thongtin-title">
                       <h5 class="card-title">${ten}</h5>
                       <span class="gia">${gia} </span>
                       <span>VND</span>
                   </div>
                   <button id="add-card"
                       class="add-card-sp">Add to
                       card</button>
               </div>
           </a>
       </div>
   </div>`
            document.getElementsByClassName("card-img")[0].src = img_src;
            tim_stt = true
        }
    }

    if (tim_stt == false) {
        alert("không tìm thấy sản phẩm")
    }


}

 function locgia() {
    // alert("loc")
    var loc_gia = document.getElementsByTagName("select")[0].value;
    var hienthi_sp = document.getElementById("noidung");
    var gan_block = hienthi_sp.getElementsByClassName("list-card")[0];
    let i = 0;
    for (const [ten, gia, img_src] of myArr) {
        if (loc_gia == gia) {
               if (i== 0) {
                   i++;
                var sl_xoa=  document.getElementsByClassName("card")                
                for (let i = 0; i < sl_xoa.length; i++) {
                    let xoa = document.getElementsByClassName("card")[i];
                    xoa.style.display = "none";
                }
               }
               
            
            gan_block.innerHTML += `
    <!-- card -->
       <div class="card">
           <a href="#">
               <img src="IMG/mac1.jpg" alt="card-img" class="card-img">
               <div class="card-body">
                   <div class="thongtin-title">
                       <h5 class="card-title">${ten}</h5>
                       <span class="gia">${gia} </span>
                       <span>VND</span>
                   </div>
                   <button id="add-card"
                       class="add-card-sp" onclick="addProduct()">Add to
                       card</button>
               </div>
           </a>
       </div>
    `;
            document.getElementsByClassName("card-img")[0].src = img_src;

        }

    }
    if (loc_gia == "default") {
        i=0;
        var sl_xoa=  document.getElementsByClassName("card")                
        for (let i = 0; i < sl_xoa.length; i++) {
            let xoa = document.getElementsByClassName("card")[i];
            xoa.style.display = "none";
        }
      
        showProduct();

    }
}






