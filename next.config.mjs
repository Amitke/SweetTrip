/** @type {import('next').NextConfig} */
import path from 'path';
const nextConfig = {
  //output: 'export',
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')]
  },
  
};



export default nextConfig;
