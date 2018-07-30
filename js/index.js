var mySwiper = new Swiper('.swiper-container', {
	autoplay: 5000, //可选选项，自动滑动
	// 如果需要分页器
	pagination: '.swiper-pagination',
	paginationClickable: true,
	loop: true
})

var ele = $(".pics .col4row>div");
$(ele).hover(function() {
	$(this).find(".wrap").slideDown();
}, function() {
	$(this).find(".wrap").slideUp();
})

var _box1 = document.getElementById("box1");
var _box2 = document.getElementById("box2");
var upscroll;
var x = 0;
var fun = function() {
	_box1.style.top = x + 'px';
	_box2.style.top = (x + 110 * 3 + 45) + 'px';
	x--;
	if((x + 110 * 3 + 45) == 0) {
		x = 0;
	}
}
upscroll = setInterval(fun, 20);

var eleup = $(".upscroll");
$(eleup).hover(function() {
	upscroll = clearInterval(upscroll);
}, function() {
	upscroll = setInterval(fun, 20);
})
