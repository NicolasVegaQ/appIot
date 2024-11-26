import React from 'react';

const Mqtt: React.FC = () => {
  return (
    <div
      style={{ textAlign: 'center', marginTop: '20px' }}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://stripebraid752.cloud.shiftr.io/embed?widgets=1" width="900" height="700" frameborder="0" allowfullscreen></iframe>`,
      }}
    />
  );
};
export default Mqtt;
