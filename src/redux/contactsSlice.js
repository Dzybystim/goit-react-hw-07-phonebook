import { createSlice , nanoid} from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const contactsSlice = createSlice({
    name: "contacts",
    initialState: {value: []},
    reducers: {
        addContact: {reducer(state, action)  { 
            return   {value: [...state.value, action.payload]} },
                     prepare(text, tel) {
                        return {
                            payload: {
                              id: nanoid(),
                              text: text,
                              tel: tel
                            }}}
                    },
        deleteContacts(state, action){
            return  {value: state.value.filter(contact => {
                return contact.id !== action.payload}) }
}}})

export const {addContact, deleteContacts} = contactsSlice.actions
const contactsReducer = contactsSlice.reducer

const persistConfig = {
    key: 'contacts',
    storage,
  }
  
export const  reducerContact = persistReducer(persistConfig, contactsReducer)