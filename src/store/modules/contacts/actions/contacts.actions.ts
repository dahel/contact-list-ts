import { AnyAction } from 'redux';
import type { Dispatch } from 'react';
import apiData from 'src/api';
import type { IContactInfo } from 'src/types/contactInfo';

export const SET_CONTACTS_LOADING = 'SET_CONTACTS_LOADING';
export const SET_CONTACTS_DATA = 'SET_CONTACTS_DATA';
export const SET_ITEM_SELECT = 'SET_ITEM_SELECT';

const setContactsLoading = (payload: any): AnyAction => {
  return {
    type: SET_CONTACTS_LOADING,
    payload,
  };
};

const setContactsData = (payload: any): AnyAction => {
  return {
    type: SET_CONTACTS_DATA,
    payload,
  };
};

export const setItemSelect = (payload: any): AnyAction => {
  return {
    type: SET_ITEM_SELECT,
    payload,
  };
};

export const fetchContacts = () => {
  console.log(`############################## fetchContacts()`);

  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(setContactsLoading(true));

    try {
      const response: IContactInfo[] = await apiData();

      console.log(`############################## response`, response);

      dispatch(setContactsData(response));
    } catch (error) {
      console.log(`############################## error`);
    } finally {
      dispatch(setContactsLoading(false));
    }
  };
};

// 1106069218601d945e15046a50410ecb
