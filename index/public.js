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
	//自适应页面高度
	
	var height = $(window).height() - 170;
	if (height >= 800) {
		$('.container-fluid').css('min-height', height);
	}
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
		if(i == 0){
			navMenuStr += '<div class="sBox"><div class="subNav sublist-up"><span class="title-icon glyphicon glyphicon-chevron-up"></span><span class="sublist-title">';
			navMenuStr += menu[i].title;
			navMenuStr += '</span></div>';
			navMenuStr += '<ul class="navContent" style="display:block">';
		}else{
			navMenuStr += '<div class="sBox"><div class="subNav sublist-down"><span class="title-icon glyphicon glyphicon-chevron-down"></span><span class="sublist-title">';
			navMenuStr += menu[i].title;
			navMenuStr += '</span></div>';
			navMenuStr += '<ul class="navContent" style="display:none">';
		}
	
		for(var j=0, lenj = menu[i].subMenu.length; j<lenj; j++){
			if(i == 0 && j == 0){
				navMenuStr += '	<li class="active"><div class="showtitle" style="width:100px;"><img src="../lib/img/images/leftimg.png" />' + menu[i].subMenu[j].title + '</div>';
			}else{
				navMenuStr += '	<li class=""><div class="showtitle" style="width:100px;"><img src="../lib/img/images/leftimg.png" />' + menu[i].subMenu[j].title + '</div>';
			}
			navMenuStr += '<a href="smsInfo.html"><span class="sublist-icon glyphicon glyphicon-bullhorn"></span><span class="sub-title">' + menu[i].subMenu[j].title + '</span></a></li>';
		}
		navMenuStr += '</ul>';//二级菜单结束
		navMenuStr += '</div>';//一级菜单结束
	}
	$('.subNavBox').html(navMenuStr);
	
	//jqueryui时间插件初始化
	$('.startDate, .endDate').datepickerJQueryUI();
	
	/*左侧导航栏显示隐藏功能*/
	$("body").on('click','.subNav',function(){			
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
	
	
//<div style="background-color:#ffffff;color:#666666;height:43px;text-align:right;font-size:13px;font-family:'Times New Roman';">
//<br>
//<a href="javascript:showTel()" id="TelInfo" style="margin-right:50px;font-family:'黑体';">MO連絡先</a>
//Copyright © 2015  <span style="margin-right:50px;font-family:'黑体';">WEIHAI NS SOFT CO., LTD.</span>
//</div>
//<div id="MoTel" class="" title="お問い合わせ" style="width:600px;height:200px; display:none">
//<div style="text-align: center; margin: 20px;">
//<table width="100%" border="1" cellspacing="0" cellpadding="0">
//	<tr>
//		<td rowspan="4">日本</td>
//		<td>曹香玉</td>
//		<td>81-476-49-7727</td>
//	</tr>
//	<tr>
//		<td>宇崎贵之</td>
//		<td>81-476-39-6194</td>
//	</tr>
//	<tr>
//		<td>石井敏雄</td>
//		<td>86-90-6486-7211</td>
//	</tr>
//	<tr>
//		<td>山本长武</td>
//		<td>86-90-6486-7214</td>
//	</tr>
//</table>
//</div>
//</div>
})
function showTel(){
		$("#MoTel").css("display","block");
		$('#MoTel').window({
		    width:600,
		    height:200,
		    modal:true
		});
	}