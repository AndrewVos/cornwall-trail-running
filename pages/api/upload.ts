import formidable from "formidable";
import fs from "fs";
import toGeoJSON from "@mapbox/togeojson";
import { DOMParser } from "xmldom";
import gpxCalcElevationGain from "gpx-calc-elevation-gain";

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    const file = files.file;

    const gpxString = fs.readFileSync(file.filepath).toString();
    await fs.unlinkSync(file.filepath);

    var gpx = new DOMParser().parseFromString(gpxString);
    const geoJSON = toGeoJSON.gpx(gpx);
    console.log({ geoJSON });

    const elevation = gpxCalcElevationGain(gpxString);
    console.log({ elevation });
    return res.status(201).send("");
  });
};

export default upload;
