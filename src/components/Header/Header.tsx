import * as React from 'react';
import { StyledHeader, StyledLink, Wrapper } from './styled';
import { nav } from '../../routes';
import { useLingui } from '@lingui/react';
import { Trans } from '@lingui/macro';
import { Login } from '../Login/Login';

export const Header = () => {
  const { i18n } = useLingui();
  const activeLang = i18n.locale;
  const switchLang = (lang: string) => i18n.activate(lang);

  return (
    <StyledHeader>
      <nav>
        {nav.map((route) => (
          <StyledLink key={route.path} to={route.path}>
            {route.title}
          </StyledLink>
        ))}
      </nav>
      <Wrapper>
        <button onClick={() => switchLang('en')}>en</button>
        <button onClick={() => switchLang('ru')}>ru</button>
        <span>
          <Trans>Active language</Trans>:{activeLang}
        </span>
      </Wrapper>
      <Wrapper>
        <Login />
      </Wrapper>
    </StyledHeader>
  );
};
