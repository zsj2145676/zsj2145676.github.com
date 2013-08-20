(function() {
    var u = "http://shujian.me/",
        s = u + "sinoyuanscript/", //http://vfancn.blob.core.chinacloudapi.cn/scripts/
        q = u + "sinoyuancss/"; //http://vfancn.blob.core.chinacloudapi.cn/cfcss/
    /* define some global variable */
    var i = {
        dir: u,
        js_dir: s,
        css_dir: q,
        init: function() {
            console.log(u);
            console.log(s);
            console.log(q);
        }
    };
    i.init();
})();
