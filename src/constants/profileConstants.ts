import {ProfileProps} from '../interfaces/profileinterface';
import {CommonInterface} from '../interfaces/commonInterface';

export const ADDRESS_TYPE: CommonInterface[] = [
  {
    id: 1,
    title: 'Home',
  },
  {
    id: 2,
    title: 'Office',
  },
  {
    id: 3,
    title: 'Site',
  },
];

export const LABELS = [
  'New Order',
  'Accepted',
  'Preparing For Delivery',
  'Dispatched',
  'Delivered',
];

export const CUSTOMER_CONTACT: CommonInterface[] = [
  {
    id: 1,
    title: 'Use this contact for later use',
  },
];

export const PROFILE_DATA: ProfileProps[] = [
  {
    id: 1,
    title: 'Edit Profile',
    icon: 'personIcon',
    route: 'changePassword',
  },
  {
    id: 5,
    title: 'Change Password',
    icon: 'lockIcon',
    route: 'changePassword',
  },
  {
    id: 11,
    title: 'Log Out',
    icon: 'logOutIcon',
    iconColor: 'red',
    route: 'login',
  },
];
