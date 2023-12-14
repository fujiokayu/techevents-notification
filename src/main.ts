import { fetchConnpassEvents } from './connpass';
import { postToSlack } from './slack';

global.main = (): void => {
  const scriptProperties = PropertiesService.getScriptProperties();
  const keywordsString = scriptProperties.getProperty('keywords');
  console.log(keywordsString)
  const keywords = keywordsString.split(',').map(s => s.trim());
  
  const location = scriptProperties.getProperty('location');
  const webhookUrl = scriptProperties.getProperty('slack_webhook_url');

  keywords.forEach(keyword => {
    const events = fetchConnpassEvents(keyword, location);
    const messageText = events.map(event => `*${event.title}*\n${event.catch}\n${event.event_url}\n開催日: ${event.started_at}`).join("\n\n");
    console.log(messageText)

    if (messageText) {
        postToSlack(webhookUrl, { text: messageText });
    }
});
};
