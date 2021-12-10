import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserStateProps = {
  id: string;
  isAuthorized: boolean;
  email: string;
  signInEmail: string;
  signInPassword: string;
};

type UserResponseProps = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isAuthorized: boolean;
  imported: boolean;
  teamId: string;
  role: string;
  linkedinLink: string;
  isReceivingNotifications: boolean;
  avatarKey: string;
  loggedInAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
};

export type ResponseUserPayloadProps = {
  user: UserResponseProps;
};

export type RequestSetSignInInformationPayloadProps = {
  email: string;
  password: string;
};

const initialState: UserStateProps = {
  id: '',
  isAuthorized: false,
  email: '',
  signInEmail: '',
  signInPassword: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<ResponseUserPayloadProps>) => {
      state.id = action.payload.user.id;
      state.isAuthorized = action.payload.user.isAuthorized;
      state.email = action.payload.user.email;
    },
    signOut: state => {
      state.isAuthorized = false;
      state.id = '';
      state.email = '';
    },
    setSignInInformation: (
      state,
      action: PayloadAction<RequestSetSignInInformationPayloadProps>,
    ) => {
      state.signInEmail = action.payload.email;
      state.signInPassword = action.payload.password;
    },
    clearSignInInformation: state => {
      state.signInEmail = '';
      state.signInPassword = '';
    },
  },
});

export const {
  setUser,
  signOut,
  setSignInInformation,
  clearSignInInformation,
} = userSlice.actions;

export default userSlice.reducer;
