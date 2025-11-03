/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'carasti-operations.s3.ap-south-1.amazonaws.com'
      }
    ]

    
  }
  

};

export default nextConfig;
