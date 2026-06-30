export enum EventType {
  Add,
  Update,
}

export interface Game {
  id: number;
  title: string;
  previewImageUrl: string;
  itemUrl: string;
  author: string;
  email: string;
}

export interface GameEvent extends Game {
  eventType: EventType;
}
