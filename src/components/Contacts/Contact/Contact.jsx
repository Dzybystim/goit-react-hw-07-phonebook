import { useDispatch } from "react-redux";
import { deleteContacts } from "../../../redux/contactsSlice"
import { ContactStyled, ContactStyledButton } from "./Contact.styled"
import PropTypes from 'prop-types';


export default function Contact({contact}) {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(deleteContacts(contact.id))
    }
    
    return <ContactStyled>
            <p>{contact.text}: {contact.tel}</p>
            <ContactStyledButton type="button" onClick={handleClick} > Delete</ContactStyledButton>
           </ContactStyled>
    
}

Contact.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        tel: PropTypes.string.isRequired,
      }) 
}