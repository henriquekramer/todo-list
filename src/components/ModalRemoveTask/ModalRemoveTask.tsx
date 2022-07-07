import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import { ContainerModal } from './styles';

interface ModalProps{
  isOpen: boolean;
  onRequestCloseRemoveModal: () => void;
  handleDeleteTask: (id: string)=> void;
  idToDelete: string;
}

Modal.setAppElement('#root');

export function ModalRemoveTask({isOpen, onRequestCloseRemoveModal, idToDelete, handleDeleteTask}: ModalProps){
  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestCloseRemoveModal}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <button 
      type="button" 
      onClick={onRequestCloseRemoveModal} 
      className="react-modal-close"
    >
      <img src={closeImg} alt="Fechar modal" />
    </button>

    <ContainerModal>
      <h2>Excluir Tarefa</h2>
      <p>Você tem certeza que deseja excluir essa tarefa?</p>
      <div>
        <button
          type="button" 
          onClick={onRequestCloseRemoveModal} 
        >
          Cancelar
        </button>
        <button
          onClick={()=> {
            handleDeleteTask(idToDelete)
            onRequestCloseRemoveModal()
          }}
        >
          Excluir
        </button>
      </div>
    </ContainerModal>
  </Modal>
  )
}