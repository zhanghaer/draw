import * as React from 'react'
import { shuffle } from 'lodash'

import { GSTeam as Team } from 'utils/team'
import animateContentTransfer from 'utils/animateContentTransfer'
import getGroupLetter from 'utils/getGroupLetter'
import { firstPossibleGroup } from 'utils/possible-groups'

import PotsContainer from 'components/PotsContainer'
// import AirborneContainer from 'components/AirborneContainer'
import GroupsContainer from 'components/GroupsContainer'
import TablesContainer from 'components/TablesContainer'
import BowlsContainer from 'components/BowlsContainer'
import TeamBowl from 'components/bowls/TeamBowl'
import Announcement from 'components/Announcement'

import Root from 'pages/Root'

interface Props {
  pots: Team[][],
}

interface State {
  initialPots: Team[][],
  pots: Team[][],
  groups: Team[][],
  maxTeamsInGroup: number,
  airborneTeams: Team[],
  currentPotNum: number,
  selectedTeam: Team | null,
  pickedGroup: number | null,
  completed: boolean,
  error: string | null,
}

export default class GS extends React.PureComponent<Props, State> {

  componentDidMount() {
    this.reset()
  }

  protected reset = () => {
    const initialPots = this.props.pots
    const currentPotNum = 0
    const pots = initialPots.map(pot => shuffle(pot))
    const currentPot = pots[currentPotNum]
    this.setState({
      initialPots,
      pots,
      groups: currentPot.map(team => []),
      maxTeamsInGroup: pots.length,
      airborneTeams: [],
      currentPotNum,
      selectedTeam: null,
      pickedGroup: null,
      completed: false,
      error: null,
    })
  }

  private onTeamBallPick = (ev: React.MouseEvent<HTMLDivElement>) => {
    const ball = ev.target as HTMLDivElement
    const {
      groups,
      pots,
      currentPotNum,
    } = this.state
    const currentPot = pots[currentPotNum]
    const i = currentPot.findIndex(team => team.id === ball.dataset.teamid)
    const selectedTeam = currentPot.splice(i, 1)[0]
    const pickedGroup = firstPossibleGroup(pots, groups, selectedTeam, currentPotNum)
    groups[pickedGroup].push(selectedTeam)
    const newCurrentPotNum = pots[currentPotNum].length > 0 ? currentPotNum : currentPotNum + 1
    this.state.airborneTeams.push(selectedTeam)
    const animation = this.animateCell(selectedTeam, pickedGroup)

    this.setState({
      groups,
      selectedTeam,
      pickedGroup,
      currentPotNum: newCurrentPotNum,
      completed: newCurrentPotNum >= pots.length,
      airborneTeams: this.state.airborneTeams,
    }, async () => {
      await animation
      this.setState({
        airborneTeams: this.state.airborneTeams.filter(team => team !== selectedTeam),
      })
    })
  }

  private animateCell(selectedTeam: Team, pickedGroup: number) {
    const { currentPotNum } = this.state
    if (!selectedTeam) {
      return
    }
    const fromCell = document.querySelector(`[data-cellid='${selectedTeam.id}']`)
    const toCellSelector = `[data-cellid='${getGroupLetter(pickedGroup)}${currentPotNum}']`
    const toCell = document.querySelector(toCellSelector)
    if (fromCell instanceof HTMLElement && toCell instanceof HTMLElement) {
      return animateContentTransfer(fromCell, toCell, 350)
    }
  }

  render() {
    if (!this.state) {
      return null
    }
    const {
      initialPots,
      pots,
      groups,
      maxTeamsInGroup,
      currentPotNum,
      airborneTeams,
      selectedTeam,
      pickedGroup,
      completed,
    } = this.state

    return (
      <Root>
        <TablesContainer>
          <PotsContainer
            noHung
            selectedTeam={selectedTeam}
            initialPots={initialPots}
            pots={pots}
            currentPotNum={currentPotNum}
          />
          <GroupsContainer
            maxTeams={maxTeamsInGroup}
            selectedTeam={selectedTeam}
            currentPotNum={currentPotNum}
            groups={groups}
            possibleGroups={null}
            airborneTeams={Array.from(airborneTeams)}
          />
        </TablesContainer>
        <BowlsContainer>
          <TeamBowl
            completed={completed}
            selectedTeam={null}
            pot={pots[currentPotNum]}
            onPick={this.onTeamBallPick}
          />
          <Announcement
            long
            completed={completed}
            selectedTeam={selectedTeam}
            pickedGroup={pickedGroup}
            possibleGroups={null}
            numGroups={groups.length}
            reset={this.reset}
          />
        </BowlsContainer>
      </Root>
    )
  }
}
