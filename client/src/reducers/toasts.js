import { handleActions } from 'redux-actions';
import nanoid from 'nanoid';

import { addErrorToast, addSuccessToast, addNoticeToast, removeToast } from '../actions';

const toasts = handleActions({
    [addErrorToast]: (state, { payload }) => {
        const errorToast = {
            id: nanoid(),
            message: payload.error.toString(),
            type: 'error',
        };

        const newState = { ...state, notices: [...state.notices, errorToast] };
        return newState;
    },
    [addSuccessToast]: (state, { payload }) => {
        const successToast = {
            id: nanoid(),
            message: payload,
            type: 'success',
        };

        const newState = { ...state, notices: [...state.notices, successToast] };
        return newState;
    },
    [addNoticeToast]: (state, { payload }) => {
        const noticeToast = {
            id: nanoid(),
            message: payload.error.toString(),
            type: 'notice',
        };

        const newState = { ...state, notices: [...state.notices, noticeToast] };
        return newState;
    },
    [removeToast]: (state, { payload }) => {
        const filtered = state.notices.filter(notice => notice.id !== payload);
        const newState = { ...state, notices: filtered };
        return newState;
    },
}, { notices: [] });

export default toasts;
