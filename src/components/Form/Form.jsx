import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button, FormStyle, Input, TitleInput } from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  onhandleSubmit = e => {
    e.preventDefault();

    const ListContacts = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };

    this.props.onSubmitName(ListContacts);

    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    // const { contacts } = this.state;
    return (
      <FormStyle onSubmit={this.onhandleSubmit}>
        <TitleInput>
          Ім'я
          <Input
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </TitleInput>
        <TitleInput>
          Телефон
          <Input
            onChange={this.handleChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </TitleInput>
        <Button type="submit">Додати контакт</Button>
      </FormStyle>
    );
  }
}
export default Form;
