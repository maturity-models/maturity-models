import { test } from 'node:test';
import assert from 'node:assert/strict';
import { routeForLanguages, localeToSlug } from '../src/lib/locales.js';

test('exact locale', () => assert.equal(routeForLanguages(['en-US']), '/en-us/'));
test('same language falls back to its world locale', () => assert.equal(routeForLanguages(['en-AU']), '/en-001/'));
test('regional locale', () => assert.equal(routeForLanguages(['en-GB']), '/en-gb/'));
test('Welsh', () => assert.equal(routeForLanguages(['cy']), '/cy-gb/'));
test('no match goes to the default locale', () => assert.equal(routeForLanguages(['xx']), '/en-us/'));
test('slug', () => assert.equal(localeToSlug('en_US'), 'en-us'));
