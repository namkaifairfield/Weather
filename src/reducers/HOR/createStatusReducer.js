function createStatusReducer(actionName = '') {
	actionName = actionName.toUpperCase();
	return (state = {}, action) => {
		switch (action.type) {
		case `FETCH_${actionName}_PENDING`:
			return {status: 'pending'};
		case `FETCH_${actionName}_SUCCESS`:
			return action.response;
		case `FETCH_${actionName}_FAILED`:
			return 'error';
		default:
			return state;
		}
	};
}

export default createStatusReducer;
