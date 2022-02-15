import { SET_CONTACTS_LOADING, SET_CONTACTS_DATA, SET_ITEM_SELECT, SET_FETCH_ERROR } from '../actions/contacts.actions';
import contactsReducer, { IContactsState } from './contacts.reducer';

describe('contacts reducer', () => {
  let state: IContactsState;

  beforeEach(() => {
    state = {
      loading: false,
      fetchErrorMessage: '',
      items: [],
    };
  });

  it(`should handle SET_CONTACTS_LOADING action with payload of value 'true'`, () => {
    expect(contactsReducer(state, { type: SET_CONTACTS_LOADING, payload: true })).toEqual({
      loading: true,
      fetchErrorMessage: '',
      items: [],
    });
  });

  it(`should handle SET_CONTACTS_LOADING action with payload of value 'false'`, () => {
    state.loading = true;

    expect(contactsReducer(state, { type: SET_CONTACTS_LOADING, payload: false })).toEqual({
      loading: false,
      fetchErrorMessage: '',
      items: [],
    });
  });

  it(`should handle SET_CONTACTS_DATA`, () => {
    state.items = [
      {
        id: '2',
        jobTitle: 'IT Support Staff',
        emailAddress: 'Melinda_Mcgregor7556@mafthy.com',
        firstNameLastName: 'Melinda Mcgregor',
      },
    ];
    const mockContacts = [
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

    expect(contactsReducer(state, { type: SET_CONTACTS_DATA, payload: mockContacts })).toEqual({
      loading: false,
      fetchErrorMessage: '',
      items: [
        {
          id: '2',
          jobTitle: 'IT Support Staff',
          emailAddress: 'Melinda_Mcgregor7556@mafthy.com',
          firstNameLastName: 'Melinda Mcgregor',
        },
        ...mockContacts,
      ],
    });
  });

  it(`should handle SET_ITEM_SELECT for payload with 'selected' value of 'true'`, () => {
    state.items = [
      {
        id: '1',
        jobTitle: 'Fabricator',
        emailAddress: 'Ron_Giles3711@dionrab.com',
        firstNameLastName: 'Ron Giles',
      },
      {
        id: '2',
        jobTitle: 'IT Support Staff',
        emailAddress: 'Melinda_Mcgregor7556@mafthy.com',
        firstNameLastName: 'Melinda Mcgregor',
      },
    ];

    expect(contactsReducer(state, { type: SET_ITEM_SELECT, payload: { id: '1', selected: true } })).toEqual({
      loading: false,
      fetchErrorMessage: '',
      items: [
        {
          id: '1',
          jobTitle: 'Fabricator',
          emailAddress: 'Ron_Giles3711@dionrab.com',
          firstNameLastName: 'Ron Giles',
          selected: true,
        },
        {
          id: '2',
          jobTitle: 'IT Support Staff',
          emailAddress: 'Melinda_Mcgregor7556@mafthy.com',
          firstNameLastName: 'Melinda Mcgregor',
        },
      ],
    });
  });

  it(`should handle SET_ITEM_SELECT for payload with 'selected' value of 'false'`, () => {
    state.items = [
      {
        id: '1',
        jobTitle: 'Fabricator',
        emailAddress: 'Ron_Giles3711@dionrab.com',
        firstNameLastName: 'Ron Giles',
      },
      {
        id: '2',
        jobTitle: 'IT Support Staff',
        emailAddress: 'Melinda_Mcgregor7556@mafthy.com',
        firstNameLastName: 'Melinda Mcgregor',
      },
    ];

    expect(contactsReducer(state, { type: SET_ITEM_SELECT, payload: { id: '2', selected: false } })).toEqual({
      loading: false,
      fetchErrorMessage: '',
      items: [
        {
          id: '1',
          jobTitle: 'Fabricator',
          emailAddress: 'Ron_Giles3711@dionrab.com',
          firstNameLastName: 'Ron Giles',
        },
        {
          id: '2',
          jobTitle: 'IT Support Staff',
          emailAddress: 'Melinda_Mcgregor7556@mafthy.com',
          firstNameLastName: 'Melinda Mcgregor',
          selected: false,
        },
      ],
    });
  });

  it(`should handle SET_FETCH_ERROR`, () => {
    expect(contactsReducer(state, { type: SET_FETCH_ERROR, payload: 'Unknown error' })).toEqual({
      loading: false,
      fetchErrorMessage: 'Unknown error',
      items: [],
    });
  });
});
