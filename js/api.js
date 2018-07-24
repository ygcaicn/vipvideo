function Para(sourceUrl=null,index=null)
{
	this.index = index;
	this.sourceUrl = sourceUrl;
}
para = new Para();

(function ($) {
	$(document).ready(function() {
		htmlobj=$.ajax({url:"api.html",async:false});
		$("#insopt").html(htmlobj.responseText);
		para.sourceUrl = $.getUrlParam("src");
		if(para.sourceUrl != null)
		{
			para.index = $.getUrlParam("index");
			var pindex = para.index;
			$("#insopt").get(0).selectedIndex=(pindex?pindex:0);
			api=$("#insopt").get(0).value;
			$("#vplay").attr("src",api+para.sourceUrl);
			$("#url").val(para.sourceUrl);
		}




		$("#insopt").change(function(){
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
			para.index = index;
			window.history.pushState({},0,'?index='+para.index+'&src='+para.sourceUrl); 
		});

		$("#url").blur(function(){
			var ele = $(this);
			if(ele.val()==''){
				if(para.sourceUrl != null){
					ele.val(para.sourceUrl);
				}
				else{
					ele.val('输入您想播放的视频地址......')
				}
			}
			else {
				para.sourceUrl = $.trim(ele.val())
			}
			para.index = document.getElementById("insopt").selectedIndex;
			if(para.sourceUrl!=null && para.sourceUrl!="")
			window.history.pushState({},0,'?index='+para.index+'&src='+para.sourceUrl); 
		});

		$("#url").focus(function(){
			var ele = $(this);
			if(ele.val()!='')ele.val('');
		});

		$("#okbutton").click(function(){
			getvideo();
		});
	});

	$.getUrlParam = function (name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return decodeURI(r[2]); return null;
	}
})(jQuery);


function getvideo(){
	var vurl = document.getElementById("url").value.trim();
	var apilist = document.getElementById("insopt");
	var index = document.getElementById("insopt").selectedIndex;
	if(vurl!=para.sourceUrl || index !=para.index){
		para.sourceUrl=vurl;
		para.index = index;
	}
	var api = apilist.options[index].value;
	if (api == "userapi")
	{
		api = document.getElementById("uapi").value;
	}
	if (vurl =="") {
			alert("请先在输入框内输入正确的视频地址哦！");
			return false;
			}
	document.getElementById("vplay").src=api+vurl;
}

function feedback(){
    window.open("mailto:ygcaicn@gmail.com");
	}
