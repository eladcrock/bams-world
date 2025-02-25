import { Modal,  IconButton } from '@mui/joy';
import CloseIcon from '@mui/icons-material/Close';
import YouTubeEmbed from './YouTubeEmbed';

interface CloudModalProps {
  open: boolean;
  handleClose: () => void;
}

const YouTubeModal: React.FC<CloudModalProps> = ({ open, handleClose }) => {
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
        <YouTubeEmbed videoId="eR_-5QGVvEM" />
                </div>

        {/* You can still add an href inside the modal for external navigation */}
      
      </div>
    </Modal>
  );
};

export default YouTubeModal;