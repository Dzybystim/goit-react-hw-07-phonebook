import { useSelector } from "react-redux";
import {getContacts, getFilter} from "../../redux/selectors"
import {ContactsStyled} from "./Contacts.styled"

import Contact from "./Contact/Contact"

const getVisibleContacts = (contacts, filterNormalize) => {
   return contacts.value.filter(contact => {  
    return contact.text.toLowerCase().includes(filterNormalize)})
}


export default function Contacts() {

const contacts = useSelector(getContacts)

const filter = useSelector(getFilter)
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