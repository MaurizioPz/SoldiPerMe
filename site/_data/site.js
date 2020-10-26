module.exports = {
  name: "Soldi per me",
  shortDesc:
    "Un blog .",
  url: "https://soldiperme.netlify.app/",
  authorEmail: "maurizio@soldiper.me",
  authorHandle: "@mauriziopz",
  authorName: "Maurizio",
  postsPerPage: 4,
  socialImage: "/img/social.jpg",
  theme: {
    primary: {
      background: "#ff",
      text: "#240115",
      highlight: "#EC368D",
    },
    secondary: {
      background: "#240115",
      text: "#fff",
      highlight: "#EC368D",
    },
  },

  keystone: {
    comments: false,
    bookmarks: false,
    claps: false,
    login: false,
  },
  // Critical CSS results in much slower build times and uses a lot of system resources
  // turn on in production :)
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: true,
};
