/**
 * 
 * @JSName: public.js
 * @Description: 左侧栏，功能按钮，日期插架等初始化;底部栏添加。
 * @author: haliluya
 * @date: 2016-11-20 07:57:06
 * @version: V1.0
 * 
 */


$(function(){
	    //左侧栏动态写入
    var a = [{
		"title": "系统配置",
		"link": "/sys-conf",
		"subMenu": [{
			"menu_id": "317208e8-7257-11e5-b1ca-00163e000884",
			"title": "基本信息",
			"link": "/sys-conf/basicinfo.html"
		}, {
			"menu_id": "31720a9d-7257-11e5-b1ca-00163e000884",
			"title": "日本邮编",
			"link": "/sys-conf/jp-code.html"
		}]
	}, {
		"title": "关联公司",
		"link": "/company",
		"subMenu": [{
			"menu_id": "1c0a1e94-7254-11e5-b1ca-00163e000884",
			"title": "代理公司",
			"link": "/company/agency.html"
		}, {
			"menu_id": "1c0a1e93-7254-11e5-b1ca-00163e000884",
			"title": "网购公司",
			"link": "/company/shoppingco.html"
		}]
	}, {
		"title": "商品管理",
		"link": "/commodity",
		"subMenu": [{
			"menu_id": "1c2b5r77-7254-11e5-b1ca-00163e000884",
			"title": "商品信息管理",
			"link": "/commodity/productInfo.html"
		}]
	}, {
		"title": "商品管理",
		"link": "/commodity",
		"subMenu": [{
			"menu_id": "1c2b5r77-7254-11e5-b1ca-00163e000884",
			"title": "商品信息管理",
			"link": "/commodity/productInfo.html"
		}]
	}, {
		"title": "商品管理",
		"link": "/commodity",
		"subMenu": [{
			"menu_id": "1c2b5r77-7254-11e5-b1ca-00163e000884",
			"title": "商品信息管理",
			"link": "/commodity/productInfo.html"
		}]
	}];
	
	localStorage.menu = JSON.stringify(a);
	var menu = $.parseJSON(localStorage.menu);
	var navMenuStr = '', subMenuStr = '';
	for(var i=0,leni = menu.length; i<leni; i++){
			navMenuStr += '<li class="firstLevel"><a href="#" class="oneLevelA">';
			navMenuStr += menu[i].title;
			navMenuStr += '</a>';
			navMenuStr += '<ul class="submenu">';
//			console.info(menu[i].length);
			for(var j=0, lenj = menu[i].subMenu.length; j<lenj; j++){
				console.info("haliluya");
				navMenuStr += '<li><a href="'+ menu[i].subMenu[j].link +'" class="twoLevelA">' +menu[i].subMenu[j].title+ '</a></li>'
			}
			navMenuStr += '</ul>';//二级菜单结束
			navMenuStr += '</li>';//一级菜单结束
	}
	
	$('#demo-list').html(navMenuStr);
	
	//jqueryui时间插件初始化
	$('.startDate, .endDate').datepickerJQueryUI();
	
	/*左侧导航栏显示隐藏功能*/
	$(".subNav").click(function(){				
		/*显示*/
		if($(this).find("span:first-child").attr('class') == "title-icon glyphicon glyphicon-chevron-down") {
			$(this).find("span:first-child").removeClass("glyphicon-chevron-down");
			$(this).find("span:first-child").addClass("glyphicon-chevron-up");
			$(this).removeClass("sublist-down");
			$(this).addClass("sublist-up");
		}
		/*隐藏*/
		else {
			$(this).find("span:first-child").removeClass("glyphicon-chevron-up");
			$(this).find("span:first-child").addClass("glyphicon-chevron-down");
			$(this).removeClass("sublist-up");
			$(this).addClass("sublist-down");
		}
		// 修改数字控制速度， slideUp(500)控制卷起速度
		$(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(300);
	});
/*左侧导航栏缩进功能*/
	$(".left-main .sidebar-fold").click(function(){
		if($(this).parent().attr('class') == "left-main left-full") {
			$(this).parent().removeClass("left-full");
			$(this).parent().addClass("left-off");
	
			$(this).parent().parent().find(".right-product").removeClass("right-full");
			$(this).parent().parent().find(".right-product").addClass("right-off");
	
		} else {
			$(this).parent().removeClass("left-off");
			$(this).parent().addClass("left-full");
	
			$(this).parent().parent().find(".right-product").removeClass("right-off");
			$(this).parent().parent().find(".right-product").addClass("right-full");
	
		}
	});
 
  /*左侧鼠标移入提示功能*/
	$(".sBox ul li").mouseenter(function(){
		if($(this).find("span:last-child").css("display") == "none") {
			$(this).find("div").show();
		}
	}).mouseleave(function() {
		$(this).find("div").hide();
	})
	
		//这个是改变窗口大小时，重新自适应的方法
	$(window).resize(function() {
		console.info('哈利路亚');
		setTimeout("resizeDatagrid();", 300);
	});	
	//添加底部栏
	$('body').append('<div class="footerWrapper">' +
		'<div class="footer">' +
			'<p class="footerLogo">' +
				'<img src="../lib/image/pic_footer.png" alt="footer logo" />' +
			'</p>' +
			'<p class="footerFont">' +
				'威海睿博软件有限公司 TEL:0631-5970779 &nbsp;FAX:0631-5970778<br />Copyright NS Soft Co.,Ltd. &nbsp;All rights reserved. &nbsp;Since 2013' +
			'</p>' +
		'</div>' +
	'</div>');
	
})
