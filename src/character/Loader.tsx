import * as React from 'react';

interface IProps {}

const Loader: React.SFC<IProps> = () => {
  return (
    <div className='progress'>
      <div
        className='progress-bar progress-bar-striped progress-bar-animated'
        role='progressbar'
        aria-valuenow={75}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: '75%' }}
      >Loading</div>
    </div>
  );
};

export default Loader;
