import fs from 'fs';
import path from 'path';
import child_process from 'child_process';
import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';

const isVercel = process.env.VERCEL === '1';

let httpsConfig = false;

if (!isVercel) {
  const baseFolder = process.env.APPDATA
    ? `${process.env.APPDATA}/ASP.NET/https`
    : `${process.env.HOME}/.aspnet/https`;
  const certificateName = "polokwane_surf.client";
  const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
  const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

  if (!fs.existsSync(baseFolder)) {
    fs.mkdirSync(baseFolder, { recursive: true });
  }

  if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
    if (
      0 !==
      child_process.spawnSync('dotnet', [
        'dev-certs',
        'https',
        '--export-path',
        certFilePath,
        '--format',
        'Pem',
        '--no-password',
      ]).status
    ) {
      throw new Error('Could not create certificate.');
    }
  }

  httpsConfig = {
    key: fs.readFileSync(keyFilePath),
    cert: fs.readFileSync(certFilePath),
  };
}

export default defineConfig({
  plugins: [reactPlugin()],
  server: {
    https: httpsConfig,
    port: Number(process.env.DEV_SERVER_PORT) || 49381,
    proxy: {
      '^/weatherforecast': {
        target:
          process.env.ASPNETCORE_HTTPS_PORT
            ? `https://localhost:${process.env.ASPNETCORE_HTTPS_PORT}`
            : process.env.ASPNETCORE_URLS
            ? process.env.ASPNETCORE_URLS.split(';')[0]
            : 'https://localhost:7059',
        secure: false,
      },
    },
  },
});
