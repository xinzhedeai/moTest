/**
 * name index.js
 * author haliluya
 * 2016-11-17 09:40:15
 */
"use strict"

//初始化 左侧菜单栏
jQuery(document).ready(function () {
	jQuery("#jquery-accordion-menu").jqueryAccordionMenu();
	
});
$(function(){
	
	//顶部导航切换
	$("#demo-list li").click(function(){
		$("#demo-list li.active").removeClass("active")
		$(this).addClass("active");
	})	
		// Dock initialize
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
		$(this).tooltip({
			position : 'top',
			content: function(){
				var cc = $(this).attr('alt');
				console.info(cc);
	//					console.info("哈利路亚");
				return cc;
			}
		})
 })		
//	)
//	});
//	$('#dock img').load()

//var imgdefereds = [];
//$('#dock img').each(function() {
//	var dfd = $.Deferred();
//	$(this).bind('load', function() {
//		dfd.resolve();
//	}).bind('error', function() {
//		//图片加载错误，加入错误处理
//		// dfd.resolve();
//	})
//	if(this.complete) setTimeout(function() {
//		var i = 0;
//		console.info("完成了张数:"+ (i++));
//		dfd.resolve();
//	}, 1000);
//	imgdefereds.push(dfd);
//})
//$.when.apply(null, imgdefereds).done(function() {
////	callback();
//	$('#dock img').tooltip({
//		position : 'top',
//		content: function(){
//			var cc = $(this).attr('alt');
//			console.info(cc);
////					console.info("哈利路亚");
//			return cc;
//		}
//	});
//			
//});
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
})
