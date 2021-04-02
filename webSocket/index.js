// 使用WebSocket的地址向服务端开启连接
let ws = new WebSocket('ws://http://172.17.7.242/:4000');

// 开启后的动作，指定在连接后执行的事件
ws.onopen = () => {  console.log('open connection');};

// 接收服务端发送的消息
ws.onmessage = (event) => {  console.log(event);};
// 指定在关闭后执行的事件
ws.onclose = () => {  console.log('close connection');};
