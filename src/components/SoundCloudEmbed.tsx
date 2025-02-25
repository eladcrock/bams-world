import { Box } from '@mui/joy';

export default function SoundCloudEmbed() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '600px',
        aspectRatio: '16/9',
        mt: 2,
        '@media (min-width: 768px)': {
          maxWidth: '700px', // Slightly larger on desktop
        },
      }}
    >
      <iframe
        width="100%"
        height="100%"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        style={{
          borderRadius: '10px',
          overflow: 'hidden',
          height: '100%', // Ensures aspect ratio scaling
        }}
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/user-106703479&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
    </Box>
  );
}
