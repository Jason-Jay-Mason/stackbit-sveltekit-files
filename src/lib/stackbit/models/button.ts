import type { ObjectModel } from '@stackbit/types';

export type ButtonTheme = 'Subtle'
export type Button = {
  label: string
  url: string
  theme: ButtonTheme
}

export const button: ObjectModel = {
  name: 'button',
  type: 'object',
  fields: [
    { name: 'label', type: 'string', default: 'button ' },
    { name: 'url', type: 'string', default: '/' },
    { name: 'theme', type: 'enum', options: ['Subtle'] }
  ]
};
