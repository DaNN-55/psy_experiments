var html = `<p class='attract'>请想象图片中的人是你的 <span class='lighting'>闺蜜</span> ，
回忆你和她之间发生的印象深刻的事件，并在纸上写下她的昵称或者名字</p>
<img src='imgs/woman.png'>`

var splitArray = html.split("<span class='lighting'>");
var content = splitArray[1].split('</span>')[0];
console.log(content); // 输出 '闺蜜'


