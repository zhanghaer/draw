import * as React from 'react'
import styled from 'styled-components'

import Cell from 'components/table/Cell'

const AirborneCell = styled(Cell)`
  z-index: 1000;
  color: initial;
  opacity: initial;
  position: absolute;
  border: initial;
  background-color: initial;
  user-select: none;
`

export default AirborneCell

  // const computedStyle = getComputedStyle(sourceCell)
  // for (const s of attrs) {
  //   fakeCellStyle[s] = computedStyle[s]
  // }
  // fakeCellStyle.zIndex = '1000'
  // fakeCellStyle.color = 'initial'
  // fakeCellStyle.opacity = null
  // fakeCellStyle.position = 'absolute'
  // const sourceCellBox = sourceCell.getBoundingClientRect()
  // adjustPositioning(fakeCell, sourceCellBox)
  // fakeCellStyle.border = 'initial'
  // fakeCellStyle.backgroundColor = null
  // fakeCellStyle.userSelect = 'none'
  // document.body.insertBefore(fakeCell, document.body.firstElementChild)

  // const targetCellBox = targetCell.getBoundingClientRect()
  // fakeCellStyle.transition = `transform ${duration}ms ease-in-out`
  // adjustPositioning(fakeCell, targetCellBox)
