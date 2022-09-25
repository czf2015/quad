// @ts-nocheck
import React, { useState } from 'react';

/* webssh */
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
//       setSocketURL(`ws://121.4.112.248:8899/ws/ssh?h=16&w=150&session_id=${session_id}`)
//     })
//   }

//   if (visible) {
//     return <Terminal socket={socketURL} />
//   }

//   return <Login onFinish={handleFinish} />
// };


/* contenteditable */
// import styles from './index.module.less'

// export default ({ wrap }) => {
//   return <div contentEditable="true" className={styles.textarea} wrap={wrap}>contenteditable</div>
// }

/* RichTextEditor */
import RichTextEditor from '@/components/RichTextEditor';

export default () => {
  return <RichTextEditor />
}