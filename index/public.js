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
//	var pageN = window.location.pathname, flag=0;
//	pageN = getPageN(pageN) ;
//	console.info(pageN);
//	console.info(getCookie('pageFlag'));
	console.info(decodeURIComponent(getParameter('pageModule')));
	
	//jqueryui时间插件初始化
	$('.startDate, .endDate').datepickerJQueryUI();
	/*头部导航栏写入*/
	$('.pagesHeader').html('<nav class="nav navbar-default navbar-mystyle navbar-fixed-top">'+
								'<div class="navbar-header"></div>'+
								'<div class="collapse navbar-collapse">'+
									'<span style="font-size: 30px;margin-left: 7px;">MOAL SYSTEM</span>'+
								    '<ul class="nav navbar-nav pull-right">'+
								      	'<li class="dropdown li-border"><a href="#" class="dropdown-toggle mystyle-color" data-toggle="dropdown">605875855@qq.com<span class="caret"></span></a>'+
									        '<ul class="dropdown-menu">'+
									    		'<li><a href="login.html">个人主页</a></li>'+
									    		'<li><a href="login.html">修改密码</a></li>'+
									      		'<li><a href="login.html">退出</a></li>'+
									        '</ul>'+
								      	'</li>'+
								    '</ul>'+
						  		'</div>'+
							'</nav>');
	//左侧栏动态写入
    var a = [{
		"title": "系统配置",
		"link": "/sys-conf",
		"subMenu": [{
			"menu_id": "317208e8-7257-11e5-b1ca-00163e000884",
			"title": "用户信息",
			"link": "../sysConfig/userInfo.html"
		}, {
			"menu_id": "31720a9d-7257-11e5-b1ca-00163e000884",
			"title": "日本邮编",
			"link": "/sys-conf/jp-code.html"
		}]
	}, {
		"title": "配送管理",
		"link": "/company",
		"subMenu": [{
			"menu_id": "1c0a1e94-7254-11e5-b1ca-00163e000884",
			"title": "配送数据导入导出",
			"link": "../delivery/impAndExp.html"
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
	var menu = $.parseJSON(localStorage.menu), curPageMod = getPageModule(), flag = 0;
	var navMenuStr = '<div class="left-main left-full"><div class="sidebar-fold"><span class="glyphicon glyphicon-th-list"></span></div><div class="subNavBox">', subMenuStr = '';
	if(curPageMod && curPageMod != 'false'){
		flag = 1;
	}
	if(flag == 0){//根据标记，判断此前是否是第一次进入页面，是，则默认展开
		for(var i=0,leni = menu.length; i<leni; i++){
			if(i == 0){
				navMenuStr += '<div class="sBox"><div class="subNav sublist-up"><span class="title-icon glyphicon glyphicon-chevron-up"></span><span class="sublist-title">';
				navMenuStr += menu[i].title;
				navMenuStr += '</span></div>';
				navMenuStr += '<ul class="navContent" style="display:block">';
			}else {
				navMenuStr += '<div class="sBox"><div class="subNav sublist-down"><span class="title-icon glyphicon glyphicon-chevron-down"></span><span class="sublist-title">';
				navMenuStr += menu[i].title;
				navMenuStr += '</span></div>';
				navMenuStr += '<ul class="navContent" style="display:none">';
			}
			for(var j=0, lenj = menu[i].subMenu.length; j<lenj; j++){
				if(j == 0){
					navMenuStr += '	<li class=""><div class="showtitle" style="width:100px;"><img src="../lib/img/images/leftimg.png" />' + menu[i].subMenu[j].title + '</div>';
				}else{
					navMenuStr += '	<li class=""><div class="showtitle" style="width:100px;"><img src="../lib/img/images/leftimg.png" />' + menu[i].subMenu[j].title + '</div>';
				}
				navMenuStr += '<a href="' +  menu[i].subMenu[j].link + '?pageModule=' + menu[i].title + '"><span class="sublist-icon glyphicon glyphicon-bullhorn"></span><span class="sub-title">' + menu[i].subMenu[j].title + '</span></a></li>';
			}
			navMenuStr += '</ul>';//二级菜单结束
			navMenuStr += '</div>';//一级菜单结束
		}
	}else{
		for(var i=0,leni = menu.length; i<leni; i++){
			if(curPageMod == menu[i].title){
				navMenuStr += '<div class="sBox"><div class="subNav sublist-up"><span class="title-icon glyphicon glyphicon-chevron-up"></span><span class="sublist-title">';
				navMenuStr += menu[i].title;
				navMenuStr += '</span></div>';
				navMenuStr += '<ul class="navContent" style="display:block">';
			}else {
				navMenuStr += '<div class="sBox"><div class="subNav sublist-down"><span class="title-icon glyphicon glyphicon-chevron-down"></span><span class="sublist-title">';
				navMenuStr += menu[i].title;
				navMenuStr += '</span></div>';
				navMenuStr += '<ul class="navContent" style="display:none">';
			}
			for(var j=0, lenj = menu[i].subMenu.length; j<lenj; j++){
				if(j == 0){
					navMenuStr += '	<li class=""><div class="showtitle" style="width:100px;"><img src="../lib/img/images/leftimg.png" />' + menu[i].subMenu[j].title + '</div>';
				}else{
					navMenuStr += '	<li class=""><div class="showtitle" style="width:100px;"><img src="../lib/img/images/leftimg.png" />' + menu[i].subMenu[j].title + '</div>';
				}
				navMenuStr += '<a href="' +  menu[i].subMenu[j].link + '?pageModule=' + menu[i].title + '"><span class="sublist-icon glyphicon glyphicon-bullhorn"></span><span class="sub-title">' + menu[i].subMenu[j].title + '</span></a></li>';
			}
			navMenuStr += '</ul>';//二级菜单结束
			navMenuStr += '</div>';//一级菜单结束
		}
	}
	
	navMenuStr += '</div></div>';//subBox
	$('.leftMenu').html(navMenuStr);
	
	/*左侧导航栏显示隐藏功能*/
	$("body").on('click','.subNav',function(){	
		var a = $(this).find('.sublist-title').text();
		console.info(a);
		setCookie('pageFlag', a);
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
		$(this).next(".navContent").slideToggle(300).end().parent().siblings().find(".navContent").slideUp(300);
		$(this).parent().siblings().find(".title-icon").removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
		$(this).parent().siblings().find('.subNav ').removeClass('sublist-up').addClass('sublist-down');
		
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
	$('.footerDiv').append('<div class="footerWrapper">' +
		'<div class="footer">' +
			'<p class="footerFont">' +
				'<a href="#" id="TelInfo" style="margin-right:50px;font-family:\'黑体\';">MO連絡先</a>'+
					'Copyright © 2015  <span style="margin-right:50px;font-family:\'黑体\';">WEIHAI NS SOFT CO., LTD.</span>' +
			'</p>' +
		'</div>' +
	'</div>');
})
function getPageModule(){
	return decodeURIComponent(getParameter('pageModule'));
}
