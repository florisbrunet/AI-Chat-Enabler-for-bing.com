window.onload = function () {
  chrome.tabs.create({ url: "https://www.bing.com/chat" });
  window.close();
};
