var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var fileStore = require('session-file-store')(session);



var authData = {
    id: 'oyr@naver.com',
    pw: 'oyroyroyr'
}

function authIsOwner(request, response){
    if(request.session.is_logined){
        return true;
    } else {
        return false;
    }
}



app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('public'));
app.use(cookieParser());
app.use(session({
    secret: 'turtle',
    resave: false,
    saveUninitialized: true,
    store: new fileStore()
}));




app.get('/', function(request, response){
    app.use(express.static('public'));
    response.sendFile(__dirname + '/public/login.html');
});

app.get('/feed.html', function(request, response){
    console.log('#');
    if(!request.session.user){
        console.log('##########');
        response.redirect('/');
        return false;
    }
    response.sendFile(__dirname + '/public/feed.html');
});
app.get('/mypage.html', function(request, response){
    console.log('#');
    if(!request.session.user){
        console.log('##########');
        response.redirect('/');
        return false;
    }
    response.sendFile(__dirname + '/public/mypage.html');
});


app.post('/login_success', function(request, response){
    // response.cookie(request.body.id, request.body.pw);
    console.log(request.body);
    if(request.body.id === authData.id && request.body.pw === authData.pw){
        // 1번째 방법 : 임의로 세션 삽입
        // request.session.is_logined = true;
        // request.id = request.body.id;
        // 2번째 방법 : 객체로 세션 삽입
        request.session.user = {
            id: request.body.id,
            // pw: request.body.pw
        }
        response.sendFile(__dirname + '/public/feed.html');
    }
    else{
        response.redirect('/');
    }
});






app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});