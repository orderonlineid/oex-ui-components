// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import './theme.css';


import LivePreview from './components/LivePreview.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {

    // custom components
    app.component('LivePreview', LivePreview);
  },
};