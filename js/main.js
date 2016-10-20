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
 
 $('#cart-num').hide();

function buildProduct(result){


   for(i in result.products){

    var clone = $('.product-div').eq(0).clone();

    var productName = (result.products[i].name);
    var productImg = (result.products[i].image);
    var regPrice = (result.products[i].regularPrice);
    var salePrice = (result.products[i].salePrice);

    $(clone).children('a').children('img').attr("src", productImg); 
       // $('article').children('img').attr("src", final_image);
    $(clone).children('a').children('h5').html(productName);
    $(clone).children('a').children('p').html(salePrice);
        
    $('.product-container').append(clone);

    //console.log(productName, productImg, regPrice, salePrice);

    

     }

     $('.product-div').on("click", function(e) {  
    e.preventDefault();

    console.log('click works');

    var sale = $(this).data("sale");
     var price = $(this).data("price");
     var discount = $(this).data("discount");
     var discountPrice = (price - discount);

     console.log('click works');
          
     if(sale == true){
         alert("this product is on sale original price: " + price + " discount price: " + discountPrice);
     }else
     {
         alert("this product is not on sale");
     };
  
     $('#cart-num').show();
     var currentTotal = parseInt($('#cart-num').html());
     var newTotal = currentTotal + 1;
     $('#cart-num').text(newTotal); 

     })


     $('.menu-img').on("click", function(e) { 
     })


}
var url = "http://api.remix.bestbuy.com/v1/products((categoryPath.id=abcat0501000))?apiKey=8ccddf4rtjz5k5btqam84qak&format=json&show=image,name,regularPrice,salePrice";
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        buildProduct(result);
             
    }).fail(function(err) {
        throw err;
    });
    

     
 });

 