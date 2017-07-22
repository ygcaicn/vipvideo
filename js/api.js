
        $(document).ready(function() {
			$("#selectid").load("api.html");
        });
        function afsdf(){
            var htmlobj = $.ajax({
                type:"GET",
                url:"/0/api.txt",
                async:false,
            });
			
			x=document.getElementById("demo");
			x.innerHTML="api:"+htmlobj.responseText;

            var htmlobj1 = $.ajax({
                type:"GET",
                url:"/0/api1.txt",
                async:false,
            });
            var api =htmlobj.responseText;
            var api1 =htmlobj1.responseText;
            var selkuang=document.getElementById("seleid").value;
            var v1=document.getElementById("url").value;

            if (v1 =="输入您想播放的视频地址......") {
                alert("请先在输入框内输入正确的视频地址哦！");
                return false;
            }
            if(selkuang=="a"){

                document.getElementById("vplay").src=api+v1;
            }
            else{
                document.getElementById("vplay").src=api1+v1;
            }


        }

    function sdfdf(){
        $('#guanggkjdn').css('display','none');
    }

    function baocuo(){
        var baocuotishi =document.getElementById("baocuotishi").value;
        alert("请联系"+baocuotishi+"报错")
    }