import * as React from 'react'
import styled from 'styled-components'

import DivLink from 'components/DivLink'
import { Team } from 'model/team'
import getGroupLetter from 'utils/getGroupLetter'

import PossibleGroups from './PossibleGroups'

const ISSUE_URL = 'https://github.com/inker/draw/issues/14'

const Root = styled.div`
  width: 100%;
  font-size: 1.25em;
  line-height: 150%;
  vertical-align: middle;

  margin-top: 30px;
  margin-bottom: 30px;

  user-select: none;

  @media (max-width: 999px) {
    font-size: 2.5em;
  }
`

const Bug = styled.div`
  border-width: 2px;
  border-style: dashed;
  border-color: rgba(255, 0, 0, 0.5);
  padding: 10px;
`

const SelectedTeamWithColon = styled.span`
  display: inline-block;
`

const SelectedTeam = styled.strong`
  font-weight: 600;
`

const Completed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface Props {
  long: boolean,
  calculating?: boolean,
  completed: boolean,
  selectedTeam: Team | null,
  pickedGroup: number | null,
  possibleGroups: number[] | null,
  numGroups: number,
  reset: any,
}

interface State {
  lastSelected: Team | null,
}

class Announcement extends React.PureComponent<Props, State> {

  private lastAnnouncement

  state: State = {
    lastSelected: null,
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.completed) {
      this.setState({
        lastSelected: null,
      })
    } else if (nextProps.selectedTeam) {
      this.setState({
        lastSelected: nextProps.selectedTeam,
      })
    }
  }

  render() {
    const {
      long,
      calculating,
      completed,
      selectedTeam,
      pickedGroup,
      possibleGroups,
      numGroups,
      reset,
    } = this.props

    const selected = this.state.lastSelected || selectedTeam

    return (
      <Root>
        {
          calculating ? (
            <Bug>
              <div>
                Calculation is taking too long.
              </div>
              <div>
                And <a href={ISSUE_URL} target="_blank">here's why</a>.
              </div>
            </Bug>
          ) :
          completed ? (
            <Completed>
              <div>Draw completed!</div>
              <DivLink onClick={reset}>Restart</DivLink>
            </Completed>
          ) :
          pickedGroup !== null ? (this.lastAnnouncement =
            <div>
              {long && selected ? (
                <span>
                  <SelectedTeam>{selected.shortName || selected.name}</SelectedTeam> goes to group
                </span>
              ) : (
                <span>Group</span>
              )} {getGroupLetter(pickedGroup)}!
            </div>
          ) :
          selected ? (
            possibleGroups ? (
              <div>
                Possible groups for <SelectedTeamWithColon>
                  <SelectedTeam>{selected.name}</SelectedTeam>:
                </SelectedTeamWithColon>
                <PossibleGroups
                  numGroups={numGroups}
                  possibleGroups={possibleGroups}
                />
              </div>
            ) : this.lastAnnouncement
          ) : (
            <div>
              Pick a ball
            </div>
          )
        }
      </Root>
    )
  }
}

export default Announcement
