function deleteItem1(elt){
    let sum = $('.son2Pricetotal').first().text() // lấy tổng số tiền dưới dạng string 
    let sumNumber = sum.replace(/\D/g,"") // xóa hết các kí tự không phải là số 
    let a = $(elt).prev().text() // lấy số tiền của item bị xóa dưới dạng string 
    let aNumber = a.replace(/\D/g,"") // xóa hết các kí tự không phải là số 
    sumFinal = parseInt(sumNumber) - parseInt(aNumber) //Trừ tổng số tiền cho số tiền item bị xóa 
    $('.son2Pricetotal').first().text(`${separator1000(sumFinal.toString())}đ`) // chuyển tổng số tiền thành string và thay vào vị trí ban đầu 
    $('.son2Pricetotal').last().text(separator1000(`${separator1000(sumFinal.toString())}đ`)) // chuyển tổng số tiền thành string và thay vào vị trí ban đầu 
    $(elt).parent().parent().parent().remove() // xóa item trong giỏ hàng 
    function separator1000(num){ // hàm điền thêm dấu chấm vào string ví dụ 3000000 thành 3.000.000
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
}
