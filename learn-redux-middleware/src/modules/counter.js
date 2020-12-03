import { createAction, handleActions } from 'redux-actions';
import {delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';


export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 마우스 클릭 이벤트가 PAYLOAD 안에 들어가지 않도록
// () => undefined를 두번째 파라미터로 넣어줌
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
    yield delay(1000); // 1초 딜레이
    yield put(increase()); // 특정 액션 디스패치
}

function* decreaseSaga() {
    yield delay(1000); // 1초 딜레이
    yield put(decrease()); // 특정 액션 디스패치
}

export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}


const initialState = 0; // 상태는 꼭 객체일 필요 x 숫자도 작동

const counter = handleActions({
    [INCREASE]: state => state + 1,
    [DECREASE]: state => state - 1
}, initialState);

export default counter;
