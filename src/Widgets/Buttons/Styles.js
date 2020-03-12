import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 5px;
  font-size: 1.2rem;
  background: lightgrey;
  border: 1px solid darkblue;
  color: darkblue;
  margin: 10px;
  min-width: 200px;
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background: darkblue;
  color: white;
`;
