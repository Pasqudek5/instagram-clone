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
import Link from 'components/Link';
import Typography from 'components/Typography';

import Hero from './components/Hero';
import Wrapper from './components/Wrapper';
import Form from './components/Form';
import FormWrapper from './components/FormWrapper';
import FormLogo from './components/FormLogo';

import makeSelectRegisterPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const key = 'register';

export const RegisterPage = ({ dispatch }) => {
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
          <FormLogo type={isDesktop ? 'full' : 'icon'} />
          <Input
            placeholder="Phone number or email"
            label="Phone number or email"
            name="login"
            type="text"
            // handleChange={() => {}}
          />
          <Input
            placeholder="Name and surname"
            label="Name and surname"
            name="full_name"
            type="text"
            // handleChange={() => {}}
          />
          <Input
            placeholder="Username"
            label="Username"
            name="username"
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
          <Button type="submit">Sign up</Button>
        </Form>
        <Link to="/login" variant="secondary">
          <Typography variant="body">Already have account? Log in</Typography>
        </Link>
      </FormWrapper>
    </Wrapper>
  );
};

RegisterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  registerPage: makeSelectRegisterPage(),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(RegisterPage);
