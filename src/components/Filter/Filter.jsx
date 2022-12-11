import { useDispatch } from "react-redux"
import { setStatusFilter } from "../../redux/filterSlice"
import {FilterStyled} from "./Filter.styled"
import PropTypes from 'prop-types';

export default function Filter({title, titleInput}) {

    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(setStatusFilter(event.target.value))
    }

    return <section>
    <h1>{title}</h1>
    <label> <FilterStyled>{titleInput}</FilterStyled>
        <input type='text' onChange={handleChange} />
    </label>
    </section>
}

Filter.propTypes = {
    title: PropTypes.string.isRequired,
    titleInput: PropTypes.string.isRequired,
}