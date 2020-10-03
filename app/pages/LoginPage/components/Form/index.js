import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 100%;
  max-width: 300px;
  text-align: center;

  & > * {
    margin-bottom: 1rem;
  }
`;

export default Form;
