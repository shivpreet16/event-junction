
export const isAuthenticated = () => {
  const token = getTokenCookie();
  return !!token;
};