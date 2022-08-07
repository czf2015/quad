import { useEffect, useState } from 'react'


export const useSnapShot = (initialSnapShotRecord: snapShotRecordType, isPrinted = false) => {
  const [snapShotRecords, setSnapShotRecords] = useState([initialSnapShotRecord])
  const [offset, setOffset] = useState(-1)
  const [steps, setSteps] = useState([] as snapShotStepType[])

  const track = (step: snapShotStepType) => setSteps(steps => [...steps, step])

  const take = (snapShotRecord: snapShotRecordType, step = '') => {
    track(`takeSnapShot: ${step}`)
    setOffset(offset => {
      offset += 1
      setSnapShotRecords(snapShotRecords => {
        const newSnapShotRecords = snapShotRecords.slice(0, offset)
        newSnapShotRecords.push(snapShotRecord)
        return newSnapShotRecords
      })
      return offset
    })
  }
  const forward = () => {
    track('forwardSnapShot')
    setOffset(offset => offset + 1)
    return snapShotRecords[offset + 1]
  }
  const backward = () => {
    track('backwardSnapShot')
    setOffset(offset => offset - 1)
    return snapShotRecords[offset - 1]
  }
  const renew = () => {
    track(`renewSnapShot`)
    setOffset(offset => {
      offset += 1
      setSnapShotRecords(snapShotRecords => {
        const newSnapShotRecords = snapShotRecords.slice(0, offset)
        newSnapShotRecords.push(initialSnapShotRecord)
        return newSnapShotRecords
      })
      return offset
    })
    return initialSnapShotRecord
  }

  const len = snapShotRecords.length

  useEffect(() => {
    if (isPrinted) {
      console.log(steps)
      console.log(len)
      console.log(offset)
      console.log(snapShotRecords[offset])
    }
  }, [offset])

  return { steps, len, offset, take, forward, backward, renew }
}