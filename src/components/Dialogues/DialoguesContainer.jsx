import React from 'react';
import Dialogues from './Dialogues';
import Dialogue from './Dialogue/Dialogue';
import Message from './Message/Message';
import {addNewMessageCreator, updateNewMessageCreator} from './../../redux/dialoguesReducer';

const DialoguesContainer = (props) => {

   let dialoguesInfo = props.dialoguesPage.dialogues.map((info)=> <Dialogue name={info.name} id={info.id} />)
   let messagesInfo = props.dialoguesPage.messages.map(info => <Message info={info.message} />)

   let addMessage = () => {
     props.dispatch(addNewMessageCreator());
   }

   let updateMessage = (text) => {
     props.dispatch(updateNewMessageCreator(text));
   }

        return <Dialogues dialoguesInfo={dialoguesInfo}
                          messagesInfo={messagesInfo}
                          addMessage={addMessage}
                          updateMessage={updateMessage}
                          newMessage={props.dialoguesPage.newMessage}
               />;
}

export default DialoguesContainer;
