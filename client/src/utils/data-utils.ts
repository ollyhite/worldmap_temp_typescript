export const makeUrl = (url: string, baseUrl = process.env.REACT_APP_PROXY) => {
  return [
    baseUrl?.trim().replace(/\/+$/, ""),
    url.trim().replace(/^\/+/, ""),
  ].join("/");
};

export const makeTest = ({
  url = "",
  headers = {},
  body = null,
  method = "get",
}) => {
  return fetch(makeUrl(url), {
    method,
    headers,
    body,
  });
};

export const updateFile = async <T>(
  data: FormData,
  url: string = "upload-file"
): Promise<T> => {
  return await fetch(makeUrl("///" + url), {
    method: "Post",
    body: data,
  }).then((res) => res.json());
};

export const makeRequest = ({
  url = "",
  headers = {},
  body = null,
  method = "get",
}) => {
  return fetch(makeUrl(url), {
    method,
    headers,
    body,
  });
};
