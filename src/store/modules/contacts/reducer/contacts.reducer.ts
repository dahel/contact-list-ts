import type { AnyAction } from 'redux';
import { SET_CONTACTS_LOADING, SET_CONTACTS_DATA } from '../actions/contacts.actions';

const initialState: any = {
  pending: false,
  page: 1,
  itemsPerPage: 10,
  items: [],
};

export default function app(state = initialState, action: AnyAction = {} as AnyAction) {
  switch (action.type) {
    case SET_CONTACTS_LOADING:
      console.log(`############################## SET_SEARCH_PENDING`, action);
      return state;
    case SET_CONTACTS_DATA:
      console.log(`############################## SET_LOCATION_DATA`, action);
      return state;
    default:
      return state;
  }
}
