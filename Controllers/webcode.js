import jwt from "jsonwebtoken";
import { SECRET } from "../utils/config.js";
import Student from "../Model/studentModel.js";
import Webcode from "../Model/webcodeModel.js";

//getting token function
const getTokenFrom = (req) => {
  const authorization = req.get("authorization");

  if (authorization && authorization.startsWith("bearer ")) {
    return authorization.replace("bearer ", "");
  }
};

// fetching all webcode

export const fetchWebcode = async (req, res) => {
  try {
    //getting token of authorised student

    const token = getTokenFrom(req);
    if (!token) {
      return res
        .status(401)
        .json({ message: "session timeout please login again" });
    }
    // verifying the token
    const decodedToken = jwt.verify(token, SECRET);

    if (!decodedToken.id) {
      return res.status(401).json({ message: "token invalid" });
    }

    //sending response data

    const webcodes = await Student.findById(decodedToken.id).populate(
      "webcode"
    );

    res.status(200).json(webcodes.webcode);
    //
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error on fetching data please login & try again" });
  }
};

//posting new webcode data

export const postWebcode = async (req, res) => {
  try {
    //getting body content
    const { FeUrl, feCode } = req.body;

    //getting token
    const token = getTokenFrom(req);

    //verify the token
    const decodedToken = jwt.verify(token, SECRET);

    //if token is not valid, return error
    if (!decodedToken.id) {
      return res
        .status(401)
        .json({ message: "session timeout please login again" });
    }

    //checking if already submitted
    const webcodes = await Student.findById(decodedToken.id).populate(
      "webcode"
    );

    if (webcodes.webcode.length) {
      return res.status(401).json({ message: "Already Submitted" });
    }

    //getting logged student to store webcode
    const student = await Student.findById(decodedToken.id);

    //prepare data to push into webcode collection
    const newWebcode = new Webcode({
      FeUrl,
      feCode,
      student: student._id,
    });

    // saving new webcode in collection
    const savedWebcode = await newWebcode.save();

    //loading webcode id to student collection
    student.webcode = student.webcode.concat(savedWebcode._id);

    await student.save();

    //sending response
    res.status(200).json({ message: "webcode submitted sucessfully" });

    //
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error on updating, please try again later" });
  }
};

