export const updateStatus = (id: number, status: number) => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0dWRlbnQiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTY0MTg0MDQ2NiwiZXhwIjoxNjQxODU4NDY2fQ.-0PQX4n7Bv4mpydhh8Tf3IgkNlD0WU8GmcYtyEhRi70',
  );
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    id: id,
    status: status,
  });

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
  };

  const data = fetch('http://localhost:8080/updateStatus', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });

  return data;
};
