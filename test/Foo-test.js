import test from 'ava';
import React from 'react';
import {renderJSX, JSX as jsx} from 'jsx-test-helpers';
import Foo from '../src/Foo';

test('sometimes it succeeds', t => {
	var actual = renderJSX(<Foo/>);
	const expected = jsx(<div className="foo"/>);
	t.is(actual, expected);
});

test('sometimes it fails', t => {
	var actual = renderJSX(<Foo>Bar</Foo>);
	const expected = jsx(<div className="foo2">Bar2</div>);
	t.is(actual, expected);
});
