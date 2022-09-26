/**
 * info : 이메일 정규식 체크
 */
const email: RegExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/

/**
 * info : 비밀번호 정규식 체크 (6자 이상의 영문 대,소문자 특수문자 포함)
 */
const password: RegExp =
  /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{6,}$/

export const RegExp = {
  email,
  password,
}
