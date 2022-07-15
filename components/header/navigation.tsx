import {
  Activity,
  Circle,
  ExternalLink,
  FileText,
  Home,
  Music,
  PhoneCall,
  Table,
  Volume2,
} from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={16} />,
    navLink: '/home',
  },
  {
    id: 'multimedia',
    title: 'Multimedia',
    icon: <Music size={16} />,
    children: [
      {
        id: 'books',
        title: 'Books',
        icon: <Circle size={13} />,
        navLink: '/multimedia/books',
      },
      {
        id: 'gallery',
        title: 'Gallery',
        icon: <Circle size={13} />,
        navLink: '/multimedia/gallery',
      },
      {
        id: 'music',
        title: 'Music',
        icon: <Circle size={13} />,
        navLink: '/multimedia/music',
      },
      {
        id: 'video',
        title: 'Video',
        icon: <Circle size={13} />,
        navLink: '/multimedia/video',
      },
      {
        id: 'youtube-playlist',
        title: 'Youtube Kath Playlist',
        icon: <Circle size={13} />,
        navLink: '/multimedia/youtube-playlist',
      },
      {
        id: 'live-video',
        title: 'Live Video',
        icon: <Circle size={13} />,
        navLink: '/multimedia/video',
      },
    ],
  },
  {
    id: 'quotes',
    title: 'Quotes',
    icon: <FileText size={16} />,
    nvaLink: '/quotes',
  },
  {
    id: 'katha',
    title: 'Katha',
    icon: <Volume2 size={16} />,
    navLink: '/katha',
  },
  {
    id: 'activities',
    title: 'Activities',
    icon: <Activity size={16} />,
    children: [
      {
        id: 'e-aarti',
        title: 'E-Aarti',
        icon: <Circle size={13} />,
        navLink: '/activities/e-aarti',
      },
    ],
  },
  // {
  //   id: 'schedule',
  //   title: 'Schedule',
  //   icon: <Table size={16} />,
  //   children: [
  //     {
  //       id: 'schedule',
  //       title: 'Schedule',
  //       icon: <Circle size={13} />,
  //       navLink: '/schedule',
  //     },
  //     {
  //       id: 'calendar',
  //       title: 'Calendar',
  //       icon: <Circle size={13} />,
  //       navLink: '/schedule/calendar',
  //     },
  //   ],
  // },
  {
    id: 'dham-yatra',
    title: 'Dham यात्रा',
    icon: <Table size={16} />,
    children: [
      {
        id: 'old-yatra',
        title: 'Old Dham Yatra',
        icon: <Circle size={13} />,
        navLink: '/dham-yatra/old-yatra',
      },
      {
        id: 'new-registration',
        title: 'New Dham Yatra register',
        icon: <Circle size={13} />,
        navLink: '/dham-yatra/new-registration',
      },
    ],
  },
  // {
  //   id: 'useful-links',
  //   title: 'Useful links',
  //   icon: <ExternalLink size={16} />,
  //   children: [
  //     {
  //       id: 'iskcon-desire-tree',
  //       title: 'ISKCON desire tree',
  //       icon: <Circle size={13} />,
  //       navLink: 'https://iskcondesiretree.com/',
  //     },
  //     {
  //       id: 'prabhupada-books',
  //       title: 'Prabhupada books',
  //       icon: <Circle size={13} />,
  //       navLink: 'https://prabhupadabooks.com/',
  //     },
  //     {
  //       id: 'vedic-names',
  //       title: 'Vedic names',
  //       icon: <Circle size={13} />,
  //       navLink: 'https://names.iskcondesiretree.com/',
  //     },
  //   ],
  // },
  //   • ISKCON

  // • SHRILA PRABHUPADA

  // • LORD CHAITANYA

  // • HH. GOPAL KRISHAN GOSWAMI MAHARAJ Ji

  // • PRASHANT MUKUND DAS .
  {
    id: 'about',
    title: 'About',
    icon: <Music size={16} />,
    children: [
      {
        id: 'books',
        title: 'ISKCON',
        icon: <Circle size={13} />,
        navLink: '/about/iskcon',
      },
      {
        id: 'gallery',
        title: 'Srila Prabhupada',
        icon: <Circle size={13} />,
        navLink: '/about/srila-prabhupada',
      },
      {
        id: 'music',
        title: 'Lord Chaitanya',
        icon: <Circle size={13} />,
        navLink: '/about/lord-chaitanya',
      },
      {
        id: 'video',
        title: 'HH Gopal Krishna Goswami Maharaj',
        icon: <Circle size={13} />,
        navLink: '/about/guru-maharaj',
      },
      {
        id: 'youtube-playlist',
        title: 'HG Prashant Mukunda Das',
        icon: <Circle size={13} />,
        navLink: '/about/prashant-mukunda',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: <PhoneCall size={16} />,
    navLink: '/contact',
  },
]
