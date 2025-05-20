const postRequest = async ({
  resource,
  body,
  method,
  headers,
  // params
}) => {
  const API_BASE_URL = 'https://royal-integrity-send-email-web-app.onrender.com/api';
  const response = await fetch(`${API_BASE_URL}${resource}`, {
    method: method || 'GET',
    ...(method !== 'GET' && {
      body: JSON.stringify(body) || JSON.stringify({}),
    }),
    headers: headers || { 'Content-Type': 'application/json' },
  });
  return response;
};

export default postRequest;
