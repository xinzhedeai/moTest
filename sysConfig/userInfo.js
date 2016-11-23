/**
 * @file 用户信息
 * @author haliluya
 * @date: 2016-11-23 09:52:04
 * @version: V1.0
 */

'use strict';
$(function(){
	
	$('#waybillUpload').click(function(){
		$('#myModalUpload').modal();
		$('.uploadModal').fileUpload();
	})
	$('#delWaybill').click(function(){
//		var txt = '确定要删除所选择的运单吗？？';
//		window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info);
		var txt=  "确定删除？";
			var option = {
					title: "系统信息",
					btn: parseInt("0011",2),
					onOk: function(){
						$collection.deleteCollectNode(nodeId);
					},
				onCancel: function(){
					
				}
			}
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.info, option);
	})
	
	$('#myModalHPK').click(function(){
		var txt=  "确定要进行HPK运单的下载吗？";
			var option = {
					title: "系统信息",
					btn: parseInt("0011",2),
					onOk: function(){
						$collection.deleteCollectNode(nodeId);
					},
				onCancel: function(){
					
				}
			}
			window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.warning, option);
	})
var columns = [{
		field : 'ck',
		checkbox : true
	},{
		field : 'productid',
		title : '运单号',
		sortable : true,
		width　:　200,
		formatter : function(value, row, index) {
			return '<a title="点击查看运单详情" href="#">' + value + '</a>';
		}
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
		url : '../datagrid_data1.json',
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
	$($index.indexDatagrid).datagrid(options);
//	$($index.indexDatagrid).datagrid('loadData',{total:0,rows:[]});	
})

//请求体
var $index = {
	indexDatagrid : '#userInfoDatagrid',
	pageSize : 10,
	pageNumber : 1,
	order : 'desc',
	sort : 'listprice'
}