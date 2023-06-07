const sample = {};

sample.get = (req, res) => {
    const now = new Date();
    res.send(now.toLocaleDateString());
}

module.exports = sample;