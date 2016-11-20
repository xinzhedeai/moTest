/**
 * @file 摸版
 * @author HaLiLuYa
 * @date: 2016-11-17 09:40:15
 * @version: V1.0
 */
"use strict"

$(function(){
	
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
		url : '../datagrid_data0.json',
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
//	$($index.indexDatagrid).datagrid('loadData',{total:0,rows:[]});	
})

//请求体
var $index = {
	indexDatagrid : '#indexDatagrid',
	pageSize : 10,
	pageNumber : 1,
	order : 'desc',
	sort : 'listprice'
}
