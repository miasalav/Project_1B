$(document).ready(function(){

     $('.product-container').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
 
 $('#cart-items').hide();

$('.product-div').on("click", function(e) {  
     var sale = $(this).data("sale");
     var price = $(this).data("price");
     var discount = $(this).data("discount");
     var discountPrice = (price - discount);
          
     if(sale == true){
         alert("this product is on sale original price: " + price + " discount price: " + discountPrice);
     }else
     {
         alert("this product is not on sale");
     };
  
     $('#cart-items').show();
     var currentTotal = parseInt($('#cart-items').html());
     var newTotal = currentTotal + 1;
     $('#cart-items').text(newTotal);    
 
    });


    console.log("email field's value is" + email.value);
        console.log('email fields value is = ' + document.getElementById("email").type);
       // console.log('');

     

 });

 