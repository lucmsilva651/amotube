// Getting current primary_color value
var style = getComputedStyle(document.documentElement);
var prim_color = style.getPropertyValue('--yt-spec-brand-background-primary');

// We are going to set the theme if color is not white.
// if prim_color is #fff, it means it's on dark mode
if(prim_color == "#fff"){
  console.log("It's light so theme won't be applied")
}else{
  setTheme();
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