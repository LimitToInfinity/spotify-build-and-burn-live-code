export const parseJSON = response => response.json();

export const authFetch = (url, method, headers, body) => {
  return fetch(url, { method, headers, body });
}