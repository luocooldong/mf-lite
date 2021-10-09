import { MicroAppConfig } from '@attachments/module-federation-toolkits/lib/node/micro-fe-app-config';
import * as path from 'path';

const config: MicroAppConfig = {
  name: 'micro_app_one',
  url: 'http://localhost:10000/',
  exposes: [
    {
      name: 'subtraction',
      path: path.resolve(process.cwd(), 'src', 'utils', 'subtraction.ts'),
      type: 'module'
    }
  ],
  remotes: [
    {
      name: 'base_app',
      url: 'http://localhost:8080/',
      sharedLibraries: [
        'react',
        'react-dom',
        'react/jsx-dev-runtime',
        'react-router',
        'react-router-dom',
        'react-router-config'
      ]
    }
  ]
};

export default config;
