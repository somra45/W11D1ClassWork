import { useEffect, useState } from 'react';

function Message({ size }) {
  const [messageDimensions, setMessageDimensions] = useState('');

  useEffect(() => {
    let clasName = '';
    switch (size) {
      case 'm':
        clasName = 'medium';
        break;
      case 'l':
        clasName = 'large';
        break;
      case 'xl':
        clasName = 'xlarge';
        break;
      default:
        clasName = 'small';
        break;
    }
    setMessageDimensions(clasName);
  }, [size])

  return (
    <div className={`message ${messageDimensions}`}>
      Lets get started with our full stack projects biuwsenfcajfn
    </div>
  );
};

export default Message;