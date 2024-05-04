window.onload = function() {
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

function refresh() {    
    setTimeout(function () {
        location.reload()
    }, 100);
}