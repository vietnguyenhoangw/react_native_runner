import {UserModel} from '@models';

export const themeSelect = state => state.application.theme;
export const fontSelect = state => state.application.font;
export const forceDarkSelect = state => state.application.force_dark;
export const languageSelect = state => state.application.language;
export const onBoardSelect = state => state.application.onboard;
export const userSelect = state => {
  if (state.auth.user) {
    return new UserModel(state.auth.user);
  }
};
export const registerSelect = state => {
  return state.auth.register.map(item => new UserModel(item));
};
export const tokenSelect = state => state.auth.token;
