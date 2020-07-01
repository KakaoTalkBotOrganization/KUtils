/**
 * Create by Sungbin at 2020.07.01.
 *
 * Copyright (C) SungBin
 * all rights reserved.
 */
 
importPackage(java.io);
importPackage(java.net);
importPackage(android.os);
importPackage(android.text);

const sdcard = Environment.getExternalStorageDirectory().getAbsolutePath();

Array.prototype.size = function() {
    return this.length;
};

Array.prototype.isEmpty = function() {
    return this.size() > 0;
};

Array.prototype.isNotEmpty = function() {
    return !this.isEmpty();
};

Array.prototype.contains = function(text) {
    return this.includes(text);
};

Array.prototype.remove = function(element, removeAll) {
    if (!this.contains(element)) return this;
    if (!removeAll) {
        this.splice(index, 1);
        return this;
    } else {
        this.remove(element);
        if (this.contains(element)) this.remove(element, true);
        else return this;
    }
};

String.prototype.toInt = function() {
    return Number(this);
};

String.prototype.toBoolean = function() {
   return this == true;
};

String.prototype.trimAllLine = function() {
    return this.split("\n").map(e => {
        return e.trim();
    }).join("\n");
};

String.prototype.contains = function(text) {
    return this.includes(text);
};

String.prototype.replaceAll = function(a, b) {
    return this.split(a).join(b);
};

String.prototype.replaceLast = function(a, b) {
    if (this.contains(a)) {
        let lastIndex = this.lastIndexOf(a);
        let string1 = this.substring(0, lastIndex);
        let string2 = this.substring((lastIndex + a.length), this.length);
        return string1 + b + string2;
    } else return this;
};

Number.prototype.toInt = function() {
    return String(this).toInt();
};

const KUtils = {
    save(path, content, createRootFolder) {
        if (createRootFolder) {
            let rootPath = path.replaceLast("/", "☆").split("☆")[0];
            KUtils.makeFolder(rootPath);
        }
        let file = new File(sdcard + "/" + path);
        let output = new FileOutputStream(file);
        let string = new java.lang.String(content);
        output.write(string.getBytes());
        output.close();
    }, 
    read(path, notExist) {
        let file = new File(sdcard + "/" + path);
        if (!file.exists()) return notExist;
        let input = new FileInputStream(file);
        let output = new InputStreamReader(input);
        let reader = new BufferedReader(output);
        let string = reader.readLine();
        while (reader.readLine() != null) {
            string += "\n" + reader.readLine();
        }
        input.close();
        output.close();
        reader.close();
        return string + "";
    }, 
    makeFolder(path) new File(sdcard + "/" + path).mkdirs(), 
    removeFolder(path) new File(sdcard + "/" + path).delete(), 
    makeFile(path) new File(sdcard + "/" + path).createNewFile(), 
    makeRandom(min, max) Math.floor(Math.random() * (++max - min) + min)
};

String.prototype.convert = function(argus) {
    return eval(("\"" + this.match(/\$\{([^}]*)\}|\$([^\W]*)|\}?([^$]*)/gim).map(e => {
        if (typeof e !== "string") return "";
        if (e.startsWith("$") && e.endsWith("}")) {
            let value = e.substr(1);
            value = value.substr(1, value.lastIndexOf("}") - 1);
            return "\"+(" + value + ")+\"";
        } else if (e.startsWith("$") && !e.endsWith("}")) {
            return "\"+" + e.substr(1) + "+\"";
        } else return e;
    }).join("") + "\"").split("\n").join("☆♡♡☆")).split("☆♡♡☆").join("\n");
};