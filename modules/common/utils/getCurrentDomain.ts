import getConfig from 'next/config';

const {
  publicRuntimeConfig: { FRONTEND_URL },
} = getConfig();

const ORIGIN =
  typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : '';

const getCurrentDomain = () => FRONTEND_URL || ORIGIN;

export default getCurrentDomain;
