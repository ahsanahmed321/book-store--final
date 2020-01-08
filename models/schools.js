const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  schoolName: {
    type: String,
    required: true
  },

  image: {
    type: String,
    required: true
  },

  books: [
    {
      class: {
        type: String,
        required: true
      },
      maths: {
        type: String
      },
      english: {
        type: String
      },
      urdu: {
        type: String
      },
      sindhi: {
        type: String
      },
      islamiat: {
        type: String
      },
      computer: {
        type: String
      },
      physics: {
        type: String
      },
      chemistry: {
        type: String
      },
      biology: {
        type: String
      },
      science: {
        type: String
      }
    }
  ],

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Schools = mongoose.model("schools", SchoolSchema);
