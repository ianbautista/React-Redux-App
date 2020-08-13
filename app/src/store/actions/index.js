import axios from "axios";

export const FETCH_INSULT_START = "FETCH_INSULT_START";
export const FETCH_INSULT_SUCCESS = "FETCH_INSULT_SUCCESS";
export const FETCH_INSULT_ERROR = "FETCH_INSULT_ERROR";

export const fetchInsult = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_INSULT_START });
		axios
			.get("https://evilinsult.com/generate_insult.php?lang=en&type=json")
			.then((response) => {
				console.log(response);
				dispatch({
					type: FETCH_INSULT_SUCCESS,
					payload: response.data,
				});
			})
			.catch((error) => {
				dispatch({ type: FETCH_INSULT_ERROR, payload: error });
			});
	};
};
