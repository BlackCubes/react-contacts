const regexAddress = /^[A-Z0-9 ,#'/.]{3,96}$/iu;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexName = /^[a-zA-Z]{2}(([' -][a-zA-Z ])?[a-zA-Z]*)*$/;
const regexPass = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[.#?!@$%^&*\\-_]).{8,60}$/;
const regexPhone = /[(]\d{3}[)]\s?\d{3}[-]\d{4}/;
const regexPhoto = /^\b(jpeg|jpg|png)\b$/;
const regexUsername = /^(?!.*[-_]{2,})(?=^[^-_].*[^-_]$)[\w\s-]{3,9}$/;

export {
  regexAddress,
  regexEmail,
  regexName,
  regexPass,
  regexPhone,
  regexPhoto,
  regexUsername,
};
