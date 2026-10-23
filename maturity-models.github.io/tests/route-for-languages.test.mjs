import { test } from 'node:test';
import assert from 'node:assert/strict';
import { routeForLanguages, localeToSlug } from '../src/lib/locales.js';

test('exact locale', () => assert.equal(routeForLanguages(['en-US']), '/en-us/'));
test('same language falls back to a sibling locale', () => assert.equal(routeForLanguages(['en-AU']), '/en-us/'));
test('no match goes to the default locale', () => assert.equal(routeForLanguages(['xx']), '/en-us/'));
test('slug', () => assert.equal(localeToSlug('en_US'), 'en-us'));
