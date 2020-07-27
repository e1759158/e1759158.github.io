var r;
var score = 0;
var lev;
var count = 0;
var bestscore = 0;
function restart(){
    $('#home').hide();
    $('#result').hide();
    $('#gamemode').show();
}

function check(){
    $('#gamemode').hide();
    $('#result').show();
}

function start(stnum) {
        setInterval(function(){
            count += 1;
            $('#resultp').append("<p>"+count+"回目のスコア："+score+"</p>")
            if (score > bestscore){
                bestscore = score;
                document.getElementById("best").innerHTML = bestscore;
                $('#bestp').text("BESTスコア：" + bestscore);
            }
            score = 0;
        },30000)
    $('#home').hide();
    $('#button1').hide();
    for (var i = 1; i < 10; i++) {
        $("#live" + i).hide();
        $("#bomb" + i).hide();
        $("#dead" + i).hide();
        $("#boom" + i).hide();
    }
    //    게임판 초기화
    var bgm = document.getElementById("BGM");
    bgm.play();
    //    chromeの自動再生できない問題の解決（autoplay不可）
    $("#gamemode").show();
    //    スタートするとゲーム画面が出てくる
    lev = stnum;
    repeat = setInterval(function () {
        for (var i = 0; i < lev; i++) {
            r = Math.floor(Math.random() * 9 + 1)
            $("#boom" + r).hide();
            $("#dead" + r).hide();
            var tr = Math.random() * 15;
            if (tr < lev) {
                $('#live' + r).hide();
                $('#bomb' + r).show();
            } else {
                $('#bomb' + r).hide();
                $('#live' + r).show();
            };
        };
        var appear = document.getElementById("APPEAR");
        appear.play();
        //    id 표기 방법
        setTimeout(function () {
            for (var i = 1; i < 10; i++) {
                $("#live" + i).hide();
                $("#bomb" + i).hide();
            }
            document.getElementById("score").innerHTML = score;
        }, 1100)
        //    시간설정
    }, 1200)

}

function level(num) {
    for (var i = 1; i < 10; i++) {
        $("#live" + i).hide();
        $("#bomb" + i).hide();
    }
    lev = num;
}

function home() {
    $('#gamemode').hide();
    $("#home").show();
    $("#button2").show();
}

$('#bomb1').click(function () {
    score -= 10;
    var appear = document.getElementById("BOOM");
    appear.play();
    document.getElementById("boom1");
    $('#bomb1').hide();
    $("#boom1").show();
    setTimeout(function () {
        $('#boom1').hide();
    }, 400);
});
$('#bomb2').click(function () {
    score -= 10;
    var appear = document.getElementById("BOOM");
    appear.play();
    document.getElementById("boom2");
    $('#bomb2').hide();
    $("#boom2").show();
    setTimeout(function () {
        $('#boom2').hide();
    }, 400);
});
$('#bomb3').click(function () {
    score -= 10;
    var appear = document.getElementById("BOOM");
    appear.play();
    document.getElementById("boom3");
    $('#bomb3').hide();
    $("#boom3").show();
    setTimeout(function () {
        $('#boom3').hide();
    }, 400);
});
$('#bomb4').click(function () {
    score -= 10;
    var appear = document.getElementById("BOOM");
    appear.play();
    document.getElementById("boom4");
    $('#bomb4').hide();
    $("#boom4").show();
    setTimeout(function () {
        $('#boom4').hide();
    }, 400);
});
$('#bomb5').click(function () {
    score -= 10;
    var appear = document.getElementById("BOOM");
    appear.play();
    document.getElementById("boom5");
    $('#bomb5').hide();
    $("#boom5").show();
    setTimeout(function () {
        $('#boom5').hide();
    }, 400);
});
$('#bomb6').click(function () {
    score -= 10;
    var appear = document.getElementById("BOOM");
    appear.play();
    document.getElementById("boom6");
    $('#bomb6').hide();
    $("#boom6").show();
    setTimeout(function () {
        $('#boom6').hide();
    }, 400);
});
$('#bomb7').click(function () {
    score -= 10;
    var appear = document.getElementById("BOOM");
    appear.play();
    document.getElementById("boom7");
    $('#bomb7').hide();
    $("#boom7").show();
    setTimeout(function () {
        $('#boom7').hide();
    }, 400);
});
$('#bomb8').click(function () {
    score -= 10;
    var appear = document.getElementById("BOOM");
    appear.play();
    document.getElementById("boom8");
    $('#bomb8').hide();
    $("#boom8").show();
    setTimeout(function () {
        $('#boom8').hide();
    }, 400);
});
$('#bomb9').click(function () {
    score -= 10;
    var appear = document.getElementById("BOOM");
    appear.play();
    document.getElementById("boom9");
    $('#bomb9').hide();
    $("#boom9").show();
    setTimeout(function () {
        $('#boom9').hide();
    }, 400);
});

$('#live1').click(function () {
    score += 1;
    var appear = document.getElementById("PUNCH");
    appear.play();
    document.getElementById("dead1");
    $('#live1').hide();
    $("#dead1").show();
    setTimeout(function () {
        $('#dead1').hide();
    }, 400);
});
$('#live2').click(function () {
    score += 1;
    var appear = document.getElementById("PUNCH");
    appear.play();
    document.getElementById("dead2");
    $('#live2').hide();
    $("#dead2").show();
    setTimeout(function () {
        $('#dead2').hide();
    }, 400);
});
$('#live3').click(function () {
    score += 1;
    var appear = document.getElementById("PUNCH");
    appear.play();
    document.getElementById("dead3");
    $('#live3').hide();
    $("#dead3").show();
    setTimeout(function () {
        $('#dead3').hide();
    }, 400);
});
$('#live4').click(function () {
    score += 1;
    var appear = document.getElementById("PUNCH");
    appear.play();
    document.getElementById("dead4");
    $('#live4').hide();
    $("#dead4").show();
    setTimeout(function () {
        $('#dead4').hide();
    }, 400);
});
$('#live5').click(function () {
    score += 1;
    var appear = document.getElementById("PUNCH");
    appear.play();
    document.getElementById("dead5");
    $('#live5').hide();
    $("#dead5").show();
    setTimeout(function () {
        $('#dead5').hide();
    }, 400);
});
$('#live6').click(function () {
    score += 1;
    var appear = document.getElementById("PUNCH");
    appear.play();
    document.getElementById("dead6");
    $('#live6').hide();
    $("#dead6").show();
    setTimeout(function () {
        $('#dead6').hide();
    }, 400);
});
$('#live7').click(function () {
    score += 1;
    var appear = document.getElementById("PUNCH");
    appear.play();
    document.getElementById("dead7");
    $('#live7').hide();
    $("#dead7").show();
    setTimeout(function () {
        $('#dead7').hide();
    }, 400);
});
$('#live8').click(function () {
    score += 1;
    var appear = document.getElementById("PUNCH");
    appear.play();
    document.getElementById("dead8");
    $('#live8').hide();
    $("#dead8").show();
    setTimeout(function () {
        $('#dead8').hide();
    }, 400);
});
$('#live9').click(function () {
    score += 1;
    var appear = document.getElementById("PUNCH");
    appear.play();
    document.getElementById("dead9");
    $('#live9').hide();
    $("#dead9").show();
    setTimeout(function () {
        $('#dead9').hide();
    }, 400);
});