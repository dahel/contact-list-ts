import { useEffect, ReactElement, useCallback, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import PersonInfo from './components/personInfo/PersonInfo';
import { fetchContacts, setItemSelect } from 'src/store/modules/contacts/actions/contacts.actions';
import type { IContactStateItem } from 'src/types/contactInfo';
import useScrollPosition from 'src/hooks/useScrollPosition/useScrollPosition';
import type { RootState } from 'src/store/store';
import type { IContactsState } from 'src/store/modules/contacts/reducer/contacts.reducer';
import LoadMoreButton from 'src/pages/contactsList/components/loadMoreButton/LoadMoreButton';

const PurePersonInfo = memo(PersonInfo);

const ListWrapper = styled.div`
  margin-bottom: 30px;
`;

const ContactsList = (): ReactElement => {
  const [saveScrollPosition] = useScrollPosition();
  const dispatch = useDispatch();
  const { items: contacts, loading }: IContactsState = useSelector((state: RootState) => state.contacts);
  const load = useCallback(() => {
    saveScrollPosition();
    dispatch(fetchContacts());
  }, [dispatch, saveScrollPosition]);

  const handleContactSelect = useCallback(
    (id: string, selected: boolean) => {
      saveScrollPosition();
      dispatch(setItemSelect({ id, selected: !selected }));
    },
    [dispatch, saveScrollPosition],
  );

  useEffect(load, [load]);

  return (
    <div>
      <div className="selected">Selected contacts: {'????'}</div>
      <ListWrapper>
        {contacts.map((contactInfo: IContactStateItem) => (
          <PurePersonInfo
            key={contactInfo.id}
            id={contactInfo.id}
            firstNameLastName={contactInfo.firstNameLastName}
            jobTitle={contactInfo.jobTitle}
            emailAddress={contactInfo.emailAddress}
            selected={contactInfo.selected}
            onClick={handleContactSelect}
          />
        ))}
      </ListWrapper>
      <LoadMoreButton loading={loading} onClick={load} />
    </div>
  );
};

export default ContactsList;
