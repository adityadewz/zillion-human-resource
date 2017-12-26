// Copyright 2006-2017 ClickTale Ltd., US Patent Pending
// Generated on: 4/2/2017 5:31:59 AM (UTC 4/2/2017 10:31:59 AM)

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
	
ClickTaleGlobal.init = ClickTaleGlobal.init || {};
(function (d) {
	var dom="h",
		spe=[92,94,36,46,124,63,42,43,40,41,91,123],
		rep=[98,100,102,104,106,108,110,112,114,116,118,119];
	for(var v,c,i=0,len=d.length;i<len,c=d.charCodeAt(i);i++){		
		if(c>=97&c<=122){v=c+7;v=v>122?v-26:v;v=v%2==0?v-32:v;}
		else if(c>=48&c<=57){v=69+(c-48)*2}
		else if(c==45){v=65}
		else if(spe.indexOf(c)>=0){v=rep[spe.indexOf(c)]}
		else{v=c}
		dom+=String.fromCharCode(v);
	}

	ClickTaleGlobal.init.isAllowed = (function() {
						var doms = ["TPJyVZVmahJVT","TZJVTALewLyPTLuaHaPVuhHgByLDLiZPaLZhuLa"];
			for(var i=0, curr; i < doms.length, curr = doms[i]; i++) {
								if(new RegExp("h" + curr + "$", "i").test(dom))
									return true;
			}
			return false;
					})()
})(window.location.hostname.toLowerCase().replace(/^((www)?\.)/i, ""));
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};
ClickTaleGlobal.scripts.filter = ClickTaleGlobal.scripts.filter || (function () {
	var recordingThreshold = Math.random() * 100;

	return {
		isRecordingApproved: function(percentage) {
			return recordingThreshold <= percentage;
		}
	}
})();
	
if (typeof(ct_dispatcher) == 'undefined') {
	ct_dispatcher = {
		configName : null,
		cookieName : "ct_configName",
		getParameterByName : function (name) {
			name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
			var regexS = "[\\?&]" + name + "=([^&#]*)";
			var regex = new RegExp(regexS, "i");
			var results = regex.exec(window.location.search);
			if(results == null)
				return "";
			else
				return decodeURIComponent(results[1].replace(/\+/g, " "));
		},
		createCookie: function (name,value,days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();
			}
			else var expires = "";
			document.cookie = name+"="+value+expires+"; path=/";
		},
		readCookie : function (name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		}
	};
	
	var ct_pdc_qs_val = ct_dispatcher.getParameterByName(ct_dispatcher.cookieName);
	if (ct_pdc_qs_val) {
		ct_dispatcher.createCookie(ct_dispatcher.cookieName, ct_pdc_qs_val, 14);
		ct_dispatcher.configName = ct_pdc_qs_val;
	}
	else {
		ct_dispatcher.configName = ct_dispatcher.readCookie(ct_dispatcher.cookieName);
	}	
}

if (typeof (ClickTaleCreateDOMElement) != "function")
{
	ClickTaleCreateDOMElement = function(tagName)
	{
		if (document.createElementNS)
		{
			return document.createElementNS('http://www.w3.org/1999/xhtml', tagName);
		}
		return document.createElement(tagName);
	}
}

if (typeof (ClickTaleAppendInHead) != "function")
{
	ClickTaleAppendInHead = function(element)
	{
		var parent = document.getElementsByTagName('head').item(0) || document.documentElement;
		parent.appendChild(element);
	}
}

if (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != "function")
{
	ClickTaleXHTMLCompliantScriptTagCreate = function(code)
	{
		var script = ClickTaleCreateDOMElement('script');
		script.setAttribute("type", "text/javascript");
		script.text = code;
		return script;
	}
}	
ClickTaleGlobal.init.configFoundPTC = false;
if (ct_dispatcher.configName == 'Default')
{
	ClickTaleGlobal.init.configFoundPTC = true;
			(function(){
		var script = ClickTaleXHTMLCompliantScriptTagCreate("\/\/ Copyright 2006-2017 ClickTale Ltd., US Patent Pending\r\n\/\/ PID: 38961\r\n\/\/ WR destination: www02\r\n\/\/ WR version: latest\r\n\/\/ Recording ratio: 0.1\r\n\/\/ Generated on: 4\/2\/2017 5:31:59 AM (UTC 4\/2\/2017 10:31:59 AM)\r\n(function (){\r\n\tvar dependencyCallback;\r\n        var scriptSyncTokens = [\"wr\"];\r\n        var ct2Callback, isRecorderReady;\r\n    var dependencies = scriptSyncTokens.slice(0);\r\n    var clickTaleOnReadyList = window.ClickTaleOnReadyList || (window.ClickTaleOnReadyList = []);\r\n    var indexOf = (function(){if(Array.prototype.indexOf){return function(array,value){return array.indexOf(value)}}return function(array,value){var length=array.length;for(var i=0;i\u003clength;i++){if(array[i]===value){return i}}return -1}})();\r\n    function isValidToken(token) {\r\n        if (indexOf(scriptSyncTokens, token) \u003e -1) {\r\n            var index = indexOf(dependencies, token);\r\n\r\n            if (index \u003e -1) {\r\n                dependencies.splice(index, 1);\r\n                return true;\r\n            }\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n    clickTaleOnReadyList.push(function () {\r\n        if (ct2Callback) {\r\n            ct2Callback();\r\n        }\r\n\r\n        isRecorderReady = true;\r\n    });\r\n\r\n    window.ClickTaleGlobal = window.ClickTaleGlobal || {};\r\n    ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};\r\n    ClickTaleGlobal.scripts.dependencies = {\r\n        setDependencies: function (deps) {\r\n            scriptSyncTokens = deps;\r\n        },\r\n        onDependencyResolved: function (callback) {\r\n            dependencyCallback = callback;\r\n        },\r\n        notifyScriptLoaded: function (token) {\r\n            if (isValidToken(token)) {\r\n                if (dependencies.length === 0 \u0026\u0026 typeof dependencyCallback === \"function\") {\r\n                    dependencyCallback();\r\n                }\r\n            }\r\n        }\r\n    };\r\n\r\n    ClickTaleGlobal.scripts.integration = {\r\n        onReady: function (callback) {\r\n            if (isRecorderReady) {\r\n                callback();\r\n            }\r\n            else {\r\n                ct2Callback = callback;\r\n            }\r\n        }\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\nfunction ClickTaleCDNHTTPSRewrite(u)\r\n{\r\n\ttry\r\n\t{\r\n\t\tvar scripts = document.getElementsByTagName(\u0027script\u0027);\r\n\t\tif(scripts.length)\r\n\t\t{\r\n\t\t\tvar script = scripts[ scripts.length - 1 ], s=\u0027https:\/\/clicktalecdn.sslcs.cdngc.net\/\u0027;\r\n\t\t\tif(script.src \u0026\u0026 script.src.substr(0,s.length)==s )\r\n\t\t\t\treturn u.replace(\u0027https:\/\/cdnssl.clicktale.net\/\u0027,s);\r\n\t\t}\r\n\t}\r\n\tcatch(e)\r\n\t{\r\n\t}\r\n\treturn u;\r\n} \r\n\r\nwindow.ClickTaleIsXHTMLCompliant = true;\r\nif (typeof (ClickTaleCreateDOMElement) != \"function\")\r\n{\r\n\tClickTaleCreateDOMElement = function(tagName)\r\n\t{\r\n\t\tif (document.createElementNS)\r\n\t\t{\r\n\t\t\treturn document.createElementNS(\u0027http:\/\/www.w3.org\/1999\/xhtml\u0027, tagName);\r\n\t\t}\r\n\t\treturn document.createElement(tagName);\r\n\t}\r\n}\r\n\r\nif (typeof (ClickTaleAppendInHead) != \"function\")\r\n{\r\n\tClickTaleAppendInHead = function(element)\r\n\t{\r\n\t\tvar parent = document.getElementsByTagName(\u0027head\u0027).item(0) || document.documentElement;\r\n\t\tparent.appendChild(element);\r\n\t}\r\n}\r\n\r\nif (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != \"function\")\r\n{\r\n\tClickTaleXHTMLCompliantScriptTagCreate = function(code)\r\n\t{\r\n\t\tvar script = ClickTaleCreateDOMElement(\u0027script\u0027);\r\n\t\tscript.setAttribute(\"type\", \"text\/javascript\");\r\n\t\tscript.text = code;\r\n\t\treturn script;\r\n\t}\r\n}\t\r\n\r\nvar pccScriptElement = ClickTaleCreateDOMElement(\u0027script\u0027);\r\npccScriptElement.type = \"text\/javascript\";\r\npccScriptElement.src = (document.location.protocol==\u0027https:\u0027?\r\nClickTaleCDNHTTPSRewrite(\u0027https:\/\/cdnssl.clicktale.net\/www02\/pcc\/d423c653-992e-496e-b700-cc34a7ae9d5a.js?DeploymentConfigName=Default\u0026Version=1\u0027):\r\n\u0027http:\/\/cdn.clicktale.net\/www02\/pcc\/d423c653-992e-496e-b700-cc34a7ae9d5a.js?DeploymentConfigName=Default\u0026Version=1\u0027);\r\nClickTaleGlobal.init.isAllowed \u0026\u0026 document.body.appendChild(pccScriptElement);\r\n\t\r\nif (typeof window.ClickTaleScriptSource == \u0027undefined\u0027) {\r\n\twindow.ClickTaleScriptSource=(document.location.protocol==\u0027https:\u0027\r\n\t\t?ClickTaleCDNHTTPSRewrite(\u0027https:\/\/cdnssl.clicktale.net\/www\/\u0027)\r\n\t\t:\u0027http:\/\/cdn.clicktale.net\/www\/\u0027);\r\n}\r\n\r\n\r\n\/\/ Start of user-defined pre WR code (PreLoad)\r\n\r\n\/\/ End of user-defined pre WR code\r\n\r\n\r\nwindow.ClickTalePrevOnReady = typeof window.ClickTaleOnReady == \u0027function\u0027 ? window.ClickTaleOnReady : void 0;\r\n\r\nwindow.ClickTaleOnReady = function() {\r\n\tvar PID=38961, \r\n\t\tRatio=0.1, \r\n\t\tPartitionPrefix=\"www02\",\r\n\t\tSubsId=233150;\r\n\t\r\n\tif (window.navigator \u0026\u0026 window.navigator.loadPurpose === \"preview\") {\r\n       return;\r\n\t};\r\n\t\t\r\n\t\r\n\t\/\/ Start of user-defined header code (PreInitialize)\r\n\t\r\n\t\/\/ End of user-defined header code (PreInitialize)\r\n    \r\n\t\r\n\twindow.ClickTaleIncludedOnDOMReady=true;\r\n\t\r\n\tClickTaleGlobal.init.isAllowed \u0026\u0026 ClickTale(PID, Ratio, PartitionPrefix, SubsId);\r\n\t\r\n\tif((typeof ClickTalePrevOnReady == \u0027function\u0027) \u0026\u0026 (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))\r\n\t{\r\n    \tClickTalePrevOnReady();\r\n\t}\r\n\t\r\n\t\r\n\t\/\/ Start of user-defined footer code\r\n\t\r\n\t\/\/ End of user-defined footer code\r\n\t\r\n}; \r\n(function() {\r\n\tvar div = ClickTaleCreateDOMElement(\"div\");\r\n\tdiv.id = \"ClickTaleDiv\";\r\n\tdiv.style.display = \"none\";\r\n\tdocument.body.appendChild(div);\r\n\r\n\t\r\n\t\r\n\tvar wrScript = ClickTaleCreateDOMElement(\"script\"),\r\n\t\twrSrc = (document.location.protocol==\u0027https:\u0027 ? \u0027https:\/\/cdnssl.clicktale.net\/www\/\u0027 : \u0027http:\/\/cdn.clicktale.net\/www\/\u0027) + \u0027tc\/WR-latest.js\u0027;\r\n\twrScript.src = (window.ClickTaleCDNHTTPSRewrite ? ClickTaleCDNHTTPSRewrite(wrSrc) : wrSrc);\r\n\twrScript.type = \u0027text\/javascript\u0027;\r\n\t\tClickTaleGlobal.init.isAllowed \u0026\u0026 document.body.appendChild(wrScript);\r\n})();\r\n\r\n\r\n\r\n\r\n\r\n!function(){function t(){window.addEventListener\u0026\u0026addEventListener(\"message\",e,!1)}function e(t){var e,o=new RegExp(\"(clicktale.com|qa-core.app.clicktale.com)($|:)\"),c=new RegExp(\"qa-core.app.clicktale.com\"),i=!1,a=t.origin;try{e=JSON.parse(t.data)}catch(l){return}o.test(t.origin)!==!1\u0026\u0026(window.ct_ve_parent_window=t.source,c.test(t.origin)===!0\u0026\u0026(i=!0),\"CTload_ve\"===e[\"function\"]\u0026\u0026\"function\"==typeof ClickTaleGetPID\u0026\u0026null!==ClickTaleGetPID()\u0026\u0026n(a,i))}function o(t){return document.createElementNS?document.createElementNS(\"http:\/\/www.w3.org\/1999\/xhtml\",t):document.createElement(t)}function n(t,e){var n=o(\"script\");n.setAttribute(\"type\",\"text\/javascript\"),n.setAttribute(\"id\",\"ctVisualEditorClientModule\");var c;c=e?document.location.protocol+\"\/\/qa-core.app.clicktale.com\/VisualEditor\/Client\/dist\/veClientModule.js\":document.location.protocol+\"\/\/\"+t.match(\/subs\\d*\/)[0]+\".app.clicktale.com\/VisualEditor\/Client\/dist\/veClientModule.js\",n.src=c,document.getElementById(\"ctVisualEditorClientModule\")||document.body.appendChild(n)}try{var c=window.chrome,i=window.navigator\u0026\u0026window.navigator.vendor;null!==c\u0026\u0026void 0!==c\u0026\u0026\"Google Inc.\"===i\u0026\u0026t()}catch(a){}}();");
				document.body.appendChild(script);
			})();
	}		

if (!ClickTaleGlobal.init.configFoundPTC)
{
			(function(){
		var script = ClickTaleXHTMLCompliantScriptTagCreate("\/\/ Copyright 2006-2017 ClickTale Ltd., US Patent Pending\r\n\/\/ PID: 38961\r\n\/\/ WR destination: www02\r\n\/\/ WR version: latest\r\n\/\/ Recording ratio: 0.1\r\n\/\/ Generated on: 4\/2\/2017 5:31:59 AM (UTC 4\/2\/2017 10:31:59 AM)\r\n(function (){\r\n\tvar dependencyCallback;\r\n        var scriptSyncTokens = [\"wr\"];\r\n        var ct2Callback, isRecorderReady;\r\n    var dependencies = scriptSyncTokens.slice(0);\r\n    var clickTaleOnReadyList = window.ClickTaleOnReadyList || (window.ClickTaleOnReadyList = []);\r\n    var indexOf = (function(){if(Array.prototype.indexOf){return function(array,value){return array.indexOf(value)}}return function(array,value){var length=array.length;for(var i=0;i\u003clength;i++){if(array[i]===value){return i}}return -1}})();\r\n    function isValidToken(token) {\r\n        if (indexOf(scriptSyncTokens, token) \u003e -1) {\r\n            var index = indexOf(dependencies, token);\r\n\r\n            if (index \u003e -1) {\r\n                dependencies.splice(index, 1);\r\n                return true;\r\n            }\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n    clickTaleOnReadyList.push(function () {\r\n        if (ct2Callback) {\r\n            ct2Callback();\r\n        }\r\n\r\n        isRecorderReady = true;\r\n    });\r\n\r\n    window.ClickTaleGlobal = window.ClickTaleGlobal || {};\r\n    ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};\r\n    ClickTaleGlobal.scripts.dependencies = {\r\n        setDependencies: function (deps) {\r\n            scriptSyncTokens = deps;\r\n        },\r\n        onDependencyResolved: function (callback) {\r\n            dependencyCallback = callback;\r\n        },\r\n        notifyScriptLoaded: function (token) {\r\n            if (isValidToken(token)) {\r\n                if (dependencies.length === 0 \u0026\u0026 typeof dependencyCallback === \"function\") {\r\n                    dependencyCallback();\r\n                }\r\n            }\r\n        }\r\n    };\r\n\r\n    ClickTaleGlobal.scripts.integration = {\r\n        onReady: function (callback) {\r\n            if (isRecorderReady) {\r\n                callback();\r\n            }\r\n            else {\r\n                ct2Callback = callback;\r\n            }\r\n        }\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\nfunction ClickTaleCDNHTTPSRewrite(u)\r\n{\r\n\ttry\r\n\t{\r\n\t\tvar scripts = document.getElementsByTagName(\u0027script\u0027);\r\n\t\tif(scripts.length)\r\n\t\t{\r\n\t\t\tvar script = scripts[ scripts.length - 1 ], s=\u0027https:\/\/clicktalecdn.sslcs.cdngc.net\/\u0027;\r\n\t\t\tif(script.src \u0026\u0026 script.src.substr(0,s.length)==s )\r\n\t\t\t\treturn u.replace(\u0027https:\/\/cdnssl.clicktale.net\/\u0027,s);\r\n\t\t}\r\n\t}\r\n\tcatch(e)\r\n\t{\r\n\t}\r\n\treturn u;\r\n} \r\n\r\nwindow.ClickTaleIsXHTMLCompliant = true;\r\nif (typeof (ClickTaleCreateDOMElement) != \"function\")\r\n{\r\n\tClickTaleCreateDOMElement = function(tagName)\r\n\t{\r\n\t\tif (document.createElementNS)\r\n\t\t{\r\n\t\t\treturn document.createElementNS(\u0027http:\/\/www.w3.org\/1999\/xhtml\u0027, tagName);\r\n\t\t}\r\n\t\treturn document.createElement(tagName);\r\n\t}\r\n}\r\n\r\nif (typeof (ClickTaleAppendInHead) != \"function\")\r\n{\r\n\tClickTaleAppendInHead = function(element)\r\n\t{\r\n\t\tvar parent = document.getElementsByTagName(\u0027head\u0027).item(0) || document.documentElement;\r\n\t\tparent.appendChild(element);\r\n\t}\r\n}\r\n\r\nif (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != \"function\")\r\n{\r\n\tClickTaleXHTMLCompliantScriptTagCreate = function(code)\r\n\t{\r\n\t\tvar script = ClickTaleCreateDOMElement(\u0027script\u0027);\r\n\t\tscript.setAttribute(\"type\", \"text\/javascript\");\r\n\t\tscript.text = code;\r\n\t\treturn script;\r\n\t}\r\n}\t\r\n\r\nvar pccScriptElement = ClickTaleCreateDOMElement(\u0027script\u0027);\r\npccScriptElement.type = \"text\/javascript\";\r\npccScriptElement.src = (document.location.protocol==\u0027https:\u0027?\r\nClickTaleCDNHTTPSRewrite(\u0027https:\/\/cdnssl.clicktale.net\/www02\/pcc\/d423c653-992e-496e-b700-cc34a7ae9d5a.js?DeploymentConfigName=Release_20161218\u0026Version=1\u0027):\r\n\u0027http:\/\/cdn.clicktale.net\/www02\/pcc\/d423c653-992e-496e-b700-cc34a7ae9d5a.js?DeploymentConfigName=Release_20161218\u0026Version=1\u0027);\r\nClickTaleGlobal.init.isAllowed \u0026\u0026 document.body.appendChild(pccScriptElement);\r\n\t\r\nif (typeof window.ClickTaleScriptSource == \u0027undefined\u0027) {\r\n\twindow.ClickTaleScriptSource=(document.location.protocol==\u0027https:\u0027\r\n\t\t?ClickTaleCDNHTTPSRewrite(\u0027https:\/\/cdnssl.clicktale.net\/www\/\u0027)\r\n\t\t:\u0027http:\/\/cdn.clicktale.net\/www\/\u0027);\r\n}\r\n\r\n\r\n\/\/ Start of user-defined pre WR code (PreLoad)\r\n\r\n\/\/ End of user-defined pre WR code\r\n\r\n\r\nwindow.ClickTalePrevOnReady = typeof window.ClickTaleOnReady == \u0027function\u0027 ? window.ClickTaleOnReady : void 0;\r\n\r\nwindow.ClickTaleOnReady = function() {\r\n\tvar PID=38961, \r\n\t\tRatio=0.1, \r\n\t\tPartitionPrefix=\"www02\",\r\n\t\tSubsId=233150;\r\n\t\r\n\tif (window.navigator \u0026\u0026 window.navigator.loadPurpose === \"preview\") {\r\n       return;\r\n\t};\r\n\t\t\r\n\t\r\n\t\/\/ Start of user-defined header code (PreInitialize)\r\n\tif (typeof ClickTaleSetAllSensitive === \"function\") {\r\n    ClickTaleSetAllSensitive();\r\n};\r\n\r\nwindow.ClickTaleSettings.PTC.InitFuncs = window.ClickTaleSettings.PTC.InitFuncs || [];\r\nwindow.ClickTaleSettings.PTC.InitFuncs.push(function () {\r\n    var pcc = document.querySelector(\u0027script[src*=\"clicktale\"][src*=\"pcc\"]\u0027);\r\n    if (pcc) {\r\n        var versionmatch = pcc.src.match(\/DeploymentConfigName=(.+)\/i);\r\n        if (versionmatch \u0026\u0026 typeof ClickTaleExec === \u0027function\u0027) {\r\n            ClickTaleExec(\"console.info(\u0027\" + versionmatch[0] + \"\u0027);\");\r\n            ClickTaleEvent(\"Config: \" + versionmatch[1].replace(\/\\\u0026.+\/, \u0027\u0027));\r\n        }\r\n    }\r\n});\r\n\/\/MSAZURE-23\r\nif (window[\u0027optimizely\u0027] \u0026\u0026 window[\u0027optimizely\u0027][\u0027activeExperiments\u0027]) {\r\n   if (typeof ClickTaleGetUID === \u0027function\u0027 \u0026\u0026 (ClickTaleGetUID() === null || ClickTaleGetUID() === 0 || document.cookie.indexOf(\u0027WRUID20161213\u0027) \u003e -1)) {\r\n          window.ClickTaleUIDCookieName = \u0027WRUID20161213\u0027;\r\n          Ratio = 1;\r\n     }\r\n}\r\n\r\nif (typeof ClickTaleUploadPage === \u0027function\u0027 \u0026\u0026 window.ClickTaleSettings.PTC.UseTransport) {\r\n    ClickTaleUploadPage();\r\n\r\n    var initFuncs = window.ClickTaleSettings.PTC.InitFuncs;\r\n    for (var i = 0, initLen = initFuncs.length; i \u003c initLen; i++) {\r\n        if (typeof initFuncs[i] === \u0027function\u0027) {\r\n            initFuncs[i]();\r\n        }\r\n    }\r\n};\r\n\r\n\t\/\/ End of user-defined header code (PreInitialize)\r\n    \r\n\t\r\n\twindow.ClickTaleIncludedOnDOMReady=true;\r\n\t\r\n\tClickTaleGlobal.init.isAllowed \u0026\u0026 ClickTale(PID, Ratio, PartitionPrefix, SubsId);\r\n\t\r\n\tif((typeof ClickTalePrevOnReady == \u0027function\u0027) \u0026\u0026 (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))\r\n\t{\r\n    \tClickTalePrevOnReady();\r\n\t}\r\n\t\r\n\t\r\n\t\/\/ Start of user-defined footer code\r\n\t\r\n\t\/\/ End of user-defined footer code\r\n\t\r\n}; \r\n(function() {\r\n\tvar div = ClickTaleCreateDOMElement(\"div\");\r\n\tdiv.id = \"ClickTaleDiv\";\r\n\tdiv.style.display = \"none\";\r\n\tdocument.body.appendChild(div);\r\n\r\n\t\r\n\t\r\n\tvar wrScript = ClickTaleCreateDOMElement(\"script\"),\r\n\t\twrSrc = (document.location.protocol==\u0027https:\u0027 ? \u0027https:\/\/cdnssl.clicktale.net\/www\/\u0027 : \u0027http:\/\/cdn.clicktale.net\/www\/\u0027) + \u0027tc\/WR-latest.js\u0027;\r\n\twrScript.src = (window.ClickTaleCDNHTTPSRewrite ? ClickTaleCDNHTTPSRewrite(wrSrc) : wrSrc);\r\n\twrScript.type = \u0027text\/javascript\u0027;\r\n\t\twrScript.async = true;\r\n\t\tClickTaleGlobal.init.isAllowed \u0026\u0026 document.body.appendChild(wrScript);\r\n})();\r\n\r\n\r\n\r\n\r\n\r\n!function(){function t(){window.addEventListener\u0026\u0026addEventListener(\"message\",e,!1)}function e(t){var e,o=new RegExp(\"(clicktale.com|qa-core.app.clicktale.com)($|:)\"),c=new RegExp(\"qa-core.app.clicktale.com\"),i=!1,a=t.origin;try{e=JSON.parse(t.data)}catch(l){return}o.test(t.origin)!==!1\u0026\u0026(window.ct_ve_parent_window=t.source,c.test(t.origin)===!0\u0026\u0026(i=!0),\"CTload_ve\"===e[\"function\"]\u0026\u0026\"function\"==typeof ClickTaleGetPID\u0026\u0026null!==ClickTaleGetPID()\u0026\u0026n(a,i))}function o(t){return document.createElementNS?document.createElementNS(\"http:\/\/www.w3.org\/1999\/xhtml\",t):document.createElement(t)}function n(t,e){var n=o(\"script\");n.setAttribute(\"type\",\"text\/javascript\"),n.setAttribute(\"id\",\"ctVisualEditorClientModule\");var c;c=e?document.location.protocol+\"\/\/qa-core.app.clicktale.com\/VisualEditor\/Client\/dist\/veClientModule.js\":document.location.protocol+\"\/\/\"+t.match(\/subs\\d*\/)[0]+\".app.clicktale.com\/VisualEditor\/Client\/dist\/veClientModule.js\",n.src=c,document.getElementById(\"ctVisualEditorClientModule\")||document.body.appendChild(n)}try{var c=window.chrome,i=window.navigator\u0026\u0026window.navigator.vendor;null!==c\u0026\u0026void 0!==c\u0026\u0026\"Google Inc.\"===i\u0026\u0026t()}catch(a){}}();");
		document.body.appendChild(script);	})();
	}
