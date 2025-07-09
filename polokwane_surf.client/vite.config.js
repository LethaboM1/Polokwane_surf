import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import child_process from 'child_process';

const isVercel = process.env.VERCEL === '1';  // Vercel sets this env var automatically

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
    const result = child_process.spawnSync('dotnet', [
      'dev-certs',
      'https',
      '--export-path',
      certFilePath,
      '--format',
      'Pem',
      '--no-password',
    ]);
    if (result.status !== 0) {
      throw new Error("Could not create certificate.");
    }
  }

  httpsConfig = {
    key: fs.readFileSync(keyFilePath),
    cert: fs.readFileSync(certFilePath),
  };
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    https: httpsConfig,
    port: Number(process.env.DEV_SERVER_PORT) || 49381,
    proxy: {
      '^/weatherforecast': {
        target: process.env.ASPNETCORE_HTTPS_PORT
          ? `https://localhost:${process.env.ASPNETCORE_HTTPS_PORT}`
          : process.env.ASPNETCORE_URLS
          ? process.env.ASPNETCORE_URLS.split(';')[0]
          : 'https://localhost:7059',
        secure: false,
      },
    },
  },
});
