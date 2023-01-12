import styled from 'styled-components';
export const ContactCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  border: 1px solid #0926a6;
  border-radius: 10px;
  padding: 5px;

  margin-bottom: 15px;
`;
export const Contact = styled.p`
  margin-left: 30px;
`;
export const Button = styled.button`
  background-color: #f2efe9; /* Green */
  border: 1px solid #0926a6;
  border-radius: 10px;
  color: #0926a6;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;

  margin-left: auto;
  margin-right: 30px;

  &:hover,
  &:focus {
    border: 1px solid #fff;
    color: #fff;
    background-color: #0926a6;
  }
`;
