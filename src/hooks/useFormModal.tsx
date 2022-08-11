import { useToggle } from './useToggle'
import FormModal from '@/components/FormModal'
import { message } from 'antd'

export const useFormModal = ({ title, value, onFinish = async (values) => values, ...formProps }) => {
  const [visible, toggleVisible] = useToggle(false)
  const handleOk = (values) => {
    onFinish(values).then(toggleVisible).catch(err => {
      message.error(`${err?.code}: ${err?.message}`)
    })
  }

  const formModal = <FormModal title={title} value={value} visible={visible} onOk={handleOk} onCancel={toggleVisible} {...formProps} />

  return [toggleVisible, formModal]
}