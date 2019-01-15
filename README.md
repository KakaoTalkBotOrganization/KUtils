# KUtils
> Kakaotalk bot Utils.

![Logo](https://blogthumb.pstatic.net/MjAxOTAxMTFfMTYy/MDAxNTQ3MjE3MjYyMjAy.zu4YQKbqflkpqmk-Pz7L4dSJzYk_wJJQeH_bDo8un-Ig.eAxgLcgXSHwmtCIp6M1Dt29feaL4_Ck9To7PAdw2xVMg.GIF.wltjdqls5304/logo.gif?type=w2)

-------

## What is KUtils?
> KUtils is a library designed to make it easy for users to create Kakaotalk Bot.

## How can I use KUtils?
> Add the KUtils source code to the top of your script.

## All Methods.
**KUtils.**
- makeVibration(int time)
- makeNotification(String title, String content)
- makeToast(String content)
- save(String fileName, String fileContent)
- delete(String fileName)
- createFile(String fileName)
- createFolder(String folderName)
- toBoolean(String true/false)
- toNumber(String number)
- toString(Object obj)
- copy(String content)
- error(Exception e)
- getHtml(String adress)
- deleteHtml(String htmlCode)
- makeRandom(int min, int max)

**String.prototype.**
- replaceAll(String ori, String pre)
- replaceFirst(String ori, String pre)
- replaceLast(String ori, String pre)
- replaceCenter(String ori, String pre)
- contains(String content)
- trimAllLine()

**Array.prototype.**
- replaceArrayData(String ori, Content pre)
- deleteArrayData(String content)

**RegReplace.**
- deleteAllKor()
- deleteAllNumber()
- deleteAllSC()
- deleteAllNotKor()
- deleteAllNotNumber()
- deleteAllNotSC()
> SC : Special Characters