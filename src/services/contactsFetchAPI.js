import axios from 'axios';

axios.defaults.baseURL = axios.defaults.baseURL =
  'https://652198e5a4199548356d65ab.mockapi.io';

export const fetchContacts = async ({ action, item }) => {
  switch (action) {
    case 'GET':
      const getResponse = await axios.get(`/contacts`);
      if (getResponse.data.length > 0) {
        return getResponse;
      }
      console.log('ERROR');
      return Promise.reject(new Error("No data found"));
    
    case 'POST':
      const addResponse = await axios.post(`/contacts`, item);
      return addResponse;
    
    case 'DELETE':
      const deletedResponse = await axios.delete(`/contacts/${item}`);
      return deletedResponse;
    
    default:
      return;
  }
}
