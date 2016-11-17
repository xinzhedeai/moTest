/**
 * name index.js
 * author haliluya
 * 2016-11-17 09:40:15
 */
"use strict"
$(function(){
	$('#dock img').tooltip({
				position : 'top',
				content: function(){
					var cc = $(this).attr('alt');
					console.info(cc);
//					console.info("哈利路亚");
					return cc;
				}
			});
			
	//page footer
	$('body').append('<div class="footerWrapper">' +
		'<div class="footer">' +
			'<p class="footerLogo">' +
				'<img src="./lib/image/pic_footer.png" alt="footer logo" />' +
			'</p>' +
			'<p class="footerFont">' +
				'威海睿博软件有限公司 TEL:0631-5970779 &nbsp;FAX:0631-5970778<br />Copyright NS Soft Co.,Ltd. &nbsp;All rights reserved. &nbsp;Since 2013' +
			'</p>' +
		'</div>' +
	'</div>');
})
