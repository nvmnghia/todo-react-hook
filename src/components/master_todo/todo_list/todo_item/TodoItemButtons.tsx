import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faPen,
  faRotateLeft,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

const EditButton = ({ onStartEdit }: { onStartEdit: () => void }) => (
  <button className='btn btn-outline-primary' onClick={onStartEdit}>
    <FontAwesomeIcon icon={faPen} />
  </button>
);

const SaveButton = ({ onSave }: { onSave: () => void }) => (
  <button className='btn btn-outline-primary' onClick={onSave}>
    <FontAwesomeIcon icon={faCheck} />
  </button>
);

const UndoButton = ({ onClick }: { onClick: () => void }) => (
  <button className='btn btn-outline-danger' onClick={onClick}>
    <FontAwesomeIcon icon={faRotateLeft} />
  </button>
);

const RemoveButton = ({ onRemove }: { onRemove: () => void }) => (
  <button className='btn btn-outline-danger' onClick={onRemove}>
    <FontAwesomeIcon icon={faXmark} />
  </button>
);

export { EditButton, SaveButton, UndoButton, RemoveButton };
