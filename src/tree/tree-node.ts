export default interface ITreeNode
{
  id: number;
  parent: number | null;
  name: string;
  thumbnail: {
    description: string;
    href: string;
  };

  parentNode?: ITreeNode;
  childNodes?: ITreeNode[];
}
