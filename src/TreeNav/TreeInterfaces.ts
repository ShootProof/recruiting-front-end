export interface IThumbnail {
    description: string;
    href: string;
}

export interface INodeData {
    id: number;
    name: string;
    thumbnail: IThumbnail;
    parent: number | null;
}

export interface INodeDictionary {
    [key: string]: INodeData[]
}