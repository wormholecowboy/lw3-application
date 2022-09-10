import styled from '@emotion/styled';

const color = 'white';

const Cssthing2 = styled.button`
  padding: 32px;
  color: black;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: ${color};
  }
`;

export default function Home() {
  return (
    <>
      <Cssthing2>Styled by Brian</Cssthing2>
    </>
  );
}
