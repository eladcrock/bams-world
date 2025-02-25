import { Modal, IconButton } from '@mui/joy';
import CloseIcon from '@mui/icons-material/Close';
import SoundCloudEmbed from './SoundCloudEmbed';

interface CloudModalProps {
  open: boolean;
  handleClose: () => void;
}

const CloudModal: React.FC<CloudModalProps> = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div style={{ padding: '20px', position: 'relative' }}>
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{ position: 'absolute', top: 10, right: 10, color: '#fff' }}
        >
          <CloseIcon />
        </IconButton>


        {/* Embed SoundCloud component inside the modal */}
        <div>
          <SoundCloudEmbed />
        </div>

     
      </div>
    </Modal>
  );
};

export default CloudModal;