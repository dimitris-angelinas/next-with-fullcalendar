
const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/timeline',
  '@fullcalendar/resource-timeline',
])

module.exports = withTM({
  reactStrictMode: true,
})