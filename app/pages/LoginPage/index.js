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
import routes from 'utils/routes';

import useMediaQuery from 'hooks/useMediaQuery';
import Input from 'components/Input';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Link from 'components/Link';
import Typography from 'components/Typography';

import { FaFacebook } from 'react-icons/fa';
import Hero from './components/Hero';
import Wrapper from './components/Wrapper';
import Form from './components/Form';
import FormWrapper from './components/FormWrapper';
import FormLogo from './components/FormLogo';
import ForgotLink from './components/ForgotLink';

import { makeSelectLogin, makeSelectPassword } from './selectors';
import { changeInputValueAction, loginAction } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'loginPage';

export const LoginPage = ({
  login,
  password,
  onChangeInputValue,
  onSubmit,
}) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <Wrapper>
      <Helmet>
        <title>Instagram</title>
        <meta name="description" content={messages.meta.description} />
      </Helmet>
      {isDesktop && <Hero />}
      <FormWrapper>
        <Form onSubmit={onSubmit}>
          <FormLogo type="icon" />
          <Input
            placeholder="Number, username or email"
            label="Number, username or email"
            name="login"
            type="text"
            handleChange={onChangeInputValue}
            value={login}
          />
          <Input
            placeholder="Password"
            label="Password"
            name="password"
            type="password"
            handleChange={onChangeInputValue}
            value={password}
          />
          <ForgotLink to={routes.auth.forgotPassword} variant="primary">
            Forgot your password?
          </ForgotLink>
          <Button type="submit" variant="full-width">
            <Typography variant="body">Log in</Typography>
          </Button>
        </Form>
        <Link to={routes.auth.login} variant="secondary">
          <Icon variant="small" type={FaFacebook} />
          <Typography variant="body">Continue as Jhon Doe</Typography>
        </Link>
        <Typography variant="body2">OR</Typography>
        <Link to={routes.auth.register} variant="secondary">
          <Typography variant="body">Sign Up</Typography>
        </Link>
      </FormWrapper>
    </Wrapper>
  );
};

LoginPage.propTypes = {
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  password: makeSelectPassword(),
});

const mapDispatchToProps = dispatch => ({
  onChangeInputValue: event =>
    dispatch(changeInputValueAction(event.target.name, event.target.value)),
  onSubmit: event => {
    event.preventDefault();
    dispatch(loginAction());
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LoginPage);
