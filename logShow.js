/*
日志协议：
[{
      "appName": "认证系统",
      "equipmentName": "ykserver172",
      "esId": "K-N_TW0Bg6Pnu4WYw-Ks",
      "esIndex": "cnnoc_auth",
      "host": "192.168.0.172",
      "logLevel": "INFO",
      "logType": "auth",
      "message": "[2019-09-18 15:11:39.440] [auth] [192.168.0.172] [9001] [ykserver172] [Linux] [1.8.0_212] [main] [INFO] [springfox.documentation.spring.web.scanners.ApiListingReferenceScanner] [scan] [[Request mapping: menuVerifyName belongs to groups: [[ResourceGroup{groupName='menu-controller', position=0, controller=cn.cloudscope.basic.module.menu.controller.MenuController}]]",
      "port": 9001,
      "timestamp": "2019-09-18T07:11:39.440Z"
}]
*/
var logShow = {
    logs: [],
    initData: function() {
        var logArr = [];
        for(var i = 0; i < 100; ++i) {
            logArr.push({color: 'blue', id: i, text: '日志'+i});
        }
        for(var i = 101; i < 250; ++i) {
            logArr.push({color: 'red', id: i, text: '日志'+i})
        }
				
       // for(var i = 1001; i < 1500; ++i) {
       //     logArr.push({color: 'blue', id: i, text: '日志'+i});
       // }
       // for(var i = 1001; i < 1500; ++i) {
       //     logArr.push({color: 'black', id: i, text: '日志'+i})
      //  }
        return logArr;
    },
    initLine: function(){
        var html = '';
        $.each(this.logs, function(i, o){
            html += '<div class="line-item" style="color:'+o.color+'">——</div>';
        });
        $('.mod-line').html(html);
    },
    init: function(){
        this.logs = this.initData();
        this.initLine();
    }
};
