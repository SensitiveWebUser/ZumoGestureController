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
  downward: {
    asset: DownwardIcon({}),
    name: 'downward',
  },
  left: {
    asset: LeftwardIcon({}),
    name: 'left',
  },
  right: {
    asset: RightwardIcon({}),
    name: 'right',
  },
  upward: {
    asset: UpwardIcon({}),
    name: 'upward',
  },
  idle: {
    asset: MemeGestureIcon({}),
    name: 'idle',
  },
};
