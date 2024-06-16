import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <div>
        <ContactForm />
        <SearchBox />
      </div>
    </>
  );
}

export default App;
