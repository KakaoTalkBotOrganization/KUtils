importPackage(java.io.*);
importPackage(java.lang.*);
importPackage(java.net.*);
importPackage(android.widget.*);
importPackage(android.content.*);
importPackage(android.text.*);
importPackage(android.os.*);

const ctx = Api.getContext();
const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();

var path = "Bot Data";

String.prototype.replaceAll = function(a, b){
  return this.split(a).join(b);
}

String.prototype.replaceFirst = function(a, b){
  return this.replace(a, b);
}

String.prototype.replaceLast = function(a, b){
  var isContains = this.contains(a);
  if(isContains){
    var _o = m.lastIndexOf(a);
    var o_ = a.length;
    var o1 = m.substring(0, _o);
    var o2 = m.substring((_o+o_),m.length);
    return o1+""+b+""+o2;
  }
  else return this;
}	

String.prototype.contains = function(a){
  var isContains = this.indexOf(a);
  return (isContains==-1?true:false);
}

Array.prototype.contains = function(a){
  var isContains = this.indexOf(a);
  return (isContains==-1?true:false);
}

String.prototype.trimAllLine = function(){
	var preData = this.split("\n");
	var data = [];
	for(var i=0;i<preData.length;i++){
		var cash = preData[i].trim();
		data.push(cash);
	}
	return data.join("\n");
 }

const KUtils = {
	setPathString : function(str){
		path = str;
	},
  save : function(a, b){
    var aa = a.replaceLast("/","☆");
    aa = aa.split("☆")[0];
    KUtils.makeFolder(aa);
    var c = new File(sdcard+"/"+path+"/"+a+".txt");
    var d = new FileOutputStream(c);
    var e = new String(b);
    d.write(e.getBytes());
    d.close();
  },
  readString : function(a, z){
    var b = new java.io.File(sdcard+"/"+path+"/"+a+".txt");
    if(!(b.exists())) return z;
    var c = new FileInputStream(b);
    var d = new InputStreamReader(c);
    var e = new BufferedReader(d);
    var f = e.readLine();
    var g = "";
    while((g=e.readLine())!=null){
      f += "\n"+g;
    }
    c.close();
    d.close();
    e.close();
    return f+"";
  },
  readInt : function(a, z){
    return Number(readString(a, z));
  },
  makeFolder : function(name){
    var folder = new File(sdcard+"/"+path+"/"+name);
    folder.mkdirs();
  },
  delete : function(name){
    var folder = new File(sdcard+"/"+path+"/"+name);
    folder.delete();
  },
  makeFile: function(name) {
    var file = new File(sdcard+"/"+path+"/"+name);
    file.createNewFile();
  },
  error: function(e){
    var data = "Error: "+e+"\nAt: "+e.lineNumber;
    KUtils.toast(data);
    KUtils.copy(data);
    Log.error(data);
  },
  makeToast : function(text){
    Api.showToast(text, text);
  },
  copy : function(text){
    Api.UIThread(
      function(){
        try {
          ctx.getSystemService(CLIPBOARD_SERVICE).setPrimaryClip(newPlainText(text, text)); 
        }
        catch(e) {
          KUtils.error("copy", e);
        }
    });
  },
  toString : function(obj){
    return obj+"";
  },
  toNumber : function(str){
    try{
      return Number(str);
    }
    catch(e){
      return NaN;
    }
  },
  toBoolean : function(tf){
    if(tf!="true"&&tf!="false") return null;
    return tf.equals("true");
  },
  deleteHtml : function(html){
    return Html.fromHtml(html).toString();
  },
  getHtml : function(zz){
    try{
      if(Build.VERSION.SDK_INT>9) {
        var policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
        StrictMode.setThreadPolicy(policy);
      }
      var url = new URL(zz);
      var con = url.openConnection();
      if(con!=null){
        con.setConnectTimeout(5000);
        con.setUseCaches(false);
        var isr = new InputStreamReader(con.getInputStream());
        var br = new BufferedReader(isr);
        var str = br.readLine();
        var line = "";
        while((line = br.readLine()) != null){
         str += "\n" + line;
        }
        isr.close();
        br.close();
        con.disconnect();
      }
    return str.toString();
    }
    catch(e){
      KUtils.error(e);
    }
  },
  makeRandom : function(min, max){
    max = max + 1;
    var RandVal = Math.random()*(max-min)+min;
    return Math.floor(RandVal);
  },
  makeNotification: function(title, content){
    Api.makeNoti(title, content, 0);
  }
};