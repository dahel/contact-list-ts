import type { AnyAction } from 'redux';
import { SET_CONTACTS_LOADING, SET_CONTACTS_DATA, SET_ITEM_SELECT } from '../actions/contacts.actions';
import type { IContactStateItem } from 'src/types/contactInfo';

const initialState: any = {
  pending: false,
  page: 1,
  itemsPerPage: 10,
  items: [],
};

export default function app(state = initialState, action: AnyAction = {} as AnyAction) {
  switch (action.type) {
    case SET_CONTACTS_LOADING:
      console.log(`############################## SET_CONTACTS_LOADING`, action);
      return state;
    case SET_CONTACTS_DATA:
      console.log(`############################## SET_CONTACTS_DATA`, action);
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
