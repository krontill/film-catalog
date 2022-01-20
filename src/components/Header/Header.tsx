import * as React from 'react';
import { StyledHeader, StyledLink } from './styled';
import { routes } from '../../routes';
import { useLingui } from '@lingui/react';
import { Trans } from '@lingui/macro';

export const Header = () => {
  const { i18n } = useLingui();
  const activeLang = i18n.locale;
  const switchLang = (lang: string) => i18n.activate(lang);

  return (
    <StyledHeader>
      <nav>
        {routes.map((route) => (
          <StyledLink key={route.path} to={route.path}>
            {route.title}
          </StyledLink>
        ))}
      </nav>
      <div>
        <button onClick={() => switchLang('en')}>en</button>
        <button onClick={() => switchLang('ru')}>ru</button>
        <span>
          <Trans>Active language</Trans>:{activeLang}
        </span>
      </div>
    </StyledHeader>
  );
};
