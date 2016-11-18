'use strict';

//环境路径
var port = window.location.port;
var contextPath = '';
//var contextPath = '/wh';
//if (port != '8080')
//	  contextPath = 'http://dev.nssoftware.com.cn:8040';

//Timstamp 函数， durian请求体用
function makeStamp(d) { // Date d
	var y = d.getFullYear(), M = d.getMonth() + 1, D = d.getDate(), h = d
			.getHours(), m = d.getMinutes(), s = d.getSeconds(), ss = d
			.getMilliseconds(),

	pad = function(x) {
		x = x + '';
		if (x.length === 1) {
			return '0' + x;
		}
		return x;
	};
	return y + pad(M) + pad(D) + pad(h) + pad(m) + pad(s) + pad(ss);
}

/**
 * 
 * @functionName: getPageName
 * @Description: get page name from URL 
 * @author: Double
 * 
 */
function getPageName() {
	var pathname = window.location.pathname;
	if (pathname) {
		pathname = pathname.split('/');
		return pathname[pathname.length - 1].split('.')[0];
	} else {
		return '';
	}
}

/**
 * 
 * @functionName: getOS
 * @Description: get operating system 
 * @author: Double
 * 
 */
function getOS() {
	var ua = navigator.userAgent.toLowerCase();
	if (ua.indexOf('windows nt 6.3') != -1) {
		return 'Windows 8';
	} else if (ua.indexOf('windows nt 6.1') != -1) {
		return 'Windows 7';
	} else if (ua.indexOf('windows nt 6.0') != -1) {
		return 'Windows Vista';
	} else if (ua.indexOf('windows nt 5.2') != -1) {
		return 'Windows 2003';
	} else if (ua.indexOf('windows nt 5.1') != -1) {
		return 'Windows XP';
	} else if (ua.indexOf('windows nt 5.0') != -1) {
		return 'Windows 2000';
	} else if (ua.indexOf('windows') != -1 || ua.indexOf('win32') != -1) {
		return 'Windows';
	} else if (ua.indexOf('macintosh') != -1 || ua.indexOf('mac os x') != -1) {
		return 'Macintosh';
	} else if (ua.indexOf('adobeair') != -1) {
		return 'Adobeair';
	} else if (ua.indexOf('linux') != -1) {
		return 'Linux';
	} else if (ua.indexOf('iphone') != -1) {
		return 'iPhone';
	} else if (ua.indexOf('ipad') != -1) {
		return 'iPad';
	} else if (ua.indexOf('android') != -1) {
		return 'Android';
	} else {
		return 'Unknow';
	}
}

/**
 * 
 * @functionName: getNavigator
 * @Description: get navigator 
 * @author: Double
 * 
 */
function getNavigator() {
	var ua = navigator.userAgent.toLowerCase();
	if (ua.indexOf('chrome') != -1) {
		return 'Chrome';
	} else if (ua.indexOf('firefox') != -1) {
		return 'Firefox';
	} else if (ua.indexOf('safari') != -1) {
		return 'Safari';
	} else if (ua.indexOf('opera') != -1) {
		return 'Opera';
	} else if(ua.indexOf('trident') != -1 && ua.indexOf('rv:11') != -1) {
    return 'IE 11.0';
	} else if (ua.indexOf('msie 10.0') != -1) {
		return 'IE 10.0';
	} else if (ua.indexOf('msie 9.0') != -1) {
		return 'IE 9.0';
	} else if (ua.indexOf('msie 8.0') != -1) {
		return 'IE 8.0';
	} else {
		return 'Unknow';
	}
}

/**
 * 
 * @functionName: getParameter
 * @Description: get parameter from URL 
 * @author: Double
 * 
 */
function getParameter(name) {
	var search = location.search;
	if(!search) {
		return false;
	}
	search = search.split('?')
	var data = search[1].split('=');
	if(search[1].indexOf(name) == (-1)) {
	    return '';
	    return;
	}
	if(search[1].indexOf('&') == (-1)) {
	    data = search[1].split('=');
	    return data[1];
	} else {
	    data = search[1].split('&'); 
	    for(var i = 0; i <= data.length - 1; i++){
	    	var l_data=data[i].split('=');
	        if(l_data[0] == name) {
	        	return l_data[1];
	        	break;
	        } else {
	        	continue;
	        }
	    }
	}
}

/**
 * 
 * @functionName: setParameter
 * @Description: set parameter to URL 
 * @author: Double
 * 
 */
function setParameter() {
	if (arguments.length >= 1) {
		var url = arguments[0], paramsObj = arguments[1];
		if (paramsObj) {
			var parameter = '';
			for (var x in paramsObj) {
				parameter += x + '=' + paramsObj[x] + '&';
			}
			url += '?' + parameter.substr(0, parameter.length - 1);
		}
		return url;
	} else {
		alert('setParameter : 参数错误, 支持2个参数(url-必填, paramsObj)');
	}
}

/**
 * 
 * @functionName: trim
 * @Description: 由于IE8不支持trim方法，此处自定义 
 * @author: Double
 * 
 */
String.prototype.trim = function() {  
    return this.replace(/(^\s*)|(\s*$)/g, '');  
}

/**
 * @functionName: setCookie
 * @Description: set cookies 
 * @author: Double
 */
function setCookie(name, value, days) { 
	var len = arguments.length; 
	if (len == 2) {
	    var exp = new Date(); 
	    exp.setTime(exp.getTime() + 30*24*60*60*1000); 
	    document.cookie = name + '=' + escape (value) + ';expires=' + exp.toGMTString() + ';path=/'; 
	} else if (len == 3) {
		var exp = new Date();
		exp.setDate(exp.getDate() + parseInt(days));
		exp.setHours(1, 0, 0, 0);
		document.cookie = name + '=' + escape (value) + ';expires=' + exp.toGMTString() + ';path=/';
	} else {
		alert('SetCookie参数错误!');
	}
} 

/**
 * 
 * @functionName: getCookie
 * @Description: get cookies 
 * @author: Double
 * 
 */
function getCookie(name) { 
    var arr,reg=new RegExp('(^| )'+name+'=([^;]*)(;|$)');
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]); 
    else 
        return null; 
} 

/**
 * 
 * @functionName: jumpBack
 * @Description: 从详情页跳回
 * @author: Double
 * 
 */
function jumpBack(destination) {
	var from = getParameter('from');
	if (!from || from == destination) {
		window.location.href = destination + '.html';
	} else {
	    window.close();
	}
}

/**
 * 
 * @functionName: delCookie
 * @Description: delete cookies 
 * @author: Double
 * 
 */
function delCookie(name) { 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval = getCookie(name); 
    if(cval != null) 
        document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() + ';path=/'; 
}

/**
 * 
 * @functionName: serializeObject
 * @Description: form序列化成object
 * @author: Double
 * @param: form
 */
var serializeObject = function() {
	if (arguments.length === 1) {
		var form = arguments[0], o = {};
		$.each(form.serializeArray(), function(index) {
			if (o[this['name']]) {
				o[this['name']] = o[this['name']] + ',' + this['value'].trim();
			} else {
				o[this['name']] = this['value'].trim();
			}
		});
		return o;
	} else {
		alert('serializeObject : 参数错误, 支持1个参数(form)');
	}
};


/**
 * @functionName: downloadByForm
 * @Description: form表单下载文件
 * @author: Double
 * @param: option {
 * 			url, 
 * 			param, 
 * 			button, 
 * 			callback: 选填, 是否有回调函数, 值 true|false
 * 			success: 选填, 回调函数, 值 function
 * 		}
 */
function downloadByForm() {
	if (arguments.length === 1) {
		var option = arguments[0], url = option.url, param = option.param, button = option.button, orgText = $(button).text();
//		var url = arguments[0], param = arguments[1], button = arguments[2], orgText = $(button).text();
		$(button).addClass('btnDisabled');
		$(button).attr('disabled', true);
		if (!(typeof button === 'string')) {
			button = '#' + button.id;
		}
			
		if (option.callback) {
	    	param.process_id = makeStamp(new Date());
	  } else {
		  if (!$(button).hasClass('btnImg')) {
			  $(button).text('下载中...');
			  setTimeout("$('" + button + "').text('" + orgText + "'); $('" + button + "').removeClass('btnDisabled'); $('" + button + "').attr('disabled', false);", 2000);
		  } else {
			  var buttonHoverTitle = $(button).parent().next();
			  buttonHoverTitle.html('<p style="left: ' + ($(button).offset().left - buttonHoverTitle.offset().left - 2) + 'px;">下载中...</p>');
			  setTimeout(function() {
				  $(button).parent().next().html('');
				  $(button).removeClass('btnDisabled'); 
				  $(button).attr('disabled', false);
			  }, 2000);
		  }
	  }
		 
		var form = $('<form>');
	    form.attr('style', 'display:none');
	    form.attr('target', 'downloadFrame');
	    form.attr('method', 'post');
	    form.attr('action', contextPath + url);
//	    form.attr('id', 'form');
	    
	    $('body').append(form);
	    for (var x in param) {
	    	var input = $('<input>'); 
	        input.attr('type', 'hidden'); 
	        input.attr('name', x); 
	        input.attr('value', param[x]); 
	        form.append(input);
	    }
	    form.submit();
	    if (option.callback) {
	    	 if (!$(button).hasClass('btnImg')) {
	    		 $(button).text('处理中...');
			 } else {
				 var buttonHoverTitle = $(button).parent().next();
				 buttonHoverTitle.html('<p style="left: ' + ($(button).offset().left - buttonHoverTitle.offset().left - 2) + 'px;">处理中...</p>');
			 }
	    	setTimeout(function() {
	    		var getProcessStatusCount = 0,
	    		getProcessStatusInterval = setInterval(function() {
		    		$.post(contextPath + '/v1/api/common/get-process-status.json', {process_id : param.process_id}, function(res) {
			    		if (res.errCd === 0) {
			    			var result = res.result;
			    			if (result) {
			    				if (result.success) {
			    					if (!$(button).hasClass('btnImg')) {
			    			    		 $(button).text('下载中...');
			    			    		 setTimeout("$('" + button + "').text('" + orgText + "'); $('" + button + "').removeClass('btnDisabled'); $('" + button + "').attr('disabled', false);", 2000);
			    					} else {
			    						var buttonHoverTitle = $(button).parent().next();
			    						 buttonHoverTitle.html('<p style="left: ' + ($(button).offset().left - buttonHoverTitle.offset().left - 2) + 'px;">下载中...</p>');
			    						 setTimeout(function() {
			    							  $(button).parent().next().html('');
			    							  $(button).removeClass('btnDisabled'); 
			    							  $(button).attr('disabled', false);
			    						  }, 2000);
			    					}
									if (option.success instanceof Function) {
										option.success();
									}
									clearInterval(getProcessStatusInterval);
			    				} else {
			    					if (getProcessStatusCount === 149) {
			    						clearInterval(getProcessStatusInterval);
			    					} else {
			    						getProcessStatusCount += 1;
			    					}
			    				}
			    			}
			    		} else {
			    			$alert(res.errMsg);
			    		}
			    	});
	    		}, 2000);
	    	}, 500);
	  	}
	} else {
		alert('downloadByForm : 参数错误, 支持1个参数(option{url, param, button, callback-选填, success-选填})');
	}
}

/**
 * 
 * @functionName: formatDate
 * @Description: 格式化Date对象
 * @author: Double
 * @param: date, symbol-选填
 */
function formatDate() {  
	if (arguments.length > 0 && arguments.length < 3) {
		var date = arguments[0], symbol = (arguments[1] ? arguments[1] : '-');
		if (!date) {
			return '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
		}
		if (!(date instanceof Date)) {
			date = date.split(/\s/)[0].split('-');
			date = new Date(date[0], parseInt(date[1]) - 1, date[2]);
		}
		var year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate();
		month = month < 10 ? '0' + month : month;
		day = day < 10 ? '0' + day : day;
		return year + symbol +  month + symbol + day;
	} else {
		alert('formatDate : 参数错误, 支持2个参数(date, symbol-选填)');
	}
}

/**
 * 
 * @functionName: formatTime
 * @Description: 格式化Date对象的time
 * @author: Double
 * @param: date
 */
function formatTime() {
	if (arguments.length === 1) {
		var date = arguments[0];
		if (!date) {
			return '';
		}
		if (!(date instanceof Date)) {
			date  = date.split(/\s/);
			if (!date[1]) {
				return '';
			}
			var time = date[1].split(':');
			if (!time[2]) {
				time[2] = '00';
			}
			date = date[0].split('-');
			date = new Date(date[0], parseInt(date[1]) - 1, date[2], time[0], time[1], time[2]);
		}
		var hour = date.getHours(), minute = date.getMinutes(), second = date.getSeconds();
		hour = hour < 10 ? '0' + hour : hour;
		minute = minute < 10 ? '0' + minute : minute;
		second = second < 10 ? '0' + second : second;
		return hour + ':' +  minute + ':' + second;
	} else {
		alert('formatTime : 参数错误, 支持1个参数(date)');
	}
}

/**
 * 
 * @functionName: formatDay
 * @Description: 根据浏览器语言格式化Date对象的day
 * @author: Double
 * @param: date
 */
function formatDay() {  
	if (arguments.length === 1) {
		var date = arguments[0];
		if (!date) {
			return '';
		}
		if (!(date instanceof Date)) {
			date = date.split(/\s/)[0].split('-');
			date = new Date(date[0], parseInt(date[1]) - 1, date[2]);
		}
		var lang = navigator.language, day = date.getDay();
		lang = lang ? lang : navigator.systemLanguage;
		switch (lang) {
			case 'zh-CN':
				switch (day) {
					case 0:
						return '周日';
						break;
					case 1:
						return '周一';
						break;
					case 2:
						return '周二';
						break;
					case 3:
						return '周三';
						break;
					case 4:
						return '周四';
						break;
					case 5:
						return '周五';
						break;
					case 6:
						return '周六';
						break;
				}
				break;
			case 'ja-JP':
				switch (day) {
					case 0:
						return '日曜日';
						break;
					case 1:
						return '月曜日';
						break;
					case 2:
						return '火曜日';
						break;
					case 3:
						return '水曜日 ';
						break;
					case 4:
						return '木曜日 ';
						break;
					case 5:
						return '金曜日';
						break;
					case 6:
						return '土曜日 ';
						break;
				}
				break;
		}
	} else {
		alert('formatTime : 参数错误, 支持1个参数(date)');
	}
}

/**
 * 
 * @functionName: objToStr
 * @Description: 将JSON转换为String, 作为参数传进函数
 * @author: Double
 * @param: obj
 */
function objToStr(obj) {
	if (arguments.length === 1) {
		for(var key in obj) {
			if (typeof(obj[key]) === 'string' && obj[key].indexOf('[') > -1) {
				obj[key] = obj[key].replace(/\\\"/g, '\"');
				obj[key] = obj[key].replace(/\"/g, '\\\"');
			}
		}
		return JSON.stringify(obj).replace(/\s/g, '&nbsp;');
	} else {
		alert('objToStr : 参数错误, 支持1个参数(obj)');
	}
}

// 处理键盘事件
//禁止后退键（Backspace）密码或单行、多行文本框除外

function banKeyEvent(e) {
	var ev = e || window.event;// 获取event对象
	var obj = ev.target || ev.srcElement;// 获取事件源
	var t = obj.type || obj.getAttribute('type');// 获取事件源类型
   
   // 获取作为判断条件的事件类型
   var vReadOnly = obj.getAttribute('readonly');
   var vEnabled = obj.getAttribute('enabled');
   // 处理null值情况
   var userAgent = navigator.userAgent.toLowerCase();
   var rMsie = /(msie\s|trident.*rv:)([\w.]+)/;
   var match = rMsie.exec(userAgent);  
   if (match !== null) {
    	if(parseInt(match[2]) === 8) //IE 8.0 
    		vReadOnly = (vReadOnly === '') ? null : vReadOnly;
   }
   vReadOnly = (vReadOnly === null) ? false : true;
   vEnabled = (vEnabled === null) ? true : vEnabled;
   
   // 当敲Backspace键时，事件源类型为密码或单行、多行文本的，
   // 并且readonly属性为true或enabled属性为false的，则退格键失效
   var flag1 = (ev.keyCode === 8 && (t === 'password' || t === 'text' || t === 'textarea') && (vReadOnly === true || vEnabled !== true)) ? true : false;

   // 当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效
// var flag2 = (ev.keyCode === 8 && t !== 'password' && t !== 'text' && t !== 'textarea') ? true : false;
   
   // 当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效
   var flag2 = (ev.keyCode === 8 && obj.tagName !== 'INPUT' && obj.tagName !== 'TEXTAREA') ? true : false;
   
   // 判断
   if (flag1) {
       return false;
   }
   if (flag2) {
       return false;
   }
   
}
//禁止后退键
//作用于Firefox、Opera
document.onkeypress = banKeyEvent;
//禁止后退键
//作用于IE、Chrome
document.onkeydown = banKeyEvent;

/**
 * 
 * @functionName: Md5
 * @Description: 加密密码
 * @author: jianghaipeng
 * 
 */

//md5 
var hexcase = 0;  
var b64pad  = ""; 
var chrsz   = 8;  

function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}
function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));}
function str_md5(s){ return binl2str(core_md5(str2binl(s), s.length * chrsz));}
function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }
function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }
function str_hmac_md5(key, data) { return binl2str(core_hmac_md5(key, data)); }

function md5_vm_test()
{
  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

function core_md5(x, len)
{
  
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);

}

function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function core_hmac_md5(key, data)
{
  var bkey = str2binl(key);
  if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
  return core_md5(opad.concat(hash), 512 + 128);
}

function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

function str2binl(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
  return bin;
}

function binl2str(bin)
{
  var str = "";
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i>>5] >>> (i % 32)) & mask);
  return str;
}

function binl2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
  }
  return str;
}

function binl2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}