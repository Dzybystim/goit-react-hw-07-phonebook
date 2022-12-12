import { ContactStyled, ContactStyledButton } from "./Contact.styled"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/operations"
import PropTypes from 'prop-types';


export default function Contact({contact}) {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteContact(contact.id))
    }
    
    return <ContactStyled>
            <p>{contact.name}: {contact.phone}</p>
            <ContactStyledButton type="button" onClick={handleClick} > Delete</ContactStyledButton>
           </ContactStyled>
    
}

Contact.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
      }) 
}