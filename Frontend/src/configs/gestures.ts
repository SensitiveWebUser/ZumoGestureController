import {
  DownwardIcon,
  LeftwardIcon,
  RightwardIcon,
  UpwardIcon,
  MemeGestureIcon,
} from '../assets/Gestures';

export interface Gesture {
  [key: string]: {
    asset: JSX.Element;
    name: string;
  };
}

export const Gestures: Gesture = {
  backward: {
    asset: DownwardIcon({}),
    name: 'backwards',
  },
  left: {
    asset: LeftwardIcon({}),
    name: 'left',
  },
  right: {
    asset: RightwardIcon({}),
    name: 'right',
  },
  forward: {
    asset: UpwardIcon({}),
    name: 'forwards',
  },
  idle: {
    asset: MemeGestureIcon({}),
    name: 'idle',
  },
};
