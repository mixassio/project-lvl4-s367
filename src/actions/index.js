import axios from 'axios';
import { createAction } from 'redux-actions';


const routes = {
  channels: id => `/api/v1/channels/${id}`,
  messages: id => `/api/v1/channels/${id}/messages`,
};


export const addMessageRequest = createAction('MESSAGE_ADD_REQUEST');
export const addMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');
export const addMessageFailure = createAction('MESSAGE_ADD_FAILURE');

export const addMessage = ({ message, channelId, user }) => async (dispatch) => {
  dispatch(addMessageRequest());
  try {
    const url = routes.messages(channelId);
    const data = {
      attributes: { text: message, user },
    };
    await axios.post(url, { data });
  } catch (e) {
    dispatch(addMessageFailure());
    throw e;
  }
};
