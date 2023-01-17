import React from "react";
import { IntlProvider } from "react-intl";
import { getLocale } from "../../intl";
import { withQueryCacheProvider } from "../../hocs";

type WCLayoutProps = {
  children: React.ReactNode;
};

const WCLayout: React.FC<WCLayoutProps> = ({ children }) => {
  const { messages, locale, defaultLocale } = getLocale();

  return (
    <IntlProvider
      locale={locale}
      messages={messages}
      defaultLocale={defaultLocale}
    >
      {children}
    </IntlProvider>
  );
};

export default withQueryCacheProvider(WCLayout);
