importPackage(java.io);
importPackage(java.net);
importPackage(android.os);
importPackage(android.text);

const sdcard = Environment.getExternalStorageDirectory().getAbsolutePath();

const cho = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ" ]; 
const jung = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ" ]; 
const jong = [ "", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ" ];
const eng = "qwertyuiopasdfghjklzxcvbnm";
const kor = "ㅂㅈㄷㄱㅅㅛㅕㅑㅐㅔㅁㄴㅇㄹㅎㅗㅓㅏㅣㅋㅌㅊㅍㅠㅜㅡ";
const kor2engFilter = {
    "ㄲ": "R",
    "ㄸ": "E",
    "ㅃ": "Q",
    "ㅆ": "T",
    "ㅉ": "W",
    "ㅒ": "O",
    "ㅖ": "P",
    "ㄳ": "ㄱㅅ",
    "ㄵ": "ㄴㅈ",
    "ㄶ": "ㄴㅎ",
    "ㄺ": "ㄹㄱ",
    "ㄻ": "ㄹㅁ",
    "ㄼ": "ㄹㅂ",
    "ㄽ": "ㄹㅅ",
    "ㄾ": "ㄹㅌ",
    "ㄿ": "ㄹㅍ",
    "ㅀ": "ㄹㅎ",
    "ㅄ": "ㅂㅅ",
    "ㅘ": "ㅗㅏ",
    "ㅙ": "ㅗㅐ",
    "ㅚ": "ㅗㅣ",
    "ㅝ": "ㅜㅓ",
    "ㅞ": "ㅜㅔ",
    "ㅟ": "ㅜㅣ",
    "ㅢ": "ㅡㅣ"
}
const eng2korFilter = {
    "Q": "ㅃ",
    "W": "ㅉ",
    "E": "ㄸ",
    "R": "ㄲ",
    "T": "ㅆ",
    "O": "ㅒ",
    "P": "ㅖ"
}

Array.prototype.size = function(){
	return this.length;
}
 
Array.prototype.isEmpty = function(){
	return this.size() > 0
}

Array.prototype.isNotEmpty = function(){
	return !this.isEmpty;
}
 
String.prototype.replaceAll = function(a, b){
    return this.split(a).join(b);
}

String.prototype.checkSpell = function(){
    var main = KUtils.getHtml("https://m.search.naver.com/p/csearch/ocontent/spellchecker.nhn?_callback=jQuery1124036706497182107567_1539623139313&q=" + this.replaceAll(" ", "+"));
    return main.split("notag_html\":\"")[1].split("\"")[0];
}

String.prototype.replaceLast = function(a, b){
    let isContains = this.contains(a);
    if(isContains){
        let lastIndex = this.lastIndexOf(a);
        let string1 = this.substring(0, lastIndex);
        let string2 = this.substring((lastIndex + a.length), this.length);
        return string1 + b + string2;
    }
    else return this;
}	

String.prototype.toInt = function(){
	try{
        return Number(this);
    }
    catch(e){
        throw(e);
    }
}

String.prototype.toBoolean = function(){
	if(this == "true" || this == "false"){
	    return this.equals("true");
	}
	else throw("Type error!\nPrototype is must be true or false.");
}

String.prototype.trimAllLine = function(){
	let preData = this.split("\n");
	let data = [];
	for(let i=0;i<preData.length;i++){
		let cash = preData[i].trim();
		data.push(cash);
	}
	return data.join("\n");
}

String.prototype.removeHtmlTag = function(){
	return Html.fromHtml(this).toString();
}

String.prototype.contains = function(text){
    return this.includes(text);
}

String.prototype.kotlin2js = function kotlin2js() {
    return "\"" + this.replaceAll("\n", "☆♡♡☆").match(/\$\{([^}]*)\}|\$([^\W]*)|\}?([^$]*)/gim).map(function(e){
        if(typeof e !== "string") return ""; 
        if(e.startsWith("$") && e.endsWith("}")){
            let value = e.substr(1);
            value = value.substr(1, value.lastIndexOf("}") - 1);
            return "\"+(" + value + ")+\"";
        }
        else if(e.startsWith("$") && !e.endsWith("}")){
            return "\"+" + e.substr(1) + "+\"";
        }
        else return e;
    }).join("").replaceAll("☆♡♡☆", "\\n") + "\"";
};
 
 
kotlin2js = (text) => {
	text = text.replaceAll("\n", "☆♡♡☆");
    return "\"" + text.match(/\$\{([^}]*)\}|\$([^\W]*)|\}?([^$]*)/gim).map(function(e){
        if(typeof e !== "string") return ""; 
        if(e.startsWith("$") && e.endsWith("}")){
            let value = e.substr(1);
            value = value.substr(1, value.lastIndexOf("}") - 1);
            return "\"+(" + value + ")+\"";
        }
        else if(e.startsWith("$") && !e.endsWith("}")){
            return "\"+" + e.substr(1) + "+\"";
        } else return e;
    }).join("").replaceAll("☆♡♡☆", "\\n") + "\"";
}

Array.prototype.contains = function(text){
    let isContains = this.indexOf(text);
    return (isContains == -1 ? false : true);
}

Array.prototype.remove = function(element, removeAll){
	let index = this.indexOf(element);
	if(index == -1) return;
	if(!removeAll){
        this.splice(index, 1);
    }
    else {
        this.remove(element);
        if(this.indexOf(element) > -1) this.remove(element, true);
    }
}

const KUtils = {
    save: (path, content, createRootFolder) => {
        if(createRootFolder && createRootFolder != undefined){
            let rootPath = path.replaceLast("/","☆").split("☆")[0];
            KUtils.makeFolder(rootPath);
        }
        let file = new File(sdcard + "/" + path);
        let output = new FileOutputStream(file);
        let string = new java.lang.String(content);
        output.write(string.getBytes());
        output.close();
    },
    read: (path, notExist) => {
        let file = new File(sdcard + "/" + path);
        if(!file.exists()) return notExist;
        let input = new FileInputStream(file);
        let output = new InputStreamReader(input);
        let reader = new BufferedReader(output);
        let string = reader.readLine();
        while(reader.readLine() != null){
            string += "\n" + reader.readLine();
        }
        input.close();
        output.close();
        reader.close();
        return string + "";
    },
    makeFolder: (path) => new File(sdcard + "/" + path).mkdirs(),
    removeFolder: (path) => new File(sdcard + "/" + path).delete(),
    makeFile: (path) => new File(sdcard + "/" + path).createNewFile(),
    getHtml: (address) => {
        try{
            let policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
            StrictMode.setThreadPolicy(policy);

            if(!address.contains("http")) address = "http://" + address;

            let url = new URL(address);
            let con = url.openConnection();

            con.setConnectTimeout(5000);
            con.setUseCaches(false);
            let isr = new InputStreamReader(con.getInputStream());
            let br = new BufferedReader(isr);
            let str = br.readLine();
            while(br.readLine() != null){
                str += "\n" + br.readLine();

            }

            isr.close();
            br.close();
            con.disconnect();
            return str + "";
        }
        catch(e){
            throw e;
       }
    },
    makeRandom: (min, max) => {
        max = max + 1;
        return Math.floor(Math.random() * (max - min) + min);
    },
    fastLog: (content) => {
        let pre = KUtils.readLog();
        KUtils.save("KUtils/Log/log.log", pre + "\n" + content, true)
    },
    readLog:_ => KUtils.read("KUtils/Log/log.log", "Log is empty."),
    splitKor: (text) => Kor.split(text),
    joinKor: (text) => Kor.longJoin(text),
    similarityKor: (text, text2) => Kor.checkSameWord(text, text2),
    kor2eng: (text) => Kor.kor2eng(text),
    eng2kor: (text) => Kor.eng2kor(text)
}

const Kor = {
    split: (str) => {
        let string = "";
        for(let i=0;i<str.length;i++){
            if(str[i].match(/[가-힣]/) == null) {
                string += str[i];
                continue;
            }
            let CompleteCode = str.charCodeAt(i);
            let UniValue = CompleteCode - 0xAC00; 
            let Jong = UniValue % 28; 
            let Jung = ((UniValue - Jong) / 28 ) % 21; 
            let Cho = parseInt(((UniValue - Jong) / 28) / 21); 
            string += cho[Cho];
            string += jung[Jung];
            string += jong[Jong];
        }
        return string;
    },
    join: (str) => {
        if(str.length == 3){
            return String.fromCharCode((cho.indexOf(str[0]) * 588 + 44032) + (jung.indexOf(str[1]) * 28) + jong.indexOf(str[2]));
        }
        if(str.length == 2){
            return String.fromCharCode((cho.indexOf(str[0]) * 588 + 44032) + (jung.indexOf(str[1]) * 28));
        }
    },
    kSplit: (a) => {
        var string = [];
        for(var i=0;i<a.length;i++){
            var c = a.substr(i);
            if((cho.indexOf(c[0]) != -1 && jung.indexOf(c[1]) != -1 && jong.indexOf(c[2]) != -1 && jung.indexOf(c[3]) != -1) || (cho.indexOf(c[0]) != -1 && jung.indexOf(c[1]) != -1 && jong.indexOf(c[2]) == -1)){
                string.push(c.substr(0, 2));
                i += 2;
                c = a.substr(i);
            }
            if(cho.indexOf(c[0]) != -1 && jung.indexOf(c[1]) != -1 && jong.indexOf(c[2]) != -1 && jung.indexOf(c[3]) == -1){
                string.push(c.substr(0, 3));
                i += 3;
                c = a.substr(i);
            }
            else if(jong.indexOf(c[0]) == -1 && jung.indexOf(c[0]) == -1){
                string.push(c[0]);
                i++;
             }
        }
        return string;
    },
    longJoin: (str) => {
        var a = Kor.kSplit(str);
        var string = "";
        for(var i=0;i<a.length;i++){
            if(a[i] !== undefined){
                if(a[i].replace(/[ㄱ-ㅎㅏ-ㅣ]/g,"") == ""){
                    string += Kor.join(a[i]);
                }
                else string += a[i];
            }
        }
        return string;
    },
    checkSameWord: (str, comp) => {
        comp = Kor.korDivide(comp, true);
        let res = Kor.korDivide(str, true);
        let i, j = 0;
        let sim = 0;
        let per = [];
        for(let rp=0;rp<2;rp++) {
            for(i=0;i<comp.length;i++) {
                for(let k=j;k<res.length;k++) {
                    if(k-j>= 2) break;
                    if(comp[i] == res[k]) {
                        sim++;
                        j =k + 1;
                        break;
                    }
                }
            }
            per[rp] = sim / (comp.length >= res.length ? comp.length : res.length) * 100;
            let temp = comp;
            comp = res;
            res = temp;
            sim = 0;
        }
        return Math.floor(per[0] >= per[1] ? per[0] : per[1]);
    },
    korDivide: (a, b) => {
        try{
            if(b == undefined) {
                b = false;
            }
            let res = "";
            for(let i=0;i<a.length;i++) {
                if(a[i].match(/[가-힣]/) == null){
                    res += a[i];
                }
                let temp = a.charCodeAt(i) - 44032;
                let Jong = temp % 28;
                let Jung = ((temp - Jong) / 28) % 21;
                let Cho = (((temp - Jong) / 28) -Jung) / 21;
                let jungsung = jung[Jung];
                let jongsung = jong[Jong];
                if(b) {
                    jongsung = jongsung.replace(/[ㅅㅈㅊㅌㅎ]/g, "ㄷ");
                    jongsung = jongsung.replace(/ㄶ/g, "ㄴ");
                    jongsung = jongsung.replace(/ㄻ/g, "ㅁ");
                    jongsung = jongsung.replace(/ㅍ/g, "ㅂ");
                    jungsung = jungsung.replace(/ㅚㅞ/g, "ㅙ");
                    jungsung = jungsung.replace(/ㅔ/g, "ㅐ");
                }
                res += cho[Cho] + jungsung + jongsung;
            }
            return res;
        }
        catch(e){
            throw("Type error!\nParameter language is must be Korean.");
        }
    },
    kor2eng: (text) => {
        let textSplit = KUtils.splitKor(text);
        let string = "";
        textSplit.split("").map(function(e){
            let cash = eng[kor.indexOf(e)];
            if(cash != undefined) string += cash;
            else {
                let filterObj = Object.keys(kor2engFilter);
                let filterIndex = filterObj.indexOf(e);
                let filterChar = kor2engFilter[filterObj[filterIndex]];
                if(filterChar == undefined){
                    string += e;
                    return;
                }
                if(filterChar.match(/[A-Z]/) == null){
                    filterChar.split("").map(function(e){
                         string += eng[kor.indexOf(e)];
                    });
                }
                else string += filterChar
            }
        });
        return string;
    },
    eng2kor: (text) => {
        let string = "";
        text.split("").map(function(e){
            let cash = kor[eng.indexOf(e)];
            Log.d(cash);
            if(cash != undefined) string += cash;
            else {
                let filterObj = Object.keys(eng2korFilter);
                let filterIndex = filterObj.indexOf(e);
                let filterChar = eng2korFilter[filterObj[filterIndex]];
                if(filterChar == undefined){
                    string += e;
                    return;
                }
                else string += filterChar
            }
        });
       var data = Kor.longJoin(string);
       if(data.length > 0) return data;
       else return "영어 -> 한글 변환에 실패했어요 😭";
    }
}
