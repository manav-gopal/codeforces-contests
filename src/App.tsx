import React from 'react';
import './App.css';
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from '@shopify/polaris';
import { HomePage } from './Home';

function App() {
  return (
    <AppProvider theme={'dark-experimental'} i18n={enTranslations}>
        <HomePage />
    </AppProvider>
  );
}

export default App;
