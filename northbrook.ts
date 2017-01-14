import { plugin as mocha } from '@northbrook/mocha';
import { plugin as northbrook } from 'northbrook/plugins';
import { plugin as tsc } from '@northbrook/tsc';
import { plugin as tslint } from '@northbrook/tslint';

const config =
  {
    packages: ['packages/**'],

    plugins: [
      northbrook,
      mocha,
      tslint,
      tsc,
    ],

    mocha: {
      patterns: [
        'src/**/*.test.ts',
      ],
    },

    tsc: {
      es2015: true,
      patterns: [
        'src/**/*.ts',
        '!src/**/*.test.ts',
      ],
    },

    tslint: {
      patterns: [
        'src/**/*.ts',
      ],
    },
  };

export = config;
