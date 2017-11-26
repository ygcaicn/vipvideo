(function ($) {
	$(document).ready(function() {
		var apilist;
		$("#insopt").load("api.html",function(){
			apilist = document.getElementById("insopt");
			var xx = $.getUrlParam("src");
			if(xx != null)
			{
				var pindex = $.getUrlParam("index");
				api=apilist.options[pindex?pindex:0].value;
				document.getElementById("vplay").src=api+xx;
				$("#insopt").get(0).selectedIndex=(pindex?pindex:0);
				$("#url").val(xx);
				$("#source_video").attr("src",$("#url").val());
				show_title();
			}
		});
	});

	$.getUrlParam = function (name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
	}


})(jQuery);


function getvideo(){
	var vurl = document.getElementById("url").value;
	var apilist = document.getElementById("insopt");
	var index = document.getElementById("insopt").selectedIndex;
	var api = apilist.options[index].value;
	if (api == "userapi")
	{
		api = document.getElementById("uapi").value;
	}
	if (vurl =="输入您想播放的视频地址......") {
			alert("请先在输入框内输入正确的视频地址哦！");
			return false;
			}

	document.getElementById("vplay").src=api+vurl;
     window.history.pushState({},0,'?index='+index+'&src='+vurl); 
	$("#source_video").attr("src",$("#url").val());
}

function showiapi(){
	var apilist = document.getElementById("insopt");
	var index = document.getElementById("insopt").selectedIndex;
	var api = apilist.options[index].value;
	if (api == "userapi")
	{
		$('.userapi').css('display','inline');
	}
	else
	{
		$('.userapi').css('display','none');
	}
}

function show_title(){
iframe = document.getElementById("source_video");
if (!/*@cc_on!@*/0) { //如果不是IE，IE的条件注释
	iframe.onload = function(){
		var h = $("#mod-play-tit", iframe.document).html();
		var h = $(iframe.document).find("#mod-play-tit").html()
		$("#videoname").html(h?h:"Failed get video title!!");
    	};
} else {
	iframe.onreadystatechange = function(){ // IE下的节点都有onreadystatechange这个事件
		if (iframe.readyState == "complete"){
			alert("Local iframe is now loaded.");
		}
	};
}



}

function feedback(){
	alert("请联系ygcaicn@gmail.com报错")
	}
