import { AnyAction } from 'redux';
import type { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import apiData from 'src/api';
import type { IContactInfo } from 'src/types/contactInfo';
import type { RootState } from 'src/store/store';

export const SET_CONTACTS_LOADING = 'SET_CONTACTS_LOADING';
export const SET_CONTACTS_DATA = 'SET_CONTACTS_DATA';
export const SET_ITEM_SELECT = 'SET_ITEM_SELECT';
export const SET_FETCH_ERROR = 'SET_FETCH_ERROR';

const setContactsLoading = (payload: boolean): AnyAction => {
  return {
    type: SET_CONTACTS_LOADING,
    payload,
  };
};

const setFetchError = (payload: string): AnyAction => {
  return {
    type: SET_FETCH_ERROR,
    payload,
  };
};

const setContactsData = (payload: IContactInfo[]): AnyAction => {
  return {
    type: SET_CONTACTS_DATA,
    payload,
  };
};

export const setItemSelect = (payload: { id: string; selected: boolean }): AnyAction => {
  return {
    type: SET_ITEM_SELECT,
    payload,
  };
};

export const fetchContacts = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(setContactsLoading(true));
    dispatch(setFetchError(''));

    try {
      const response: IContactInfo[] = await apiData();

      dispatch(setContactsData(response));
    } catch (error) {
      dispatch(setFetchError('An error occured, try again...'));
    } finally {
      dispatch(setContactsLoading(false));
    }
  };
};

// 1106069218601d945e15046a50410ecb
