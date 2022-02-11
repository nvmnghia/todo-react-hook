import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons';

//================================================================================
// Single buttons
//================================================================================

const buttonStyle = 'btn btn-outline-primary';

const EditButton = (onStartEdit: () => void) => (
  <button className={buttonStyle} onClick={onStartEdit}>
    <FontAwesomeIcon icon={faPen} />
  </button>
);

const SaveButton = (onSave: () => void) => (
  <button className={buttonStyle} onClick={onSave}>
    <FontAwesomeIcon icon={faCheck} />
  </button>
);

//================================================================================
// Combo button
//================================================================================

interface EditSaveComboButtonProps {
  onStartEdit: () => void;
  onSave: () => void;
}

interface EditSaveComboButtonState {
  editing: boolean;
}

/**
 * 2-mode button: Edit and Save.
 * Click to switch state, default to Edit.
 */
export default class EditSaveComboButton extends React.Component<
  EditSaveComboButtonProps,
  EditSaveComboButtonState
> {
  constructor(props: EditSaveComboButtonProps) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  render(): React.ReactNode {
    return this.state.editing
      ? SaveButton(() => {
          this.setState({ editing: false });
          this.props.onSave();
        })
      : EditButton(() => {
          this.setState({ editing: true });
          this.props.onStartEdit();
        });
  }
}
