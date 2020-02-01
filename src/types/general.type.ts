export type TJsonObject = {
  id: number;
  name: string;
  thumbnail: {
    description: string;
    href: string;
  };
  parent: number;
  child?: TJsonObject[];
}
