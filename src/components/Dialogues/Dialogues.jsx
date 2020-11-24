import React from 'react';
import styles from './Dialogues.module.css';

const Dialogues = (props) => {

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
              {props.dialoguesInfo}
            </div>
            <div className={styles.messages}>
              {props.messagesInfo}

              <textarea ref={newElement}
                        value={props.newMessage}
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
