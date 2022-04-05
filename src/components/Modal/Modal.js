import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { boxStyled } from './Modal.style';

export default function BasicModal({ handleClose, open, children }) {
  return (
    <div>
      <Modal
        disableScrollLock={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyled}>{children}</Box>
      </Modal>
    </div>
  );
}
