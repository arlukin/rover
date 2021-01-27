const fs = require("fs").promises;
const fsConstants = require("fs").constants;

class Map {
  constructor() {
    this.data = {};
  }

  async load(name) {
    const dataFilePath = `${process.cwd()}/resources/maps/${name}/data.json`;
    return fs
      .access(dataFilePath, fsConstants.R_OK)
      .then((data) => {
        this.data = require(dataFilePath);
        this.data = data;
        return true;
      })
      .catch((err) => {
        throw new Error(`Can't load file ${dataFilePath}`);
      });
  }
}

module.exports = { Map };
