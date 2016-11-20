/**
 * @file 摸版
 * @author HaLiLuYa
 * @date: 2016-11-17 09:40:15
 * @version: V1.0
 */
"use strict"

$(function(){
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
