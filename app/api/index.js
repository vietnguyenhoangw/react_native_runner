import network from '@services/network';

const endPoints = {
  login: 'v1/token',
};

export const fetchLogin = params => {
  return network.post(endPoints.login, {params});
};
