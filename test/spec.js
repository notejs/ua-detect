const assert = require('assert');
import { detect } from '../index';
import list from './ua';

describe('ua detect', () => {
    list.forEach( (item) => {
        it(`browser version should ${item.expect.version}`, () => {
            const browser = detect(item.ua);
            // eslint-disable-next-line
            console.log(` -- ${browser.name} ${browser.version}`);
            assert.equal(browser[ `is${browser.name}` ], item.expect[ `is${browser.name}` ]);
            assert.equal(browser.version, item.expect.version);
        });
    } );
});
