const getStoredSwimming = () => {
  const storedSwimming = localStorage.getItem('stored-swimming');
  return storedSwimming ? JSON.parse(storedSwimming) : [];
}

const addToDb = (data) => {
  localStorage.setItem('stored-swimming', JSON.stringify(data));
}

export {getStoredSwimming, addToDb};