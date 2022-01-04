export interface iCreateIndicator {
  id_subject: string;
  topic: string;
  description: string;
  code_number: string;
  link: string;
}
export const createIndicator = async (
  newData: iCreateIndicator,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MTI3OTUzNywiZXhwIjoxNjQxMjk3NTM3fQ.iUFTj8QqGvJ36mgsV6o5HZe8ndxdF2zhgJkNOaozsOY',
  );
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    id_subject: Number(newData.id_subject),
    topic: newData.topic,
    description: newData.description,
    code_number: newData.code_number,
    link: newData.link,
  });
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  const data = await fetch('http://localhost:8080/Indicators', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });

  if ((await data) === true) {
    return data;
  } else {
    return false;
  }
};

export interface IndicatorsData {
  id: number;
  id_subject: number;
  topic: string;
  description: string;
  code_number: string;
  link: string;
}
export const getIndicator = async (): Promise<IndicatorsData[]> => {
  var requestOptions = {
    method: 'GET',
  };

  const data = await fetch('http://localhost:8080/Indicators', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  return await data.result;
};

export const deleteIndicatorId = async (id: number): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MTI3OTUzNywiZXhwIjoxNjQxMjk3NTM3fQ.iUFTj8QqGvJ36mgsV6o5HZe8ndxdF2zhgJkNOaozsOY',
  );
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    id: id,
  });

  var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    body: raw,
  };

  const data = await fetch('http://localhost:8080/Indicators', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
  return await data;
};

export const updateIndicator = async (
  id: number,
  newData: iCreateIndicator,
): Promise<boolean> => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpemFsYWRtaW5yZW1lZGlhbCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MTI3OTUzNywiZXhwIjoxNjQxMjk3NTM3fQ.iUFTj8QqGvJ36mgsV6o5HZe8ndxdF2zhgJkNOaozsOY',
  );
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    id: id,
    id_Indicator: newData.id_subject,
    topic: newData.topic,
    description: newData.description,
    code_number: newData.code_number,
    link: newData.link,
  });

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
  };

  const data = await fetch('http://localhost:8080/Indicators', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });

  return await data;
};
