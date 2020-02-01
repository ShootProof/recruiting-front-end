/* Type */
import { TJsonObject } from '../../types/general.type';

export type TNavProps = {
  subNav?: boolean;
  navContent: TJsonObject;
}

export type TNavState = {
  expand: boolean;
}

export type TNavViewProps = {
  navContent: TJsonObject;
  isExpand: boolean;
  toggleExpandFn: Function;
}
