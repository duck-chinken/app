
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/index/index","pages/user/people","pages/msg/message","pages/zx/zx01","pages/zx/zx02","pages/zx/zx03","pages/zx/zx04","pages/zx/zx05","pages/zx/zx06","pages/zx/zx07","pages/zx/zx08","pages/zx/zx09","pages/zx/zx10","pages/zx/zx11","pages/zx/zx12","pages/zx/pages/zx05Child","pages/zx/zx01-2","pages/zx/zx13","pages/zx/zx14","pages/zx/pages/zx14Child","pages/zx/zx15","pages/zx/zx16","pages/zx/zx17","pages/zx/zx18","pages/zx/zx19","pages/zx/zx24","pages/zx/collect","pages/zx/zx25"],"window":{"navigationBarBackgroundColor":"#0081ff","navigationBarTitleText":"WMS","navigationStyle":"custom","navigationBarTextStyle":"white"},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"WMS","compilerVersion":"3.2.3","entryPagePath":"pages/index/index","entryPageQuery":"","realEntryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{}},{"path":"/pages/index/index","meta":{},"window":{}},{"path":"/pages/user/people","meta":{},"window":{}},{"path":"/pages/msg/message","meta":{},"window":{}},{"path":"/pages/zx/zx01","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx02","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx03","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx04","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx05","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx06","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx07","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx08","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx09","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx10","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx11","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx12","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/pages/zx05Child","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx01-2","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx13","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx14","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/pages/zx14Child","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx15","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx16","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx17","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx18","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx19","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx24","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/collect","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/zx/zx25","meta":{},"window":{"enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});