const modifyElement = (e, f, p) => document.documentElement.style.setProperty(e, f, p);

const style = getComputedStyle(document.documentElement);
const ytBgColor = style.getPropertyValue("--yt-spec-base-background");

async function resetImportant() {
  modifyElement("--ytd-searchbox-background", "#000000", null);
  modifyElement("--ytd-searchbox-legacy-button-color", "#000000", null);
  modifyElement("--ytd-searchbox-legacy-border-color", "#0f0f0f", null);
  modifyElement("--ytd-searchbox-legacy-button-border-color", "#0f0f0f", null);
  modifyElement("--yt-spec-outline", "#0f0f0f", null);
  modifyElement("--yt-spec-base-background", "#000000", null);
  modifyElement("--yt-spec-additive-background", "#0f0f0f", null);
  modifyElement("--yt-spec-raised-background", "#0f0f0f", null);
  modifyElement("--yt-spec-menu-background", "#0f0f0f", null);
}

async function setTheme() {
  if (ytBgColor == "#fff") {
    console.log("Light theme active")
    return;
  } else {
    console.log("Dark theme active");
    modifyElement("--ytd-searchbox-background", "#000000", "important");
    modifyElement("--ytd-searchbox-legacy-button-color", "#000000", "important");
    modifyElement("--ytd-searchbox-legacy-border-color", "#0f0f0f", "important");
    modifyElement("--ytd-searchbox-legacy-button-border-color", "#0f0f0f", "important");
    modifyElement("--yt-spec-outline", "#0f0f0f", "important");
    modifyElement("--yt-spec-base-background", "#000000", "important");
    modifyElement("--yt-spec-additive-background", "#0f0f0f", "important");
    modifyElement("--yt-spec-raised-background", "#0f0f0f", "important");
    modifyElement("--yt-spec-menu-background", "#0f0f0f", "important");
  }
}

async function doWork() {
  console.log("AmoTube is running");
  await resetImportant()
  setTheme();
}

doWork();