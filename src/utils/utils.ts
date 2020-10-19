import { useEffect } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useMountEffect = (fun: any): void => useEffect(fun, []);
