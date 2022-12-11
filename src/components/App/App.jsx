import Layout from "components/Layout/Layout";
import AppBar from "components/AppBar/AppBar";
import Filter from "components/Filter/Filter";
import Contacts from "components/Contacts/Contacts"

export const App = () => {

  return (
    <Layout>
      <AppBar title='Phonebook' titleInputOne='Name' titleInputTwo='Number'/>
      <Filter title='Contacts' titleInput='Find contacts by name'/>
      <Contacts />
    </Layout>
  );
};
