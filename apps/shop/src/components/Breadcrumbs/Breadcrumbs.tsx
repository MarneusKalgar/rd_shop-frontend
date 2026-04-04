import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link } from '@tanstack/react-router';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <MuiBreadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
      {items.map(item =>
        item.to ? (
          <MuiLink key={item.label} component={Link} to={item.to} underline="hover" color="inherit">
            {item.label}
          </MuiLink>
        ) : (
          <Typography key={item.label} color="text.primary" aria-current="page">
            {item.label}
          </Typography>
        ),
      )}
    </MuiBreadcrumbs>
  );
}
