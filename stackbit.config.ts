import { defineStackbitConfig } from '@stackbit/types'
import { GitContentSource } from '@stackbit/cms-git'
import { page, button, text, Hero, Featured } from './src/lib/stackbit/models'

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: [page, button, text, Hero, Featured],
      assetsConfig: {
        referenceType: 'static',
        staticDir: 'static',
        uploadDir: 'images',
        publicPath: '/'
      }
    }),
  ],
})
