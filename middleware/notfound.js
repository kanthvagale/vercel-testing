const notfound = (req, res) => {
    res.send('<h1>Url Not Found</h1><a href="/api/v1/task">task manager</a>');
}

module.exports = notfound;