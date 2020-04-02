// @flow
import type {
  PositioningStrategy,
  Offsets,
  Modifier,
  ModifierArguments,
  Rect,
} from '../types';
import { type BasePlacement, top, left, right, bottom } from '../enums';
import getOffsetParent from '../dom-utils/getOffsetParent';
import getWindow from '../dom-utils/getWindow';
import getDocumentElement from '../dom-utils/getDocumentElement';
import getBasePlacement from '../utils/getBasePlacement';

type Options = {
  gpuAcceleration: boolean,
  adaptive: boolean,
};

const unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto',
};

// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsets({ x, y }): Offsets {
  const dpr = window.devicePixelRatio || 1;

  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0,
  };
}

export function mapToStyles({
  popper,
  popperRect,
  placement,
  offsets,
  position,
  gpuAcceleration,
  adaptive,
}: {
  popper: HTMLElement,
  popperRect: Rect,
  placement: BasePlacement,
  offsets: Offsets,
  position: PositioningStrategy,
  gpuAcceleration: boolean,
  adaptive: boolean,
}) {
  let { x, y } = roundOffsets(offsets);

  const hasX = offsets.hasOwnProperty('x');
  const hasY = offsets.hasOwnProperty('y');

  let sideX: string = left;
  let sideY: string = top;

  if (adaptive) {
    let offsetParent = getOffsetParent(popper);
    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
    }

    if (placement === top) {
      y = y - offsetParent.clientHeight + popperRect.height;
      sideY = bottom;
    }

    if (placement === left) {
      x = x - offsetParent.clientWidth + popperRect.width;
      sideX = right;
    }
  }

  const commonStyles = {
    position,
    ...(adaptive && unsetSides),
  };

  if (gpuAcceleration) {
    return {
      ...commonStyles,
      [sideY]: hasY ? '0' : '',
      [sideX]: hasX ? '0' : '',
      // Layer acceleration can disable subpixel rendering which causes slightly
      // blurry text on low PPI displays, so we want to use 2D transforms
      // instead
      transform:
        (window.devicePixelRatio || 1) < 2
          ? `translate(${x}px, ${y}px)`
          : `translate3d(${x}px, ${y}px, 0)`,
    };
  }

  return {
    ...commonStyles,
    [sideY]: hasY ? `${y}px` : '',
    [sideX]: hasX ? `${x}px` : '',
    transform: '',
  };
}

function computeStyles({ state, options }: ModifierArguments<Options>) {
  const { gpuAcceleration = true, adaptive = true } = options;

  const commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
  };

  // popper offsets are always available
  state.styles.popper = {
    ...state.styles.popper,
    ...mapToStyles({
      ...commonStyles,
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
    }),
  };

  // arrow offsets may not be available
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = {
      ...state.styles.arrow,
      ...mapToStyles({
        ...commonStyles,
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
      }),
    };
  }

  state.attributes.popper = {
    ...state.attributes.popper,
    'data-popper-placement': state.placement,
  };
}

export default ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {},
}: Modifier<Options>);
