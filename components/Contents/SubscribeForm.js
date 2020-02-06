import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
	"https://tech.us19.list-manage.com/subscribe/post?u=812ef3b47813f00a5f8d355f3&amp;id=d0310ab371";

const SubscribeForm = () => (
	<MailchimpSubscribe
		url={url}
		render={({ subscribe, status, message }) => (
			<div>
				<form
					onSubmitted={formData => subscribe(formData)}
					className="newsletter-form"
					data-toggle="validator"
				>
					<input
						type="email"
						className="form-control"
						placeholder="Your Email Address"
						name="EMAIL"
						required={true}
						autoComplete="off"
					/>
					<button className="btn btn-primary" type="submit">
						Subscribe
					</button>
					<div
						id="validator-newsletter"
						className="form-result"
					></div>
				</form>
				{status === "sending" && (
					<div style={{ color: "blue" }}>sending...</div>
				)}
				{status === "error" && (
					<div
						style={{ color: "red" }}
						dangerouslySetInnerHTML={{ __html: message }}
					/>
				)}
				{status === "success" && (
					<div style={{ color: "green" }}>Subscribed !</div>
				)}
			</div>
		)}
	/>
);

export default SubscribeForm;
