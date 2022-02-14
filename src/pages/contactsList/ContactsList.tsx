import { useState, useEffect, ReactElement, useCallback, memo, useLayoutEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PersonInfo from './components/personInfo/PersonInfo';
import { fetchContacts, setItemSelect } from 'src/store/modules/contacts/actions/contacts.actions';
import type { IContactStateItem } from 'src/types/contactInfo';
import useScrollPosition from 'src/hooks/useScrollPosition/useScrollPosition';

const MemoedPersonInfo = memo(PersonInfo);

const ContactsList = (): ReactElement => {
  const [saveScrollPosition] = useScrollPosition();
  const dispatch = useDispatch();
  const contacts: IContactStateItem[] = useSelector((state: any) => state.contacts.items);
  const load = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // scrollPosition.current = window.scrollY;
    saveScrollPosition();
    dispatch(fetchContacts());
  }, [dispatch, saveScrollPosition]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.bla = list.current;

  const handleContactSelect = useCallback(
    (id: string, selected: boolean) => {
      saveScrollPosition();
      dispatch(setItemSelect({ id, selected: !selected }));
    },
    [dispatch, saveScrollPosition],
  );

  useEffect(load, [load]);

  // todo custom hook
  // useLayoutEffect(() => {
  //   console.log(`############################## useLayoutEffect`, scrollPosition.current);
  //   window.scrollTo(0, scrollPosition.current);
  // });

  return (
    <div>
      <div className="selected">Selected contacts: {'????'}</div>
      <div className="list">
        {contacts.map((contactInfo: IContactStateItem) => (
          <MemoedPersonInfo
            key={contactInfo.id}
            id={contactInfo.id}
            firstNameLastName={contactInfo.firstNameLastName}
            jobTitle={contactInfo.jobTitle}
            emailAddress={contactInfo.emailAddress}
            selected={contactInfo.selected}
            onClick={handleContactSelect}
          />
        ))}
      </div>
      <button onClick={load}>Load more</button>
    </div>
  );
};

export default ContactsList;
