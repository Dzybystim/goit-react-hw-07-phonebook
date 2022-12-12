import Layout from "components/Layout/Layout";
import AppBar from "components/AppBar/AppBar";
import Filter from "components/Filter/Filter";
import Contacts from "components/Contacts/Contacts";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import {selectIsLoading, selectError} from "../../redux/selectors"
import { fetchContacts } from "../../redux/operations";



export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  useEffect(() => { dispatch(fetchContacts());}, [dispatch])

  return (
    <Layout>
      <AppBar title='Phonebook' titleInputOne='Name' titleInputTwo='Number'/>
      <Filter title='Contacts' titleInput='Find contacts by name'/>
      {isLoading && !error && <p>Request in progress...</p>}
      <Contacts />
    </Layout>
  );
};
