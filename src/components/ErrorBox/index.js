import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ErrorActions } from '../../store/ducks/error';

// import { CloseIcon } from 'https://cdn1.iconfinder.com/data/icons/material-core/14/close-512.png';

import { Container } from './styles';

const ErrorBox = ({ error: { message, visible }, hideError }) => visible && (
<Container>
  <p>{message}</p>

  <button type="button" onClick={hideError}>
    <img
      src="https://cdn1.iconfinder.com/data/icons/material-core/14/close-512.png"
      alt="Fechar"
    />
  </button>
</Container>
);

ErrorBox.propTypes = {
  hideError: PropTypes.func.isRequired,
  erro: PropTypes.shape({
    visible: PropTypes.bool,
    message: PropTypes.string,
  }),
};

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorBox);
