/** @type { import('@storybook/react-webpack5').StorybookConfig } */
// import { mergeConfig } from 'vite';
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [    
    '@storybook/addon-controls', 
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',    
    "@whitespace/storybook-addon-html",  
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["..\\public"],
};
export default config;
