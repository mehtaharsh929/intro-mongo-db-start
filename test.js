const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/whatever");
};

const student = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: true
    },
    favFoods: [{ type: String }],
    info: {
      school: {
        type: String
      },
      shoeSize: {
        type: Number
      }
    },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "school"
    }
  },
  { timestamps: true }
);

const school = new mongoose.Schema({
  name: String,
  openScince: Number,
  students: Number,
  isGreat: Boolean,
  staff:[{type:String}]
});

const Student = mongoose.model("student", student);
const School = mongoose.model("school", school);

connect()
  .then(async connection => {

const schoolConfig={
  name:'little star',
  openScince:2000,
  students:90909,
  isGreat:true,
  staff:['a','b','c']
}

const sch2={
  name:'little22 star',
  openScince:2000,
  students:909,
  isGreat:true,
  staff:['v','d','f']

} 
const schools =await School.create([sch2,schoolConfig])
// const match = await School.findOne({students:{$gt:1000}})
const match = await School.findOne({
  staff:'c'
})


    // const school = await School.findOneAndUpdate(
    //   { name: "little star" },
    //   { name: "little star" },
    //   { upsert: true, new: true }
    // );
    
    // const student = await Student.create({
    //   firstName: "Tim",
    //   school: school._id
    // });
    // const student2 = await Student.create({
    //   firstName: "Tim2",
    //   school: school._id
    // });
    // const match = await Student.findById(student.id)
    //   .populate("school")
    //   .exec();
    console.log(match);

    // const found = await Student.find({ firstName: "Tim" });
    // const foundByID = await Student.findById("dsdsdsd");
    // const updated = await Student.findByIdAndUpdate("dasdsds", {});
  })
  .catch(e => console.error(e));
