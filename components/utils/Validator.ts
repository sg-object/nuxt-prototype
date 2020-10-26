export const isBlank = (value: string) => {
  return value == null || value == undefined || value.trim() == '';
}

const _emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*[.][a-zA-Z]{2,3}$/i;
export const isEmail = (value: string) => {
  return !isBlank(value) && value.match(_emailReg) != null;
}

/**
   * Password policy
   * 
   * 1. 알파벳 소문자를 하나 이상 포함할 것
   * 2. 알파벳 대문자를 하나 이상 포함할 것
   * 3. 숫자를 하나 이상 포함할 것
   * 4. 특수문자['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']를 하나 이상 포함할 것
   * 5. 자릿수가 8자 이상 20자 이하일 것
   */
const _pwdReg = /^((?=.*[a-z].*)(?=.*[A-Z].*)(?=.*[0-9].*)(?=.*[!@#$%^&*()].*)).{8,20}$/;
export const isPassword = (value: string) => {
  return !isBlank(value) && value.match(_pwdReg) != null;
}

export const isNumber = (value: string) => {

}