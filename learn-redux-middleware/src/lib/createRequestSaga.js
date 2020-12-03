import {startLoading, finishLoading} from "../modules/loading";
import {call, put} from 'redux-saga/effects';

export default function createRequestSaga(type, request) {
    //성공 or 실패 액션 타입 정의
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function*(action) {
        yield put(startLoading(type));
        try {
            const response = yield call(request, action.payload);
            yield put({
                type: SUCCESS,
                payload: response.data,
            }); // success
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true,
            }); // error
            yield put(finishLoading(type));
        }
    };
}

// 사용법 : createRequestThunk('GET_USERS', api.getUsers);