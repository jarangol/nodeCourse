const fs = require('fs');
const path = require('path');
const readline = require('readline');
const express = require('express');
const { verifyToken } = require('../middlewares/authentication');
const { logRequest } = require('../middlewares/logger');

const app = express();

const orginalFilePath = path.resolve(__dirname, `../../public/assets/original.txt`);
const sortedFilePath = path.resolve(__dirname, `../../public/assets/sorted.txt`);

app.get('/asc', [verifyToken, logRequest], (req, res) => {
    fs.readFile('public/assets/original.txt', (err, data) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: `Original file couldn't be read.`
            });
        }

        let readInterface = readline.createInterface({
            input: fs.createReadStream(orginalFilePath)
        });

        if (fs.existsSync(sortedFilePath)) {
            fs.unlinkSync(sortedFilePath);
        }

        readInterface.on('line', function(line) {
            let sortedLine = eval(line).sort((a, b) => a - b);
            fs.appendFile(sortedFilePath, `[${sortedLine}];\n`, (err) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err: `Sorted file couldn't be saved.`
                    });
                }
            });
        });

        return res.json({
            ok: true,
            file: 'The file has been sorted in asc order.'
        });
    });
});

app.get('/des', [verifyToken, logRequest], (req, res) => {
    fs.readFile('public/assets/original.txt', (err, data) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: `Original file couldn't be read.`
            });
        }

        let readInterface = readline.createInterface({
            input: fs.createReadStream(orginalFilePath)
        });

        if (fs.existsSync(sortedFilePath)) {
            fs.unlinkSync(sortedFilePath);
        }

        readInterface.on('line', function(line) {
            let sortedLine = eval(line).sort((a, b) => b - a);
            fs.appendFile(sortedFilePath, `[${sortedLine}];\n`, (err) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err: `Sorted file couldn't be saved.`
                    });
                }
            });
        });

        return res.json({
            ok: true,
            file: 'The file has been sorted in des order.'
        });
    });
});

app.get('/mix', [verifyToken, logRequest], (req, res) => {
    fs.readFile('public/assets/original.txt', (err, data) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: `Original file couldn't be read.`
            });
        }

        let readInterface = readline.createInterface({
            input: fs.createReadStream(orginalFilePath)
        });

        if (fs.existsSync(sortedFilePath)) {
            fs.unlinkSync(sortedFilePath);
        }
        let cont = 0;
        readInterface.on('line', function(line) {
            let sortedLine = '';
            if (cont % 2 === 0) {
                sortedLine = eval(line).sort((a, b) => a - b);
            } else {
                sortedLine = eval(line).sort((a, b) => b - a);
            }
            fs.appendFile(sortedFilePath, `[${sortedLine}];\n`, (err) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err: `Sorted file couldn't be saved.`
                    });
                }
            });
            cont += 1;
        });

        return res.json({
            ok: true,
            file: 'The file has been sorted in mix order.'
        });
    });
});

module.exports = app;