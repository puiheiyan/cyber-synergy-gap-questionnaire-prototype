import React from 'react';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ShieldTwoToneIcon from '@mui/icons-material/ShieldTwoTone';
import DesktopWindowsTwoToneIcon from '@mui/icons-material/DesktopWindowsTwoTone';
import PhonelinkLockTwoToneIcon from '@mui/icons-material/PhonelinkLockTwoTone';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';
import SecurityTwoToneIcon from '@mui/icons-material/SecurityTwoTone';

export const SidebarData = [
  {
    title: 'Dasboard',
    path: '/dashboard',
    icon: <DashboardTwoToneIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Access Control',
    path: '/acmenu',
    icon: <DesktopWindowsTwoToneIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Identification & Authentication',
    path: '/iamenu',
    icon: <FingerprintIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Media Protection',
    path: '/mpmenu',
    icon: <SecurityTwoToneIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Physical Protection',
    path: '/pemenu',
    icon: <ShieldTwoToneIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Systems & Communications Protection',
    path: '/scmenu',
    icon: <PhonelinkLockTwoToneIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'System & Information Integrity',
    path: '/scmenu',
    icon: <VerifiedUserTwoToneIcon/>,
    cName: 'nav-text'
  }
];