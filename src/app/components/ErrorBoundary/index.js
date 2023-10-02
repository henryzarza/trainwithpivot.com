import React, { Component } from 'react';

import Layout from '~components/Layout';

import styles from './styles.module.scss';

class ErrorBoundary extends Component {
  state = { error: null, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    const { children } = this.props;
    const { error, errorInfo } = this.state;
    if (errorInfo) {
      return (
        <div className={styles.container}>
          <Layout variant="dark" className={styles.errorLayout}>
            <div className={styles.messageContainer}>
              <h2 className="bold subtitle">Something went wrong</h2>
              <details>
                <span className={styles.errorMsg}>{error && error.toString()}</span>
              </details>
            </div>
          </Layout>
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.displayName = 'ErrorBoundary';

export default ErrorBoundary;
