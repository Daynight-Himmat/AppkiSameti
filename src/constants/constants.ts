import { CommonInterface, CommonUser } from '../interfaces/commonInterface';

export const APP_NAME = 'Aapki Sameti';

export const passwordRegex: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

export const PAGE_SIZE = 15;

export const CASE_TYPE = [1,2,5,10,20,50,100,200,500,2000];

export const ASYNC_STORE_VAR = {
  token: '@token',
  cartItem: '@cartItem',
  FCMToken: '@fcmToken',
  deviceId: '@deviceId',
  themeMode: '@theme_mode',
  access_token: '@access_token',
  stripePayment: '@stripePayment',
  refresh_token: '@refresh_token',
  isFirstTimeOpenApp: '@isFirstTimeOpenApp',
  cookies: '@cookies',
};

export const CURRENCY = '\u20b9 ';

export const TEXTINPUT_ICON_SIZE = 20;

export const INTEREST_TYPE: CommonInterface[] = [
  {
    id: 1,
    title: 'Half Monthly',
  },
  {
    id: 2,
    title: 'Monthly',
  },
  {
    id: 3,
    title: 'Quaterly',
  },
  {
    id: 4,
    title: 'Halfly',
  },
  {
    id: 5,
    title: 'Yearly',
  },
];

export const PENALTY_TYPE: CommonInterface[] = [
  {
    id: 1,
    title: 'A Fixed amount.',
  },
  {
    id: 2,
    title: 'A Fixed percentage of amount.',
  },
];

export const CASE_DATA: CommonUser[] = [
  { 'username': 'JohnDoe', 'enrollNo': 1001 },
  { 'username': 'JaneSmith', 'enrollNo': 1002 },
  { 'username': 'MichaelBrown', 'enrollNo': 1003 },
  { 'username': 'EmilyDavis', 'enrollNo': 1004 },
  { 'username': 'ChrisWilson', 'enrollNo': 1005 },
  { 'username': 'KatieMiller', 'enrollNo': 1006 },
  { 'username': 'DanielMoore', 'enrollNo': 1007 },
  { 'username': 'LauraAnderson', 'enrollNo': 1008 },
  { 'username': 'JamesTaylor', 'enrollNo': 1009 },
  { 'username': 'OliviaMartinez', 'enrollNo': 1010 },
  { 'username': 'EthanHarris', 'enrollNo': 1011 },
  { 'username': 'SophiaClark', 'enrollNo': 1012 },
  { 'username': 'LiamLewis', 'enrollNo': 1013 },
  { 'username': 'AvaWalker', 'enrollNo': 1014 },
  { 'username': 'MasonAllen', 'enrollNo': 1015 },
  { 'username': 'IsabellaYoung', 'enrollNo': 1016 },
  { 'username': 'LucasKing', 'enrollNo': 1017 },
  { 'username': 'MiaScott', 'enrollNo': 1018 },
  { 'username': 'BenjaminGreen', 'enrollNo': 1019 },
  { 'username': 'CharlotteAdams', 'enrollNo': 1020 },
  { 'username': 'HenryNelson', 'enrollNo': 1021 },
  { 'username': 'AmeliaCarter', 'enrollNo': 1022 },
  { 'username': 'SebastianMitchell', 'enrollNo': 1023 },
  { 'username': 'HarperPerez', 'enrollNo': 1024 },
  { 'username': 'AlexanderRoberts', 'enrollNo': 1025 },
  { 'username': 'EvelynCampbell', 'enrollNo': 1026 },
  { 'username': 'JacksonGonzalez', 'enrollNo': 1027 },
  { 'username': 'AriaHall', 'enrollNo': 1028 },
  { 'username': 'DavidRivera', 'enrollNo': 1029 },
  { 'username': 'EllaCooper', 'enrollNo': 1030 },
  { 'username': 'MatthewRichardson', 'enrollNo': 1031 },
  { 'username': 'ScarlettBailey', 'enrollNo': 1032 },
  { 'username': 'DanielFlores', 'enrollNo': 1033 },
  { 'username': 'LilyRamirez', 'enrollNo': 1034 },
  { 'username': 'JosephHill', 'enrollNo': 1035 },
  { 'username': 'GraceBennett', 'enrollNo': 1036 },
  { 'username': 'SamuelMurphy', 'enrollNo': 1037 },
  { 'username': 'ChloeRogers', 'enrollNo': 1038 },
  { 'username': 'OwenBarnes', 'enrollNo': 1039 },
  { 'username': 'VictoriaRoss', 'enrollNo': 1040 },
  { 'username': 'ElijahHenderson', 'enrollNo': 1041 },
  { 'username': 'PenelopeColeman', 'enrollNo': 1042 },
  { 'username': 'CarterHoward', 'enrollNo': 1043 },
  { 'username': 'HannahWard', 'enrollNo': 1044 },
  { 'username': 'LeoCox', 'enrollNo': 1045 },
  { 'username': 'SofiaDiaz', 'enrollNo': 1046 },
  { 'username': 'WilliamMorgan', 'enrollNo': 1047 },
  { 'username': 'ZoePeterson', 'enrollNo': 1048 },
  { 'username': 'JackGray', 'enrollNo': 1049 },
  { 'username': 'NoraRivera', 'enrollNo': 1050 },
];

