import React from 'react';
import styles from './Dialogues.module.css';

import Dialogue from './Dialogue/Dialogue';
import Message from './Message/Message';

const Dialogues = (props) => {

  let dialoguesInfo = props.dialoguesPage.dialogues.map((info)=> <Dialogue name={info.name} key={info.id} id={info.id} />)
  let messagesInfo = props.dialoguesPage.messages.map(info => <Message key={info.id} info={info.message} />)

   let newElement = React.createRef();

   let onButtonClick = () => {
     props.addMessage();
   }

   let onButtonChange = (e) => {
     let text = newElement.current.value;
     //let text = e.target.value;
     props.updateMessage(text);
   }

        return (
          <div className={styles.wrapper}>
            <div className={styles.dialogues}>
              {dialoguesInfo}
            </div>
            <div className={styles.messages}>
              {messagesInfo}

              <textarea ref={newElement}
                        value={props.dialoguesPage.newMessage}
                        onChange={onButtonChange}>
              </textarea>
              <div>
                <button onClick={onButtonClick}></button>
              </div>

            </div>

          </div>
        );
}

export default Dialogues;
