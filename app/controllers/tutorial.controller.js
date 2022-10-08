const db = require("../models");
const Tutorial = db.tutorials;

exports.create = (req, res) => {
    // Validate request
    console.log(req.body.title);
    if (!req.body.title) {
      res.status(400).send({status:"404", message: "Content can not be empty!" });
      return;
    }
    // Create a Tutorial
    const tutorial = new Tutorial({
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    });
    // Save Tutorial in the database
    tutorial
      .save(tutorial)
      .then(data => {
        
        res.status(200).send({status:"200", message: "success" ,data:data});
      })
      .catch(err => {
        res.status(500).send({
            status:"404",
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

//   Retrieve all Tutorials/ find by title from the database:
  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    Tutorial.find(condition)
      .then(data => {
        res.status(200).send({status:"200", message: "success" ,data:data});
      })
      .catch(err => {
        res.status(500).send({
            status:"404",
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
//   Retrieve a single object
exports.findOne = (req, res) => {
    const id = req.params.id;
    Tutorial.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({status:"404" ,message: "Not found Tutorial with id " + id });
        else res.status(200).send({status:"200", message: "success" ,data:data});
      })
      .catch(err => {
        res.status(404).send({status:"404" ,message: "Not found Tutorial with id " + id });
      });
  };
//   Update an object
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        status:"404",
        message: "Data to update can not be empty!"
      });
    }
    const id = req.params.id;
    Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            status:"404",
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        } else res.send({ status:"200",message: "Tutorial was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
            status:"404",
          message: "Error updating Tutorial with id=" + id
        });
      });
  };

//   Delete an object
exports.delete = (req, res) => {
  const id = req.params.id;
  Tutorial.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          status:"404",
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          status:"200",
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        status:"404",
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// Delete all objects

exports.deleteAll = (req, res) => {
    Tutorial.deleteMany({})
      .then(data => {
        res.send({
          status:"200",
          message: `${data.deletedCount} Tutorials were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
            status:"404",
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };

//   Find all objects by condition
exports.findAllPublished = (req, res) => {
    Tutorial.find({ published: true })
      .then(data => {
        res.status(200).send({status:"200", message: "success" ,data:data});
      })
      .catch(err => {
        res.status(500).send({
           status:"404",
           message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

  //   Find all objects by condition
exports.test = (req, res) => {
    res.render('admin/dashboard', {layout : ''});
  };
