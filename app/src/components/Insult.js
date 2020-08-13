import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchInsult } from "../store/actions";

const Insult = (props) => {
	useEffect(() => {
		props.fetchInsult();
	}, []);

	console.log(props);

	return (
		<section>
			<h2>
				<span role="img" aria-label="emoji">
					😈
				</span>
				Insults.
			</h2>
			{props.isLoading ? <h4>Wait...stooping down on your level.</h4> : null}
			{props.error ? (
				<h1 style={{ color: "red" }}>
					Oops... I guess you're not even worth it. {props.error}
				</h1>
			) : null}
			{props.insult !== 0 ? (
				<div>
					<h1 key={props.number}>"{props.insult}"</h1>
				</div>
			) : null}
			<button
				className="button is-primary is-rounded is-small"
				onClick={() => props.fetchInsult()}
			>
				Is that all you've got?
			</button>
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		insult: state.insult,
		isLoading: state.isLoading,
		error: state.error,
	};
};

export default connect(mapStateToProps, { fetchInsult })(Insult);
