import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import SearchFilter from './ContactForm/SearchFilter/SearchFilter.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/store/thunk.js';
import { useEffect } from 'react';

export function App() {

	// const contacts = useSelector();  
	const dispatch = useDispatch();
  
	useEffect(() => {
	  dispatch(getContactsThunk());
	}, [dispatch]);
  

  return (
    <div>
      <ContactForm />
      <SearchFilter/>
      <ContactList/>
    </div>
  );
}
