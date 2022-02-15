import React, { ReactElement } from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 35px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #00aec1;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #00a0b2;
  }
`;

interface IProps {
  loading: boolean;
  onClick: () => void;
}

const LoadMoreButton = ({ loading, onClick }: IProps): ReactElement => {
  return (
    <Wrapper>
      {loading ? (
        <ReactLoading type="spokes" color="black" height={30} width={30} />
      ) : (
        <Button onClick={onClick}>Load more</Button>
      )}
    </Wrapper>
  );
};

export default LoadMoreButton;
