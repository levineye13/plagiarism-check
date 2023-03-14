import { Lang, detect } from 'program-language-detector';

export const checkProgramLanguage = (
  language: keyof Lang,
  code: string
): boolean => {
  const actual = detect(code);

  if (language === actual) {
    return true;
  }

  return false;
};
