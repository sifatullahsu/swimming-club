const getStoredSwimming = () => {
  const storedSwimming = localStorage.getItem('stored-swimming');
  return storedSwimming ? JSON.parse(storedSwimming) : [];
}

const putStoredSwimming = (data) => {
  localStorage.setItem('stored-swimming', JSON.stringify(data));
}

const getBreakTime = () => {
  const breakTime = localStorage.getItem('break-time');
  return breakTime ? JSON.parse(breakTime) : {};
}

const putBreakTime = (data) => {
  localStorage.setItem('break-time', JSON.stringify(data));
}

export {getStoredSwimming, putStoredSwimming, getBreakTime, putBreakTime};