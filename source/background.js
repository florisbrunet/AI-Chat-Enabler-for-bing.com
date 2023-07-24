const version = navigator.userAgent.match(/Chrome\/(\d+)/)[1];
const headers = [
  {
    operation: "set",
    header: "user-agent",
    value: `${navigator.userAgent} Edg/${version}.0.0.0`,
  },
  {
    operation: "set",
    header: "sec-ch-ua",
    value: `"Not.A/Brand";v="8", "Chromium";v="${version}", "Microsoft Edge";v="${version}"`,
  },
];

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [1],
  addRules: [
    {
      id: 1,
      priority: 1,
      action: {
        type: "modifyHeaders",
        requestHeaders: headers,
      },
      condition: {
        resourceTypes: Object.values(chrome.declarativeNetRequest.ResourceType),
      },
    },
  ],
});
