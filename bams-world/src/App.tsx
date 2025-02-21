import { useState, useEffect } from 'react';
import { CssBaseline, Box, Typography, IconButton, Modal, Button } from '@mui/joy';
import YouTubeEmbed from './components/YouTubeEmbed';
import Apple from '@mui/icons-material/Apple';
import CloudQueue from '@mui/icons-material/CloudQueue';
import YouTubeIcon from '@mui/icons-material/YouTube'; // Import the YouTube icon
import CloudModal from './components/CloudModal';
import AppleModal from './components/AppleModal';
import GlobeComponent from './components/Globe'; // Import the Globe component
import './App.css';
import './index.css';

export default function App() {
  const [cloudModalOpen, setCloudModalOpen] = useState(false);
  const [appleModalOpen, setAppleModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [showGlobe, setShowGlobe] = useState(true); // State to control globe visibility
  const [showHeader, setShowHeader] = useState(false); // State to control header visibility
  const [globeSize, setGlobeSize] = useState('100%'); // Control the globe size

  useEffect(() => {
    // Sequence of animations
    const timer = setTimeout(() => {
      setGlobeSize('50%'); // Shrink the globe
      setShowGlobe(false); // Hide globe after shrink and bounce
      setShowHeader(true); // Show header
    }, 4000); // Delay for all animations to finish

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const handleCloudModalOpen = () => setCloudModalOpen(true);
  const handleCloudModalClose = () => setCloudModalOpen(false);

  const handleAppleModalOpen = () => setAppleModalOpen(true);
  const handleAppleModalClose = () => setAppleModalOpen(false);

  const handleVideoModalOpen = () => setVideoModalOpen(true);
  const handleVideoModalClose = () => setVideoModalOpen(false);

  return (
    <Box
      sx={{
        width: '100%',
        margin: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        gap: 3,
        background: 'linear-gradient(to right, #ff4e50, #fc913a)',
        color: '#fff',
        padding: '2rem',
      }}
    >
      <CssBaseline />
      
      {/* Conditionally render the globe with animation */}
      {showGlobe && (
        <Box sx={{
  marginTop: '1rem',
  marginBottom: '1rem',
  width: globeSize, 
  animation: 'standardOrbitAndShrink 4s ease-out forwards'
}}>
  <GlobeComponent />
</Box>


  
   
      )}
      
      {showHeader && (
        <>
          <Typography level="h1" sx={{ fontWeight: 'bold', fontSize: '3rem', animation: 'fadeIn 2s' }}>
            Bam’s World 🌍
          </Typography>
          <Typography level="body-lg">
            Welcome to the world of Lhul Bam. <br />
            Vibe out, and stay connected.
          </Typography>
        </>
      )}

      {/* Icons Section Below the Globe */}
      <Box sx={{ display: 'flex', gap: 3, mt: 3 }}>
        <IconButton onClick={handleVideoModalOpen} sx={{ color: '#fff' }}>
          <YouTubeIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton onClick={handleAppleModalOpen} sx={{ color: '#fff' }}>
          <Apple sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton onClick={handleCloudModalOpen} sx={{ color: '#fff' }}>
          <CloudQueue sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>

      {/* YouTube Video Modal */}
      <Modal open={videoModalOpen} onClose={handleVideoModalClose}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', width: '80%' }}>
            <YouTubeEmbed videoId="eR_-5QGVvEM" />
            <Button
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                color: '#fff',
                background: 'rgba(0,0,0,0.5)',
              }}
              onClick={handleVideoModalClose}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Cloud Modal */}
      <CloudModal open={cloudModalOpen} handleClose={handleCloudModalClose} />

      {/* Apple Modal */}
      <AppleModal open={appleModalOpen} handleClose={handleAppleModalClose} />
    </Box>
  );
}
