import { fetchContacts, setItemSelect, SET_ITEM_SELECT } from './contacts.actions';
import type { RootState } from 'src/store/store';
import type { IContactInfo } from 'src/types/contactInfo';

let mockApiFunction: () => IContactInfo[];

jest.mock('src/api', () => {
  return function () {
    return mockApiFunction();
  };
});

describe('contacts actions', () => {
  let state: RootState;
  let mockContactsData: IContactInfo[];

  beforeEach(() => {
    state = {
      contacts: {
        loading: false,
        fetchErrorMessage: '',
        items: [],
      },
    };
    mockContactsData = [
      {
        id: '1',
        jobTitle: 'Fabricator',
        emailAddress: 'Ron_Giles3711@dionrab.com',
        firstNameLastName: 'Ron Giles',
      },
      {
        id: '6',
        jobTitle: 'Designer',
        emailAddress: 'Gil_Keys4205@twipet.com',
        firstNameLastName: 'Gil Keys',
      },
    ];
    mockApiFunction = () => mockContactsData;
  });

  describe('setItemSelect action', () => {
    it('returns properly formatted action in case selected is false', () => {
      expect(setItemSelect({ id: '34', selected: false })).toEqual({
        type: SET_ITEM_SELECT,
        payload: { id: '34', selected: false },
      });
    });

    it('returns properly formatted action in case selected is true', () => {
      expect(setItemSelect({ id: '33', selected: true })).toEqual({
        type: SET_ITEM_SELECT,
        payload: { id: '33', selected: true },
      });
    });
  });

  describe('fetchContacts action creator', () => {
    it('dispatches SET_CONTACTS_LOADING action with true', async () => {
      const dispatch = jest.fn();
      const thunk = fetchContacts();

      await thunk(dispatch, () => state, undefined);

      expect(dispatch).toHaveBeenCalledWith({
        type: 'SET_CONTACTS_LOADING',
        payload: true,
      });
    });

    it('dispatches SET_CONTACTS_LOADING action with false', async () => {
      const dispatch = jest.fn();
      const thunk = fetchContacts();

      await thunk(dispatch, () => state, undefined);

      expect(dispatch).toHaveBeenCalledWith({
        type: 'SET_CONTACTS_LOADING',
        payload: false,
      });
    });

    it('dispatches SET_CONTACTS_DATA action with contacts data', async () => {
      const dispatch = jest.fn();
      const thunk = fetchContacts();

      await thunk(dispatch, () => state, undefined);

      expect(dispatch).toHaveBeenCalledWith({
        type: 'SET_CONTACTS_DATA',
        payload: mockContactsData,
      });
    });

    it('dispatches SET_FETCH_ERROR action in case api services throws an error', async () => {
      const dispatch = jest.fn();
      const thunk = fetchContacts();

      mockApiFunction = () => {
        throw Error();
      };

      await thunk(dispatch, () => state, undefined);

      expect(dispatch).toHaveBeenCalledWith({
        type: 'SET_FETCH_ERROR',
        payload: 'An error occured, try again...',
      });
    });
  });
});
