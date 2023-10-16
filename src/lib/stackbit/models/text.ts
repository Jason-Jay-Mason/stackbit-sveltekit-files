import type { ObjectModel } from '@stackbit/types';

export type Text = {
  headline: string
  body: string
}

export const text: ObjectModel = {
  name: 'text',
  type: 'object',
  fields: [
    { name: 'headline', type: 'string', default: 'Headline' },
    { name: 'body', type: 'markdown', default: "**Lorem Ipsum** is simply dummy text of the printing and\n typesetting industry. Lorem Ipsum has been the industry's standard \ndummy text ever since the 1500s, when an unknown printer took a galley \nof type and scrambled it to make a type specimen book. It has survived \nnot only five centuries, but also the leap into electronic typesetting, \nremaining essentially unchanged. It was popularised in the 1960s with \nthe release of Letraset sheets containing Lorem Ipsum passages, and more\n recently with desktop publishing software like Aldus PageMaker \nincluding versions of Lorem Ipsum.\n" }
  ]
};

