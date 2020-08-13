import { FETCH_INSULT_START, FETCH_INSULT_SUCCESS, FETCH_INSULT_ERROR } from "../actions";

const initialState = {
	insult: "",
	isLoading: false,
	error: "",
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_INSULT_START:
			return {
				...state,
				isLoading: true,
			};
		case FETCH_INSULT_SUCCESS:
			return {
				...state,
				insult: action.payload,
				isLoading: false,
				error: "",
			};
		case FETCH_INSULT_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
