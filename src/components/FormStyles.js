import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: ${props => props.bgColor};

  h1 {
    font-size: 2.2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;

    input,
    textarea {
      width: 70%;
      min-width: 70%;
      min-height: 35px;
      padding: 8px;
      margin: 12px 0;
      border: 2px solid transparent;
      border-radius: 3px;
      font-size: 1rem;
      background: #e4d6a7;
      font-family: "Arial", sans-serif;
      color: black;
    }
  }
`;

export const FormButton = styled.button`
  border: none;
  border-radius: 3px;
  width: 76%;
  padding: 14px;
  font-size: 1rem;
  background: ${props => props.bgColor};
  transition: all 0.3s;
  margin: 12px 0;

  &:hover {
    background: ${props => props.hoverColor};
    color: white;
  }
`;

export const ImagePreview = styled.img`
  width: 150px;
  height: auto;
`

export const CancelButton = styled(FormButton)`
  width: 61%;
`;

export const InputError = styled.p`
  font-size: 0.8rem;
  background: #9b2915;
  color: white;
  width: 73%;
  border-radius: 3px;
  padding: 3px 0 3px 8px;
  margin-top: -3px;
`;
