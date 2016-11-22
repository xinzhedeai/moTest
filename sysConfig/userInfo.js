$(function(){
/*左侧导航栏显示隐藏功能*/
$(".subNav").click(function(){				
			/*显示*/
			if($(this).find("span:first-child").attr('class')=="title-icon glyphicon glyphicon-chevron-down")
			{
				$(this).find("span:first-child").removeClass("glyphicon-chevron-down");
			    $(this).find("span:first-child").addClass("glyphicon-chevron-up");
			    $(this).removeClass("sublist-down");
				$(this).addClass("sublist-up");
			}
			/*隐藏*/
			else
			{
				$(this).find("span:first-child").removeClass("glyphicon-chevron-up");
				$(this).find("span:first-child").addClass("glyphicon-chevron-down");
				$(this).removeClass("sublist-up");
				$(this).addClass("sublist-down");
			}	
		// 修改数字控制速度， slideUp(500)控制卷起速度
	    $(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(300);
	})
/*左侧导航栏缩进功能*/
$(".left-main .sidebar-fold").click(function(){

	if($(this).parent().attr('class')=="left-main left-full")
	{
		$(this).parent().removeClass("left-full");
		$(this).parent().addClass("left-off");
		
		$(this).parent().parent().find(".right-product").removeClass("right-full");
		$(this).parent().parent().find(".right-product").addClass("right-off");
		
		}
	else
	{
		$(this).parent().removeClass("left-off");
		$(this).parent().addClass("left-full");
		
		$(this).parent().parent().find(".right-product").removeClass("right-off");
		$(this).parent().parent().find(".right-product").addClass("right-full");
		
		}
	})	
 
  /*左侧鼠标移入提示功能*/
		$(".sBox ul li").mouseenter(function(){
			if($(this).find("span:last-child").css("display")=="none")
			{$(this).find("div").show();}
			}).mouseleave(function(){$(this).find("div").hide();})	
			
	//这个是改变窗口大小时，重新自适应的方法
	$(window).resize(function() {
		setTimeout("resizeDatagrid();", 300);
	});
})
	//这个是自适应函数
function resizeDatagrid() {
	var $center = $("#panel datagrid");
//	var $header = $("#search-area");
	var cWidth = $center.width();
//	var cHeight = $center.height();
//	var hHeight = $header.height();
//	var height = cHeight - hHeight - 28;
	$("#index_datagrid").datagrid('resize', {
		width: cWidth,
//		height: height
	});
}

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