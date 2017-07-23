/*!
 * Browser detect 0.1.0
 *
 * https://github.com/notejs/browser-detect
 *
 * Released under the MIT license
 *
 * Date: 2017-07-23
 */

'use strict';

import {map} from './map';

const browser = {};

function detect( ua = navigator.userAgent ) {
    ua = 'Mozilla/5.0 (Linux; Android 6.0.1; MI MAX Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043305 Safari/537.36 QQJSSDK/1.3 Qzone/V1_AND_QZ_7.3.1_288_XM_A QZONEJSSDK/6.0';
    ua = ua.toLowerCase();

    let match = [];
    // eslint-disable-next-line
    let mapItem = null;

    for (let i = 0; i < map.length; i++) {
        match = map[i].reg.exec(ua);
        if (match) {
            mapItem = map[i];
            break;
        }
    }
    if (!match || (0 === match.length)) {
        match =
            /(edge)\/([\w.]+)/.exec( ua ) ||
            /(opr)[\/]([\w.]+)/.exec( ua ) ||
            /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
            /(iemobile)[\/]([\w.]+)/.exec( ua ) ||
            /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
            /(msie) ([\w.]+)/.exec( ua ) ||
            ua.indexOf('trident') >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
            ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
            [];
    }

    const platformMatch =
        /(ipad)/.exec( ua ) ||
        /(ipod)/.exec( ua ) ||
        /(windows phone)/.exec( ua ) ||
        /(iphone)/.exec( ua ) ||
        /(kindle)/.exec( ua ) ||
        /(silk)/.exec( ua ) ||
        /(android)/.exec( ua ) ||
        /(win)/.exec( ua ) ||
        /(mac)/.exec( ua ) ||
        /(linux)/.exec( ua ) ||
        /(cros)/.exec( ua ) ||
        /(playbook)/.exec( ua ) ||
        /(bb)/.exec( ua ) ||
        /(blackberry)/.exec( ua ) ||
        [];
    // eslint-disable-next-line
    // debugger
    const matched = {
        browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || '',
        version: match[ 2 ] || match[ 4 ] || '0',
        versionNumber: match[ 4 ] || match[ 2 ] || '0',
        platform: platformMatch[ 0 ] || ''
    };

    if ( matched.browser ) {
        browser[ matched.browser.replace(/^(\w)(.*)$/, (reg, $1, $2) => `is${$1.toUpperCase()}${$2}`) ] = true;
        browser.version = matched.version;
        browser.versionNumber = parseInt(matched.versionNumber, 10);
    }

    if ( matched.platform ) {
        browser[ matched.platform ] = true;
    }

    // These are all considered mobile platforms, meaning they run a mobile browser
    if ( browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
        browser.ipod || browser.kindle || browser.playbook || browser.silk || browser[ 'windows phone' ]) {
        browser.mobile = true;
    }

    // These are all considered desktop platforms, meaning they run a desktop browser
    if ( browser.cros || browser.mac || browser.linux || browser.win ) {
        browser.desktop = true;
    }

    // Chrome, Opera 15+ and Safari are webkit based browsers
    if ( browser.chrome || browser.opr || browser.safari ) {
        browser.webkit = true;
    }

    // IE11 has a new token so we will assign it msie to avoid breaking changes
    if ( browser.rv || browser.iemobile) {
        const ie = 'msie';

        matched.browser = ie;
        browser[ie] = true;
    }

    // Edge is officially known as Microsoft Edge, so rewrite the key to match
    if ( browser.edge ) {
        delete browser.edge;
        const msedge = 'msedge';

        matched.browser = msedge;
        browser[msedge] = true;
    }

    // Blackberry browsers are marked as Safari on BlackBerry
    if ( browser.safari && browser.blackberry ) {
        const blackberry = 'blackberry';

        matched.browser = blackberry;
        browser[blackberry] = true;
    }

    // Playbook browsers are marked as Safari on Playbook
    if ( browser.safari && browser.playbook ) {
        const playbook = 'playbook';

        matched.browser = playbook;
        browser[playbook] = true;
    }

    // BB10 is a newer OS version of BlackBerry
    if ( browser.bb ) {
        const bb = 'blackberry';

        matched.browser = bb;
        browser[bb] = true;
    }

    // Opera 15+ are identified as opr
    if ( browser.opr ) {
        const opera = 'opera';

        matched.browser = opera;
        browser[opera] = true;
    }

    // Stock Android browsers are marked as Safari on Android.
    if ( browser.safari && browser.android ) {
        const android = 'android';

        matched.browser = android;
        browser[android] = true;
    }

    // Kindle browsers are marked as Safari on Kindle
    if ( browser.safari && browser.kindle ) {
        const kindle = 'kindle';

        matched.browser = kindle;
        browser[kindle] = true;
    }

     // Kindle Silk browsers are marked as Safari on Kindle
    if ( browser.safari && browser.silk ) {
        const silk = 'silk';

        matched.browser = silk;
        browser[silk] = true;
    }

    // Assign the name and platform letiable
    browser.name = matched.browser;
    browser.platform = matched.platform;
    return browser;
}

detect();

export {browser, detect};
