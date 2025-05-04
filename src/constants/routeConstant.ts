export type RootStackParamList = {
  home: undefined;
  login: {
    comeFrom?: keyof RootStackParamList;
  };
  createSameti: undefined;
  splash: undefined;
  signUp: {
    comeFrom?: keyof RootStackParamList;
  };
  forgot: undefined;
  profile?: {
    screen?: keyof RootStackParamList;
    initial?: boolean;
    params?: {
      comeFrom?: keyof RootStackParamList;
    };
  };
  dashboard: {
    comeFrom?: keyof RootStackParamList;
  };
  changePassword: {comeFrom: keyof RootStackParamList};
  sametiList: undefined;
  userSametiData: undefined;
  submitSameti: undefined;
  shareLoan: undefined;
  finalSubmit: undefined;
  sametiDetails: undefined;
};

export const MODALS = {
  network: 'Network',
  confirmation: 'Confirmation',
};

type PickRootStackParamList<K extends keyof RootStackParamList> = {
  [P in K]: RootStackParamList[P];
};

export type ProfileStackParamsList = PickRootStackParamList<
  'changePassword' | 'login'
>;

export const tagType = {};
