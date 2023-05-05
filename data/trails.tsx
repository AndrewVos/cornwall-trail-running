import slug from "slug"
import holywellBayToPerranporth from "../holywell-bay-to-perranporth.json"
import idlessWoods from "../idless-woods.json"

const trails = [
  {
    name: "Holywell Bay to Perranporth",
    elevation: 328,
    distance: 7.1,
    description: "Sometimes scary coastal trail that passes through an old Military base.",
    json: holywellBayToPerranporth,
  },
  {
    name: "Idless Woods",
    elevation: 82,
    distance: 4.97,
    description: "Quiet forest trail.",
    json: idlessWoods
  }
].map(t => ({ ...t, slug: slug(t.name) }))

export default trails