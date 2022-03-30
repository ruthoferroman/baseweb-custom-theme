import React from 'react';
import {BaseProvider } from 'baseui';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import theme from './theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const engine = new Styletron();

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

  const debug = new DebugEngine();

  return (
    <StyletronProvider value={engine} debug={debug}>
      
        <BaseProvider
          theme={theme}
          overrides={{
            AppContainer: {
              style: {
                height: '100%'
              },
            },
          }}
        >
          {children}
        </BaseProvider>
    </StyletronProvider>
  );
}

export default ThemeProvider;