var React = require('react'),
	TestUtils = require('react-addons-test-utils'),
	CommentBox = require('../src/CommentBox'),
	expect = require('chai').expect

describe('Second Simple Test Suite', () => {
	it('Runs a simple test.', () => {
		var renderer = TestUtils.createRenderer();
		renderer.render(<CommentBox />);
		var renderedCommentBox = renderer.getRenderOutput();
		expect(renderedCommentBox.props.className).to.equal("commentbox")
	});

	it('Runs a second simple test.', () => {
		var renderer = TestUtils.createRenderer();
		renderer.render(<CommentBox />);
		var renderedCommentBox = renderer.getRenderOutput();
		expect(renderedCommentBox.props.children).to.equal("Hello world!");
	});
});
