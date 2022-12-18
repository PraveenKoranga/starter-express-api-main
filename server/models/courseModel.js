import mongoose from "mongoose";

const CourseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  gotolearnpage: {
    type: String,
    required: true,
  },
  example: {
    type: String,
    default: "example",
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model("course", CourseSchema);

// export const insertCourses = async () => {
//   try {
//     const coursePlaylist = new Course({
//       name: "MONGODB",
//       image:
//         "https://tse1.mm.bing.net/th?id=OIP.nBeBfa7LNZh43JjMULFdyAAAAA&pid=Api&P=0&w=340&h=155",
//       title: "The language for storing the database",
//       description:
//         "MongoDB is a cross-platform, document oriented database that provides, high performance, high availability, and easy scalability. MongoDB works on concept of collection and document.Database Database is a physical container for collections. Each database gets its own set of files on the file system. A single MongoDB server typically has multiple databases.Collection is a group of MongoDB documents. It is the equivalent of an RDBMS table. A collection exists within a single database. Collections do not enforce a schema. Documents within a collection can have different fields. Typically, all documents in a collection are of similar or related purpose.A document is a set of key-value pairs. Documents have dynamic schema. Dynamic schema means that documents in the same collection do not need to have the same set of fields or structure, and common fields in a collection's documents may hold different types of data.The following table shows the relationship of RDBMS terminology with MongoDB.",
//       gotolearnpage: "Learn MongoDb",
//     });
//     const result = await coursePlaylist.save();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

export default Course;
