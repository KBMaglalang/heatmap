export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/user', '/user/profile', '/user/graph/:id'],
};
