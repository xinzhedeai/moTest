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
	
	
	//左部导航切换
	$("#demo-list li").click(function(){
		$("#demo-list li.active").removeClass("active")
		$(this).addClass("active");
	})	
	//功能按钮初始化
	$('#dock').Fisheye(
		{
			maxWidth: 10,
			items: 'a',
//			itemsText: 'span',
			container: '.dock-container',
			itemWidth: 60,
			proximity: 40,
			alignment : 'left',
			valign: 'bottom',
			halign : 'center'
		}
	);
	$('#dock img').hover(function(){
		console.log('haliluya');
		$(this).tooltip({
			position : 'top',
			content: function(){
				console.info('yimaneili');
				var cc = $(this).attr('alt');
				return cc;
			},
			onShow: function(){
				$(this).tooltip('tip').css({
					backgroundColor: '#428bca',
					color: '#f7f7f7'
				});
    		}
			
		})
	 })		
	//page footer
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
	
	//时间插件初始化
	$('.form_datetime_start,.form_datetime_end').datetimepicker({
        language:  'zh-CN',
//	        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView : 2,
		maxView : 2,
		pickerPosition : 'bottom-right',
		format: 'yyyy-mm-dd',
//			forceParse: 0,
//	        showMeridian: 1,
    });

})
//初始化 左侧菜单栏
jQuery(document).ready(function () {
	jQuery("#jquery-accordion-menu").jqueryAccordionMenu();
	
});