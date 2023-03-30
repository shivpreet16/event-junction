// utils/withAuth.js

import { useEffect } from 'react';
import Router from 'next/router';
import { getTokenCookie, isAuthenticated } from './auth';

const withAuth = (WrappedComponent) => {
  const Auth = (props) => {
    const token = getTokenCookie();

    useEffect(() => {
      if (isAuthenticated()) {
        Router.push('/');
      }
    }, []);

    if (!token) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Auth;
};

export default withAuth;