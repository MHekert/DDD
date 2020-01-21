import * as subs from './modules/Email/subscribers';

export const setupSubscriibers = () => Object.values(subs).forEach(sub => sub());
