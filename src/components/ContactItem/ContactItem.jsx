import {
  Contact,
  Button,
  ContactCard,
} from 'components/ContactItem/ContactItem.styled';

import PropTypes from 'prop-types';
export const ContactItem = ({ name, number, onDelete, id }) => {
  return (
    <ContactCard>
      <Contact>
        {name}: {number}
      </Contact>
      <Button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Видалити
      </Button>
    </ContactCard>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};
