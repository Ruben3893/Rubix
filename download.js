const https = require('https');
const fs = require('fs');

const url = 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzdiNzhmMmE4ZmQ1ZDQxNzZhYmU3MGE1YWQxMzU1OWMyEgsSBxDikq6PzAkYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzk2ODU0MjcwNjQ4ODAwNTY0Nw&filename=&opi=89354086';
https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        fs.writeFileSync('temp.html', data);
        console.log('done');
    });
});
