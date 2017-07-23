export default [{
    // 微信
    ua : 'Mozilla/5.0 (Linux; Android 7.1.1; OD103 Build/NMF26F; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043307 Safari/537.36 MicroMessenger/6.5.10.1080 NetType/WIFI Language/zh_CN',
    expect : {
        isWechat: true,
        version: '6.5.10.1080',
        isMobile: true
    }
}, {
    // QQ
    ua : 'Mozilla/5.0 (Linux; Android 7.1.1; OD103 Build/NMF26F; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.84 Mobile Safari/537.36 V1_AND_SQ_7.1.0_692_YYB_D PA QQ/7.1.0.3175 NetType/WIFI WebP/0.4.1 Pixel/1080',
    expect : {
        isQQ: true,
        version: '7.1.0.3175',
        isMobile: true
    }
}, {
    // 钉钉
    ua : 'Mozilla/5.0 (Linux; Android 7.1.1; OD103 Build/NMF26F; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.84 Mobile Safari/537.36 AliApp(DingTalk/3.5.1) com.alibaba.android.rimet/0 Channel/10006872 language/zh-CN',
    expect : {
        isDingDing: true,
        version: '3.5.1',
        isMobile: true
    }
}, {
    // 支付宝
    ua : 'Mozilla/5.0 (Linux; U; Android 7.1.1; zh-CN; OD103 Build/NMF26F) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/40.0.2214.89 UCBrowser/11.3.8.909 UWS/2.10.2.5 Mobile Safari/537.36 UCBS/2.10.2.5 Nebula AlipayDefined(nt:WIFI,ws:360|0|3.0) AliApp(AP/10.0.18.062203) AlipayClient/10.0.18.062203 Language/zh-Hans useStatusBar/true',
    expect : {
        isAlipay: true,
        version: '10.0.18.062203',
        isMobile: true
    }
}, {
    // 淘宝
    ua : 'Mozilla/5.0 (Linux; U; Android 7.1.1; zh-CN; OD103 Build/NMF26F) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/40.0.2214.89 UCBrowser/11.4.1.939 UCBS/2.10.1.10 Mobile Safari/537.36 AliApp(TB/6.9.7) WindVane/8.0.0 1080X1920 GCanvas/1.4.2.21',
    expect : {
        isTaobao: true,
        version: '6.9.7',
        isMobile: true
    }
}, {
    // 微博
    ua : 'Mozilla/5.0 (Linux; Android 7.1.1; OD103 Build/NMF26F; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.84 Mobile Safari/537.36 Weibo (smartisan-OD103__weibo__7.7.0__android__android7.1.1)',
    expect : {
        isWeibo: true,
        version: '7.7.0',
        isMobile: true
    }
}, {
    // 微博
    ua : 'Mozilla/5.0 (Linux; Android 6.0.1; MI MAX Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 Mobile Safari/537.36 Weibo (Xiaomi-MI MAX__weibo__7.6.2__android__android6.0.1)',
    expect : {
        isWeibo: true,
        version: '7.6.2',
        isMobile: true
    }
}, {
    // 优酷
    ua : 'Mozilla/5.0 (Linux; Android 6.0.1; MI MAX Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 Mobile Safari/537.36 WindVane/8.0.0 yk_web_sdk_1.0.4.1 Youku/6.8.5 (Android 6.0.1; Bridge_SDK; GUID 4d93df5427e6e782fd9c7613d4624c0e; UTDID V3D6XyUFwCUDAE7mRCM+7Y9S;) tae_sdk_3.1.2.2 AliApp(BC/3.1.2.2) AliBaichuan(2014_0_23570660@baichuan_android_3.1.2.2/1.0.0)',
    expect : {
        isYouku: true,
        version: '6.8.5',
        isMobile: true
    }
}, {
    // QQ browser
    ua : 'Mozilla/5.0 (Linux; U; Android 6.0.1; zh-cn; MI MAX Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 Chrome/37.0.0.0 MQQBrowser/7.6 Mobile Safari/537.36',
    expect : {
        isQQBrowser: true,
        version: '7.6',
        isMobile: true
    }

}, {
    // UC
    ua : 'Mozilla/5.0 (Linux; U; Android 6.0.1; zh-CN; MI MAX Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/40.0.2214.89 UCBrowser/11.6.0.947 Mobile Safari/537.36',
    expect : {
        isUC: true,
        version: '11.6.0.947',
        isMobile: true
    }

}, {
    // 百度 browser
    ua : 'Mozilla/5.0 (Linux; Android 6.0.1; MI MAX Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/48.0.2564.116 Mobile Safari/537.36 baidubrowser/7.14.14.0 (Baidu; P1 6.0.1)',
    expect : {
        isBaiduBrowser: true,
        version: '7.14.14.0',
        isMobile: true
    }
}, {
    // 搜狗browser
    ua : 'Mozilla/5.0 (Linux; Android 6.0.1; MI MAX; Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.92 Mobile Safari/537.36 SogouMSE,SogouMobileBrowser/5.8.0',
    expect : {
        isSogou: true,
        version: '5.8.0',
        isMobile: true
    }

}, {
    // QQ空间
    ua : 'Mozilla/5.0 (Linux; Android 6.0.1; MI MAX Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043305 Safari/537.36 QQJSSDK/1.3 Qzone/V1_AND_QZ_7.3.1_288_XM_A QZONEJSSDK/6.0',
    expect : {
        isQZone: true,
        version: '7.3.1',
        isMobile: true
    }
}, {
    // IE11
    ua : 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko',
    expect : {
        isIE: true,
        version: '11.0',
        isDesktop: true
    }
}, {
    // windows 10 mobile edge
    ua : 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Nokia; Lumia 520) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Mobile Safari/537.36 Edge/12.0',
    expect : {
        isEdge: true,
        version: '12.0',
        isMobile: true
    }
}, {
    // IE10
    ua : 'Mozilla/5.0(compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)',
    expect : {
        isIE: true,
        version: '10.0',
        isDesktop: true
    }
}, {
    // IE9
    ua : 'Mozilla/5.0(compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)',
    expect : {
        isIE: true,
        version: '9.0',
        isDesktop: true
    }
}, {
    // IE8
    ua : 'Mozilla/4.0(compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)',
    expect : {
        isIE: true,
        version: '8.0',
        isDesktop: true
    }
}, {
    // chrome
    ua : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
    expect : {
        isChrome: true,
        version: '59.0.3071.115',
        isDesktop: true
    }
}, {
    // ipad safari
    ua : 'Mozilla/5.0 (iPad; CPU OS 10_0_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14A403 Safari/602.1',
    expect : {
        isSafari: true,
        version: '10.0',
        isMobile: true
    }
}, {
    // edge
    ua : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393',
    expect : {
        isEdge: true,
        version: '14.14393',
        isDesktop: true
    }
}];

// 土豆
