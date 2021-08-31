import { SIZE_PROPS as s } from './FeatherIconConstants';

const parseOversizeArg = arg => {
  if (typeof arg != 'string') {
    throw new Error("Oversize argument parser called without argument of type string.");
  }

  const [argument, strSize] = arg.match(s.ICON_REGEX_X);
  const size = Number.parseInt(strSize);
  if (size > 0) {
    return `${size}em`;
  } else {
    throw new Error(`Oversize argument parser failed to convert "${argument}". Is the value a positive integer?`);
  }
};

export const parseIconSize = arg =>  {
  console.log('parse this: ', arg)
  const sizeArg = arg !== undefined ? String(arg).toLowerCase() : undefined;

  // use parser for <int>x sizes
  if(s.ICON_REGEX_X.test(sizeArg)) {
    console.log('it is oversize')
    return parseOversizeArg(sizeArg);
  }

  switch (sizeArg) {
    case undefined:
      return s.ICON_SIZE_MD;

    case s.ICON_KEYWORD_SM:
      return s.ICON_SIZE_SM;
    case s.ICON_KEYWORD_MD:
      return s.ICON_SIZE_MD;
    case s.ICON_KEYWORD_LG:
      return s.ICON_SIZE_LG;
    case s.ICON_KEYWORD_XL:
      return s.ICON_SIZE_XL;

    default:
      console.warn("an invalid size prop was passed to a FeatherIcon");
      return s.ICON_SIZE_MD;
  }
};