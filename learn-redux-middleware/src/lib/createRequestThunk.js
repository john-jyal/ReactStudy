export default function createRequestThunk(type, request) {
    //성공 or 실패 액션 타입 정의
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return params => async dispatch => {
        dispatch({ type });
        try {
            const response = await request(params);
            dispatch({
                type: SUCCESS,
                payload: response.data,
            }); // success
        } catch (e) {
            dispatch({
                type: FAILURE,
                payload: e,
                error: ture,
            }); // error
            throw e;
        }
    };
}

// 사용법 : createRequestThunk('GET_USERS', api.getUsers);