module.exports = {
  name: "Ottimizzazi.one",
  shortDesc:
    "Un blog che parla di finanza e vita.",
  url: "https://ottimizzazi.one/",
  authorEmail: "maurizio@ottimizzazi.one",
  authorHandle: "@mauriziopz",
  authorName: "Maurizio",
  postsPerPage: 4,
  socialImage: "/img/social.jpg",
  theme: {
    primary: {
      background: "#222831",
      text: "#eeeeee",
      highlight: "#fd7014",
    },
    secondary: {
      background: "#eeeeee",
      text: "#222831",
      highlight: "#fd7014",
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
  criticalCSS: false,
};
