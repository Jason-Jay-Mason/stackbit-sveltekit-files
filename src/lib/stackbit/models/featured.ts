import type { ObjectModel } from '@stackbit/types';
import type { Text } from './text';

export type Featured = {
  columns: Text[]
  type: "Featured"
}

export const Featured: ObjectModel = {
  name: 'Featured',
  type: 'object',
  fields: [
    {
      name: 'columns',
      type: 'list',
      required: true,
      items: { type: 'model', models: ['text'] },
      default: [
        {
          type: "text",
          headline: "Headline 1",
          body: "**Lorem Ipsum** is simply dummy text of the printing and\n typesetting industry. Lorem Ipsum has been the industry's standard \ndummy text ever since the 1500s, when an unknown printer took a galley \nof type and scrambled it to make a type specimen book. It has survived \nnot only five centuries, but also the leap into electronic typesetting, \nremaining essentially unchanged. It was popularised in the 1960s with \nthe release of Letraset sheets containing Lorem Ipsum passages, and more\n recently with desktop publishing software like Aldus PageMaker \nincluding versions of Lorem Ipsum.\n"
        },
        {
          type: "text",
          headline: "Headline 2",
          body: "**Lorem Ipsum** is simply dummy text of the printing and\n typesetting industry. Lorem Ipsum has been the industry's standard \ndummy text ever since the 1500s, when an unknown printer took a galley \nof type and scrambled it to make a type specimen book. It has survived \nnot only five centuries, but also the leap into electronic typesetting, \nremaining essentially unchanged. It was popularised in the 1960s with \nthe release of Letraset sheets containing Lorem Ipsum passages, and more\n recently with desktop publishing software like Aldus PageMaker \nincluding versions of Lorem Ipsum.\n"
        },
        {
          type: "text",
          headline: "Headline 3",
          body: "**Lorem Ipsum** is simply dummy text of the printing and\n typesetting industry. Lorem Ipsum has been the industry's standard \ndummy text ever since the 1500s, when an unknown printer took a galley \nof type and scrambled it to make a type specimen book. It has survived \nnot only five centuries, but also the leap into electronic typesetting, \nremaining essentially unchanged. It was popularised in the 1960s with \nthe release of Letraset sheets containing Lorem Ipsum passages, and more\n recently with desktop publishing software like Aldus PageMaker \nincluding versions of Lorem Ipsum.\n"
        },
      ]
    }
  ]
};

