
function sendmessage() {
 
    const fs = require('fs');

    fs.appendFile('contactrecord.txt', 'data to append', function (err) {
    if (err) throw err;
    console.log('Saved!');
    });

    let fso = CreateObject("Scripting.FileSystemObject"); 
    let s   = fso.CreateTextFile("contactrecord.txt", True);
 
    var Name = document.getElementById('Name');
    var Email  = document.getElementById('Email');
    var Message  = document.getElementById('Subject');
 
    s.writeline("Name :" + Name);
    s.writeline("Email :" + Email);
    s.writeline("Message :" + Message);
 
    s.writeline("-----------------------------");
    s.Close();
 }