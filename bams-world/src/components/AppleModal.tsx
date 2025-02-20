import { Modal,  IconButton } from '@mui/joy';
import CloseIcon from '@mui/icons-material/Close';
import AppleMusicEmbed from './AppleMusicEmbed';

interface CloudModalProps {
  open: boolean;
  handleClose: () => void;
}

const AppleModal: React.FC<CloudModalProps> = ({ open, handleClose }) => {
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
            <AppleMusicEmbed /> 
        </div>

        {/* You can still add an href inside the modal for external navigation */}
      
      </div>
    </Modal>
  );
};

export default AppleModal;