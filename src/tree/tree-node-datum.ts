export default interface ITreeNodeDatum
{
  id: number;
  parent: number | null;
  name: string;
  thumbnail: {
    description: string;
    href: string;
  };

  parentNodeDatum?: ITreeNodeDatum;
  childNodeData?: ITreeNodeDatum[];
}
