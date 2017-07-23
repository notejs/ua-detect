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

    !match && (match = []);

    const platformMatch =
        /(ipad)/.exec( ua ) ||
        /(ipod)/.exec( ua ) ||
        /(windows phone)/.exec( ua ) ||
        /(iphone)/.exec( ua ) ||
        /(android)/.exec( ua ) ||
        /(win)/.exec( ua ) ||
        /(mac)/.exec( ua ) ||
        /(linux)/.exec( ua ) ||
        [];

    const matched = {
        browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || '',
        version: match[ 4 ] || match[ 2 ] || '0',
        versionNumber: match[ 4 ] || match[ 2 ] || '0',
        platform: platformMatch[ 0 ] || ''
    };

    if ( matched.browser ) {
        browser[ `is${mapItem.key}` ] = true;
        browser.version = matched.version;
        browser.versionNumber = parseInt(matched.versionNumber, 10);
    }

    if ( matched.platform ) {
        browser[ matched.platform ] = true;
    }

    if ( browser.android || browser.ipad || browser.iphone ||
        browser.ipod || browser[ 'windows phone' ]) {
        browser.isMobile = true;
    }

    if (browser.mac || browser.linux || browser.win ) {
        browser.isDesktop = true;
    }

    if ( browser.isChrome || browser.isOpera || browser.isSafari ) {
        browser.isWebkit = true;
    }

    if ( browser.safari && browser.android ) {
        const android = 'android';

        matched.browser = android;
        browser[android] = true;
    }

    browser.name = matched.browser;
    browser.platform = matched.platform;
    return browser;
}

detect();

export {browser, detect};
