import Dialogues from './Dialogues';
import {addNewMessageCreator, updateNewMessageCreator} from './../../redux/dialoguesReducer';
import {connect} from 'react-redux'

    let mapStateToProps = (state) => {
      return {
        dialoguesPage: state.dialoguesPage
      }
    };

    let mapDispatchToProps = (dispatch) => {
      return {
        addMessage : () => {
          dispatch(addNewMessageCreator());
        },

        updateMessage : (text) => {
          dispatch(updateNewMessageCreator(text));
        }
      }
    };

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues)
export default DialoguesContainer;
