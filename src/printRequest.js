import React from 'react'
import ReactDOM from "react-dom"
import RenderReactApp from './RenderReactApp'

import TextField from 'material-ui/TextField';
import {Grid, Col, Row} from 'react-flexbox-grid/lib';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
  margin: 12,
};

const iconStyles = {
  marginRight: 24,
};

function createMarkup() { return {__html: "<!-- Begin MailChimp Signup Form -->"
	+ "<link href=\"//cdn-images.mailchimp.com/embedcode/classic-10_7.css\" rel=\"stylesheet\" type=\"text/css\">"
	+ "<style type=\"text/css\">"
	+ "#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }"
	+ "/* Add your own MailChimp form style overrides in your site stylesheet or in this style block."
    + "We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */"
	+ "</style>"
	+ "<div id=\"mc_embed_signup\">"
	+ "<form action=\"//nearprinter.us13.list-manage.com/subscribe/post?u=0c145ba59d6461addeeaaee5c&amp;id=4d329b7573\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate>"
    + "<div id=\"mc_embed_signup_scroll\">"
	+ "<h2>Find out when Near Printer service is back in action.  🖨👍👍</h2>"
	+ "<div class=\"indicates-required\"><span class=\"asterisk\">*</span> indicates required</div>"
	+ "<div class=\"mc-field-group\">"
	+ "<label for=\"mce-EMAIL\">Email Address  <span class=\"asterisk\">*</span>"
   	+ "</label>"
	+ "<input type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\">"
	+ "</div>"
	+ "<div class=\"mc-field-group\">"
	+ "<label for=\"mce-FNAME\">First Name </label>"
	+ "<input type=\"text\" value=\"\" name=\"FNAME\" class=\"\" id=\"mce-FNAME\">"
	+ "</div>"
	+ "<div class=\"mc-field-group\">"
	+ "<label for=\"mce-LNAME\">Last Name </label>"
	+ "<input type=\"text\" value=\"\" name=\"LNAME\" class=\"\" id=\"mce-LNAME\">"
	+ "</div>"
	+ "<div id=\"mce-responses\" class=\"clear\">"
	+ "<div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>"
	+ "<div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>"
	+ "</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->"
    + "<div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\" name=\"b_0c145ba59d6461addeeaaee5c_4d329b7573\" tabindex=\"-1\" value=\"\"></div>"
    + "<div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>"
    + "</div>"
	+ "</form>"
	+ "</div>"
	+ "<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>"
	+ "<!--End mc_embed_signup-->"}; };

class NewPrinterForm extends React.Component {
	render() {
		return (
			<Grid >
				<Row>
					<Col xs={12} md={8} mdOffset={2}>
						<h2>We're currently on vacation.  ☀️😎🌴🌴</h2>
						<p>Unfortunately for you (but fortunately for us), we're on vacation catching some rays. We'll be back in about a week.</p>
						<p>In the mean time, please take advantage of all the other nearby printers on <a href="/">our homepage</a>.</p>
						<p>If you want to get in touch immediately, drop us a line at <a href="mailto:hello@nearprinter.com">hello@nearprinter.com</a>. We promise to get back to you shortly.</p>
						<p>If you want to know when we're back and operational, put your email in below.</p>
						<br/>
						<br/>
						<div dangerouslySetInnerHTML={createMarkup()} />
					</Col>
				</Row>
			</Grid>
		)
	}
}

RenderReactApp(
	<NewPrinterForm />
)



