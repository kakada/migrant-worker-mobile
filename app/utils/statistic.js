import { getAnalytics, logEvent } from '@react-native-firebase/analytics';

export const addStatistic = async function(event, property={}) {
  let eventName = event.replace(/\s/g, '').replace(/[^a-zA-Z ]/g, "").slice(0, 40);
  const analytics = getAnalytics();
  await logEvent(analytics, eventName, property);
}
