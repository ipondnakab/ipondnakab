import color from "../assets/colors.json";
export const getColorWithText = (text: string) => {
  const length = text.length;
  const fText = text.charCodeAt(0).toString(16);
  const mText = text.charCodeAt(length / 2).toString(16);
  const lText = text.charCodeAt(length - 1).toString(16);
  const colorIndex = parseInt(`${fText}${mText}${lText}`, 16) % 2330;
  return Object.keys(color)[colorIndex];
};
