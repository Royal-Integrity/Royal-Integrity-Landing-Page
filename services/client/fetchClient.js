const postRequest = async ({
  resource,
  body,
  method,
  headers,
  // params
}) => {
  const response = await fetch(
    `https://api-website.guane.com.co/api${resource}`,
    {
      method: method || 'GET',
      ...(method !== 'GET' && {
        body: JSON.stringify(body) || JSON.stringify({}),
      }),
      headers: headers || { 'Content-Type': 'application/json' },
    }
  );
  return response;
};

export default postRequest;
