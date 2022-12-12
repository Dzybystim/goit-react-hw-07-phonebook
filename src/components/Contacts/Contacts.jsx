import { useSelector } from "react-redux";
import {selectContacts, selectFilter} from "../../redux/selectors"
import {ContactsStyled} from "./Contacts.styled"

import Contact from "./Contact/Contact"

const getVisibleContacts = (contacts, filterNormalize) => {
   return contacts.filter(contact => {  
    return contact.name.toLowerCase().includes(filterNormalize)})
}


export default function Contacts() {

const contacts = useSelector(selectContacts)
const filter = useSelector(selectFilter)

const normalize = filter.toLowerCase()

const visibleContacts = getVisibleContacts(contacts, normalize)


    return <section>
        <ContactsStyled>
        {visibleContacts.map(contact => {
            return <Contact contact={contact} key={contact.id}/>
        })}
        </ContactsStyled>
    </section>
}