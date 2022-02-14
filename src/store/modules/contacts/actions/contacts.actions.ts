import { AnyAction } from 'redux';
import type { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import apiData from 'src/api';
import type { IContactInfo } from 'src/types/contactInfo';
import type { RootState } from 'src/store/store';

export const SET_CONTACTS_LOADING = 'SET_CONTACTS_LOADING';
export const SET_CONTACTS_DATA = 'SET_CONTACTS_DATA';
export const SET_ITEM_SELECT = 'SET_ITEM_SELECT';

const setContactsLoading = (payload: boolean): AnyAction => {
  return {
    type: SET_CONTACTS_LOADING,
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

    try {
      const response: IContactInfo[] = await apiData();

      dispatch(setContactsData(response));
    } catch (error) {
      // todo handle error !!!!!!!
      console.log(`############################## error`);
    } finally {
      dispatch(setContactsLoading(false));
    }
  };
};

// 1106069218601d945e15046a50410ecb
