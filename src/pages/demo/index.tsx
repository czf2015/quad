// @ts-nocheck
import React, { useState } from 'react';

/* webssh */
// import Terminal from '@/components/Terminal';
// import Login from '@/components/Login';
// import { useToggle } from '@/hooks';
// import { PageService } from '@/services';

/* Webssh */
// import Terminal from '@/components/Terminal';
// import Login from '@/components/Login';
// import { useToggle } from '@/hooks';
// import { PageService } from '@/services';

// export default () => {
//   const [visible, toggleVisible] = useToggle(false)
//   const [socketURL, setSocketURL] = useState()
//   const handleFinish = (values) => {
//     console.log(values)
//     PageService.getSessionId(values).then(res => {
//       toggleVisible()
//       const session_id = res.data
//       setSocketURL(`ws://121.4.112.248:8080/ws/ssh?h=16&w=150&session_id=${session_id}`)
//     })
//   }

//   if (visible) {
//     return <Terminal socket={socketURL} />
//   }

//   return <Login onFinish={handleFinish} />
// };


/* Uppy */
// import Uppy from '@/components/Uppy'

// export default () => {
//   return <Uppy />
// }


/* contenteditable */
// import styles from './index.module.less'
// export default ({ wrap }) => {
//   return <div contentEditable="true" className={styles.textarea} wrap={wrap}>contenteditable</div>
// }

/* RichTextEditor */
// import RichTextEditor from '@/components/RichTextEditor';

// export default () => {
//   return <RichTextEditor />
// }


/* SvgEditor */
// import SvgEditor from '@/components/SvgEditor';
// import { useKeyboard } from '@/hooks';

// export default () => {
//   useKeyboard()
//   return <SvgEditor style={{ backgroundColor: '#ccc' }} />
// }


/* DynamicComponent */
import DynamicComponent from '@/components/DynamicComponent';

export const sayHello = () => {
  console.log('hello111')
}

export default () => {
  debugger
  return <DynamicComponent url={
    `http://127.0.0.1:8080/packages/Button.jsx?version=1`
  }>Click Me</DynamicComponent>
}