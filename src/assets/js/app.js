'use strict';

$(function () {
	// 给有底部导航的页面增加额外样式
	$('.weui_tabbar').prevAll('.wrap').addClass('mb62');

	// swiper
	if (typeof Swiper === 'function') {
		$(".swiper-container").swiper();
	}

	// fixed-bottom
	var fixedB = $('.fixed-b').css('display');
	if (fixedB === 'none' || fixedB === undefined) {} else {
		$('.wrap').addClass('bpb');
	}

	// counts
	$('.counts').on('touchend', '.plus', function () {
		$(this).prev('input').val($(this).prev('input').val() - -1).change();
	});

	$('.counts').on('touchend', '.reduce', function () {
		if ($(this).next('input').val() - 1 > 0) {
			$(this).next('input').val($(this).next('input').val() - 1).change();
		}
	});

	//阻止向上冒泡
	$('.counts,.img').on('touchend click', function (event) {
		event.stopPropagation();
	});

	// 可滑动的侧边购物车图标
	var winH = $(window).height();
	$(document).on('touchmove','.btn-cart',function(event) {
		var touch = event.originalEvent.targetTouches[0];
		document.addEventListener('touchmove', bodyScroll(event), false);
		slideCart(touch.pageY);
	})
	function slideCart(y) {		
		var cartH = ($('.btn-cart').height())/2;
		if(y > 80 && y < (winH-80)) {
			var Y = (y-cartH) + 'px';
			$('.btn-cart').css('transform','translateY('+ Y +')');
		}
	}

	//阻止页面被拖动
	$(document).on('touchend','.btn-cart',function(event) {
		document.removeEventListener('touchmove', bodyScroll(event), false);
	})
	function bodyScroll(e){
		e.preventDefault();
	}

});

/* 商品相关 */

// 打开筛选匡
function openActions() {
	$('.weui_actionsheet').addClass('weui_actionsheet_toggle');
	$('.weui_mask').addClass('weui_mask_visible');
}

//关闭筛选匡
function closeActions() {
	$('.weui_actionsheet').removeClass('weui_actionsheet_toggle');
	$('.weui_mask').removeClass('weui_mask_visible');
}

// 判断是否全选
function isSelect() {
	var iLen = $('.item:not(.x-saleout)').length;
	var sLen = $('.x-select').length;
	if (iLen === sLen) {
		$('#allselect').prop('selected', true);
		$('#allselect').next('.x-icon').removeClass('x-icon-circle-o').addClass('x-icon-circle');
		updatePrice();
	} else {
		$('#allselect').prop('selected', false);
		$('#allselect').next('.x-icon').removeClass('x-icon-circle').addClass('x-icon-circle-o');
		updatePrice();
	}
}

// 全选双向绑定
$('#allselect').on('change', function () {
	if ($(this).prop('checked')) {
		$(this).next('.x-icon').removeClass('x-icon-circle-o').addClass('x-icon-circle');
		$('.item:not(.x-saleout)').addClass('x-select');
		updatePrice();
	} else {
		$(this).next('.x-icon').removeClass('x-icon-circle').addClass('x-icon-circle-o');
		$('.item:not(.x-saleout)').removeClass('x-select');
		updatePrice();
	}
});

// 监测商品数量的变化
$('.counts input').on('change', function () {
	updatePrice();
});

//更新合计价格
function updatePrice() {
	var total = 0;
	$('.x-select').each(function (index, item) {
		var nums = $(item).find('.counts input').val();
		total += Number($(item).data('price')) * nums;
	});
	$('.total .price-1').html('<strong class="price-1"><span>¥</span>' + total.toFixed(2) + '</strong>');
	//没有选中产品时，底部变灰
	if ($('.x-select').length === 0) {
		$('.fixed-list').addClass('x-disable');
	} else {
		$('.fixed-list').removeClass('x-disable');
	}
}

var arrNum = 0;
// 输入类型
var codeType = {
	new: '请设置6位支付密码',
	repeat: '请重复输入刚才的密码',
	old: '请输入旧的支付密码，以验证身份',
	reset: '请输入新的支付密码',
	pay: '输入密码'
}

// 获取数字
$('.keybord li:not(.nbsp)').on({
	touchstart: function() {
		$(this).addClass('touch');
	},
	touchend: function() {
		$(this).removeClass('touch');
		var num = Number($(this).text());
		inputNumber(num);
	}
})

// 拼接数字
var pwd = '';
function inputNumber(num) {
	if(!isNaN(num)){
		pwd += num;
		dotView(pwd);
	}else{
		pwd = pwd.slice(0,-1);
		dotView(pwd);
	}
}

// 控制页面中的点
function dotView(pwd) {
	var len = pwd.length;
	var li = $('.code-box li');
	li.removeClass('code-li');
	for( var i=0; i<len; i++) {
		li.eq(i).addClass('code-li');
	}
	if(len === 6) {
		var type = $('.tips').data('type');
		validata(type);		
	}
}

// 密码错误
function error() {
	$('.code-box').addClass('error');
	$.toast("密码错误", "text",function() {
		$('.code-box').removeClass('error');
		initial(arrNum);
	});
}

function initial(arrNum) {
	if(arr[arrNum]){
		$('.code-box li').removeClass('code-li');
		pwd = '';
		// 写入密码类型
		$('.tips').text(codeType[arr[arrNum]]).attr("data-type", arr[arrNum]);	
	}else{
		validata();
	}
}	

// 滚动插件
(function ($) {
	$.fn.extend({
		"rscroll": function rscroll(speed, delay) {
			speed ? speed : 20; //如未传入滚动间隔时间，默认为20ms
			delay ? delay : 50; //如未传入滚动间隔距离，默认为50ms
			var ul = $(this);
			var ulph = ul.parent().height();
			var t = 0,
			    c,
			    m;
			setTimeout(up, delay);

			//向上滚动
			function up() {
				t -= ul.find('li').height();
				if (ulph - ul.height() <= t) {
					ul.animate({ 'top': t }, speed);
					c = setTimeout(up, delay);
				} else {
					down();
				}
			}

			//向下滚动
			function down() {
				t += ul.find('li').height();
				if (t <= 0) {
					ul.animate({ 'top': t }, speed);
					c = setTimeout(down, delay);
				} else {
					up();
				}
			}
		}
	});
})(jQuery);