
export const genLengthCheckFn = (characterCount = 1) => v =>
  v && v.length >= characterCount;
export const nonEmptyCheck = genLengthCheckFn(0);
export const emailFormatCheck = e => ~e.indexOf("@");

const SPECIAL_CHAR_PAT = /[!@#$%^&*?]/;
export const passwordCheck = p => p.match(SPECIAL_CHAR_PAT);
