chrome.contextMenus.create({
  id: "my-context-menu",
  title: "convertWeibosafeLink",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "my-context-menu") {
    const filterOutLink = filterRedditLink(info)
    copyToClipboard(filterOutLink)
  }
});

const filterRedditLink = info =>{
  const linkPrefix = "https://www."
  const fullLink = info.linkUrl.replace(linkPrefix, "")

  fullLinkParts = fullLink.split('/')

  const combineFilterLink = fullLinkParts.slice(0,5).join("/")
  return combineFilterLink 
}

const copyToClipboard = str => {
  console.log("copyToClipboard");
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};