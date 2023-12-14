import { SlackMessage } from './types';

export const postToSlack = (webhookUrl: string, message: SlackMessage): void => {
    const payload = JSON.stringify(message);
    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
        method: "post",
        contentType: "application/json",
        payload: payload
    };
    UrlFetchApp.fetch(webhookUrl, options);
};
