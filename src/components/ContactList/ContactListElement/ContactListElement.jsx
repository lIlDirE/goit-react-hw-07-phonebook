import { ContactName,ContactLi,ContactNumber,DeleteButtton } from './ContactListElement.styled';
import { useDispatch} from 'react-redux';
import {removeContact} from 'redux/contactSlice/contactSlice'

const ContactListElement = ({ id, name, number }) => {

	const dispatch = useDispatch();

	return (
	  <ContactLi>
		<ContactName>{name}: </ContactName>
		<ContactNumber>{number}</ContactNumber>
		<DeleteButtton
		  type="button"
		  onClick={() => {
			dispatch(removeContact(id));
		  }}
		>
		  Delete
		</DeleteButtton>
	  </ContactLi>
	);
  };

export default ContactListElement