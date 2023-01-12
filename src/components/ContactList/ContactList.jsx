import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem
            name={name}
            number={number}
            onDelete={onDelete}
            id={id}
          />
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  onDelete: PropTypes.func,
};
