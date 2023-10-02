import api from '~config/api';

export const preOrder = values => api.post('/v1/stripe/pre-order', values);
