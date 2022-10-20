import { Portal, Provider,Modal, Title  } from "react-native-paper"
import {useState} from 'react'



export const CreateModal = ({hideModal, isVisible})=>{
    
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
      <Portal>
        <Modal visible={isVisible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Title>Example Modal.  Click outside this area to dismiss.</Title>
        </Modal>
      </Portal>
   
  );
}
