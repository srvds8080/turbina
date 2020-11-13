import theXXcrystalised from "../audio/Crystalised.mp3";
import everyYouEveryMe from "../audio/everyYouEveryMe.mp3";
import tallHeightsSpiritCold from "../audio/tallHeightsSpiritCold.mp3";
import phantogramWhenImSmall from "../audio/phantogramWhenImSmall.mp3";

const articleAbout = [
  "Мы знаем, что наши дети постоянно существуют в режиме " +
    "непрекращающегося творческого процесса. Мы видим это, " +
    "когда ребёнок что-то напевает, когда он бесконечно рисует, " +
    "когда придумывает истории, когда разговаривает с едой и " +
    "игрушками — дети постоянно включены и что-то изобретают. " +
    "Родители часто недооценивают это спонтанное творчество ребёнка. " +
    "Это не плохо, просто мы привыкаем к этому. " +
    "Давайте попробуем внимательнее присмотреться к нашим детям.",
  "Мы запускаем проект «ТУРБИНА», который открывает работу настоящего " +
    "музыкального лейбла на базе «Маршака». " +
    "В рамках «ТУРБИНЫ» лучшие современные " +
    "инди-музыканты пишут свои песни на стихи," +
    " написанные детьми. Здесь важно — мы не заставляем наших детей садиться и" +
    " писать поэзию, мы говорим о том, что родителям стоит быть более внимательными и" +
    " чуткими к своим детям. Именно так мы сможем получить" +
    " тексты, которые перестанут быть детскими, не будут осмыслены как взрослые —" +
    " поэзия, которая сокращает дистанцию между взрослостью и детством, где спонтанное" +
    " детское творчество и бессознательное, замеченное родителем," +
    " становится общественным культурным достоянием.",
];

const articleHowItWork = [
  "Вы можете прислать нам тексты, родившиеся у ваших детей, " +
    "которые вы записали и считаете, что это сильное высказывание. " +
    "Мы собираем пул таких текстов и передаём их музыкантам. " +
    "Артисты создают музыку на эти стихи. Мы продюсируем выпуск трека, " +
    "возможно съёмки клипа и так далее. Мы всегда указываем автора стихотворений " +
    "внутри релиза: Хадн Дадн feat. Варя Карпова и Федя Быстров — Контур.",
];

const articleThesis = [
  "• Дети никогда не прекращают творить и круто стараться быть на них похожими в этом.",
  "• Детское бессознательное помогает родителям понять, что происходит внутри семьи.",
  "• Не существует детской и взрослой поэзии. Существует мысль и чувство, зафиксированное" +
    "в ней.",
  "• Дети получают невероятное удовольствие и мотивацию от того, что их творчество востребовано сверстниками и взрослыми.",
];

const streamingList = [
  {
    name: "Яндекс.Музыка",
    link: "/",
  },
  {
    name: "Spotify",
    link: "/",
  },
  {
    name: "Apple Music",
    link: "/",
  },
  {
    name: "VK Music",
    link: "/",
  },
];

const releaseList = [
  {
    name: "The XX - Crystalised",
    link: theXXcrystalised,
    lyrics: `You've applied the pressure \nTo have me crystallized \nAnd you've got the faith \nThat I could bring paradise \nI'll forgive and forget \nBefore I'm paralyzed \nDo I have to keep up the pace \nTo keep you satisfied \nThings have gotten closer to the sun \nAnd I've done things in small doses \nSo don't think that I'm pushing you away \nWhen you're the one that I've kept closest \nYou don't move slow \nTaking steps in my direction \nThe sound resounds, echo \nDoes it lesson your affection \nYou say I'm foolish \nFor pushing this aside \nBut burn down our home \nI won't leave alive \nGlaciers have melted to the sea \nI wish the tide would take me over \nI've been down on my knees \nAnd you just keep on getting closer`,
  },
  {
    name: "Placebo - Every You Every Me",
    link: everyYouEveryMe,
    lyrics: `Sucker love is heaven sent \nYou pucker up our passion's spent \nMy heart's a tart your body's rent \nMy body's broken, yours is spent \nCarve your name into my arm \nInstead of stressed I lie here charmed \n'Cause there's nothing else to do \nEvery me and every you \nSucker love a box I choose \nNo other box I choose to use \nAnother love I would abuse \nNo circumstances could excuse \nIn the shape of things to come \nToo much poison come undone \n'Cause there's nothing else to do \nEvery me and every you \nEvery me and every you \nEvery me \nSucker love is known to swing \nProne to cling and waste these things \nPucker up for heaven's sake \nThere's never been so much at stake \nI serve my head up on a plate \nIt's only comfort, calling late \n'Cause there's nothing else to do \nEvery me and every you \nEvery me…`,
  },
  {
    name: "Tall Heights - Spirit Cold",
    link: tallHeightsSpiritCold,
    lyrics: `How do I wake my spirit cold? \nWe always say when our history's told \nIf only we knew the things we know \nThere's a question ages old \nLet me down easy, let me down slow \nIf all good things ever come and go \nLet me back down in a place I know \nHold the nail for the hammer stroke \nOh this my trash, this my tome \nOh this my blood, this my bone \nHow do I learn my dreams to mold, \nTo lay them bare in the morning cold? \nIf they're still out there then the chasm grows \nFor all you know, for all you've known \nLet me down easy, let me down slow \nIf all good things ever come and go \nLet me back down in a place I know \nHold that nail for the hammer stroke \nOh this my weapon, this my loam \nOh this my blood, this my bone`,
  },
  {
    name: `Phantogram - When I'm Small`,
    link: phantogramWhenImSmall,
    lyrics: `Oh, oh, oh, oh \nOh, oh, oh, oh \nLucy's underground \nShe's got a mouth to feed \nAm I underground \nOr am I in between \nLucy's underground \nShe's got a mouth to feed \nAm I underground \nOr am I in too deep \nShow me love \nYou've got your hand on the button now \nShowin' love \nYou've got your hand on the button now \nOh, oh, oh, oh, \nOh, oh, oh, oh \nOh, oh, oh, oh \nOh, oh, oh, oh \nLucy's underground, \nShe's never comin' back \nAm I still alive \nOr has the light gone black \nTake me underground \nTake me all the way \nBring me to the fire \nThrow me in the flame \nSo, show me love \nYou've got your hands on the button now \nShowin'…`,
  },
];

export {
  articleAbout,
  articleHowItWork,
  articleThesis,
  streamingList,
  releaseList,
};
