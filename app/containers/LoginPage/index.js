/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import useMediaQuery from 'hooks/useMediaQuery';

import Input from 'components/Input';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Link from 'components/Link';

import Hero from './components/Hero';
import Wrapper from './components/Wrapper';
import Form from './components/Form';
import FormWrapper from './components/FormWrapper';
import FormLogo from './components/FormLogo';
import ForgotLink from './components/ForgotLink';

import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'login';

export const LoginPage = ({ dispatch }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <Wrapper>
      <Helmet>
        <title>Instagram</title>
        <meta name="description" content={messages.meta.description} />
      </Helmet>
      <Hero />
      <FormWrapper>
        <Form>
          <FormLogo fullLogo={isDesktop} />
          <Input
            placeholder="Number, username or email"
            label="Number, username or email"
            name="login"
            type="text"
            // handleChange={() => {}}
          />
          <Input
            placeholder="Password"
            label="Password"
            name="password"
            type="password"
            // handleChange={() => {}}
          />
          <ForgotLink to="/login?" variant="primary">
            Forgot your password?
          </ForgotLink>
          <Button disabled type="submit">
            Log in
          </Button>
        </Form>
        <Link to="/login?" variant="secondary">
          <Icon type="facebook" />
          Continue as Jhon Doe
        </Link>
        <span
          style={{
            color: '#8D8D8D',
          }}
        >
          OR
        </span>
        <Link to="/login?" variant="secondary">
          Sign Up
        </Link>
      </FormWrapper>
    </Wrapper>
  );
};

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LoginPage);
