webpackJsonp([1],{143:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(49);t.default=(e=>e?+(e.pathname.split("/")[3]||o.default):o.default)},144:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),a=o.default.div`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`;t.default=a},154:function(e,t,n){"use strict";function o(e,{left:t,top:n}){const o=t+s,a=n+i;e.style.transform=`translate3d(${o}px, ${a}px, 0px)`}function a(e){const{width:t,fontFamily:n}=getComputedStyle(e),a=e.cloneNode(!0);a.classList.add(c);const{style:r}=a;return r.width=t,r.fontFamily=n,a.textContent=e.textContent,o(a,e.getBoundingClientRect()),a}Object.defineProperty(t,"__esModule",{value:!0});const r=n(383),l=n(83),s=2,i=2,u=r.default`
  position: absolute;
  z-index: 1000;
`,c=r.default`
  color: initial !important;
  position: absolute !important;
  border: initial !important;
  user-select: none !important;
`,d=document.createElement("div");d.classList.add(u),document.body.insertBefore(d,document.getElementById("app")),t.default=((e,t,n)=>{const r=a(e);d.appendChild(r);const s=t.getBoundingClientRect();return r.style.transition=`transform ${n}ms ease-in-out`,o(r,s),new Promise(e=>{r.addEventListener("transitionend",t=>{e(),l.firefox?setTimeout(()=>{d.removeChild(r)},0):d.removeChild(r)})})})},155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),a=n(4),r=n(156),l=n(396),s=a.default.div`
  display: flex;
  flex-flow: row wrap;
  flex-wrap: nowrap;
  & > * {
    flex: 1;
    flex-basis: 22%;
  }
`;class i extends o.PureComponent{getPickedTeams(){const{currentPotNum:e,pots:t,initialPots:n,selectedTeam:o}=this.props;return r(n[e],t[e],[o])}render(){const{initialPots:e,selectedTeam:t,currentPotNum:n}=this.props;return o.createElement(s,null,e&&e.map((e,a)=>{const r=a===n,s=r?this.getPickedTeams():a<n?e:[];return o.createElement(l.default,{key:e[0].id,potNum:a,isCurrent:r,teams:e,pickedTeams:s,selectedTeam:t})}))}}t.default=i},165:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),a=o.default.div`
  border: #aaa solid 1px;
  margin: 0px 5px 10px 5px;
  width: 150px;
  min-width: 0;

  @media (max-width: 999px) {
    margin: 0px 10px 20px 10px;
  }
`;t.default=a},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),a=o.default.div`
`;t.default=a},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),a=n(168),r=o.default(a.default)`
  justify-content: center;
  font-weight: 600;
`;t.default=r},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),a=o.default.div`
  display: flex;
  align-items: center;

  height: 19px;
  margin: -1px -1px -1px -1px;
  border: #aaa solid 1px;

  text-align: center;
  text-decoration: none;
  font-family: Tahoma, Arial, sans-serif;
  font-size: 12px;

  @media (max-width: 999px) {
    font-family: Roboto, sans-serif;
    height: 35px;
    font-size: 24px;
  }
`;t.default=a},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),a=n(399),r=n(170),l=o.default(a.default)`
  background-position: 3px;
  background-size: 16px;
  background-repeat: no-repeat;

  padding-left: 22px;

  @media (max-width: 999px) {
    background-position: 4px;
    background-size: 32px;
    padding-left: 40px;
  }
`,s=o.default(l)`
  ${({country:e})=>e&&`\n    background-image: url('${r.default(e)}');\n  `}
`;t.default=s},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(400);t.default=(e=>o(`./${e}.svg`))},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),a=n(4),r=n(28),l=n(656),s=a.default.div`
  display: flex;
  flex-flow: row wrap;
  & > * {
    flex: 1;
    flex-basis: 22%;
  }
  & > :nth-child(-n + ${({numGroups:e})=>e?e>>1:0}) {
    background-color: rgb(255, 248, 240);
  }
  & > :nth-child(n + ${({numGroups:e})=>e?1+(e>>1):0}) {
    background-color: rgb(240, 248, 255);
  }
`;t.default=(({maxTeams:e,currentPotNum:t,groups:n,possibleGroups:a,selectedTeam:i,airborneTeams:u})=>o.createElement(s,{numGroups:n.length},n&&n.map((n,s)=>o.createElement(l.default,{maxTeams:e,groupLetter:r.default(s),teams:n,potNum:t,possible:null!==a&&a.includes(s),airborneTeams:u}))))},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),a=o.default.div`
  display: flex;
  flex-direction: column;
  min-width: 65%;
  margin: 0px 5px 10px 5px;

  @media (max-width: 999px) {
    width: 100%;
    margin: 0px 10px 20px 10px;
  }
`;t.default=a},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4);t.default=o.default.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 35%;
  margin: 0px 5px 10px 5px;

  @media (max-width: 999px) {
    width: 100%;
    align-items: center;
    margin: 0px 10px 20px 10px;
  }
`},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),a=n(4),r=n(175),l=a.default.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 999px) {
    justify-content: center;
  }
`,s=a.default(r.default)`
  background: ${({selected:e,notSelected:t})=>e?"#004":t?"#ddd":"radial-gradient(#fff, #004)"};
`;class i extends o.PureComponent{constructor(){super(...arguments),this.onBallPick=(e=>{const{pot:t,onPick:n}=this.props,o=e.target;n(t.findIndex(e=>e.id===o.dataset.teamid))})}render(){const{calculating:e,completed:t,pot:n,selectedTeam:a}=this.props,r=e||a;return o.createElement(l,null,!t&&n&&n.map((e,t)=>o.createElement(s,{key:e.id,"data-teamid":e.id,selected:e===a,notSelected:a&&e!==a,noHover:r,onClick:!r&&this.onBallPick},e.shortName||e.name)))}}t.default=i},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),a=o.default.div`
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */

  width: 50px;
  height: 50px;

  margin: 2px;
  padding: 10px;

  font-size: ${e=>e.selected?.8:0}em;
  font-family: 'Arial Narrow', 'Ubuntu Condensed', sans-serif;
  font-weight: ${e=>e.selected?"bold":""};
  text-align: center;
  text-overflow: ellipsis;
  color: ${e=>e.selected?"white":""};

  background: ${e=>e.selected?"":"radial-gradient(#004, #002, #002)"};
  border-radius: 100%;
  cursor: ${e=>e.noHover?"not-allowed":"pointer"};
  user-select: none;

  &:hover {
    ${({noHover:e})=>!e&&"background: radial-gradient(#ccf, #ccf)"};
  }

  @media (max-width: 999px) {
    width: 85px;
    height: 85px;
    margin: 4px;
    font-size: ${e=>e.selected?1.2:0}em;
  }

  @media (max-width: 850px) {
    flex-flow: row wrap;
    & > * {
      flex: 1;
      flex-basis: 22%;
    }
  }
`;t.default=a},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),a=n(4),r=n(144),l=n(28),s=n(659),i="https://github.com/inker/draw/issues/14",u=a.default.div`
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
`,c=a.default.div`
  border-width: 2px;
  border-style: dashed;
  border-color: rgba(255, 0, 0, 0.5);
  padding: 10px;
`,d=a.default.span`
  display: inline-block;
`,p=a.default.strong`
  font-weight: 600;
`,f=a.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;class m extends o.PureComponent{constructor(){super(...arguments),this.state={lastSelected:null}}componentWillReceiveProps(e){e.completed?this.setState({lastSelected:null}):e.selectedTeam&&this.setState({lastSelected:e.selectedTeam})}render(){const{long:e,calculating:t,completed:n,selectedTeam:a,pickedGroup:m,possibleGroups:h,numGroups:g,reset:b}=this.props,x=this.state.lastSelected||a;return o.createElement(u,null,t?o.createElement(c,null,o.createElement("div",null,"Calculation is taking too long."),o.createElement("div",null,"And ",o.createElement("a",{href:i,target:"_blank"},"here's why"),".")):n?o.createElement(f,null,o.createElement("div",null,"Draw completed!"),o.createElement(r.default,{onClick:b},"Restart")):null!==m?this.lastAnnouncement=o.createElement("div",null,e&&x?o.createElement("span",null,o.createElement(p,null,x.shortName||x.name)," goes to group"):o.createElement("span",null,"Group")," ",l.default(m),"!"):x?h?o.createElement("div",null,"Possible groups for ",o.createElement(d,null,o.createElement(p,null,x.name),":"),o.createElement(s.default,{numGroups:g,possibleGroups:h})):this.lastAnnouncement:o.createElement("div",null,"Pick a ball"))}}t.default=m},177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),a=o.default.div`
  display: flex;
  margin: auto;
  width: 1000px;
  @media (max-width: 999px) {
    width: 100%;
    flex-direction: column;
  }
`;t.default=a},197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(93);t.Team=o.default;var a=n(714);t.GSTeam=a.default;var r=n(715);t.Last16Team=r.default},198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),a=n(213),r=n(4),l=n(295);n(296);const s=n(301),i=r.default.div`
  font-family: Tahoma, Arial, sans-serif;
`;a.render(o.createElement(i,null,o.createElement(s.default,null)),document.getElementById("app")),l.attach(document.body)},28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>String.fromCharCode(65+e))},301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),a=n(35),r=n(138),l=n(143),s=n(329),i=n(339),u=n(719);class c extends o.PureComponent{constructor(){super(...arguments),this.state={key:a(),tournament:null,stage:null,season:l.default(u.default.location),location:u.default.location},this.onSeasonChange=((e,t,n)=>{u.default.push(`/${e}/${t}${n?`/${n}`:""}`)}),this.updateLocation=((e,t)=>{const n=l.default(e),[,o,a]=e.pathname.split("/");this.setState({tournament:o,stage:a,season:n,location:u.default.location})}),this.refresh=(()=>{this.setState({key:a()})}),this.getPages=(e=>{const{key:t,tournament:n,stage:a,season:r}=this.state;return o.createElement(i.default,Object.assign({},e,{dummyKey:t,tournament:n,stage:a,season:r,onSeasonChange:this.onSeasonChange}))})}componentWillMount(){this.unlisten=u.default.listen(this.updateLocation)}componentWillUnmount(){this.unlisten&&this.unlisten()}render(){const{location:e}=this.state;return o.createElement(r.HashRouter,{history:u.default},o.createElement("div",null,o.createElement(s.default,{refresh:this.refresh,location:e,onSeasonChange:this.onSeasonChange}),o.createElement(r.Switch,null,o.createElement(r.Route,{path:"/:tournament/:stage/:season?",component:this.getPages}),o.createElement(r.Redirect,{from:"/el",to:"/el/gs"}),o.createElement(r.Redirect,{from:"/cl",to:"/cl/gs"}),o.createElement(r.Redirect,{from:"/",to:"/cl/gs"}))))}}t.default=c},329:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),a=n(4),r=n(83),l=n(144),s=n(143),i=n(330),u=n(338),c=a.default.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  padding-bottom: 10px;
  font-size: 16px;

  @media (max-width: 999px) {
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 32px;
  }
`,d=a.default(l.default)`
  margin-left: 10px;
  margin-right: 10px;
`;class p extends o.PureComponent{render(){const{location:e,refresh:t,onSeasonChange:n}=this.props,[,a,l]=e.pathname.split("/"),p=s.default(e);return o.createElement(c,null,e&&o.createElement(d,{onClick:t},"Restart"),o.createElement(i.default,{tournament:a,stage:l,season:p,onChange:n}),!r.mobile&&o.createElement(u.default,null))}}t.default=p},330:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),a=n(50),r=n(49),l=n(336),s=n(337),i=2e3,u=2009;class c extends o.PureComponent{constructor(){super(...arguments),this.onTournamentChange=(e=>{const t=e.target.value,{stage:n,onChange:o}=this.props;o(t,n,r.default)}),this.onStageChange=(e=>{const t=e.target.value,{tournament:n,onChange:o}=this.props;o(n,t,r.default)}),this.onSeasonChange=(e=>{const t=+e.target.value,{tournament:n,stage:o,onChange:a}=this.props;a(n,o,t)})}render(){const{tournament:e,stage:t,season:n}=this.props,c="el"===e?u:i;return o.createElement("div",null,o.createElement(s.default,{label:"tournament",onChange:this.onTournamentChange,value:e},o.createElement("option",{value:"cl"},"Champions League"),o.createElement("option",{value:"el"},"Europa League")),o.createElement(s.default,{label:"stage",onChange:this.onStageChange,value:t},o.createElement("option",{value:"gs"},"Group Stage")),o.createElement(s.default,{label:"season",onChange:this.onSeasonChange,value:n},a(r.default,c-1).map(e=>o.createElement("option",{value:e},l.default(e)))))}}t.default=c},336:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>`${e}/${((e+1)%100).toString().padStart(2,"0")}`)},337:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(37),a=n(1),r=n(4),l=`label-${Math.random().toString(36).slice(2)}`,s=r.default.div`
  display: inline;
  margin-left: 3px;
  margin-right: 3px;
`,i=r.default.label`
  display: none;
`;t.default=(e=>{var{label:t,children:n}=e,r=o.__rest(e,["label","children"]);const u=`${l}-${t}`;return a.createElement(s,null,a.createElement(i,{htmlFor:u},t),a.createElement("select",Object.assign({id:u,className:"needsclick",title:t},r),n))})},338:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),a=n(4),r=a.default.div`
  display: flex;
  justify-content: center;
  margin-left: 5px;
  width: 80px;
`;t.default=(()=>o.createElement(r,null,o.createElement("a",{target:"_blank",className:"github-button",href:"https://github.com/inker/draw","data-icon":"octicon-star","data-show-count":"true","data-count-href":"/inker/draw/stargazers","data-count-aria-label":"# stargazers on GitHub","aria-label":"Star inker/draw on GitHub"},"Star")))},339:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(37),a=n(1),r=n(138),l=n(340),s=n(35),i=n(57),u=n(369),c=n(661),d=n(662),p=n(49),f=n(709),m=n(170),h=n(716),g=n(92),b=n(717);class x extends a.PureComponent{constructor(){super(...arguments),this.state={key:s(),pots:null,waiting:!1,error:null,season:p.default},this.getPots=i((e,t,n)=>o.__awaiter(this,void 0,void 0,function*(){const t=yield f.fetchPots(e,n);return f.parseGS(t)}),(e,t,n)=>`${e}-${t}-${n}`),this.getWrappedPopup=(e=>a.createElement(b.default,Object.assign({},e,{noAnimation:!this.state.pots})))}componentDidMount(){const{tournament:e,stage:t,season:n}=this.getMatchParams();this.fetchData(e,t,n?+n:p.default)}componentWillReceiveProps(e){const{props:t}=this,{tournament:n,stage:o,season:a,dummyKey:r}=e;t.season!==a||t.stage!==o||t.tournament!==n?this.fetchData(n,o,a):t.dummyKey!==r&&this.setState({key:r})}getMatchParams(){const{params:e}=this.props.match;return Object.assign({},e,{season:e.season?+e.season:p.default})}fetchData(e,t,n){return o.__awaiter(this,void 0,void 0,function*(){this.setState({waiting:!0});try{const o=yield this.getPots(e,t,n);yield this.prefetchImages(o),this.setState({pots:o,waiting:!1,error:null,key:s(),season:n})}catch(e){this.onFetchError(e)}})}onFetchError(e){return o.__awaiter(this,void 0,void 0,function*(){this.setState({waiting:!1,error:"Could not fetch data"}),yield g.default(1e3),console.error(e);const{tournament:t,stage:n}=this.getMatchParams(),{pots:o,season:a}=this.state,r=o&&a!==p.default?a:void 0;this.props.onSeasonChange(t,n,r),this.setState({error:null})})}prefetchImages(e){const t=[];for(const n of e){const e=n.map(e=>m.default(e.country));t.push(...e.map(h.default))}return Promise.all(t)}getPopup(){const{error:e,waiting:t}=this.state,n=this.getWrappedPopup;return navigator.onLine?e?a.createElement(n,null,e):t?a.createElement(n,null,"wait..."):null:a.createElement(n,null,"you're offline")}render(){const{pots:e,key:t}=this.state;return a.createElement("div",null,this.getPopup(),e&&a.createElement(r.Switch,null,a.createElement(r.Route,{path:"/cl/gs"},a.createElement("div",null,a.createElement(l.default,null,a.createElement("title",null,"CL draw simulator"),a.createElement("meta",{name:"theme-color",content:"#00336a"}),a.createElement("meta",{name:"description",content:"Champions League draw simulator"})),a.createElement(u.default,{pots:e,key:t}))),a.createElement(r.Route,{path:"/cl/last16"},a.createElement("div",null,a.createElement(l.default,null,a.createElement("title",null,"CL draw simulator"),a.createElement("meta",{name:"theme-color",content:"#00336a"}),a.createElement("meta",{name:"description",content:"Champions League draw simulator"})),a.createElement(c.default,{pots:e,key:t}))),a.createElement(r.Route,{path:"/el/gs"},a.createElement("div",null,a.createElement(l.default,null,a.createElement("title",null,"EL draw simulator"),a.createElement("meta",{name:"theme-color",content:"#f68e00"}),a.createElement("meta",{name:"description",content:"Europa League draw simulator"})),a.createElement(d.default,{pots:e,key:t})))))}}t.default=x},369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(37),a=n(1),r=n(148),l=n(35),s=n(382),i=n(154),u=n(28),c=n(155),d=n(171),p=n(172),f=n(173),m=n(174),h=n(658),g=n(176),b=n(177);class x extends a.PureComponent{constructor(){super(...arguments),this.reset=(()=>{const e=this.props.pots,t=e.map(e=>r(e)),n=t[0];this.setState({drawId:`draw-${l()}`,initialPots:e,pots:t,groups:n.map(e=>[]),maxTeamsInGroup:t.length,airborneTeams:[],currentPotNum:0,selectedTeam:null,pickedGroup:null,hungPot:n,possibleGroups:null,possibleGroupsShuffled:null,completed:!1,error:null})}),this.onTeamBallPick=(e=>{const{groups:t,pots:n,currentPotNum:o}=this.state,a=n[o],l=a.slice(),i=a.splice(e,1)[0],u=s.allPossibleGroups(n,t,i,o);this.setState({hungPot:l,selectedTeam:i,possibleGroups:u,possibleGroupsShuffled:r(u),pickedGroup:null})}),this.onGroupBallPick=(e=>{const{groups:t,airborneTeams:n,selectedTeam:a,pots:r,currentPotNum:l}=this.state;if(!a)return void this.setState({error:"shit"});t[e].push(a);const s=r[l].length>0?l:l+1;n.push(a);const i=this.animateCell(e);this.setState({selectedTeam:null,pickedGroup:e,hungPot:r[s],possibleGroups:null,possibleGroupsShuffled:null,currentPotNum:s,completed:s>=r.length,airborneTeams:n},()=>o.__awaiter(this,void 0,void 0,function*(){const e=this.state.airborneTeams.filter(e=>e!==a);yield i,this.setState({airborneTeams:e})}))})}componentDidMount(){this.reset()}animateCell(e){const{selectedTeam:t,currentPotNum:n}=this.state;if(!t)return;const o=document.querySelector(`[data-cellid='${t.id}']`),a=`[data-cellid='${u.default(e)}${n}']`,r=document.querySelector(a);return o instanceof HTMLElement&&r instanceof HTMLElement?i.default(o,r,350):void 0}render(){if(!this.state)return null;const{initialPots:e,pots:t,groups:n,maxTeamsInGroup:o,currentPotNum:r,hungPot:l,airborneTeams:s,selectedTeam:i,pickedGroup:u,possibleGroups:x,possibleGroupsShuffled:y,completed:v}=this.state;return a.createElement(b.default,null,a.createElement(p.default,null,a.createElement(c.default,{selectedTeam:i,initialPots:e,pots:t,currentPotNum:r}),a.createElement(d.default,{maxTeams:o,selectedTeam:i,currentPotNum:r,groups:n,possibleGroups:x,airborneTeams:s})),a.createElement(f.default,null,a.createElement(m.default,{completed:v,selectedTeam:i,pot:l,onPick:this.onTeamBallPick}),a.createElement(g.default,{long:!1,completed:v,selectedTeam:i,pickedGroup:u,possibleGroups:x,numGroups:n.length,reset:this.reset}),a.createElement(h.default,{completed:v,possibleGroups:y,onPick:this.onGroupBallPick})))}}t.default=x},382:function(e,t,n){"use strict";function o(e,t,n){if(0===e[n].length&&++n===e.length)return!0;const r=e[n],l=r.pop();let s=!1;for(const i of a(t,l,n)){const a=t[i];if(a.push(l),s=o(e,t,n),a.pop(),s)break}return r.push(l),s}function a(e,t,n){const o=e.length>>1,a=r(e,t,n,0,o),l=r(e,t,n,o,e.length);return 0===a.length?l:0===l.length?a:a.concat(l)}function r(e,t,n,o,a){const r=[],l=s(t);for(let s=o;s<a;++s){const o=e[s];let a=!0;for(const e of o)if(e.country===t.country||l(e)){if(a=!1,e.pairing===t)return[];break}a&&o.length<=n&&r.push(s)}return r}Object.defineProperty(t,"__esModule",{value:!0});const l=n(50);t.allPossibleGroups=function(e,t,n,r){return t.every(e=>0===e.length)?l(t.length):a(t,n,r).filter(a=>{t[a].push(n);const l=o(e,t,r);return t[a].pop(),l})},t.firstPossibleGroup=function(e,t,n,r){return t.every(e=>0===e.length)?0:a(t,n,r).find(a=>{t[a].push(n);const l=o(e,t,r);return t[a].pop(),l})};const s=e=>"ru"===e.country?e=>"ua"===e.country:"ua"===e.country?e=>"ru"===e.country:e=>!1},383:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(384),a=()=>`styled-element-${Math.random().toString(36).slice(2)}`;let r;const l=(e,...t)=>e.reduce((e,n,a)=>`${e}${n}${o(t[a])?"":t[a]}`,"");t.default=((e,...t)=>{r||(r=document.createElement("style"),document.head.appendChild(r));const n=a(),o=l(e,...t);return r.textContent+=`.${n}{${o}}`,n})},396:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),a=n(4),r=n(165),l=n(166),s=n(397),i=n(398),u=a.default(r.default)`
  transform: box-shadow 1s linear;
  ${e=>e.highlighted&&`\n  `}
`;t.default=(({isCurrent:e,potNum:t,teams:n,pickedTeams:a,selectedTeam:r})=>o.createElement(u,{highlighted:e},o.createElement(s.default,{highlighted:e,depleted:!n||a.length===n.length},"Pot ",t+1),o.createElement(l.default,null,n&&n.map(e=>{const{name:t,country:n,shortName:l,pairing:s}=e;return o.createElement(i.default,{key:e.id,"data-cellId":e.id,title:s&&`paired with ${s.name}`,selected:e===r,picked:a.includes(e),country:n},l||t)}))))},397:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),a=n(167),r=o.default(a.default)`
  ${e=>e.depleted&&`\n    filter: grayscale(0.5);\n    opacity: 0.4;\n  `}
  ${e=>e.highlighted&&`\n    color: #f70;\n  `}
`;t.default=r},398:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),a=n(169),r=o.default(a.default)`
  ${e=>e.selected&&"color: blue;"}
  ${e=>e.picked&&`\n    filter: grayscale(0.5);\n    opacity: 0.4;\n  `}
`;t.default=r},399:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),a=n(168),r=o.default(a.default)`
  padding-left: 3px;
  padding-right: 3px;
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 999px) {
    font-family: 'Roboto Condensed', RobotoCondensed, RobotoCondensed-Regular, sans-serif;
  }
`;t.default=r},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=2017},656:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),a=n(156),r=n(50),l=n(165),s=n(167),i=n(166),u=n(657);t.default=(({maxTeams:e,groupLetter:t,teams:n,potNum:c,possible:d,airborneTeams:p})=>{const f=a(n,p);return o.createElement(l.default,null,o.createElement(s.default,null,"Group ",t),o.createElement(i.default,null,f.map((e,t)=>o.createElement(u.default,{country:e.country,picked:!0},e.shortName||e.name)),r(f.length,e).map(e=>o.createElement(u.default,{possible:e===c&&d,"data-cellid":`${t}${e}`}))))})},657:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),a=n(169),r=o.keyframes`
  from {
    background-color: white;
    box-shadow: 0 0 20px #bcd;
  }
  to {}
`,l=o.keyframes`
  from {
    background-color: #ff8;
  }
  to {}
`,s=o.default(a.default)`
  ${e=>e.possible&&`\n    background-color: rgba(255, 255, 255, 0.9);\n    animation: ${r} 1s ease;\n    box-shadow: 0 0 5px #bcd;\n  `}
  ${e=>e.picked&&`\n    animation: ${l} 5s normal forwards;\n  `}
`;t.default=s},658:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),a=n(4),r=n(28),l=n(175),s=a.default.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 999px) {
    justify-content: center;
  }
`;class i extends o.PureComponent{constructor(){super(...arguments),this.onBallPick=(e=>{const t=+(e.target.dataset.group||0);this.props.onPick(t)})}render(){const{completed:e,possibleGroups:t}=this.props;return o.createElement(s,null,!e&&t&&t.map(e=>o.createElement(l.default,{"data-group":e,onClick:this.onBallPick},r.default(e))))}}t.default=i},659:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),a=n(4),r=n(50),l=n(28),s=n(660),i=a.default.div`
  display: flex;
  justify-content: center;
  margin-top: 2px;
`;t.default=(({numGroups:e,possibleGroups:t})=>{const n=e>>1;return o.createElement(i,null,r(e).map(e=>{const a=l.default(e);return o.createElement(s.default,{key:a,color:e<n?"red":"blue",possible:t.includes(e)},a)}))})},660:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),a=o.default.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25px;
  height: 25px;
  margin: 2px;

  border-width: 1px;
  border-style: solid;
  border-radius: 100%;

  font-size: 18px;

  ${e=>e.possible?`\n    color: ${e.color};\n  `:`\n    color: #000;\n    border-color: rgba(0,0,0,0);\n    filter: opacity(0.25);\n  `}

  @media (max-width: 999px) {
    width: 45px;
    height: 45px;
    border-width: 2px;
    font-size: 30px;
  }
`;t.default=a},661:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);class a extends o.PureComponent{render(){return o.createElement("div",null,"Not available yet")}}t.default=a},662:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(37),a=n(1),r=n(663),l=n(148),s=n(35),i=n(154),u=n(28),c=n(702),d=n(92),p=n(155),f=n(171),m=n(172),h=n(173),g=n(174),b=n(176),x=n(177),y=n(708);class v extends a.PureComponent{constructor(){super(...arguments),this.reset=(()=>{this.worker&&this.worker.terminate(),this.worker=new y,this.worker.onmessage=this.workerOnMessage;const e=this.props.pots,t=e.map(e=>l(e)),n=t[0];this.setState({drawId:`draw-${s()}`,initialPots:e,pots:t,groups:n.map(e=>[]),maxTeamsInGroup:t.length,airborneTeams:[],currentPotNum:0,selectedTeam:null,pickedGroup:null,hungPot:n,calculating:!1,longCalculating:!1,completed:!1,error:null})}),this.onTeamBallPick=(e=>{const{groups:t,pots:n,currentPotNum:o}=this.state,a=n[o],r=a.slice(),l=a.splice(e,1)[0];this.setState({hungPot:r,selectedTeam:l,pickedGroup:null,calculating:!0},()=>{this.setLongCalculating(this.state)}),this.worker.postMessage({pots:n,groups:t,selectedTeam:l,currentPotNum:o})}),this.workerOnMessage=(e=>{const{selectedTeam:t,pickedGroup:n}=e.data,{groups:a,pots:r,currentPotNum:l}=this.state;a[n].push(t);const s=r[l].length>0?l:l+1,i=s>=r.length;i&&this.worker.terminate(),this.state.airborneTeams.push(t);const u=this.animateCell(t,n);this.setState({groups:a,selectedTeam:null,pickedGroup:n,hungPot:r[s],currentPotNum:s,calculating:!1,longCalculating:!1,completed:i,airborneTeams:this.state.airborneTeams},()=>o.__awaiter(this,void 0,void 0,function*(){yield u,this.setState({airborneTeams:this.state.airborneTeams.filter(e=>e!==t)})}))})}componentDidMount(){this.reset()}componentWillUnmount(){this.worker&&this.worker.terminate()}setLongCalculating(e){var{airborneTeams:t}=e,n=o.__rest(e,["airborneTeams"]);return o.__awaiter(this,void 0,void 0,function*(){yield d.default(3e3);const e=r(this.state,"airborneTeams");c.default(e,n)&&this.setState({longCalculating:!0})})}animateCell(e,t){const{currentPotNum:n}=this.state;if(!e)return;const o=document.querySelector(`[data-cellid='${e.id}']`),a=`[data-cellid='${u.default(t)}${n}']`,r=document.querySelector(a);return o instanceof HTMLElement&&r instanceof HTMLElement?i.default(o,r,350):void 0}render(){if(!this.state)return null;const{initialPots:e,pots:t,groups:n,maxTeamsInGroup:o,currentPotNum:r,hungPot:l,airborneTeams:s,selectedTeam:i,pickedGroup:u,calculating:c,longCalculating:d,completed:y}=this.state;return a.createElement(x.default,null,a.createElement(m.default,null,a.createElement(p.default,{selectedTeam:i,initialPots:e,pots:t,currentPotNum:r}),a.createElement(f.default,{maxTeams:o,selectedTeam:i,currentPotNum:r,groups:n,possibleGroups:null,airborneTeams:s})),a.createElement(h.default,null,a.createElement(g.default,{calculating:c,completed:y,selectedTeam:i,pot:l,onPick:this.onTeamBallPick}),a.createElement(b.default,{long:!0,calculating:d,completed:y,selectedTeam:i,pickedGroup:u,possibleGroups:null,numGroups:n.length,reset:this.reset})))}}t.default=v},702:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(17),a=n(703);t.default=((e,t)=>{if(!o(e)||!o(t))return!1;const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&0===a(n,r).length&&n.every(n=>e[n]===t[n])})},708:function(e,t,n){e.exports=function(){return new Worker(n.p+"fbfc79bf405784214778.worker.js")}},709:function(e,t,n){"use strict";function o(e){return d.__awaiter(this,void 0,void 0,function*(){for(;!navigator.onLine;)console.error("you're offline, retrying..."),yield h.default(1e3);const t=yield fetch(g.default(e,"latin1"));if(200!==t.status)throw new Error(`${e}: ${t.status}`);const n=yield t.text();if(n.includes("<title>404 Not Found</title>"))throw new Error(`${e}: 404`);return n})}function a(e){return d.__awaiter(this,void 0,void 0,function*(){for(const t of e)try{return yield o(t)}catch(e){console.error(e)}throw new Error(`could not load urls ${e.join(", ")}`)})}function r(e,t){return d.__awaiter(this,void 0,void 0,function*(){const n=[w(e,t),_(e,t)];return t!==y.default&&n.reverse(),yield a(n)})}function l(e){return d.__awaiter(this,void 0,void 0,function*(){return c(u(yield i(e)))})}function s(e){e=e.slice(e.lastIndexOf("--------------"));const t=[[],[]],n=/\s*(.+?)(\s\*+\d?|\([CE]L-TH\)?\s+)?\s{2,}(\w{3})\s+/g;let o;for(let a=0;a<16&&null!==(o=n.exec(e));++a)t[a%2].push(new x.Last16Team(o[1],o[3],a>>1));return t}function i(e){return d.__awaiter(this,void 0,void 0,function*(){const t=/Pot 1\s{5}([\s\S]+?)<\/table>/,n=e.match(t);if(!n)throw new Error("could not parse");e=n[1];const o=/\s*(.+?)\s*(\*+\d?|\(([CE]L-)?TH\))?\s+(\w{3})\s+(\d{1,3}\.\d{3})/g,a=[];let r;for(;null!==(r=o.exec(e));){const e=r[1].replace(/\*|(@\d)/g,"").trim(),t=f[r[4].toLowerCase()],n=v&&(yield v).default(e,t)||void 0,o=+r[5];a.push(new x.GSTeam(e,t,o,n))}return a})}function u(e){const t=e.slice();for(const[a,r]of m){const e=E(t,a),n=E(t,r);if(e&&n){if(e.country!==n.country)throw new Error(`teams ${e.name} & ${n.name} cannot be paired up`);e.pairing=n,n.pairing=e,b.default(t,e),b.default(t,n)}}t.sort((e,t)=>t.coefficient-e.coefficient);const n=t.length,o=n-1;for(let a=0;a<o;++a){const e=t[a];if(!e.pairing)for(let o=a+1;o<n;++o){const n=t[o];if(!n.pairing&&e.country===n.country){e.pairing=n,n.pairing=e;break}}}return e}function c(e){const t=[[],[],[],[]],n=e.length,o=n>>1;for(let a=0;a<n;++a)t[~~(a/o)<<1|a%2].push(e[a]);return t}Object.defineProperty(t,"__esModule",{value:!0});const d=n(37),p=n(83),f=n(710),m=n(711),h=n(92),g=n(712),b=n(713),x=n(197),y=n(49),v=p.mobile&&n.e(0).then(n.bind(null,720)),P="http://kassiesa.home.xs4all.nl/bert/uefa",w=(e,t)=>`${P}/seed${e}${t}.html`,_=(e,t)=>`${P}/history/seed${e}${t}.html`;t.tryFetch=o,t.tryMultipleUrls=a,t.default=((e,t=!0)=>r(e,y.default).then(t?l:s)),t.fetchPots=r,t.parseGS=l,t.parseLast16Teams=s;const E=(e,t)=>e.find(e=>e.name.includes(t))},710:function(e,t){e.exports={alb:"al",and:"ad",arm:"am",aut:"at",azb:"az",bel:"be",bls:"by",bos:"ba",bul:"bg",cro:"hr",cyp:"cy",cze:"cz",den:"dk",eng:"gb-eng",esp:"es",est:"ee",far:"fo",fin:"fi",fra:"fr",geo:"ge",ger:"de",gib:"gi",gre:"gr",hun:"hu",irl:"ie",isl:"is",isr:"il",ita:"it",kaz:"kz",kos:"xk",lat:"lv",lie:"li",ltu:"lt",lux:"lu",mac:"mk",mlt:"mt",mol:"md",mon:"me",ned:"nl",nir:"gb-nir",nor:"no",pol:"pl",por:"pt",rom:"ro",rus:"ru",sco:"gb-sct",slo:"si",sma:"sm",srb:"rs",sui:"ch",svk:"sk",swe:"se",tur:"tr",ukr:"ua",wal:"gb-wls"}},711:function(e,t){e.exports=[["Real Madrid","Barcelona"],["Real Madrid","Atlético"],["Manchester City","Manchester United"],["Chelsea","Arsenal"],["Chelsea","Tottenham"],["Arsenal","Tottenham"],["Milan","Inter"],["Benfica","Porto"],["Benfica","Sporting"],["CSKA","Spartak"],["CSKA","Zenit"],["Zenit","Spartak"],["Shakhtar","Dinamo Kiev"],["Olympiakos","Panathinaikos"]]},712:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=((e,t)=>`https://proxy-antonv.rhcloud.com/?url=${encodeURIComponent(e)}${t?`&encoding=${t}`:""}`)},713:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(187);t.default=((e,t)=>{const n=e.indexOf(t);-1!==n&&(e[n]=o(e),e.pop())})},714:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(93);class a extends o.default{constructor(e,t,n,o,a){super(e,t,o),this.coefficient=n,this.pairing=a}}t.default=a},715:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(93);class a extends o.default{constructor(e,t,n){super(e,t),this.group=n}}t.default=a},716:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(57);t.default=o(e=>{const t=document.createElement("img");return new Promise(n=>{t.onload=n,t.src=e})})},717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),a=n(4),r=n(718),l=a.keyframes`
  from {
    opacity: 0;
  }
  to {}
`,s=a.default(r.default)`
  background-color: white;
  opacity: 0.75;
  ${e=>e.animate&&`\n    animation: ${l} 0.1s ease-out;\n  `}
`,i=a.default(r.default)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vw;
  color: #808080;
  user-select: none;
`;t.default=(({noAnimation:e,children:t})=>o.createElement("div",null,o.createElement(s,{animate:!e}),o.createElement(i,null,t)))},718:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),a=o.default.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;t.default=a},719:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(141).default();t.default=o},92:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>new Promise(t=>{setTimeout(t,e)}))},93:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(35);class a{constructor(e,t,n){this.id=o("team-"),this.name=e,this.country=t,this.shortName=n}}t.default=a}},[198]);