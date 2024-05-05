// getting current bgcolor value
var style = getComputedStyle(document.documentElement);
var bgcolor = style.getPropertyValue('--yt-spec-base-background');

// we are going to set the theme if the theme itself is only on dark
// if bgcolor is not #fff, it means it's on dark mode
if(bgcolor == "#fff") {
  console.log("Light theme active")
} else {
  setTheme();
  console.log("Dark theme active")
}

function setTheme(){
  document.documentElement.style.setProperty('--ytd-searchbox-background', 'black');
  document.documentElement.style.setProperty('--ytd-searchbox-legacy-button-color', 'black');
  document.documentElement.style.setProperty('--ytd-searchbox-legacy-border-color', '#0f0f0f');
  document.documentElement.style.setProperty('--ytd-searchbox-legacy-button-border-color', '#0f0f0f');
  document.documentElement.style.setProperty('--yt-spec-outline', '#0f0f0f');
  document.documentElement.style.setProperty('--yt-spec-base-background', 'black');
  document.documentElement.style.setProperty('--yt-spec-additive-background', '#0f0f0f');
  document.documentElement.style.setProperty('--yt-spec-raised-background', '#0f0f0f');
  document.documentElement.style.setProperty('--yt-spec-menu-background', "#0f0f0f");
}
