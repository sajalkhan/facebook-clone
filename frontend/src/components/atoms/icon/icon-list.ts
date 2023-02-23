export const IconList = [
  // iconList
  'facebook'
] as const;

export type IconType = typeof IconList[number];

export const colorList = [
  // colorList
  'brightGray',
  'grayHexColor',
  'duskyBlue',
  'dawn',
  'azul',
  'dawnPink',
  'greyNickel',
  'ashGrey',
  'pastelGrey',
  'springWood',
  'onyx',
  'black',
  'white',
  'carbonGrey',
  'lightGrey',
  'soapstone',
  'darkGray',
  'whiteSmoke',
  'softPeach'
] as const;

export type ColorType = typeof colorList[number];
