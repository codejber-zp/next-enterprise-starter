import type { Preview } from "@storybook/react"
import { fn } from '@storybook/test';

import "../styles/tailwind.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
