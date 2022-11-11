import React, {useEffect} from 'react';
import type {Node} from 'react';
import {store} from '../store/index';
import {Provider} from 'react-redux';

const ProviderWrapper = ({children}: {children: Node}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
