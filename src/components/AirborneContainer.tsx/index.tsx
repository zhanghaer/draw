import * as React from 'react'
import styled from 'styled-components'
import { uniqueId, difference } from 'lodash'

import { Team, GSTeam } from 'utils/team'

import Cell from './AirborneCell'

interface Props {
  airborneTeams: Team[],
}

interface State {
  airborneTeams: Team[],
}

class AirborneContainer extends React.PureComponent<Props, State> {
  id = uniqueId('airborne-container-')
  container: HTMLElement

  state = {
    airborneTeams: [] as Team[],
  }

  componentDidMount() {
    const el = document.getElementById(this.id)
    if (!el) {
      throw new Error('airborne container not found')
    }
    this.container = el
  }

  componentDidUpdate() {
    this.setState({
      airborneTeams: this.props.airborneTeams,
    })
  }

  render() {
    const { props, state } = this
    const box = this.container.getBoundingClientRect()
    const newTeams = difference(this.props.airborneTeams, this.state.airborneTeams)
    return (
      <div id={this.id}>
        {props.airborneTeams && props.airborneTeams.map(team => (
          <Cell
            country={team.country}
            style={{
              transform: 'translate3d('
            }}
          >
            {team.name}
          </Cell>
        ))}
      </div>
    )
  }
}

export default AirborneContainer
