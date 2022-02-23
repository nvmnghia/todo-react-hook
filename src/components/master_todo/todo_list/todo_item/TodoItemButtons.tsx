import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faPen,
  faRotateLeft,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

const EditButton = ({ onStartEdit }: { onStartEdit: () => void }) => (
  <button
    className='btn btn-outline-primary'
    onClick={onStartEdit}
    title='Edit'
  >
    <FontAwesomeIcon icon={faPen} />
  </button>
);

const SaveButton = ({ onSave }: { onSave: () => void }) => (
  <button className='btn btn-outline-primary' onClick={onSave} title='Save'>
    <FontAwesomeIcon icon={faCheck} />
  </button>
);

const UndoButton = ({ onClick }: { onClick: () => void }) => (
  <button className='btn btn-outline-danger' onClick={onClick} title='Undo'>
    <FontAwesomeIcon icon={faRotateLeft} />
  </button>
);

const RemoveButton = ({ onRemove }: { onRemove: () => void }) => (
  <button className='btn btn-outline-danger' onClick={onRemove} title='Remove'>
    <FontAwesomeIcon icon={faXmark} />
  </button>
);

export { EditButton, SaveButton, UndoButton, RemoveButton };
