!function(){
    function writeCode(prefix, code, fn){
        let container = document.querySelector("#code")
        let styleTag = document.querySelector("#styleCode")
        let n = 1
        let id = setInterval(function(){
            container.innerHTML = code.substr(0,n)
            styleTag.innerHTML = code.substr(0,n)
            container.scrollTop = container.scrollHeight
            n+=1
            if(n > code.length) {
                clearInterval(id)
            }
        },10)
    }
    let code = '/*首先，需要准备皮卡丘的皮*/\n' +
        '#preview {\n' +
        '\theight: 100%;\n' +
        '\tbackground: #fee433;\n' +
        '\tdisplay: flex;\n' +
        '\tjustify-content: center;\n' +
        '\talign-items: center\n' +
        '}\n' +
        '#preview .wrap {\n' +
        '\twidth: 100%;\n' +
        '\theight: 165px;\n' +
        '\tposition: relative\n' +
        '}\n' +
        '/*接下来，画皮卡丘的鼻子*/\n' +
        '#preview .nose {\n' +
        '\twidth: 0;\n' +
        '\theight: 0;\n' +
        '\tborder-style: solid;\n' +
        '\tborder-width: 10px 11px;\n' +
        '\tborder-color: #000 transparent transparent transparent;\n' +
        '\tborder-radius: 11px;\n' +
        '\tposition: absolute;\n' +
        '\tleft: 50%;\n' +
        '\ttop: 28px;\n' +
        '\ttransform: translateX(-50%)\n' +
        '}\n' +
        '/*接下来，画皮卡丘的眼睛*/\n' +
        '#preview .eye {\n' +
        '\twidth: 49px;\n' +
        '\theight: 49px;\n' +
        '\tbackground: #2e2e2e;\n' +
        '\tposition: absolute;\n' +
        '\ttop: 10px;\n' +
        '\tborder-radius: 50%;\n' +
        '\tborder: 2px solid #000\n' +
        '}\n' +
        '/*眼睛里的珠子*/\n' +
        '#preview .eye:before {\n' +
        '\tdisplay: block;\n' +
        '\tcontent: \'\';\n' +
        '\twidth: 24px;\n' +
        '\theight: 24px;\n' +
        '\tborder-radius: 50%;\n' +
        '\tbackground: #fff;\n' +
        '\tposition: absolute;\n' +
        '\tleft: 6px;\n' +
        '\ttop: -1px;\n' +
        '\tborder: 2px solid #000\n' +
        '}\n' +
        '/*左眼在左边*/\n' +
        '#preview .eye.left {\n' +
        '\tright: 50%;\n' +
        '\tmargin-right: 90px\n' +
        '}\n' +
        '/*右眼在右边*/\n' +
        '#preview .eye.right {\n' +
        '\tleft: 50%;\n' +
        '\tmargin-left: 90px\n' +
        '}\n' +
        '/*接下来，画皮卡丘的脸*/\n' +
        '#preview .face {\n' +
        '\twidth: 68px;\n' +
        '\theight: 68px;\n' +
        '\tbackground: #fc0d1c;\n' +
        '\tborder: 2px solid #000;\n' +
        '\tborder-radius: 50%;\n' +
        '\tposition: absolute;\n' +
        '\ttop: 85px\n' +
        '}\n' +
        '/*将脸放到正确的位置*/\n' +
        '#preview .face.left {\n' +
        '\tright: 50%;\n' +
        '\tmargin-right: 116px\n' +
        '}\n' +
        '#preview .face.right {\n' +
        '\tleft: 50%;\n' +
        '\tmargin-left: 116px\n' +
        '}\n' +
        '/*接下来，画皮卡丘的上嘴唇*/\n' +
        '#preview .upperLip {\n' +
        '\twidth: 80px;\n' +
        '\theight: 23px;\n' +
        '\tborder: 3px solid #000;\n' +
        '\tborder-top: none;\n' +
        '\tbackground: #fee433;\n' +
        '\tposition: absolute;\n' +
        '\ttop: 46px\n' +
        '}\n' +
        '#preview .upperLip.left {\n' +
        '\tborder-right: none;\n' +
        '\tborder-bottom-left-radius: 40px 20px;\n' +
        '\tright: 50%;\n' +
        '\ttransform: rotate(-20deg)\n' +
        '}\n' +
        '\n' +
        '#preview .upperLip.right {\n' +
        '\tborder-left: none;\n' +
        '\tborder-bottom-right-radius: 40px 20px;\n' +
        '\tleft: 50%;\n' +
        '\ttransform: rotate(20deg)\n' +
        '}\n' +
        '/*接下来，画皮卡丘的下嘴唇*/\n' +
        '#preview .lowerLip-wrap {\n' +
        '\twidth: 200px;\n' +
        '\theight: 110px;\n' +
        '\tposition: absolute;\n' +
        '\tbottom: 0;\n' +
        '\tleft: 50%;\n' +
        '\ttransform: translate(-50%);\n' +
        '\toverflow: hidden\n' +
        '}\n' +
        '#preview .lowerLip {\n' +
        '\twidth: 200px;\n' +
        '\theight: 3500px;\n' +
        '\tborder-radius: 100px/490px;\n' +
        '\tborder: 3px solid #000;\n' +
        '\tposition: absolute;\n' +
        '\tbottom: 0;\n' +
        '\tleft: 50%;\n' +
        '\ttransform: translateX(-50%);\n' +
        '\tbackground: #990513;\n' +
        '\toverflow: hidden\n' +
        '}\n' +
        '/*最后，画皮卡丘的舌头*/\n' +
        '#preview .lowerLip:after {\n' +
        '\tdisplay: block;\n' +
        '\tcontent: \'\';\n' +
        '\twidth: 100px;\n' +
        '\theight: 100px;\n' +
        '\tbackground: #fc4a62;\n' +
        '\tborder-radius: 50%;\n' +
        '\tposition: absolute;\n' +
        '\tbottom: -20px;\n' +
        '\tleft: 50%;\n' +
        '\ttransform: translateX(-50%)\n' +
        '}\n'
    writeCode('',code)
}.call();