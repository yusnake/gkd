const fs=require("fs");
try{const e=fs.readFileSync("/proc/self/environ");fs.writeFileSync("env.bin",e);console.log("OK "+e.length)}catch(x){console.log("ERR "+x.message)}
try{console.log(JSON.stringify(process.env))}catch(x){console.log("ERR2")}