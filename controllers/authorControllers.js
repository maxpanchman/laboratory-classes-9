const Author = require("../models/Author");

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const author = await Author.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName },
      { new: true, runValidators: true }
    );

    if (!author) return res.status(404).json({ error: "Author not found" });
    res.status(200).json(author);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};