// LEAP MOTION
import * as Leap from 'leapjs';
import debug from 'debug';

// Import API requests/post from zumoAPI.ts
import { post } from './ZumoApi';

// Create debug logger
const logger = debug('backend:leapmotion');

// Log that the Leap Motion is running
logger('Initializing Leap Motion');

/*
? For anyone who wants to use the Leap Motion, you need to install the Leap Motion software
? and the Leap Motion SDK. You also need to install the Leap Motion NPM package (leapjs).

! THE NPM PACKAGE IS NOT WORKING PROPERLY, AND  DOCUMENTATION IS OUTDATED/ NONEXISTENT
! TO THE NEXT SUCKER WHO HAS TO USE THIS, GOOD LUCK
*/

// Create a Leap controller with gesture detection enabled
const controller = new Leap.Controller({ enableGestures: true });

// Sets the frame rate for updates from the Leap Motion
let update = 0;
let isActive = false;

// Horizontal movement
let horizontalMovement = 0;
const horizontalMovementThreshold = 100;

// Vertical movement
let verticalMovement = 0;
const verticalMovementThreshold = 100;

// Gesture
let lastGesture = null;

// Connect to the Leap Motion
controller.on('connect', () => {
  logger('Successfully connected to Leap Motion');
});

// Listen for frames from the Leap Motion
controller.on('frame', (frame) => {
  // Update counter
  update++;

  // Handle gestures
  handleGestures(frame);

  // Check if the update counter is higher than 10 (every 10 frames)
  if (update > 10) {
    // Handle hand movement
    handleHandMovement(frame);

    // Reset update counter
    update = 0;
  }
});

// Handle hand movement from the Leap Motion
const handleHandMovement = (frame) => {
  // Check if the movement is active and if there is a hand
  if (isActive && frame.hands.length > 0) {
    // Get the first hand
    const hand = frame.hands[0];
    const palmPosition = hand.palmPosition;

    // Get the palm position
    const forwardBackward = palmPosition[2];
    const leftRight = palmPosition[0];

    // Horizontal movement
    if (leftRight > horizontalMovementThreshold) {
      horizontalMovement = 1;
    } else if (leftRight < -horizontalMovementThreshold) {
      horizontalMovement = -1;
    } else {
      horizontalMovement = 0;
    }

    // Vertical movement
    if (forwardBackward > verticalMovementThreshold) {
      verticalMovement = -1;
    } else if (forwardBackward < -verticalMovementThreshold) {
      verticalMovement = 1;
    } else {
      verticalMovement = 0;
    }

    // Send hand movement to the API
    post(
      `/movement?HORIZONTAL=${horizontalMovement}&VERTICAL=${verticalMovement}`
    );

    // Log hand movement
    logger(`Hand left-right movement: ${leftRight} mm`);
    logger(`Hand forward-backward movement: ${forwardBackward} mm`);
  }
};

// Handle gestures from the Leap Motion
const handleGestures = (frame) => {
  // Get the first gesture detected
  const gesture = frame?.data?.gestures[0];

  // Check if there is a gesture
  if (gesture) {
    // Check the type of gesture
    switch (gesture.type) {
      case 'circle':
        logger('Circle gesture detected');

        // Check if the gesture is a stop and if the radius is bigger than 140
        if (gesture.state === 'stop' && gesture.radius > 140) {
          // Check if the gesture is clockwise or counter-clockwise
          var clockwise = false;
          var pointableID = gesture.pointableIds[0];
          var direction = frame.pointable(pointableID).direction;
          var dotProduct = Leap.vec3.dot(direction, gesture.normal);

          // Check if the dot product is positive or negative
          if (dotProduct > 0) clockwise = true;

          // If the gesture is clockwise, set the speed to 1, else set it to -1,
          // Then send the speed to the API
          if (clockwise) {
            logger('Clockwise');
            post('/speed?SPEED=1');
          } else {
            logger('Counter-clockwise');
            post('/speed?SPEED=-1');
          }
        }
        break;
      case 'screenTap':
        logger('Screen tap gesture detected');
        isActive = !isActive;

        // Send the active state to the API to toggle the stop
        if (!isActive) {
          post('/speed?SPEED=0');
        }
        break;
    }
    // Save the last gesture
    lastGesture = gesture?.type ?? null;
  }
};

// Connect to the Leap Motion
controller.connect();

// Export functions to get the hand movement and gesture
export default {
  getHorizontalMovement: () => horizontalMovement,
  getVerticalMovement: () => verticalMovement,
  getIsActive: () => isActive,
  getGesture: () => lastGesture,
};
