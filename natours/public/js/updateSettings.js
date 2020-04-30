/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alert';

// Type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url = `http://127.0.0.1:3000/api/v1/users/update${
      type === 'data' ? 'Me' : 'MyPassword'
    }`;
    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    if (res.data.status === 'success')
      showAlert('success', `${type.toUpperCase()} updated successfully`);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
