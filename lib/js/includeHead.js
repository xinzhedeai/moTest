var jsVersion = '?v=20160104001';

//CSS

//bootstrap.css
document.write('<link rel="stylesheet" type="text/css" href="../lib/css/bootstrap.min.css" />\
				');
				
				
 //easyUI(datagrid, switch)
document.write('<link rel="stylesheet" type="text/css" href="../lib/plugin/jquery-easyui-1.5/themes/bootstrap/easyui.css' + jsVersion + '" />\
				<link rel="stylesheet" type="text/css" href="../lib/css/extend-easyUI.css' + jsVersion + '" />');
//plupload
document.write('<link rel="stylesheet" type="text/css" href="../lib/plugin/plupload-2.1.2/jquery.ui.plupload/css/jquery-ui.min.css' + jsVersion + '" />\
				<link rel="stylesheet" type="text/css" href="../lib/plugin/plupload-2.1.2/jquery.ui.plupload/css/jquery.ui.plupload.css' + jsVersion + '" />');

document.write('<link rel="stylesheet" type="text/css" href="../lib/css/font-awesome.css" />');
//左侧菜单插件
document.write('<link href="../lib/css/jquery-accordion-menu.css" rel="stylesheet" type="text/css" />');
//自定义样式
document.write('<link rel="stylesheet" type="text/css" href="../lib/css/default.css' + jsVersion + '" />\
				<link rel="shortcut icon" href="../img/images/favicon.ico"/>');
//功能按钮样式
		
//JS
document.write('<script type="text/javascript" src="../lib/js/jquery-1.11.3.min.js' + jsVersion + '"></script>\
				<script type="text/javascript" src="../lib/js/common.js' + jsVersion + '"></script>\
				<script type="text/javascript" src="../lib/js/jquery-accordion-menu.js" ></script>\
				<script type="text/javascript" src="../lib/js/fisheye-iutil.js"></script>\
				<script type="text/javascript" src="../lib/js/bootstrap.min.js"></script>');



//easyUI
document.write('<script type="text/javascript" src="../lib/plugin/jquery-easyui-1.5/jquery.easyui.min.js' + jsVersion + '"></script>\
				<script type="text/javascript" src="../lib/plugin/jquery-easyui-1.5/locale/easyui-lang-zh_CN.js' + jsVersion + '"></script>\
				<script type="text/javascript" src="../lib/js/extend-easyUI.js' + jsVersion + '"></script>');
				

//durian 请求体
document.write('<script type="text/javascript" src="../js/jquery.sha256.js"></script>\
				<script src="../js/durian-v2.0.js"></script>\
				<script src="../js/nssoft.absAPI.js"></script>');