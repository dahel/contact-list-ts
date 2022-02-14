import { ReactElement } from 'react';
import styled from 'styled-components';
import type { IContactInfo } from 'src/types/contactInfo';
import NameBadge from '../nameBadge/NameBadge';

const Wrapper = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  flex-direction: column;
  padding: 20px 32px;
  box-shadow: 0px 1px 2px 0px #cecece;
  margin: 10px 0;
  cursor: pointer;
  border: 2px solid transparent;
  width: 300px;
  background-color: ${({ selected }: { selected: boolean }) => (selected ? 'pink' : '#fff')};

  &:hover {
    border: 2px solid pink;
    box-shadow: 0px 1px 2px 0px pink;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Name = styled.div`
  color: #333333;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
`;

const JobTitle = styled.div`
  color: #e74c3c;
  font-size: 16px;
  font-weight: 400;
`;

const EmailAddress = styled.div`
  color: #666666;
  font-size: 14px;
  line-height: 1.8em;
  margin-top: 30px;
`;

interface IProps {
  id: string;
  firstNameLastName: string;
  jobTitle: string;
  emailAddress: string;
  selected: boolean;
  onClick: (id: string, selected: boolean) => void;
}

const PersonInfo = ({ firstNameLastName, jobTitle, emailAddress, selected, id, onClick }: IProps): ReactElement => {
  console.log(`############################## rendering`);
  return (
    <Wrapper selected={selected} onClick={() => onClick(id, selected)}>
      <Row>
        <NameBadge name={firstNameLastName} />
        <Column>
          <Name>{firstNameLastName}</Name>
          <JobTitle className="jobTitle">{jobTitle}</JobTitle>
        </Column>
      </Row>
      <EmailAddress>{emailAddress}</EmailAddress>
    </Wrapper>
  );
};

export default PersonInfo;
