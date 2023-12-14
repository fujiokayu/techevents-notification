import { ConnpassEvent, ConnpassResponse } from './types';

export const fetchConnpassEvents = (keyword: string, location: string): ConnpassEvent[] => {
    const url = `https://connpass.com/api/v1/event/?keyword=${encodeURIComponent(keyword)}&keyword_or=${encodeURIComponent(location)}`;
    const response = UrlFetchApp.fetch(url);
    const json: ConnpassResponse = JSON.parse(response.getContentText());
    return json.events;
};
