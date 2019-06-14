$(document).ready(function(){
    $(function () {
        $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' });
      });
    $('.seat-trong').attr('title',"Ngồi cứng - 250.000đ");
    $('.seat-dangchon').attr('title',"Ngồi cứng - 250.000đ");
    $('.seat-daban').attr('title',"Đã bán");



    $('.dropdown-toggle').dropdown();

    $('#hoten-v1').on('keyup', function(){
      $('#hoten-dv').val($('#hoten-v1').val());
    });
    $("#hoten-v1").on('keyup', function(e) {
      var val = $(this).val();
     if (val.match(/[^a-zA-Z]/g)) {
         $(this).val(val.replace(/[^a-zA-Z]/g, ''));
     }
  });
    $('#cmnd-v1').on('keyup', function(){
      $('#cmnd-dv').val($('#cmnd-v1').val());
    });

    $('#cmnd-v1').on('keyup', function(){
      
      var length = $('#cmnd-v1').val().length;
      if(!(length==9 || length==11)){
        //$('#cf-cmnd-v1').text("Số CMND gồm 9 hoặc 11 chữ số");
        $('#cf-cmnd-v1').removeClass('hidden');
      } 
      if((length==9 || length==11)){
        $('#cf-cmnd-v1').addClass('hidden');
      }
    });

    $('#doituong-v1').on('change', function(){
      debugger;
      var dt= $('#doituong-v1 :selected').val();
      if(dt==2){
        $('#cmnd-v1').attr('placeholder','Số CMND của người bảo hộ');
      } else{
        $('#cmnd-v1').attr('placeholder','Số chứng minh nhân dân');
      }
    });
    $('#doituong-v2').on('change', function(){
      debugger;
      var dt= $('#doituong-v2 :selected').val();
      if(dt==2){
        $('#cmnd-v2').attr('placeholder','Số CMND của người bảo hộ');
      } else{
        $('#cmnd-v2').attr('placeholder','Số chứng minh nhân dân');
      }
    });
})