const regexAddress = /^[A-Z0-9 ,#'/.]{3,96}$/iu;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexName = /^[a-zA-Z]{2}(([' -][a-zA-Z ])?[a-zA-Z]*)*$/;
const regexPhone = /[(]\d{3}[)]\s?\d{3}[-]\d{4}/;
const regexPhoto = /^\b(jpeg|jpg|png)\b$/;

export { regexAddress, regexEmail, regexName, regexPhone, regexPhoto };
