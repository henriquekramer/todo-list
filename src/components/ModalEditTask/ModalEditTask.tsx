import { useState } from 'react';
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import { useTasks } from '../../hooks/useTasks';
import { ContainerModal } from './styles';

Modal.setAppElement('#root');

export function ModalEditTask(){
  const {onRequestCloseEditModal, isOpenEditModal, editTaskTitle } = useTasks();
  const [newTitleTask, setNewTitleTask] = useState('')
  const newTitleTaskEmpty = newTitleTask.length === 0;
  
  return (
    <Modal 
    isOpen={isOpenEditModal}
    onRequestClose={onRequestCloseEditModal}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <button 
      type="button" 
      onClick={onRequestCloseEditModal} 
      className="react-modal-close"
    >
      <img src={closeImg} alt="Fechar modal" />
    </button>

    <ContainerModal>
      <h2>Editar Tarefa</h2>
      <p>Para:</p>
      <input
        type="text"
        placeholder='Digite aqui o novo título de sua tarefa' 
        value={newTitleTask}
        onChange={e => setNewTitleTask(e.target.value)}
      />
      <div>
        <button
          type="button" 
          onClick={()=> {
            onRequestCloseEditModal()
            setNewTitleTask('')
          }} 
        >
          Cancelar
        </button>
        <button
          onClick={()=> {
            editTaskTitle(newTitleTask)
            setNewTitleTask('')
            onRequestCloseEditModal()
          }}
          disabled={newTitleTaskEmpty}
        >
          Alterar
        </button>
      </div>
    </ContainerModal>
  </Modal>
  )
}