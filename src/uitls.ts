export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function getRandomData(size: number) {
  const data: number[][] = new Array(size)
    .fill(0)
    .map(() => new Array(size).fill(0));
  let isAirPlaneDropped = false;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const value = getRandomInt(6);
 console.log(value, i, j);
        if (value === 1 && !isAirPlaneDropped) {
        isAirPlaneDropped = true;
        data[i][j] = value;
      } else {
        data[i][j] = 0;
      }
    }
  }

  return data;
}
