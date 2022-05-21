import { BadgeType } from "./BadgeType";

export interface IBadgeMetadata {
  // [ Logo + Left | Right ]
  LogoId: string;
  LogoColor: string;
  LogoPadding: number;

  LeftText: string;
  LeftColor: string;

  RightText: string;
  RightColor: string;

  Style: BadgeType;
}
