import { Component, ErrorInfo, ReactNode } from 'react';

interface State {
  errorInfo: ErrorInfo | null;
  error: Error | null;
}

export interface Props {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

export class ErrorBoundary extends Component<Props, State> {
  state = {
    errorInfo: null,
    error: null,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      errorInfo: errorInfo,
      error: error,
    });
  }

  render(): ReactNode {
    if (this.state.errorInfo) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
