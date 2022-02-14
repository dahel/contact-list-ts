import { AnyAction } from 'redux';
import type { Dispatch } from 'react';

export const SET_CONTACTS_LOADING = 'SET_CONTACTS_LOADING';
export const SET_CONTACTS_DATA = 'SET_CONTACTS_DATA';

function setContactsLoading(payload: any) {
  return {
    type: SET_CONTACTS_LOADING,
    payload,
  };
}

function setContactsData(payload: any) {
  return {
    type: SET_CONTACTS_DATA,
    payload,
  };
}

export const contacts = (ipAddress: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(setContactsLoading(true));

    try {
      // 

      dispatch(
        setContactsData({}),
      );
    } catch (error) {
      dispatch(setContactsLoading(false));
    }
  };
};

// 1106069218601d945e15046a50410ecb
