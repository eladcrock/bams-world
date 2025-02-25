import { Box } from '@mui/joy';

export default function AppleMusicEmbed() {
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
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        frameBorder="0"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/us/artist/lhul-bam/1754171013"
      ></iframe>
    </Box>
  );
}
