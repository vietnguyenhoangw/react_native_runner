import network from '@services/network';

const endPoints = {
  login: 'index.php/wp-json/jwt-auth/v1/token',
};

export const fetchLogin = params => {
  return network.post(endPoints.login, {params});
};
