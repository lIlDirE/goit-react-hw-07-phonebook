import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import SearchFilter from './ContactForm/SearchFilter/SearchFilter.jsx';

export function App() {

  return (
    <div>
      <ContactForm />
      <SearchFilter/>
      <ContactList/>
    </div>
  );
}
