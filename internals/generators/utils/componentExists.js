/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');
const componentsFolder = fs.readdirSync(
  path.join(__dirname, '../../../app/components'),
);
const containersFolder = fs.readdirSync(
  path.join(__dirname, '../../../app/containers'),
);
const components = componentsFolder.concat(containersFolder);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
