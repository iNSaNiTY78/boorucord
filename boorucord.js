 
var imageURLs = [ 
 "https://cdn.discordapp.com/attachments/691740225013153883/748197703086899260/2556_9oK3yIA7vU"];
 function getImageTag() { var img = '<img src=\"'; var randomIndex = Math.floor(Math.random() * imageURLs.length); img += imageURLs[randomIndex]; img += '\" alt=\"Code by iNSaNiTY78\"/>'; return img; } 
