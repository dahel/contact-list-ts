import React, { ReactElement } from 'react';
import styled from 'styled-components';
import type { IContactInfo } from 'src/types/contactInfo';

const Wrapper = styled.div`
  display: flex;
  flex: 30px 0 0;
  flex-direction: row;
  height: 30px;
  justify-content: center;
  align-items: center;
  border: solid 1px #2e2e2e;
  border-radius: 20px;
  margin-right: 10px;
  font-size: 14px;
`;

const Letter = styled.div``;

const PersonInfo = ({ name }: { name: string }): ReactElement => {
  const [firstName, lastName] = name.split(' ');

  return (
    <Wrapper>
      {!!firstName && <Letter>{firstName[0].toUpperCase()}</Letter>}
      {!!lastName && <Letter>{lastName[0].toUpperCase()}</Letter>}
    </Wrapper>
  );
};

export default PersonInfo;
