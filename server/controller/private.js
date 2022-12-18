export const getPrivatedata = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, data: "You got Access to the private data" });
};
