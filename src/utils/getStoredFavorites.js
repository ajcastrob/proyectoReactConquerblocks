export const getStoredFavorites = () => {
  try {
    const stored = localStorage.getItem("movies");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};
