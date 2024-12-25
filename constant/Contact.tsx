export interface Contact {
  uid: string;
  name: string;
  status: 'Online' | 'Offline' | 'Away' | 'Busy';
  imageUrl: string;
}

export const CONTACT_LIST: Contact[] = [
  {
    uid: '1',
    name: 'Alice Johnson',
    status: 'Online',
    imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    uid: '2',
    name: 'Bob Smith',
    status: 'Offline',
    imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    uid: '3',
    name: 'Charlie Brown',
    status: 'Away',
    imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    uid: '4',
    name: 'Diana Prince',
    status: 'Online',
    imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    uid: '5',
    name: 'Ethan Hunt',
    status: 'Busy',
    imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    uid: '6',
    name: 'Fiona Gallagher',
    status: 'Online',
    imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    uid: '7',
    name: 'George Clooney',
    status: 'Away',
    imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    uid: '8',
    name: 'Hannah Baker',
    status: 'Offline',
    imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    uid: '9',
    name: 'Isaac Newton',
    status: 'Busy',
    imageUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    uid: '10',
    name: 'Jenny Lind',
    status: 'Online',
    imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
  {
    uid: '11',
    name: 'Alice Johnson',
    status: 'Online',
    imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    uid: '12',
    name: 'Bob Smith',
    status: 'Offline',
    imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    uid: '13',
    name: 'Charlie Brown',
    status: 'Away',
    imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    uid: '14',
    name: 'Diana Prince',
    status: 'Online',
    imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    uid: '15',
    name: 'Ethan Hunt',
    status: 'Busy',
    imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    uid: '16',
    name: 'Fiona Gallagher',
    status: 'Online',
    imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    uid: '17',
    name: 'George Clooney',
    status: 'Away',
    imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    uid: '18',
    name: 'Hannah Baker',
    status: 'Offline',
    imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    uid: '19',
    name: 'Isaac Newton',
    status: 'Busy',
    imageUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    uid: '20',
    name: 'Jenny Lind',
    status: 'Online',
    imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
];
