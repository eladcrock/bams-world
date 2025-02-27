<<<<<<< HEAD
import { Modal,  IconButton } from '@mui/joy';
import CloseIcon from '@mui/icons-material/Close';
import YouTubeEmbed from './YouTubeEmbed';

interface CloudModalProps {
=======
import { Modal, IconButton } from '@mui/joy';
import CloseIcon from '@mui/icons-material/Close';
import YouTubeEmbed from './YouTubeEmbed';

interface YouTubeModalProps {
>>>>>>> 35867c9 (first commit)
  open: boolean;
  handleClose: () => void;
}

<<<<<<< HEAD
const YouTubeModal: React.FC<CloudModalProps> = ({ open, handleClose }) => {
=======
const YouTubeModal: React.FC<YouTubeModalProps> = ({ open, handleClose }) => {
>>>>>>> 35867c9 (first commit)
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

<<<<<<< HEAD

        {/* Embed SoundCloud component inside the modal */}
        <div>
        <YouTubeEmbed videoId="eR_-5QGVvEM" />
                </div>

        {/* You can still add an href inside the modal for external navigation */}
      
=======
        {/* Embed YouTube component inside the modal */}
        <div>
          <YouTubeEmbed videoId="241QhwXT400" />
        </div>
>>>>>>> 35867c9 (first commit)
      </div>
    </Modal>
  );
};

export default YouTubeModal;