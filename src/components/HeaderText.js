import styled from "styled-components";

export default styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: green;

  ::before {
    content: '🚀';
  }

  :hover {
    color: red;
  }
`;
