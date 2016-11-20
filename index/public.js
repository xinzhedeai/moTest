/**
 * 
 * @JSName: public.js
 * @Description: 左侧栏，功能按钮，日期插架等初始化;底部栏添加。
 * @author: haliluya
 * @date: 2016-11-20 07:57:06
 * @version: V1.0
 * 
 */

//初始化 左侧菜单栏
jQuery(document).ready(function () {
	jQuery("#jquery-accordion-menu").jqueryAccordionMenu();
	
});
$(function(){
	//左部导航切换
	$("#demo-list li").click(function(){
		$("#demo-list li.active").removeClass("active")
		$(this).addClass("active");
	})	
	//功能按钮初始化
	$('#dock').Fisheye(
		{
			maxWidth: 30,
			items: 'a',
//			itemsText: 'span',
			container: '.dock-container',
			itemWidth: 50,
			proximity: 60,
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
