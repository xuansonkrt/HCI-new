$(document).ready(function(){
    $(function () {
        $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' });
      });
    $('.seat-trong').attr('title',"Ngồi cứng - 250.000đ");
    $('.seat-dangchon').attr('title',"Ngồi cứng - 250.000đ");
    $('.seat-daban').attr('title',"Đã bán");



    $('.dropdown-toggle').dropdown();
})