module.exports = function(config) {

  config.addPassthroughCopy("src/js");
  return  {
    dir: {
      input: "src",
<<<<<<< HEAD
      output: "dist"
=======
      output: "dist",
      data: "_data"   
>>>>>>> feat_ssg
    }
  };

};
