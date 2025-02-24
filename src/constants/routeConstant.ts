export type RootStackParamList = {
  home: undefined;
  login: {
    comeFrom?: keyof RootStackParamList;
  };
  createSameti: undefined,
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
  changePassword: { comeFrom: keyof RootStackParamList };
  sametiList: undefined;
  userSametiData: undefined;
};

export const MODALS = {
  network: 'Network',
  confirmation: 'Confirmation',
};

export const tagType = {
};
