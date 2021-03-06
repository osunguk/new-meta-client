/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */

import React, { useState, useEffect, useRef, ReactElement } from "react";
import { LeagueInfo, KDAEventData, PlayerMatchInfo } from "../interface";

interface Props {
  leagueInfo: LeagueInfo;
  kdaInfo: KDAEventData[];
  recentChampionStats: PlayerMatchInfo[];
}

function TagComponent(props: Props): ReactElement {
  const { leagueInfo, kdaInfo, recentChampionStats } = props;

  useEffect(() => {}, []);

  /* 태그- 컴포넌트로 만들어야함 */
  const hotStreak = useRef<HTMLDivElement>(null); // 연승 중
  const lev2Strong = useRef<HTMLDivElement>(null); // 2렙 강함
  const lev3Strong = useRef<HTMLDivElement>(null);
  const lev2Weak = useRef<HTMLDivElement>(null);
  const lev3Weak = useRef<HTMLDivElement>(null);
  const carryMachine = useRef<HTMLDivElement>(null);
  const heraldLover = useRef<HTMLDivElement>(null);
  const dragonKiller = useRef<HTMLDivElement>(null);
  const linePhaseStrong = useRef<HTMLDivElement>(null);
  const linePhaseWeak = useRef<HTMLDivElement>(null);
  const earlyStrong = useRef<HTMLDivElement>(null);
  const earlyWeak = useRef<HTMLDivElement>(null);

  /* 연승 계산기 */
  function streakCount(array: PlayerMatchInfo[]) {
    let count = 0;
    for (const el of array) {
      if (el.stats.win) {
        count += 1;
      } else {
        break;
      }
    }
    return count;
  }

  if (leagueInfo.hotStreak === true) {
    const streaks = streakCount(recentChampionStats);
    if (streaks > 1 && hotStreak.current) {
      hotStreak.current.classList.add("active");
      hotStreak.current.textContent = `${streaks}연승 중`;
    }
  }
  /* 승률 60% 이상일 경우 */

  if (
    leagueInfo.wins / (leagueInfo.wins + leagueInfo.losses) > 0.6 &&
    leagueInfo.wins + leagueInfo.losses > 200 &&
    carryMachine.current
  ) {
    carryMachine.current.classList.add("active");
    carryMachine.current.textContent = "캐.리.머.신";
  }

  /*  matchKillForLevel2 + matchAssistForLevel2 가 1이상인 경기가 10경기 이상인 경우  */

  if (lev2Strong.current) {
    let count = 0;
    for (const el of kdaInfo) {
      if (el.matchKillForLevel2 + el.matchAssistForLevel2 > 0) {
        count += 1;
      }
    }
    if (count > 5) {
      lev2Strong.current.classList.add("active");
      lev2Strong.current.textContent = "2렙 싸움꾼";
    }
  }

  /*  matchKillForLevel3 + matchAssistForLevel3 가 1이상인 경기가 5경기 이상인 경우  */
  if (lev3Strong.current) {
    let count = 0;
    for (const el of kdaInfo) {
      if (el.matchKillForLevel3 + el.matchAssistForLevel3 > 0) {
        count += 1;
      }
    }
    if (count > 5) {
      lev3Strong.current.classList.add("active");
      lev3Strong.current.textContent = "3렙 싸움꾼";
    }
  }

  /* "matchHeraldKills": 1이 5번 이상 나온 경우  => 전령 매니아 */

  if (heraldLover.current) {
    let count = 0;
    for (const el of kdaInfo) {
      if (el.matchHeraldKills > 0) {
        count += 1;
      }
    }
    if (count > 5) {
      heraldLover.current.classList.add("active");
      heraldLover.current.textContent = "전령은 잘 챙기는 편이야";
    }
  }

  if (dragonKiller.current) {
    let count = 0;
    for (const el of kdaInfo) {
      if (el.matchDragonKills > 0) {
        count += 1;
      }
    }
    if (count > 5) {
      dragonKiller.current.classList.add("active");
      dragonKiller.current.textContent = "용은 잘 챙기는 편이야";
    }
  }

  if (lev2Weak.current) {
    let count = 0;
    for (const el of kdaInfo) {
      if (el.matchDeathForLevel2 > 1) {
        count += 1;
      }
    }
    if (count > 5) {
      lev2Weak.current.classList.add("active");
      lev2Weak.current.textContent = "2렙에 약해요";
    }
  }

  if (lev3Weak.current) {
    let count = 0;
    for (const el of kdaInfo) {
      if (el.matchDeathForLevel2 > 1) {
        count += 1;
      }
    }
    if (count > 5) {
      lev3Weak.current.classList.add("active");
      lev3Weak.current.textContent = "2렙에 약해요";
    }
  }

  if (earlyStrong.current) {
    let count = 0;
    for (const el of kdaInfo) {
      if (
        el.matchKillForLevel2 +
          el.matchAssistForLevel2 +
          el.matchKillForLevel3 +
          el.matchAssistForLevel3 >
        0
      ) {
        count += 1;
      }
    }
    if (count > 9) {
      earlyStrong.current.classList.add("active");
      earlyStrong.current.textContent = "초반에 강해요";
    }
  }

  if (earlyWeak.current) {
    let count = 0;
    for (const el of kdaInfo) {
      if (el.matchDeathForLevel2 > 1) {
        count += 1;
      }
    }
    if (count > 8) {
      earlyWeak.current.classList.add("active");
      earlyWeak.current.textContent = "초반에 약해요";
    }
  }

  if (linePhaseStrong.current) {
    let count = 0;
    for (const el of kdaInfo) {
      if (el.matchKills > 4) {
        count += 1;
      }
    }
    if (count > 5) {
      linePhaseStrong.current.classList.add("active");
      linePhaseStrong.current.textContent = "라인전 강해요";
    }
  }

  if (linePhaseWeak.current) {
    let count = 0;
    for (const el of kdaInfo) {
      if (el.matchDeaths > 3 && el.matchKills + el.matchAssists < 3) {
        count += 1;
      }
    }
    if (count > 5) {
      linePhaseWeak.current.classList.add("active");
      linePhaseWeak.current.textContent = "라인전 약해요";
    }
  }

  return (
    <>
      <div
        className="tag"
        ref={hotStreak}
        data-tooltip="기분 좋게 연승중!"
      ></div>
      <div
        className="tag"
        ref={lev2Strong}
        data-tooltip="2렙 싸움은 못 참지!"
      ></div>
      <div
        className="tag"
        ref={lev3Strong}
        data-tooltip="  최근 20전 기준 6번 이상 3렙 단계에서 킬관여를 했어요!"
      ></div>
      <div
        className="tag"
        ref={carryMachine}
        data-tooltip="200전 이상 게임하는 동안 승률 55%를 유지하고 있어요!"
      ></div>
      <div
        className="tag"
        ref={heraldLover}
        data-tooltip="최근 20전 기준 6번 이상 첫 전령을 챙겼어요!"
      ></div>
      <div
        className="tag"
        ref={dragonKiller}
        data-tooltip="최근 20전 기준 6번 이상 라인전 단계에서 첫 드래곤을 챙겼어요!"
      ></div>
      <div
        className="tag"
        ref={lev2Weak}
        data-tooltip="6번 이상 2렙 갱에 당했어요. (20전 기준) "
      ></div>
      <div
        className="tag"
        ref={lev3Weak}
        data-tooltip="6번 이상 3렙 갱에 당했어요. (20전 기준)"
      ></div>
      <div
        className="tag"
        ref={earlyStrong}
        data-tooltip="3렙까지 킬관여 확률 50% 이상!(20전 기준)"
      ></div>
      <div
        className="tag"
        ref={earlyWeak}
        data-tooltip="3렙까지 죽을 확률 45% 이상(20전 기준)"
      ></div>
      <div
        className="tag"
        ref={linePhaseStrong}
        data-tooltip="라인전 단계에서 4번 이상 킬을 낼 확률이 30% 이상! (20전 기준)"
      ></div>
      <div
        className="tag"
        ref={linePhaseWeak}
        data-tooltip="라인전 단계에서 4번 이상 죽을 확률이 30% 이상! (20전 기준)"
      ></div>
    </>
  );
}

export default TagComponent;
