import { useState } from "react";
import {
  exceptionPlugin,
  customReporter,
  MdapPerformancePoint,
  AccumulationPointId,
  PerformancePointId
} from "../utils/mdap";

const mdapPerfReporter = new MdapPerformancePoint(PerformancePointId.PageView);

function MdapPage() {
  const [showImage, setShowImage] = useState(false);

  const throwError = () => {
    console.log(window.a.c);
  };
  const exceptionHandle = () => {
    exceptionPlugin.capture({
      message: "exception test",
      level: 'error',
      data: {
        // error name
        name: 'APIError2222',
        // 添加tag
        data_field: {
          uid: 1234
        },
        // 添加additional data
        extra: {
          phone: 5678
        }
      }
    });
  };

  const apiHandle = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const resourceHandle = () => {
    setShowImage(true);
  };

  const customerAccuHandle = () => {
    customReporter.sendData({
      point_id: AccumulationPointId.BlankScreen,
      data: {
        user: "djlxs",
      },
    });
  };

  const customerPerfHandle = () => {
    mdapPerfReporter.start();
    setTimeout(() => {
      mdapPerfReporter.end({
        data: {
            user: 'djlxs'
        }
      });
    }, 100);
  };

  return (
    <div>
      <button onClick={throwError}>自动捕获</button>
      <button onClick={exceptionHandle}>手动上报</button>
      <button onClick={apiHandle}>API捕获</button>
      <button onClick={resourceHandle}>Image</button>
      <button onClick={customerAccuHandle}>自定义累计上报</button>
      <button onClick={customerPerfHandle}>自定义性能上报</button>

      {showImage ? (
        <img
          src="http://djl.pub/_nuxt/img/avatar.09383ba2.jpg"
          alt=""
          width={100}
          height={100}
        />
      ) : null}
    </div>
  );
}

export default MdapPage;
