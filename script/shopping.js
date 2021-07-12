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
    ["Macbook Air", 100, "IMG/mac1.jpg","Xám"],
    ["Imac 24 Inch", 100, "IMG/imac2.jpg","trắng"],
    ["Ipad 5", 300, "IMG/ipad.jpg","Đen"],
    ["Ipod Touch", 200, "IMG/ipod.jpg", "trắng"],
    ["Macbook Pro 2020", 400, "IMG/mac1.jpg","Đen"],
    ["Macbook pro 2021", 200, "IMG/mac2.jpg", "Đen"],
    ["Macbook 2022", 400, "IMG/mac1.jpg","Trắng"],
 
]

function load_img() {
    for (const [ten, gia, img_src] of myArr) {
        var anh = new Image();
        anh = [img_src];
    }
}

function showProduct() {
    for (const [ten, gia, img_src,color] of myArr) {

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
    // kiểm tra xem có tìm thấy không. Nếu không thì huỷ
    var tim_stt = false;


    for (const [ten, gia, img_src,color] of myArr) {
       var title =ten.toLowerCase()
        console.log(input_search, title);
        if (title.lastIndexOf(input_search) != -1 ) {
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
                       class="add-card-sp">Add to
                       card</button>
               </div>
           </a>
       </div>
   `
            tim_stt = true
        }
    }

    if (tim_stt == false) {
        noidung.innerHTML= "Không tìm thấy sản phẩm"
    }

}

function filterProDuct() {
    // alert("loc")
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






