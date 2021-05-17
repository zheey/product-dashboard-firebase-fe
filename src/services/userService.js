import { firebasedb, firebaseAuth } from "../firebase";

export const userService = {
  getUser,
  handleResponse,
  fetchFrom
};

function getUser(id) {
  return firebasedb
    .collection("users")
    .doc(id)
    .get()
    .then(snapshot => snapshot.data());
}

function logout() {
  if (JSON.parse(localStorage.getItem("user"))) {
    firebaseAuth.signOut();
    localStorage.removeItem("user");
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    return;
  }
}

function handleResponse(response) {
  return Promise.resolve(response).then(text => {
    const data = text;
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        window.location.reload();
      }

      const error = (data && data) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function fetchFrom(url, options) {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  headers.Authorization = "Bearer " + JSON.parse(localStorage.getItem("token"));

  return fetch(url, {
    headers,
    ...options
  })
    .then(handleResponse)
    .then(response => {
      return response;
    });
}
