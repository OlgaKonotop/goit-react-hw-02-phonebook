import { TitleInput, Input } from './Filter.styled';

export const Filter = ({ filterValue, onChange }) => {
  return (
    <TitleInput>
      Пошук контакту за ім'ям
      <Input type="text" value={filterValue} onChange={onChange}></Input>
    </TitleInput>
  );
};
