import React, { createContext, useCallback, useContext, useState } from 'react';

import dayjs from 'dayjs';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';

import { DEFAULT_LOCALE, LANG_MESSAGES, LOCALE, LOCALES } from '../intl';
import('dayjs/locale/de');

type WCLayoutProps = {
  children: React.ReactNode;
};

const LangContext = createContext<{
  onChangeLang: (locale: LOCALES) => void;
  locale: LOCALES;
}>({ onChangeLang: () => {}, locale: DEFAULT_LOCALE });

const queryClient = new QueryClient();

const WCLayout: React.FC<WCLayoutProps> = ({ children }) => {
  const [state, setState] = useState({
    locale: LOCALE,
    messages: LANG_MESSAGES[LOCALE],
  });

  const onChangeLang = useCallback((locale: LOCALES) => {
    setState({ locale, messages: LANG_MESSAGES[locale] });
    dayjs.locale(locale);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LangContext.Provider value={{ onChangeLang, locale: state.locale }}>
        <IntlProvider
          locale={state.locale}
          messages={state.messages}
          defaultLocale={DEFAULT_LOCALE}
        >
          {children}
        </IntlProvider>
      </LangContext.Provider>
    </QueryClientProvider>
  );
};

export const useLang = () => {
  return useContext(LangContext);
};

export default WCLayout;
