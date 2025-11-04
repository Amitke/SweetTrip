/** @type {import('next').NextConfig} */
import path from 'path';
import withPWA from 'next-pwa';
const nextConfig = {
  //output: 'export',
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')]
  },
};



export default withPWA({
  dest: 'public',
  register: true,
  cacheOnFrontEndNav:true,
  reloadOnOnline:true,
  disable:process.env.NODE_ENV === 'development',
})(nextConfig);
