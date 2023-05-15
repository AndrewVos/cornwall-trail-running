import formidable from "formidable";
import fs from "fs";
import toGeoJSON from "@mapbox/togeojson";
import { DOMParser } from "xmldom";
import gpxCalcElevationGain from "gpx-calc-elevation-gain";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import haversine from "haversine-distance";

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = async (
  req: NextRequest
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const form = new formidable.IncomingForm();

  return new Promise(async (resolve, reject) => {
    form.parse(req, async function (err, fields, files) {
      if (err) {
        reject(err);
      } else {
        resolve({ fields, files });
      }
    });
  });
};

const calculateDistance = (geoJSON) => {
  const coordinates = geoJSON.features[0].geometry.coordinates;
  let result = 0.0;

  for (let i = 0; i < coordinates.length - 1; i++) {
    const a = coordinates[i];
    const b = coordinates[i + 1];

    result += haversine(
      {
        lat: a[1],
        lng: a[0],
      },
      {
        lat: b[1],
        lng: b[0],
      }
    );
  }

  return result;
};

const upload = async (req: NextRequest, res: NextResponse) => {
  const prisma = new PrismaClient();

  const { fields, files } = await parseForm(req);

  const file = files.file;

  const gpxString = fs.readFileSync(file.filepath).toString();
  await fs.unlinkSync(file.filepath);

  var gpx = new DOMParser().parseFromString(gpxString);
  const geoJSON = toGeoJSON.gpx(gpx);

  const elevation = gpxCalcElevationGain(gpxString);

  const trail = await prisma.trail.create({
    data: {
      userId: "1",
      title: fields.title,
      distance: calculateDistance(geoJSON),
      elevation: elevation,
      gpx: gpxString,
      geo: JSON.stringify(geoJSON),
      description: fields.description,
    },
  });

  return res.redirect(302, `/trail/${trail.id}`);
};

export default upload;
