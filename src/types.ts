export interface ConnpassEvent {
  title: string;
  catch: string;
  event_url: string;
  started_at: string;
}

export interface ConnpassResponse {
  events: ConnpassEvent[];
}

export interface SlackMessage {
  text: string;
}
