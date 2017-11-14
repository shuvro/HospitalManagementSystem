var currentIndex = 0,
  items2 = $('.slider-container2 div'),
  itemAmt2 = items2.length;

function cycleitems2() {
  var item2 = $('.slider-container2 div').eq(currentIndex);
  items2.hide();
  item2.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt2 - 1) {
    currentIndex = 0;
  }
  cycleitems2();
}, 6000);

$('.next2').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt2 - 1) {
    currentIndex = 0;
  }
  cycleitems2();
});

$('.prev2').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt2 - 1;
  }
  cycleitems2();
});
var wd2 = $('.slider-container img').width();
var ht2 = (wd2*.70);
$('.slider-container2 img').css({'height':ht2+'px'});