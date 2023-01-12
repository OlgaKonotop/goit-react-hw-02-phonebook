import styled from 'styled-components';
export const FormStyle = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  background-color: #f2efe9; /* Green */
  border: 1px solid #0926a6;
  border-radius: 10px;
  color: #0926a6;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  &:hover,
  &:focus {
    border: 1px solid #fff;
    color: #fff;
    background-color: #0926a6;
  }
`;
export const TitleInput = styled.label`
  color: #0926a6;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  border: 1px solid #0926a6;
  border-radius: 10px;
  padding: 5px;
`;
