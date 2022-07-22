import { useEffect, useState } from 'react'


export const useSnapShort = (initialSnapShortRecords: snapShortRecordType[], isPrinted = false) => {
  const [snapShortRecords, setSnapShortRecords] = useState(initialSnapShortRecords)
  const [offset, setOffset] = useState(initialSnapShortRecords.length - 1)
  const [steps, setSteps] = useState([] as snapShortStepType[])

  const track = (step: snapShortStepType) => setSteps(steps => [...steps, step])

  const take = (snapShortRecord: snapShortRecordType, step = '') => {
    track(`takeSnapShort: ${step}`)
    setOffset(offset => {
      offset += 1
      setSnapShortRecords(snapShortRecords => {
        const newSnapShortRecords = snapShortRecords.slice(0, offset)
        newSnapShortRecords.push(snapShortRecord)
        return newSnapShortRecords
      })
      return offset
    })
  }
  const forward = () => {
    track('forwardSnapShort')
    setOffset(offset => offset + 1)
    return snapShortRecords[offset + 1]
  }
  const backward = () => {
    track('backwardSnapShort')
    setOffset(offset => offset - 1)
    return snapShortRecords[offset - 1]
  }

  const len = snapShortRecords.length

  useEffect(() => {
    if (isPrinted) {
      console.log(steps)
      console.log(len)
      console.log(offset)
      console.log(snapShortRecords[offset])
    }
  }, [offset])

  return { steps, len, offset, take, forward, backward }
}