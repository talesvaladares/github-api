import styled, { css } from "styled-components";


export const Container = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;

  margin: 0 auto;

  padding: 2rem 1rem;
`;

export const RepositoriesContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const FormContainer = styled.form`

  margin: 0.5rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  gap: 0.5rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    input {
      width: 1rem;
      height: 1rem;
    }

    &:hover {
      cursor: pointer;
    }
  }

  div {
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

`;

export const InputSearch = styled.input`
 
  width: 20rem;
  height: 2.5rem;
  border-radius: 8px;
  outline: 0;
  border: 0;

  padding: 0 4px;

  &::placeholder {
    
  }

`;

export const SelectInput = styled.select`
  width: 10rem;
  height: 2.5rem;
  border-radius: 8px;
  outline: 0;
  border: 0;

  padding: 0 4px;

  font-size: 1rem;

  option {
    font-size: 1rem;
  }
`;

export const BaseButton = styled.button`
   ${({theme}) => css`

    padding: 0 1rem;
    height: 2.5rem;
    border-radius: 8px;

    background: ${theme["green-500"]};
    color: ${theme["white"]};
    outline: 0;

    transition: background-color 0.2s;

   

    &:hover {
      cursor: pointer;
      background: ${theme["green-700"]};
    }
  `}
`;

export const SearchButton = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2px;
`;

