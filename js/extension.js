const modifyElement = (e, f) => document.documentElement.style.setProperty(e, f);

const style = getComputedStyle(document.documentElement);
const ytBgColor = style.getPropertyValue('--yt-spec-base-background');

function setTheme() {
  if (ytBgColor == "#fff") {
    console.log("Light theme active")
    return;
  } else {
    console.log("Dark theme active");
    modifyElement('--ytd-searchbox-background', 'black');
    modifyElement('--ytd-searchbox-legacy-button-color', 'black');
    modifyElement('--ytd-searchbox-legacy-border-color', '#0f0f0f');
    modifyElement('--ytd-searchbox-legacy-button-border-color', '#0f0f0f');
    modifyElement('--yt-spec-outline', '#0f0f0f');
    modifyElement('--yt-spec-base-background', 'black');
    modifyElement('--yt-spec-additive-background', '#0f0f0f');
    modifyElement('--yt-spec-raised-background', '#0f0f0f');
    modifyElement('--yt-spec-menu-background', "#0f0f0f");
  }
}

setTheme();