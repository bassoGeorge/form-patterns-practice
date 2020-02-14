import styled from "styled-components";
import { Shadows } from "../../components/GlobalStyles";

export const PageWrapper = styled.div`
  min-height: 100vh;
  padding-top: 10rem;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #116466; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #116466,
    #2c3531
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #116466,
    #2c3531
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
export const FormWrapper = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 400px;
  ${Shadows.normal}
`;
export const Title = styled.h3`
  margin-top: 0;
`;
