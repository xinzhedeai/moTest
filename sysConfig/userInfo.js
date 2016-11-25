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
	
	/*Javascript代码片段*/
	var t = $('#example, #example1').DataTable({
		ajax: {
			//指定数据源
			url: "../testDataMulti.txt"
		},
		 "dom": '<"top"i>rt<"bottom"lp><"clear">',
		//每页显示三条数据
		pageLength: 3,
		"pagingType":   "full_numbers",//分页栏全部显示
		 "order": [[ 3, "desc" ]],
		"autoWidth": true,//自动宽度
		columns: [{
			"data": null, //此列不绑定数据源，用来显示序号
			"title" : "序号"
		}, {
			"data": "id",
			"title" : "ID"
		}, {
			"data": "title",
			"title" : "标题",
			"class" : "center"
		}, {
			"title" : "路径",
			"data": "url"
		}],
		"columnDefs": [{
			// "visible": false,
			//"targets": 0
		}, {
			"render": function(data, type, row, meta) {
				//渲染 把数据源中的标题和url组成超链接
				return '<a href="' + data + '" target="_blank">' + row.title + '</a>';
			},
			//指定是第三列
			"targets": 2
		}],
		"language": {
                        "lengthMenu": "每页 _MENU_ 条记录",
                        "zeroRecords": "没有找到记录",
                        "info": "第 _PAGE_ 页 ( 总共 _PAGES_ 页 )",
                        "infoEmpty": "无记录",
                        "infoFiltered": "(从 _MAX_ 条记录过滤)",
                      	"oPaginate": {
	                       "sFirst": "首页",
	                       "sPrevious": " 上一页 ",
	                       "sNext": " 下一页 ",
	                       "sLast": " 尾页 "
	                   }
                    }

	});

	//前台添加序号
	t.on('order.dt search.dt',
		function() {
			t.column(0, {
				"search": 'applied',
				"order": 'applied'
			}).nodes().each(function(cell, i) {
				cell.innerHTML = i + 1;
			});
		}).draw();

	//更换数据源（相同格式，但是数据内容不同）
	$("#redraw").click(function() {
		var url = table.api().ajax.url("http://www.gbtags.com/gb/networks/uploads/a7bdea3c-feaf-4bb5-a3bd-f6184c19ec09/newData.txt");
		url.load();
	});

})

//请求体
var $index = {
	indexDatagrid : '#userInfoDatagrid',
	pageSize : 10,
	pageNumber : 1,
	order : 'desc',
	sort : 'listprice'
}

$(function() {
	
})
