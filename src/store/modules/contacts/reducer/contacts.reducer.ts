import type { AnyAction } from 'redux';
import { SET_CONTACTS_LOADING, SET_CONTACTS_DATA, SET_ITEM_SELECT } from '../actions/contacts.actions';
import type { IContactStateItem } from 'src/types/contactInfo';

export interface IContactsState {
  items: IContactStateItem[];
  loading: boolean;
}

const initialState: IContactsState = {
  loading: false,
  items: [],
};

export default function contacts(state = initialState, action: AnyAction = {} as AnyAction): IContactsState {
  switch (action.type) {
    case SET_CONTACTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_CONTACTS_DATA:
      return {
        ...state,
        items: [...state.items, ...action.payload],
      };
    case SET_ITEM_SELECT:
      return {
        ...state,
        items: state.items
          .map((item: IContactStateItem) => {
            if (item.id === action.payload.id) {
              return { ...item, selected: action.payload.selected };
            } else {
              return item;
            }
          })
          .sort((item: IContactStateItem) => {
            return item.selected ? -1 : 1;
          }),
      };
    default:
      return state;
  }
}
