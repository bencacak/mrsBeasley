const roleFinder = (month, day) => {
  let role;
  if (month === 6 && day <= 15) {
    role = '864543832846630932';
  } else if (month === 6 && day <= 22) {
    role = '864570906533298176';
  } else if (month === 6 && day <=29) {
    role = '864570996363100180';
  } else if (month === 6 && day >= 30 || month === 7 && day <= 5) {
    role = '864571064369283122';
  } else if (month === 7 && day <= 12) {
    role = '864571127384375336';
  } else if (month === 7 && day <= 20) {
    role = '864571236691869716';
  } else {
    role = false;
  };
  return role;
};