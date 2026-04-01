import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { footerContentSx, footerSx } from './Footer.styles';

export function Footer() {
  const { t } = useTranslation('common');

  return (
    <Box component="footer" sx={footerSx}>
      <Box sx={footerContentSx}>
        <Typography variant="body2" color="inherit">
          {t('footer_copy', { year: new Date().getFullYear() })}
        </Typography>
        <Link href={`mailto:${t('footer_contact')}`} variant="body2" color="inherit">
          {t('footer_contact')}
        </Link>
      </Box>
    </Box>
  );
}
