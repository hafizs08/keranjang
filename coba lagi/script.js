$(document).ready(function(){
    update_amounts();
    $('.qty, .price').on('keyup keypress blur change', function(e) {
        update_amounts();
    });
});
function update_amounts(){
    var sum = 0.0;
    var tes = 0;
    $('#myTable > tbody  > tr').each(function() {
        var qty = $(this).find('.qty').val();
        var price = $(this).find('.price').val();
        var amount = (qty*price)
        sum+=amount;
        tes+=qty;
        
        $(this).find('.amount').text(''+amount);
    });
    $('.total').text(sum);
    $('.totalB').text(tes);
    //console.log(qty);
}


//----------------for quantity-increment-or-decrement-------
var incrementQty;
var decrementQty;
var plusBtn  = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");
var incrementQty = plusBtn.click(function() {
    var $n = $(this)
    .parent(".button-container")
    .find(".qty");
    $n.val(Number($n.val())+1 );
    update_amounts();
});
var decrementQty = minusBtn.click(function() {
    var $n = $(this)
    .parent(".button-container")
    .find(".qty");
    var QtyVal = Number($n.val());
    if (QtyVal > 0) {
        $n.val(QtyVal-1);
    }
    update_amounts();
});

//select all
var checkboxes = document.querySelectorAll("input[type = 'checkbox']");
function checkAll(myCheckbox){
    if(myCheckbox.checked == true){
        checkboxes.forEach(function(checkbox){
            checkbox.checked = true;
        });
    }
    else{
        checkboxes.forEach(function(checkbox){
            checkbox.checked = false;
        });
    }
}

function getClick(str) {
    if (str.checked == true){
       document.getElementById("cek").value = 150000;
    
    }else if (str.checked == false){
    document.getElementById("cek").value = 0;
    }
    
}

function getClick2(str2) {
    if (str2.checked == true){
       document.getElementById("cek2").value = 75000;
    
    }else if (str2.checked == false){
    document.getElementById("cek2").value = 0;
    }  
}

function getClick3(str3) {
    if (str3.checked == true){
       document.getElementById("cek3").value = 50000;
    
    }else if (str3.checked == false){
    document.getElementById("cek3").value = 0;
    }  
}
function getClick4(str4) {
    if (str4.checked == true){
       document.getElementById("cek4").value = 300000;
    
    }else if (str4.checked == false){
    document.getElementById("cek4").value = 0;
    }  
}