import CableIcon from '@mui/icons-material/Cable';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import LaptopIcon from '@mui/icons-material/Laptop';
import MonitorIcon from '@mui/icons-material/Monitor';
import MouseIcon from '@mui/icons-material/Mouse';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import StorageIcon from '@mui/icons-material/Storage';
import TabletIcon from '@mui/icons-material/Tablet';
import WatchIcon from '@mui/icons-material/Watch';
import type { SvgIconComponent } from '@mui/icons-material';

import { ProductCategory } from '../store/api/types/product';

export const categoryIconMap: Record<ProductCategory, SvgIconComponent> = {
  accessories: CableIcon,
  audio: HeadphonesIcon,
  cameras: CameraAltIcon,
  laptops: LaptopIcon,
  monitors: MonitorIcon,
  other: DevicesOtherIcon,
  peripherals: MouseIcon,
  smartphones: SmartphoneIcon,
  storage: StorageIcon,
  tablets: TabletIcon,
  wearables: WatchIcon,
};
