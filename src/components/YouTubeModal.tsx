import { Modal, IconButton } from '@mui/joy';
import CloseIcon from '@mui/icons-material/Close';
import YouTubeEmbed from './YouTubeEmbed';

interface YouTubeModalProps {
  open: boolean;
  handleClose: () => void;
}

const YouTubeModal: React.FC<YouTubeModalProps> = ({ open, handleClose }) => {
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

        {/* Embed YouTube component inside the modal */}
        <div>
          <YouTubeEmbed videoId="241QhwXT400" />
        </div>
      </div>
    </Modal>
  );
};

export default YouTubeModal;