import { useState } from 'react';
import { CssBaseline, Box, Typography, IconButton } from '@mui/joy';
import YouTubeEmbed from './components/YouTubeEmbed';
import Apple from '@mui/icons-material/Apple';
import CloudQueue from '@mui/icons-material/CloudQueue';
import CloudModal from './components/CloudModal';
import AppleModal from './components/AppleModal';
import './App.css';
import './index.css';

export default function App() {
  const [cloudModalOpen, setCloudModalOpen] = useState(false);
  const [appleModalOpen, setAppleModalOpen] = useState(false);

  const handleCloudModalOpen = () => setCloudModalOpen(true);
  const handleCloudModalClose = () => setCloudModalOpen(false);

  const handleAppleModalOpen = () => setAppleModalOpen(true);
  const handleAppleModalClose = () => setAppleModalOpen(false);

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
      <Typography level="h1" sx={{ fontWeight: 'bold', fontSize: '3rem' }}>
        Bam’s World 🌍
      </Typography>
      <Typography level="body-lg">
        Welcome to the world of Lhul Bam. <br />
        Vibe out, and stay connected.
      </Typography>

      <YouTubeEmbed videoId="eR_-5QGVvEM" />

      {/* Icons Section */}
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          mt: 3,
        }}
      >
        <IconButton onClick={handleAppleModalOpen} sx={{ color: '#fff' }}>
          <Apple sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton onClick={handleCloudModalOpen} sx={{ color: '#fff' }}>
          <CloudQueue sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>

      {/* Cloud Modal */}
      <CloudModal open={cloudModalOpen} handleClose={handleCloudModalClose} />

      {/* Apple Modal */}
      <AppleModal open={appleModalOpen} handleClose={handleAppleModalClose} />
    </Box>
  );
}