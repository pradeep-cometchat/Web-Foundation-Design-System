/**
 * Avatar & Media assets.
 *
 * Avatars, group profiles, media, gifs and stickers are exported from the
 * Figma design system (section "avatars", node 19147-34065) and committed under
 * ../assets/avatars, so they can never expire. They previously hotlinked
 * Figma's CDN, whose signed URLs lapsed and broke every avatar in the kit.
 *
 * Company logos are not part of that Figma section and still use a generated
 * placeholder — swap them for real exports once their node is known.
 */

import imgMediaMedia02 from "../avatar-images/media/media-02.jpg";
import imgMediaMedia03 from "../avatar-images/media/media-03.jpg";
import imgMediaMedia04 from "../avatar-images/media/media-04.jpg";
import imgMediaWatch01 from "../avatar-images/media/watch-01.jpg";
import imgFemaleCamillaJuliette from "../avatar-images/female/camilla-juliette.jpg";
import imgFemaleEmmaRose from "../avatar-images/female/emma-rose.jpg";
import imgFemaleGabriellaElise from "../avatar-images/female/gabriella-elise.jpg";
import imgFemaleIsabellaFleur from "../avatar-images/female/isabella-fleur.jpg";
import imgFemaleJenniferLynn from "../avatar-images/female/jennifer-lynn.jpg";
import imgFemaleJessicaLane from "../avatar-images/female/jessica-lane.jpg";
import imgFemaleLilyAnne from "../avatar-images/female/lily-anne.jpg";
import imgFemaleMiaWard from "../avatar-images/female/mia-ward.jpg";
import imgFemaleNancyGrace from "../avatar-images/female/nancy-grace.jpg";
import imgFemaleNoraClaire from "../avatar-images/female/nora-claire.jpg";
import imgFemaleOliviaRhye from "../avatar-images/female/olivia-rhye.jpg";
import imgFemaleSafiyaFareena from "../avatar-images/female/safiya-fareena.jpg";
import imgFemaleSeraphinaBelle from "../avatar-images/female/seraphina-belle.jpg";
import imgFemaleSophiaClaire from "../avatar-images/female/sophia-claire.jpg";
import imgFemaleTessaJoseph from "../avatar-images/female/tessa-joseph.jpg";
import imgFemaleVictoriaElise from "../avatar-images/female/victoria-elise.jpg";
import imgGroupArtisticDesign from "../avatar-images/group/artistic-design.jpg";
import imgGroupBrightMind from "../avatar-images/group/bright-mind.jpg";
import imgGroupCodeCraze from "../avatar-images/group/code-craze.jpg";
import imgGroupCreativeEvent from "../avatar-images/group/creative-event.jpg";
import imgGroupDesignDuo from "../avatar-images/group/design-duo.jpg";
import imgGroupEpicGame from "../avatar-images/group/epic-game.jpg";
import imgGroupFutureTechnology from "../avatar-images/group/future-technology.jpg";
import imgGroupHealthHaven from "../avatar-images/group/health-haven.jpg";
import imgGroupInnovativeOnlineShopping from "../avatar-images/group/innovative-online-shopping.jpg";
import imgGroupMindBodyWellness from "../avatar-images/group/mind-body-wellness.jpg";
import imgGroupSkillSphere from "../avatar-images/group/skill-sphere.jpg";
import imgGroupStartupWorld from "../avatar-images/group/startup-world.jpg";
import imgGroupTeachTech from "../avatar-images/group/teach-tech.jpg";
import imgGroupTrueLoveConnections from "../avatar-images/group/true-love-connections.jpg";
import imgGroupUberCars from "../avatar-images/group/uber-cars.jpg";
import imgGroupWellWave from "../avatar-images/group/well-wave.jpg";
import imgMaleBenScott from "../avatar-images/male/ben-scott.jpg";
import imgMaleBrianMichael from "../avatar-images/male/brian-michael.jpg";
import imgMaleChrisNolan from "../avatar-images/male/chris-nolan.jpg";
import imgMaleDanielBrooks from "../avatar-images/male/daniel-brooks.jpg";
import imgMaleDavidMiller from "../avatar-images/male/david-miller.jpg";
import imgMaleGeorgeAlan from "../avatar-images/male/george-alan.jpg";
import imgMaleJamesAnderson from "../avatar-images/male/james-anderson.jpg";
import imgMaleJohnPaul from "../avatar-images/male/john-paul.jpg";
import imgMaleLeoMartin from "../avatar-images/male/leo-martin.jpg";
import imgMaleMaxwellTan from "../avatar-images/male/maxwell-tan.jpg";
import imgMaleMichaelScott from "../avatar-images/male/michael-scott.jpg";
import imgMaleMuhammedFareed from "../avatar-images/male/muhammed-fareed.jpg";
import imgMalePaulDavid from "../avatar-images/male/paul-david.jpg";
import imgMaleRobertAllen from "../avatar-images/male/robert-allen.jpg";
import imgMaleSamWilson from "../avatar-images/male/sam-wilson.jpg";
import imgMaleThomasBennett from "../avatar-images/male/thomas-bennett.jpg";
import imgGifGif01 from "../avatar-images/gif/gif-01.jpg";
import imgGifGif02 from "../avatar-images/gif/gif-02.jpg";
import imgGifGif03 from "../avatar-images/gif/gif-03.jpg";
import imgGifGif04 from "../avatar-images/gif/gif-04.jpg";
import imgStickerSticker01 from "../avatar-images/sticker/sticker-01.png";
import imgStickerSticker02 from "../avatar-images/sticker/sticker-02.png";
import imgStickerSticker03 from "../avatar-images/sticker/sticker-03.png";
import imgStickerSticker04 from "../avatar-images/sticker/sticker-04.png";
import imgStickerSticker05 from "../avatar-images/sticker/sticker-05.png";
import imgStickerSticker06 from "../avatar-images/sticker/sticker-06.png";

export type AvatarCategory =
  | "Avatar company logo"
  | "Media Footage"
  | "Female Avatar"
  | "Group Avatar"
  | "Male Avatar"
  | "Gif Footage"
  | "Sticker Footage";

export interface AvatarAsset {
  name: string;
  imageUrl: string;
}

export const avatarRegistry: Record<AvatarCategory, AvatarAsset[]> = {
  "Avatar company logo": [
    {
      name: "3Portals",
      imageUrl:
        "https://ui-avatars.com/api/?name=3Portals&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Acme Corp",
      imageUrl:
        "https://ui-avatars.com/api/?name=Acme%20Corp&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Boltshift",
      imageUrl:
        "https://ui-avatars.com/api/?name=Boltshift&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Clandestine",
      imageUrl:
        "https://ui-avatars.com/api/?name=Clandestine&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Codecraft_",
      imageUrl:
        "https://ui-avatars.com/api/?name=Codecraft_&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Convergence",
      imageUrl:
        "https://ui-avatars.com/api/?name=Convergence&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Euphoria",
      imageUrl:
        "https://ui-avatars.com/api/?name=Euphoria&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Flora&Fauna",
      imageUrl:
        "https://ui-avatars.com/api/?name=Flora%26Fauna&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Foresight",
      imageUrl:
        "https://ui-avatars.com/api/?name=Foresight&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Goodwell",
      imageUrl:
        "https://ui-avatars.com/api/?name=Goodwell&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Hexsmith",
      imageUrl:
        "https://ui-avatars.com/api/?name=Hexsmith&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Ikigai Labs",
      imageUrl:
        "https://ui-avatars.com/api/?name=Ikigai%20Labs&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "ImgCompress",
      imageUrl:
        "https://ui-avatars.com/api/?name=ImgCompress&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Luckycharm",
      imageUrl:
        "https://ui-avatars.com/api/?name=Luckycharm&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Mastermail",
      imageUrl:
        "https://ui-avatars.com/api/?name=Mastermail&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Nietzsche",
      imageUrl:
        "https://ui-avatars.com/api/?name=Nietzsche&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Ollio",
      imageUrl:
        "https://ui-avatars.com/api/?name=Ollio&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Pollinate",
      imageUrl:
        "https://ui-avatars.com/api/?name=Pollinate&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Quantum²",
      imageUrl:
        "https://ui-avatars.com/api/?name=Quantum%C2%B2&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Railspeed",
      imageUrl:
        "https://ui-avatars.com/api/?name=Railspeed&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Shutterframe",
      imageUrl:
        "https://ui-avatars.com/api/?name=Shutterframe&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Solaris Energy",
      imageUrl:
        "https://ui-avatars.com/api/?name=Solaris%20Energy&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Warpspeed",
      imageUrl:
        "https://ui-avatars.com/api/?name=Warpspeed&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
    {
      name: "Wildcrafted",
      imageUrl:
        "https://ui-avatars.com/api/?name=Wildcrafted&size=256&background=6852D6&color=FFFFFF&bold=true&format=png",
    },
  ],
  "Media Footage": [
    { name: "Media 02", imageUrl: imgMediaMedia02 },
    { name: "Media 03", imageUrl: imgMediaMedia03 },
    { name: "Media 04", imageUrl: imgMediaMedia04 },
    { name: "Watch 01", imageUrl: imgMediaWatch01 },
  ],
  "Female Avatar": [
    { name: "Camilla Juliette", imageUrl: imgFemaleCamillaJuliette },
    { name: "Emma Rose", imageUrl: imgFemaleEmmaRose },
    { name: "Gabriella Elise", imageUrl: imgFemaleGabriellaElise },
    { name: "Isabella Fleur", imageUrl: imgFemaleIsabellaFleur },
    { name: "Jennifer Lynn", imageUrl: imgFemaleJenniferLynn },
    { name: "Jessica Lane", imageUrl: imgFemaleJessicaLane },
    { name: "Lily Anne", imageUrl: imgFemaleLilyAnne },
    { name: "Mia Ward", imageUrl: imgFemaleMiaWard },
    { name: "Nancy Grace", imageUrl: imgFemaleNancyGrace },
    { name: "Nora Claire", imageUrl: imgFemaleNoraClaire },
    { name: "Olivia Rhye", imageUrl: imgFemaleOliviaRhye },
    { name: "Safiya Fareena", imageUrl: imgFemaleSafiyaFareena },
    { name: "Seraphina Belle", imageUrl: imgFemaleSeraphinaBelle },
    { name: "Sophia Claire", imageUrl: imgFemaleSophiaClaire },
    { name: "Tessa Joseph", imageUrl: imgFemaleTessaJoseph },
    { name: "Victoria Elise", imageUrl: imgFemaleVictoriaElise },
  ],
  "Group Avatar": [
    { name: "Artistic Design", imageUrl: imgGroupArtisticDesign },
    { name: "Bright Mind", imageUrl: imgGroupBrightMind },
    { name: "Code Craze", imageUrl: imgGroupCodeCraze },
    { name: "Creative Event", imageUrl: imgGroupCreativeEvent },
    { name: "Design Duo", imageUrl: imgGroupDesignDuo },
    { name: "Epic Game", imageUrl: imgGroupEpicGame },
    { name: "Future Technology", imageUrl: imgGroupFutureTechnology },
    { name: "Health Haven", imageUrl: imgGroupHealthHaven },
    {
      name: "Innovative Online Shopping",
      imageUrl: imgGroupInnovativeOnlineShopping,
    },
    { name: "Mind Body Wellness", imageUrl: imgGroupMindBodyWellness },
    { name: "Skill Sphere", imageUrl: imgGroupSkillSphere },
    { name: "Startup World", imageUrl: imgGroupStartupWorld },
    { name: "Teach Tech", imageUrl: imgGroupTeachTech },
    { name: "True Love Connections", imageUrl: imgGroupTrueLoveConnections },
    { name: "Uber Cars", imageUrl: imgGroupUberCars },
    { name: "Well Wave", imageUrl: imgGroupWellWave },
  ],
  "Male Avatar": [
    { name: "Ben Scott", imageUrl: imgMaleBenScott },
    { name: "Brian Michael", imageUrl: imgMaleBrianMichael },
    { name: "Chris Nolan", imageUrl: imgMaleChrisNolan },
    { name: "Daniel Brooks", imageUrl: imgMaleDanielBrooks },
    { name: "David Miller", imageUrl: imgMaleDavidMiller },
    { name: "George Alan", imageUrl: imgMaleGeorgeAlan },
    { name: "James Anderson", imageUrl: imgMaleJamesAnderson },
    { name: "John Paul", imageUrl: imgMaleJohnPaul },
    { name: "Leo Martin", imageUrl: imgMaleLeoMartin },
    { name: "Maxwell Tan", imageUrl: imgMaleMaxwellTan },
    { name: "Michael Scott", imageUrl: imgMaleMichaelScott },
    { name: "Muhammed Fareed", imageUrl: imgMaleMuhammedFareed },
    { name: "Paul David", imageUrl: imgMalePaulDavid },
    { name: "Robert Allen", imageUrl: imgMaleRobertAllen },
    { name: "Sam Wilson", imageUrl: imgMaleSamWilson },
    { name: "Thomas Bennett", imageUrl: imgMaleThomasBennett },
  ],
  "Gif Footage": [
    { name: "Gif 01", imageUrl: imgGifGif01 },
    { name: "Gif 02", imageUrl: imgGifGif02 },
    { name: "Gif 03", imageUrl: imgGifGif03 },
    { name: "Gif 04", imageUrl: imgGifGif04 },
  ],
  "Sticker Footage": [
    { name: "Sticker 01", imageUrl: imgStickerSticker01 },
    { name: "Sticker 02", imageUrl: imgStickerSticker02 },
    { name: "Sticker 03", imageUrl: imgStickerSticker03 },
    { name: "Sticker 04", imageUrl: imgStickerSticker04 },
    { name: "Sticker 05", imageUrl: imgStickerSticker05 },
    { name: "Sticker 06", imageUrl: imgStickerSticker06 },
  ],
};

export const avatarCategories: AvatarCategory[] = [
  "Avatar company logo",
  "Media Footage",
  "Female Avatar",
  "Group Avatar",
  "Male Avatar",
  "Gif Footage",
  "Sticker Footage",
];
export const avatarTotalCount = 86;
