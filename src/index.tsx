import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { messages as enMessages } from '../locales/en/messages';
import { messages as ruMessages } from '../locales/ru/messages';
import { en, ru } from 'make-plural/plurals';

i18n.loadLocaleData('en', { plurals: en });
i18n.loadLocaleData('ru', { plurals: ru });
i18n.load({
  en: enMessages,
  ru: ruMessages,
});
i18n.activate('en');

import { App } from './App';
import { AuthProvider } from './auth/AuthProvider';

const mountNode = document.getElementById('app');
ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <I18nProvider i18n={i18n}>
        <App />
      </I18nProvider>
    </AuthProvider>
  </BrowserRouter>,
  mountNode
);
