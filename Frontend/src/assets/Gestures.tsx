interface GestureProps {
  width?: number;
  height?: number;
  color?: string;
}

export const DownwardIcon = ({
  width,
  height,
  color,
}: GestureProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height || 165}
    viewBox="0 96 960 960"
    width={width || 165}
    color={color || 'white'}
    justify-content="center"
    align-items="center"
  >
    <path
      fill={color || 'white'}
      d="M480 884q-5 0-10.6-2.045-5.6-2.046-10.4-6.955L181 597q-9-8.8-9-20.9 0-12.1 9-21.1 9-9 21-9t21 9l227 227V286q0-13.077 8.675-21.538 8.676-8.462 21.5-8.462 12.825 0 21.325 8.625T510 286v496l227-227q9-9 21-9t21 8.842q9 8.842 9 21T779 597L501 875q-5 5-10.091 7-5.091 2-10.909 2Z"
    />
  </svg>
);

export const LeftwardIcon = ({
  width,
  height,
  color,
}: GestureProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height || 165}
    viewBox="0 96 960 960"
    width={width || 165}
    color={color || 'white'}
    justify-content="center"
    align-items="center"
  >
    <path
      fill={color || 'white'}
      d="M338 792 141 596q-5-5-7-10t-2-11q0-6 2-11t7-10l197-197q8-8 21-8.5t22 8.5q9 9 9 21.5t-9 21.5L236 545h574q13 0 21.5 8.5T840 575q0 13-8.5 21.5T810 605H236l145 145q8 8 8.5 20.5T381 792q-9 9-21.5 9t-21.5-9Z"
    />
  </svg>
);

export const RightwardIcon = ({
  width,
  height,
  color,
}: GestureProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height || 165}
    viewBox="0 96 960 960"
    width={width || 165}
    color={color || 'white'}
    justify-content="center"
    align-items="center"
  >
    <path
      fill={color || 'white'}
      d="M540 793q-9-9-9-21.5t8-20.5l147-147H190q-13 0-21.5-8.5T160 574q0-13 8.5-21.5T190 544h496L538 396q-9-9-8.5-21t9.5-21q9-8 21.5-8t20.5 8l199 199q5 5 7 10t2 11q0 6-2 11t-7 10L582 793q-9 9-21 9t-21-9Z"
    />
  </svg>
);

export const UpwardIcon = ({
  width,
  height,
  color,
}: GestureProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height || 165}
    viewBox="0 96 960 960"
    width={width || 165}
    color={color || 'white'}
    justify-content="center"
    align-items="center"
  >
    <path
      fill={color || 'white'}
      d="M479.825 896Q467 896 458.5 887.375T450 866V370L223 597q-8.8 9-20.9 9-12.1 0-21.1-9-9-9-9-21t9-21l278-278q4.8-4.909 10.4-6.955Q475 268 480.419 268q5.42 0 10.5 2Q496 272 501 277l278 278q9 9 9 21t-8.842 21q-8.842 9-21 9T737 597L510 370v496q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Z"
    />
  </svg>
);

export const MemeGestureIcon = ({
  width,
  height,
  color,
}: GestureProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height || 165}
    viewBox="0 96 960 960"
    width={width || 165}
    color={color || 'white'}
    justify-content="center"
    align-items="center"
  >
    <path
      fill={color || 'white'}
      d="M204 638q-21 11-44 5.5T126 617q-13-25-4.5-52t35.5-36l313-106q11-4 21.432 1.17 10.432 5.171 17.386 18.694Q515 454 510.82 465.923 506.64 477.846 496 484L204 638Zm106 298q-24.75 0-42.375-17.625T250 876V682l317.872-167.908Q582 506 587.5 490.5 593 475 585 461l193-96q11-5 22.948-.054 11.948 4.945 19.656 20.163Q826 395 823.5 405q-2.5 10-11.5 17L550 618v258q0 24.75-17.625 42.375T490 936H310Zm-10.101-460Q246 476 208 437.899t-38-92Q170 292 208.101 254t92-38Q354 216 392 254.101t38 92Q430 400 391.899 438t-92 38Z"
    />
  </svg>
);
