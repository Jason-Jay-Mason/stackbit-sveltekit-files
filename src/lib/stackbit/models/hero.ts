import type { ObjectModel } from '@stackbit/types';
import type { Button } from './button';

export type Hero = {
  type: "Hero"
  heading: string,
  body: string,
  image: {
    src: string
    alt: string
  }
  buttonPrimary: Button
  buttonSecondary: Button
}

export const Hero: ObjectModel = {
  name: 'Hero',
  type: 'object',
  fields: [
    { name: 'heading', type: 'string', required: true, default: 'SVELTE' },
    { name: 'body', type: 'markdown', default: 'Cybernetically enhanced web apps', required: true },
    { name: 'buttonPrimary', type: 'model', models: ['button'] },
    { name: 'buttonSecondary', type: 'model', models: ['button'] },
  ]
};
