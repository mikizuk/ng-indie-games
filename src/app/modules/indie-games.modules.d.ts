declare const enum EventType {
  Add,
  Update
}

interface Game {
  id: number;
  title: string;
  previewImageUrl: string;
  itemUrl: string;
  author: string;
  email: string;
}

interface GameEvent extends Game {
  eventType: EventType;
}
