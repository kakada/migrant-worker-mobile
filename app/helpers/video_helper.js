import Video from '../models/Video';

const videoHelper = (() => {
  return {
    getTabBarItems
  }

  function getTabBarItems() {
    return Video.getTags().map(tag => ({ key: tag, title: tag }));
  }
})();

export default videoHelper;
