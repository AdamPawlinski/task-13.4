function timeConvert(time) {
  if (time >= 3600) {
    var timeHour = (time / 3600).toFixed(0);
    var timeMin = ((time % 3600) / 60).toFixed(0);
    var timeSec = ((time % 3600) / 60) * 60).toFixed(0);
    time = timeHour + " hours " + timeMin + " min " + timeSec + " sec";
    return time;
  } else if (time >= 60) {
    var timeMin = (time / 60).toFixed(0);
    var timeSec =  (time % 60) * 60;
    time =  timeMin + " min " + timeSec + " sec";
    return time;
  }
}
