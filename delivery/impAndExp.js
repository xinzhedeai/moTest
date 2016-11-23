/**
 * @file 配送数据导入导出
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
		var txt=  "确定删除？";
			var option = {
					title: "系统信息",
					btn: parseInt("0011",2),
					onOk: function(){
						//TODO 
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
			return '<a title="点击下载文件" href="#">' + value + '</a>';
		}
	},{
		field : 'productname',
		title : '文件名',
		sortable : true,
		width　:　200
	},{
		field : 'status',
		title : '下载状态',
		sortable : true,
		width　:　200
	},{
		field : 'listprice',
		title : '到达日',
		sortable : true,
		width　:　200
	},{
		field : 'itemid',
		title : '到达日',
		sortable : true,
		width　:　200
	}],
	options = {
		url : '../datagrid_data1.json',
		columns : [columns],
		pagination : true,
		pageSize : $impAndExp.pageSize,
		pageNumer : $impAndExp.pageNumber,
		order : $impAndExp.order,
		sort :　$impAndExp.sort,
		fitColumns : true,
		method :　'get',
		crossPageSwitch : true,
		conditionSwitch : true,
		scrollSwitch : true,
	};
	$($impAndExp.impAndExpDatagrid).datagridEasyUI(options);
//	$($impAndExp.impAndExpDatagrid).datagrid('loadData',{total:0,rows:[]});	
})

//请求体
var $impAndExp = {
	impAndExpDatagrid : '#impAndExpDatagrid',
	pageSize : 10,
	pageNumber : 1,
	order : 'desc',
	sort : 'listprice'
}

//这个是自适应函数
function resizeDatagrid() {	
	var $center = $("#panel datagrid");
	var cWidth = $center.width();
	$("#impAndExpDatagrid").datagrid('resize', {
		width: cWidth,
	});
}