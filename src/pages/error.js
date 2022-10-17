import {useState} from 'react';

function ErrorPage() {
    const [showImage, setShowImage] = useState(false);
  const promiseHandle = () => {
    Promise.reject('promise error');
  }
  const asyncHandle = () => {
    setTimeout(() => {
      throw new Error('asyncHandle')
    }, 2000);
  }
  const syncHandle = () => {
    throw new Error('syncHandle')
  }
  return (
    
    <div>
        <button onClick={promiseHandle}>promiseHandle</button>
        <button onClick={asyncHandle}>asyncHandle</button>
        <button onClick={syncHandle}>syncHandle</button>
        <button onClick={() => {
            setShowImage(true);
        }}>资源加载错误</button>
        {showImage ? <img src="http://djl.pub/123" alt=""/> : null}
    </div>
  );
}

export default ErrorPage;
