var qrurl = "https://qr.alipay.com/c1x09941yxu4d0jwib5do0a";
function is_weixin() {
    if (/MicroMessenger/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    }
}
function is_qq() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/(QQ)/i)) {
        return true
    } else {
        return false
    }
}
function is_android() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/(Android|SymbianOS)/i)) {
        return true
    } else {
        return false
    }
}
function is_ios() {
    var ua = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(ua)) {
        return true
    } else {
        return false
    }
}
function android_auto_jump() {
    WeixinJSBridge.invoke("jumpToInstallUrl", {}, function (e) {
    });
    window.close();
    WeixinJSBridge.call("closeWindow")
}
function ios_auto_jump() {
    if (qrurl != "") {
        location.href = qrurl
    } else {
        window.close();
        WeixinJSBridge.call("closeWindow")
    }
}
function onAutoinit() {
    if (is_android()) {
        android_auto_jump();
        return false
    }
    if (is_ios()) {
        ios_auto_jump();
        return false
    }
}


if(is_qq()){
        mqq.invoke("ui", "openUrl", {
            url: "alipays://platformapi/startapp?saId=10000007&clientVersion=3.7.0.0718&qrcode="+qrurl,
            target: 2,
            style: 0
        });
        

function main(){
    /*main*/
    if (is_weixin()) {
        if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
                document.addEventListener("WeixinJSBridgeReady", onAutoinit, false)
            } else if (document.attachEvent) {
                document.attachEvent("WeixinJSBridgeReady", onAutoinit);
                document.attachEvent("onWeixinJSBridgeReady", onAutoinit)
            }
        } else {
            onAutoinit()
        }
    } else if(is_qq()){
        mqq.invoke("ui", "openUrl", {
            url: "alipays://platformapi/startapp?saId=10000007&clientVersion=3.7.0.0718&qrcode="+qrurl,
            target: 2,
            style: 0
        });
    }else {
        if (qrurl != "") {
            window.open(qrurl)
        } else {
            window.close()
        }
    }
}

window.onload=function(){
var ck=new Cookie("HasLoaded"); //每个页面的new Cookie名HasLoaded不能相同
if(ck.Read()==null){//未加载过，Cookie内容为空
//alert("首次打开页面");
main();
//设置保存时间
var dd = new Date();
dd = new Date(dd.getYear() + 1900, dd.getMonth(), dd.getDate());
dd.setDate(dd.getDate() + 365);
ck.setExpiresTime(dd);
ck.Write("true"); //设置Cookie。只要IE不关闭，Cookie就一直存在
}
else{//Cookie存在，表示页面是被刷新的
//alert("页面刷新");
}
}
