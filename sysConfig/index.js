/**
 * name index.js
 * author haliluya
 * 
 * 
 */
/**
 * @file 摸版
 * @author HaLiLuYa
 * @date: 2016-11-17 09:40:15
 * @version: V1.0
 */
"use strict"

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
		$(this).tooltip({
			position : 'top',
			content: function(){
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
})

$(function(){
	$('.startDate, .endDate').datepickerJQueryUI();
	
	var columns = [{
		field : 'ck',
		checkbox : true
	},{
		field : 'productid',
		title : '运单号',
		sortable : true,
		width　:　200
	},{
		field : 'productname',
		title : '商品名',
		sortable : true,
		width　:　200
	},{
		field : 'status',
		title : '状态',
		sortable : true,
		width　:　200
	},{
		field : 'listprice',
		title : '价格',
		sortable : true,
		width　:　200
	}],
	options = {
//		url : '../datagrid_data1.json',
		columns : [columns],
		pagination : true,
		pageSize : $index.pageSize,
		pageNumer : $index.pageNumber,
		order : $index.order,
		sort :　$index.sort,
		fitColumns : true,
		method :　'get',
		crossPageSwitch : true,
		conditionSwitch : true,
		scrollSwitch : true,
		
	};
	$($index.indexDatagrid).datagridEasyUI(options);
	$($index.indexDatagrid).datagrid('loadData',{total:0,rows:[]});	
})

//请求体
var $index = {
	indexDatagrid : '#indexDatagrid',
	pageSize : 10,
	pageNumber : 1,
	order : 'desc',
	sort : 'listprice'
}
