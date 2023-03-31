// import jwt from 'jsonwebtoken';
// import Cookies from 'js-cookie';

// export const setTokenCookie = (token) => {
//   Cookies.set('token', token, { expires: 7 });
// };

// export const removeTokenCookie = () => {
//   Cookies.remove('token');
// };

// export const getTokenCookie = () => {
//   const token = Cookies.get('token');
//   if (!token) return null;

//   try {
//     const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//     return decodedToken;
//   } catch (err) {
//     removeTokenCookie();
//     return null;
//   }
// };

export const isAuthenticated = () => {
  const token = getTokenCookie();
  return !!token;
};
