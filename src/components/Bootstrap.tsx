'use client';

import { useEffect } from 'react';

function Bootstrap() {
  useEffect(() => {
    // eslint-disable-next-line global-require
    require('bootstrap/dist/js/bootstrap.bundle.min');
  });

  return null;
}

export default Bootstrap;
