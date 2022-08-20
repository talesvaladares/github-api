import styled, { css } from "styled-components";

export const RepositoryContainer = styled.div`

  ${({theme}) => css`

    width: 100%;
    padding: 0.5rem;

    background: ${theme["gray-700"]};
    border-radius: 8px;

    color: ${theme["gray-100"]};
    font-size: 1rem;

    p + p {
      margin-top: 0.2rem;
    }


    a {
      text-decoration: none;
      color: ${theme["green-500"]};
      display: block;
      margin-top: 1rem;

      transition: color 0.2s;

      &:hover {
        color: ${theme["green-700"]};
      }
    }
  `}

 
`;