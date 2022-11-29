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
