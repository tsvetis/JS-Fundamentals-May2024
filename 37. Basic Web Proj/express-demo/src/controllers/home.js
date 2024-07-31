let counter = 0;

module.exports = {
  home: (req, res) => {
    counter++;
    if (counter > 10) {
      res.redirect("/blocked");
    } else {
      res.render("home", { counter });
    }
  },

  blocked: (req, res) => {
    res.render("blocked");
  },

  about: (req, res) => {
    res.render("about");
  },
};
