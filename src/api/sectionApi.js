import privateApi from './privateApi';

export const getSectionsWithResources = async () => {
  const response = await privateApi.get('/sections');
  return response.data; 
};