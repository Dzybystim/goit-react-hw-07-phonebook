import { useSelector, useDispatch } from "react-redux"
import {selectContacts} from "../../redux/selectors"
import PropTypes from 'prop-types';
import {AppBarStyled, AppBarSpanStyled, AppBarStyledInput, AppBarStyledButton} from './AppBar.styled'
import {addContact} from "../../redux/operations"




export default function AppBar({title, titleInputOne, titleInputTwo}) {

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const check = (nameContact) => {
     const checkBoolean = contacts.find(contact => contact.name === nameContact)
     return checkBoolean
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const checkBoolean = check(event.target.elements.name.value)
        if(checkBoolean){
            return alert(`${event.target.elements.name.value} is already in contacts`)
        } else {
            dispatch(addContact({name: event.target.elements.name.value, phone: event.target.elements.number.value}))
        }
        event.target.reset()
    }

    return <AppBarStyled>
        <h1> {title} </h1>
        <form onSubmit={handleSubmit}>
        <label> <AppBarSpanStyled>{titleInputOne}</AppBarSpanStyled>
            <AppBarStyledInput           
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. 
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required/>
        </label>
        <label> <AppBarSpanStyled>{titleInputTwo}</AppBarSpanStyled>
             <AppBarStyledInput             
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required/>
        </label>
        <AppBarStyledButton type="submit">Add Contact</AppBarStyledButton>
        </form>
    </AppBarStyled>
}


AppBar.propTypes = {
    title: PropTypes.string.isRequired,
    titleInputOne: PropTypes.string.isRequired,
    titleInputTwo: PropTypes.string.isRequired,
}