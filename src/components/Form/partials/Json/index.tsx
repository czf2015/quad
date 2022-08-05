import ReactJsonView from 'react-json-view'

export default ({ value, onChange }) => {
  debugger
  return (
    <ReactJsonView
      src={value}
      displayDataTypes={false}
      onAdd={({ updated_src }) => {
        onChange(updated_src)
      }}
      onEdit={({ updated_src }) => {
        onChange(updated_src)
      }}
      onDelete={({ updated_src }) => {
        onChange(updated_src)
      }}
    />
  )
}