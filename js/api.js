$(document).ready(function() {
		$("#insopt").load("api.html");
	});

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

    function feedback(){
        alert("请联系ygcaicn@gmail.com报错")
    }