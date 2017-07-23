export const map = [{
    key: 'Wechat',
    reg: /(micromessenger)\/([\w.]+)/
}, {
    key: 'QQ',
    reg: /(qq)\/([\w.]+)/
}, {
    key: 'DingDing',
    reg: /(aliapp\(dingtalk)\/([\w.]+)/
}, {
    key: 'Alipay',
    reg: /(alipayclient|aliapp\(AP)\/([\w.]+)/
}, {
    key: 'Tabao',
    reg: /(aliapp\(tb)\/([\w.]+)/
}, {
    key: 'Weibo',
    reg: /(weibo).*weibo__([\d.]+)/
}, {
    key: 'Youku',
    reg: /(youku)\/([\w.]+)/
}, {
    key: 'YoukuHD',
    reg: /(youkuhd)\/([\w.]+)/
}, {
    key: 'QZone',
    reg: /(qzone)\/.*_qz_([\d.]+)/
}, {
    key: 'QQBrowser ',
    reg: /(qqbrowser)\/([\w.]+)/
}, {
    key: 'UC',
    reg: /(ucbrowser)\/([\w.]+)/
}, {
    key: 'BaiduBrowser',
    reg: /(baidubrowser)\/([\w.]+)/
}, {
    key: 'Sogou',
    reg: /(sogou[\w]*browser)\/([\w.]+)/
}, {
    key: 'Edge',
    reg: /(edge)\/([\w.]+)/
}, {
    key: 'Opera',
    reg: /(opr)[\/]([\w.]+)/
}, {
    key: 'Chrome',
    reg: /(chrome)[ \/]([\w.]+)/
}, {
    key: 'IEMobile',
    reg: /(iemobile)[\/]([\w.]+)/
}, {
    key: 'Safari',
    reg: /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/
}, {
    key: 'Safari',
    reg: /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/
}, {
    key: 'Firefox',
    reg: /(firefox)\/([\w.]+)/
},{
    key: 'Webkit',
    reg: /(webkit)[ \/]([\w.]+)/
}, {
    key: 'Opera',
    reg: /(opera)(?:.*version|)[ \/]([\w.]+)/
}, {
    key: 'IE',
    reg: /(msie) ([\w.]+)/
}, {
    key: 'IE',
    reg: /trident.*(rv)(?::| )([\w.]+)/
}, {
    key: 'IE',
    reg: /compatible.*(mozilla)(?:.*? rv:([\w.]+)|)/
}];
