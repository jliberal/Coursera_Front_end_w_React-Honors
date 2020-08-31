export const initialState = {
	user: null,
};

export const actionTypes = {
	SET_USER: 'SET_USER',
};

const reducer = (state, action) => {
	console.log(action.type);
	switch (action.type) {
		case actionTypes.SET_USER:
			return {
				...state,
				user: action.user,
			};
		case actionTypes.SET_PROJECTS_WINDOW:
			return {
				...state,
				sideProjectBar: action.sideProjectBar,
			};
		default:
			return state;
	}
};

export default reducer;
