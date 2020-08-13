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
			<h1>
				Sorry... not sorry.
				<span role="img" aria-label="emoji">
					😈
				</span>
			</h1>
			{props.isLoading ? <h4>Wait...stooping down on your level.</h4> : null}
			{props.error ? (
				<p style={{ color: "red" }}>Oops... I guess you're not even worth it. {props.error}</p>
			) : null}
			{props.insult !== 0 ? (
				<div>
					<h2 key={props.number}>{props.insult}</h2>
				</div>
			) : null}
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
