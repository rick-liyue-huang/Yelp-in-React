
import React from 'react';
import {Iterable} from 'immutable';

export const toJS = WrappedComponent => WrappedComponentProps => {
  const KEY = 0;
  const VALUE = 1;
  const propsJS = Object.entries(WrappedComponentProps).reduce((newProps, WrappedComponentProps) => {
    newProps[WrappedComponentProps[KEY]] = Iterable.isIterable(WrappedComponentProps[VALUE]) ?
      WrappedComponentProps[VALUE].toJS() :
      WrappedComponentProps[VALUE];
    return newProps
  }, {})
  return <WrappedComponent {...propsJS} />
}
