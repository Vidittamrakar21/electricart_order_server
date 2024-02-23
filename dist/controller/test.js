"use strict";
const testserver = (req, res) => {
    try {
        //@ts-ignore
        res.json({ message: "Everything works fine !" });
    }
    catch (error) {
        //@ts-ignore
        res.json({ Error: error });
    }
};
module.exports = { testserver };
