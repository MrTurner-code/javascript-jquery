// @flow
/* eslint-disable import/no-unused-modules */
import type { Placement, ModifierPhases } from './enums';

export type Obj = { [key: string]: any };

export type Rect = {|
  width: number,
  height: number,
  x: number,
  y: number,
|};

export type Offsets = {|
  y: number,
  x: number,
|};

export type PositioningStrategy = 'absolute' | 'fixed';

export type StateRects = {|
  reference: Rect,
  popper: Rect,
|};

export type StateOffsets = {|
  popper: Offsets,
  arrow?: Offsets,
|};

export type State = {|
  isCreated: boolean,
  elements: {|
    reference: Element | VirtualElement,
    popper: HTMLElement,
    arrow?: HTMLElement,
  |},
  options: Options,
  placement: Placement,
  strategy: PositioningStrategy,
  orderedModifiers: Array<Modifier<any>>,
  rects: StateRects,
  scrollParents: {|
    reference: Array<Element>,
    popper: Array<Element>,
  |},
  styles: {|
    [key: string]: $Shape<CSSStyleDeclaration>,
  |},
  attributes: {|
    [key: string]: { [key: string]: string | boolean },
  |},
  modifiersData: { [key: string]: any },
  reset: boolean,
|};

export type Instance = {|
  state: State,
  destroy: () => void,
  forceUpdate: () => void,
  update: () => Promise<$Shape<State>>,
  setOptions: (options: $Shape<Options>) => Promise<$Shape<State>>,
|};

export type ModifierArguments<Options: Obj> = {
  state: $Shape<State>,
  instance: Instance,
  options: $Shape<Options>,
  name: string,
};
export type Modifier<Options> = {|
  name: string,
  enabled: boolean,
  phase: ModifierPhases,
  requires?: Array<string>,
  requiresIfExists?: Array<string>,
  fn: (ModifierArguments<Options>) => ?State,
  effect?: (ModifierArguments<Options>) => ?() => void,
  options?: Obj,
  data?: Obj,
|};

export type EventListeners = {| scroll: boolean, resize: boolean |};

export type Options = {|
  placement: Placement,
  modifiers: Array<$Shape<Modifier<any>>>,
  strategy: PositioningStrategy,
  onFirstUpdate?: ($Shape<State>) => void,
|};

export type UpdateCallback = State => void;

export type ClientRectObject = {|
  x: number,
  y: number,
  top: number,
  left: number,
  right: number,
  bottom: number,
  width: number,
  height: number,
|};

export type SideObject = {|
  top: number,
  left: number,
  right: number,
  bottom: number,
|};

export type Padding = number | $Shape<SideObject>;

export type VirtualElement = {|
  getBoundingClientRect: () => ClientRect | DOMRect,
|};
