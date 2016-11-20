var jsVersion = '?v=20160104001';

//CSS
document.write('<link rel="s\ntylesheet" type="text/css" href="../lib/css/common.css" />');

//bootstrap.css
document.write('<link rel="stylesheet" type="text/css" href="../lib/plugin/bootstrap/css/bootstrap.min.css" />\
				<link rel="stylesheet" type="text/css" media="screen"  href="../lib/plugin/bootstrap/css/bootstrap-datetimepicker.min.css"/>');
				
				
 //easyUI(datagrid, switch)
document.write('<link rel="stylesheet" type="text/css" href="../lib/plugin/jquery-easyui-1.4.3/themes/metro/easyui.css' + jsVersion + '" />\
				<link rel="stylesheet" type="text/css" href="../lib/css/extend-easyUI.css' + jsVersion + '" />');
				
//jQueryUI(datepicker)
document.write('<link rel="stylesheet" type="text/css" href="../lib/plugin/jquery-ui-1.11.4.custom/jquery-ui.min.css" />\
				<link rel="stylesheet" type="text/css" href="../lib/css/extend-jQueryUI.css" />\
				<link rel="stylesheet" type="text/css" href="../lib/plugin/jquery-ui-1.11.4.custom/jquery-ui-timepicker-addon.min.css" />');

//plupload
document.write('<link rel="stylesheet" type="text/css" href="../lib/plugin/plupload-2.1.2/jquery.ui.plupload/css/jquery-ui.min.css' + jsVersion + '" />\
				<link rel="stylesheet" type="text/css" href="../lib/plugin/plupload-2.1.2/jquery.ui.plupload/css/jquery.ui.plupload.css' + jsVersion + '" />');

//document.write('<link rel="stylesheet" type="text/css" href="../lib/css/font-awesome.css" />');
//左侧菜单插件
document.write('<link href="../lib/css/jquery-accordion-menu.css" rel="stylesheet" type="text/css" />');
//页面公共部分样式
document.write('<link rel="stylesheet" type="text/css" href="../index/public.css' + jsVersion + '" />\
				<link rel="shortcut icon" href="../img/images/favicon.ico"/>');
//功能按钮样式
		
//JS
document.write('<script type="text/javascript" src="../lib/js/jquery-1.11.3.min.js' + jsVersion + '"></script>\
				<script type="text/javascript" src="../lib/js/common.js' + jsVersion + '"></script>\
//				<script type="text/javascript" src="../index/public.js"></script>\
//				<script type="text/javascript" src="../lib/js/jquery-accordion-menu.js" ></script>\
				<script type="text/javascript" src="../lib/js/fisheye-iutil.js"></script>');

				
//bootstrap
document.write('<script type="text/javascript" src="../lib/plugin/bootstrap/bootstrap.min.js"></script>\
				<script type="text/javascript" src="../lib/plugin/bootstrap/bootstrap-datetimepicker.js"></script>\
				<script type="text/javascript" src="../lib/plugin/bootstrap/locales/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>');


//easyUI
document.write('<script type="text/javascript" src="../lib/plugin/jquery-easyui-1.4.3/jquery.easyui.min.js' + jsVersion + '"></script>\
				<script type="text/javascript" src="../lib/plugin/jquery-easyui-1.4.3/locale/easyui-lang-zh_CN.js' + jsVersion + '"></script>\
				<script type="text/javascript" src="../lib/js/extend-easyUI.js' + jsVersion + '"></script>');

//style.js 	
document.write('<script type="text/javascript" src="../lib/js/style.js"></script>');
//public.js
//document.write('<script type="text/javascript" src="../index/public.js"></script>');
//durian 请求体
document.write('<script type="text/javascript" src="../lib/js/jquery.sha256.js"></script>\
				<script type="text/javascript" src="../lib/js/durian-v2.0.js"></script>\
				<script type="text/javascript" src="../lib/js/nssoft.absAPI.js"></script>');