import React from 'react';
import { Box } from '@mui/joy';

interface YouTubeEmbedProps {
  videoId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '600px',
        aspectRatio: '16/9',
        mt: 2,
        '@media (min-width: 768px)': {
          maxWidth: '700px',
        },
      }}
    >
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          borderRadius: '10px',
          overflow: 'hidden',
          height: '100%',
        }}
        src={`https://www.youtube.com/embed/${videoId}`}
      ></iframe>
    </Box>
  );
};

export default YouTubeEmbed;
