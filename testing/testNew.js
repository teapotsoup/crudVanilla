var testFolder = 'audio'; // 불러올 폴더의 위치(..은 이전 폴더, .은 현재 폴더)
var http = require('http');
var fs = require('fs'); // filesystem을 사용하기 위해 

var app = http.createServer(function (request, response) {
    var url = request.url;
    if (request.url == '/') {
        url = '/testNew.html';
    }
    if (request.url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

});
app.listen(3000);
fs.readdir(testFolder, function (err, filelist) {  // 배열 형태로 출력

    console.log(filelist);

})



fs.readdir(testFolder, (err, filelist) => { // 하나의 데이터씩 나누어 출력

    filelist.forEach(file => {

        console.log(file);

    })

})

var player = require('play-sound')(opts = {})

const jsdom = require('mocha-jsdom'); 
global.document = jsdom({url: "http://localhost:3000"});


// const [myAudio] = useState(typeof Audio !== "undefined" && new Audio(URL));
// myAudio.src = "audio/Frank Ocean_In My Room.mp3";
const btnPlay = document.getElementById("btnPlay");

// // 토글 버튼
let isitplay = false;
btnPlay.onclick = function (e) {
    console.log(e);
    if (isitplay === false) {
        isitplay = true;
        player.play('Frank Ocean_In My Room.mp3', function (err) {
            if (err) throw err;

          });
        btnPlay.innerText = "일시정지 버튼";
    } else {
        isitplay = false;
        player.pause('Frank Ocean_In My Room.mp3', function (err) {
            if (err) throw err;

          });
        btnPlay.innerText = "재생 버튼";
    }
}