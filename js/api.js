$(document).ready(function() {
		$("#selectid").load("api.html");
	});

function getvideo(){
	var vurl = document.getElementById("url").value
	var apilist = document.getElementById("selectid");
	var index = document.getElementById("selectid").selectedIndex;
	var api = apilist.options[index].value;

	if (vurl =="输入您想播放的视频地址......") {
                alert("请先在输入框内输入正确的视频地址哦！");
                return false;
				}

	document.getElementById("vplay").src=api+vurl;
	}

    function sdfdf(){
        $('#guanggkjdn').css('display','none');
    }

    function feedback(){
        var baocuotishi =document.getElementById("baocuotishi").value;
        alert("请联系"+baocuotishi+"报错")
    }