export const ROLE = 'ROLE';
export const CHANGE_THEME = 'CHANGE_THEME';

export const Role = (title, color, avatar) => {
    type: ROLE,
    title,
    color, 
    avatar
}

export const ChangeTheme = (all) => {
    type: CHANGE_THEME,
    payload, all;
}