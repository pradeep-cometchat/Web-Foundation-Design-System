/**
 * Miscellaneous icons — Social, File Type, Country Flags, Featured Icons.
 *
 * These previously hotlinked Figma's CDN (figma-alpha-api.s3), whose signed
 * URLs expired and returned 403 — every icon on the Misc Icons page broke.
 * All 404 are now committed under ../misc-icons and imported locally.
 *
 * Sources:
 *  - File Type (sized)  exported from the design system, node 746:4933
 *  - Social             simple-icons, tinted brand / neutral-600 per variant
 *  - Country Flags      circle-flags
 *  - Featured / badges  generated from Foundation tokens
 */

import icSocialBrandAngellist from "../misc-icons/social-brand/angellist.svg";
import icSocialBrandApple from "../misc-icons/social-brand/apple.svg";
import icSocialBrandClubhouse from "../misc-icons/social-brand/clubhouse.svg";
import icSocialBrandDiscord from "../misc-icons/social-brand/discord.svg";
import icSocialBrandDribbble from "../misc-icons/social-brand/dribbble.svg";
import icSocialBrandFacebook from "../misc-icons/social-brand/facebook.svg";
import icSocialBrandFigma from "../misc-icons/social-brand/figma.svg";
import icSocialBrandFramer from "../misc-icons/social-brand/framer.svg";
import icSocialBrandGithub from "../misc-icons/social-brand/github.svg";
import icSocialBrandGoogle from "../misc-icons/social-brand/google.svg";
import icSocialBrandInstagram from "../misc-icons/social-brand/instagram.svg";
import icSocialBrandLayers from "../misc-icons/social-brand/layers.svg";
import icSocialBrandLinkedin from "../misc-icons/social-brand/linkedin.svg";
import icSocialBrandNotion from "../misc-icons/social-brand/notion.svg";
import icSocialBrandPaypal from "../misc-icons/social-brand/paypal.svg";
import icSocialBrandPinterest from "../misc-icons/social-brand/pinterest.svg";
import icSocialBrandReddit from "../misc-icons/social-brand/reddit.svg";
import icSocialBrandSignal from "../misc-icons/social-brand/signal.svg";
import icSocialBrandSlack from "../misc-icons/social-brand/slack.svg";
import icSocialBrandSnapchat from "../misc-icons/social-brand/snapchat.svg";
import icSocialBrandSpotify from "../misc-icons/social-brand/spotify.svg";
import icSocialBrandStripe from "../misc-icons/social-brand/stripe.svg";
import icSocialBrandTelegram from "../misc-icons/social-brand/telegram.svg";
import icSocialBrandTiktok from "../misc-icons/social-brand/tiktok.svg";
import icSocialBrandTumblr from "../misc-icons/social-brand/tumblr.svg";
import icSocialBrandTwitch from "../misc-icons/social-brand/twitch.svg";
import icSocialBrandTwitter from "../misc-icons/social-brand/twitter.svg";
import icSocialBrandWebflow from "../misc-icons/social-brand/webflow.svg";
import icSocialBrandWhatsapp from "../misc-icons/social-brand/whatsapp.svg";
import icSocialBrandWise from "../misc-icons/social-brand/wise.svg";
import icSocialBrandX from "../misc-icons/social-brand/x.svg";
import icSocialBrandYoutube from "../misc-icons/social-brand/youtube.svg";
import icSocialGrayAngellist from "../misc-icons/social-gray/angellist.svg";
import icSocialGrayApple from "../misc-icons/social-gray/apple.svg";
import icSocialGrayClubhouse from "../misc-icons/social-gray/clubhouse.svg";
import icSocialGrayDiscord from "../misc-icons/social-gray/discord.svg";
import icSocialGrayDribbble from "../misc-icons/social-gray/dribbble.svg";
import icSocialGrayFacebook from "../misc-icons/social-gray/facebook.svg";
import icSocialGrayFigma from "../misc-icons/social-gray/figma.svg";
import icSocialGrayFramer from "../misc-icons/social-gray/framer.svg";
import icSocialGrayGithub from "../misc-icons/social-gray/github.svg";
import icSocialGrayGoogle from "../misc-icons/social-gray/google.svg";
import icSocialGrayInstagram from "../misc-icons/social-gray/instagram.svg";
import icSocialGrayLayers from "../misc-icons/social-gray/layers.svg";
import icSocialGrayLinkedin from "../misc-icons/social-gray/linkedin.svg";
import icSocialGrayNotion from "../misc-icons/social-gray/notion.svg";
import icSocialGrayPaypal from "../misc-icons/social-gray/paypal.svg";
import icSocialGrayPinterest from "../misc-icons/social-gray/pinterest.svg";
import icSocialGrayReddit from "../misc-icons/social-gray/reddit.svg";
import icSocialGraySignal from "../misc-icons/social-gray/signal.svg";
import icSocialGraySlack from "../misc-icons/social-gray/slack.svg";
import icSocialGraySnapchat from "../misc-icons/social-gray/snapchat.svg";
import icSocialGraySpotify from "../misc-icons/social-gray/spotify.svg";
import icSocialGrayStripe from "../misc-icons/social-gray/stripe.svg";
import icSocialGrayTelegram from "../misc-icons/social-gray/telegram.svg";
import icSocialGrayTiktok from "../misc-icons/social-gray/tiktok.svg";
import icSocialGrayTumblr from "../misc-icons/social-gray/tumblr.svg";
import icSocialGrayTwitch from "../misc-icons/social-gray/twitch.svg";
import icSocialGrayTwitter from "../misc-icons/social-gray/twitter.svg";
import icSocialGrayWebflow from "../misc-icons/social-gray/webflow.svg";
import icSocialGrayWhatsapp from "../misc-icons/social-gray/whatsapp.svg";
import icSocialGrayWise from "../misc-icons/social-gray/wise.svg";
import icSocialGrayX from "../misc-icons/social-gray/x.svg";
import icSocialGrayYoutube from "../misc-icons/social-gray/youtube.svg";
import icFiletypeBadgeArchiveRar from "../misc-icons/filetype-badge/archive-rar.svg";
import icFiletypeBadgeArchiveZip from "../misc-icons/filetype-badge/archive-zip.svg";
import icFiletypeBadgeDesignAepAfterEffects from "../misc-icons/filetype-badge/design-aep-after-effects.svg";
import icFiletypeBadgeDesignAiIllustrator from "../misc-icons/filetype-badge/design-ai-illustrator.svg";
import icFiletypeBadgeDesignFigFigma from "../misc-icons/filetype-badge/design-fig-figma.svg";
import icFiletypeBadgeDesignInddIndesign from "../misc-icons/filetype-badge/design-indd-indesign.svg";
import icFiletypeBadgeDesignPsdPhotoshop from "../misc-icons/filetype-badge/design-psd-photoshop.svg";
import icFiletypeBadgeDocumentCsv from "../misc-icons/filetype-badge/document-csv.svg";
import icFiletypeBadgeDocumentDoc from "../misc-icons/filetype-badge/document-doc.svg";
import icFiletypeBadgeDocumentDocx from "../misc-icons/filetype-badge/document-docx.svg";
import icFiletypeBadgeDocumentPdf from "../misc-icons/filetype-badge/document-pdf.svg";
import icFiletypeBadgeDocumentPpt from "../misc-icons/filetype-badge/document-ppt.svg";
import icFiletypeBadgeDocumentPptx from "../misc-icons/filetype-badge/document-pptx.svg";
import icFiletypeBadgeDocumentTxt from "../misc-icons/filetype-badge/document-txt.svg";
import icFiletypeBadgeDocumentXls from "../misc-icons/filetype-badge/document-xls.svg";
import icFiletypeBadgeDocumentXlsx from "../misc-icons/filetype-badge/document-xlsx.svg";
import icFiletypeBadgeImageEps from "../misc-icons/filetype-badge/image-eps.svg";
import icFiletypeBadgeImageGif from "../misc-icons/filetype-badge/image-gif.svg";
import icFiletypeBadgeImageImg from "../misc-icons/filetype-badge/image-img.svg";
import icFiletypeBadgeImageJpeg from "../misc-icons/filetype-badge/image-jpeg.svg";
import icFiletypeBadgeImageJpg from "../misc-icons/filetype-badge/image-jpg.svg";
import icFiletypeBadgeImagePng from "../misc-icons/filetype-badge/image-png.svg";
import icFiletypeBadgeImageSvg from "../misc-icons/filetype-badge/image-svg.svg";
import icFiletypeBadgeImageTiff from "../misc-icons/filetype-badge/image-tiff.svg";
import icFiletypeBadgeImageWebp from "../misc-icons/filetype-badge/image-webp.svg";
import icFiletypeBadgeMediaAvi from "../misc-icons/filetype-badge/media-avi.svg";
import icFiletypeBadgeMediaMkv from "../misc-icons/filetype-badge/media-mkv.svg";
import icFiletypeBadgeMediaMp3 from "../misc-icons/filetype-badge/media-mp3.svg";
import icFiletypeBadgeMediaMp4 from "../misc-icons/filetype-badge/media-mp4.svg";
import icFiletypeBadgeMediaMpeg from "../misc-icons/filetype-badge/media-mpeg.svg";
import icFiletypeBadgeMediaWav from "../misc-icons/filetype-badge/media-wav.svg";
import icFiletypeJpg from "../misc-icons/filetype/jpg.svg";
import icFiletypeLink from "../misc-icons/filetype/link.svg";
import icFiletypeMov from "../misc-icons/filetype/mov.svg";
import icFiletypeMp3 from "../misc-icons/filetype/mp3.svg";
import icFiletypePdf from "../misc-icons/filetype/pdf.svg";
import icFiletypePpt from "../misc-icons/filetype/ppt.svg";
import icFiletypeTxt from "../misc-icons/filetype/txt.svg";
import icFiletypeWord from "../misc-icons/filetype/word.svg";
import icFiletypeXlsx from "../misc-icons/filetype/xlsx.svg";
import icFiletypeZip from "../misc-icons/filetype/zip.svg";
import icFiletypeUnknown from "../misc-icons/filetype/unknown.svg";
import icFlagsAd from "../misc-icons/flags/ad.svg";
import icFlagsAe from "../misc-icons/flags/ae.svg";
import icFlagsAf from "../misc-icons/flags/af.svg";
import icFlagsAg from "../misc-icons/flags/ag.svg";
import icFlagsAi from "../misc-icons/flags/ai.svg";
import icFlagsAl from "../misc-icons/flags/al.svg";
import icFlagsAm from "../misc-icons/flags/am.svg";
import icFlagsAo from "../misc-icons/flags/ao.svg";
import icFlagsAr from "../misc-icons/flags/ar.svg";
import icFlagsAs from "../misc-icons/flags/as.svg";
import icFlagsAt from "../misc-icons/flags/at.svg";
import icFlagsAu from "../misc-icons/flags/au.svg";
import icFlagsAw from "../misc-icons/flags/aw.svg";
import icFlagsAx from "../misc-icons/flags/ax.svg";
import icFlagsAz from "../misc-icons/flags/az.svg";
import icFlagsBa from "../misc-icons/flags/ba.svg";
import icFlagsBb from "../misc-icons/flags/bb.svg";
import icFlagsBd from "../misc-icons/flags/bd.svg";
import icFlagsBe from "../misc-icons/flags/be.svg";
import icFlagsBf from "../misc-icons/flags/bf.svg";
import icFlagsBg from "../misc-icons/flags/bg.svg";
import icFlagsBh from "../misc-icons/flags/bh.svg";
import icFlagsBi from "../misc-icons/flags/bi.svg";
import icFlagsBj from "../misc-icons/flags/bj.svg";
import icFlagsBl from "../misc-icons/flags/bl.svg";
import icFlagsBm from "../misc-icons/flags/bm.svg";
import icFlagsBn from "../misc-icons/flags/bn.svg";
import icFlagsBo from "../misc-icons/flags/bo.svg";
import icFlagsBq from "../misc-icons/flags/bq.svg";
import icFlagsBr from "../misc-icons/flags/br.svg";
import icFlagsBs from "../misc-icons/flags/bs.svg";
import icFlagsBt from "../misc-icons/flags/bt.svg";
import icFlagsBw from "../misc-icons/flags/bw.svg";
import icFlagsBy from "../misc-icons/flags/by.svg";
import icFlagsBz from "../misc-icons/flags/bz.svg";
import icFlagsCa from "../misc-icons/flags/ca.svg";
import icFlagsCc from "../misc-icons/flags/cc.svg";
import icFlagsCd from "../misc-icons/flags/cd.svg";
import icFlagsCf from "../misc-icons/flags/cf.svg";
import icFlagsCh from "../misc-icons/flags/ch.svg";
import icFlagsCk from "../misc-icons/flags/ck.svg";
import icFlagsCl from "../misc-icons/flags/cl.svg";
import icFlagsCm from "../misc-icons/flags/cm.svg";
import icFlagsCn from "../misc-icons/flags/cn.svg";
import icFlagsCo from "../misc-icons/flags/co.svg";
import icFlagsCr from "../misc-icons/flags/cr.svg";
import icFlagsCu from "../misc-icons/flags/cu.svg";
import icFlagsCw from "../misc-icons/flags/cw.svg";
import icFlagsCx from "../misc-icons/flags/cx.svg";
import icFlagsCy from "../misc-icons/flags/cy.svg";
import icFlagsCz from "../misc-icons/flags/cz.svg";
import icFlagsDe from "../misc-icons/flags/de.svg";
import icFlagsDj from "../misc-icons/flags/dj.svg";
import icFlagsDk from "../misc-icons/flags/dk.svg";
import icFlagsDm from "../misc-icons/flags/dm.svg";
import icFlagsDo from "../misc-icons/flags/do.svg";
import icFlagsDs from "../misc-icons/flags/ds.svg";
import icFlagsDz from "../misc-icons/flags/dz.svg";
import icFlagsEc from "../misc-icons/flags/ec.svg";
import icFlagsEe from "../misc-icons/flags/ee.svg";
import icFlagsEg from "../misc-icons/flags/eg.svg";
import icFlagsEh from "../misc-icons/flags/eh.svg";
import icFlagsEr from "../misc-icons/flags/er.svg";
import icFlagsEs from "../misc-icons/flags/es.svg";
import icFlagsEt from "../misc-icons/flags/et.svg";
import icFlagsFi from "../misc-icons/flags/fi.svg";
import icFlagsFj from "../misc-icons/flags/fj.svg";
import icFlagsFk from "../misc-icons/flags/fk.svg";
import icFlagsFm from "../misc-icons/flags/fm.svg";
import icFlagsFo from "../misc-icons/flags/fo.svg";
import icFlagsFr from "../misc-icons/flags/fr.svg";
import icFlagsGa from "../misc-icons/flags/ga.svg";
import icFlagsGb from "../misc-icons/flags/gb.svg";
import icFlagsGb2 from "../misc-icons/flags/gb-2.svg";
import icFlagsGd from "../misc-icons/flags/gd.svg";
import icFlagsGe from "../misc-icons/flags/ge.svg";
import icFlagsGg from "../misc-icons/flags/gg.svg";
import icFlagsGh from "../misc-icons/flags/gh.svg";
import icFlagsGi from "../misc-icons/flags/gi.svg";
import icFlagsGl from "../misc-icons/flags/gl.svg";
import icFlagsGm from "../misc-icons/flags/gm.svg";
import icFlagsGn from "../misc-icons/flags/gn.svg";
import icFlagsGq from "../misc-icons/flags/gq.svg";
import icFlagsGr from "../misc-icons/flags/gr.svg";
import icFlagsGt from "../misc-icons/flags/gt.svg";
import icFlagsGu from "../misc-icons/flags/gu.svg";
import icFlagsGw from "../misc-icons/flags/gw.svg";
import icFlagsGy from "../misc-icons/flags/gy.svg";
import icFlagsHk from "../misc-icons/flags/hk.svg";
import icFlagsHn from "../misc-icons/flags/hn.svg";
import icFlagsHr from "../misc-icons/flags/hr.svg";
import icFlagsHt from "../misc-icons/flags/ht.svg";
import icFlagsHu from "../misc-icons/flags/hu.svg";
import icFlagsId from "../misc-icons/flags/id.svg";
import icFlagsIe from "../misc-icons/flags/ie.svg";
import icFlagsIl from "../misc-icons/flags/il.svg";
import icFlagsIm from "../misc-icons/flags/im.svg";
import icFlagsIn from "../misc-icons/flags/in.svg";
import icFlagsIo from "../misc-icons/flags/io.svg";
import icFlagsIq from "../misc-icons/flags/iq.svg";
import icFlagsIr from "../misc-icons/flags/ir.svg";
import icFlagsIs from "../misc-icons/flags/is.svg";
import icFlagsIt from "../misc-icons/flags/it.svg";
import icFlagsJe from "../misc-icons/flags/je.svg";
import icFlagsJm from "../misc-icons/flags/jm.svg";
import icFlagsJo from "../misc-icons/flags/jo.svg";
import icFlagsJp from "../misc-icons/flags/jp.svg";
import icFlagsKe from "../misc-icons/flags/ke.svg";
import icFlagsKg from "../misc-icons/flags/kg.svg";
import icFlagsKh from "../misc-icons/flags/kh.svg";
import icFlagsKi from "../misc-icons/flags/ki.svg";
import icFlagsKm from "../misc-icons/flags/km.svg";
import icFlagsKn from "../misc-icons/flags/kn.svg";
import icFlagsKp from "../misc-icons/flags/kp.svg";
import icFlagsKr from "../misc-icons/flags/kr.svg";
import icFlagsKw from "../misc-icons/flags/kw.svg";
import icFlagsKy from "../misc-icons/flags/ky.svg";
import icFlagsKz from "../misc-icons/flags/kz.svg";
import icFlagsLa from "../misc-icons/flags/la.svg";
import icFlagsLb from "../misc-icons/flags/lb.svg";
import icFlagsLc from "../misc-icons/flags/lc.svg";
import icFlagsLi from "../misc-icons/flags/li.svg";
import icFlagsLk from "../misc-icons/flags/lk.svg";
import icFlagsLr from "../misc-icons/flags/lr.svg";
import icFlagsLs from "../misc-icons/flags/ls.svg";
import icFlagsLt from "../misc-icons/flags/lt.svg";
import icFlagsLu from "../misc-icons/flags/lu.svg";
import icFlagsLv from "../misc-icons/flags/lv.svg";
import icFlagsLy from "../misc-icons/flags/ly.svg";
import icFlagsMa from "../misc-icons/flags/ma.svg";
import icFlagsMc from "../misc-icons/flags/mc.svg";
import icFlagsMd from "../misc-icons/flags/md.svg";
import icFlagsMe from "../misc-icons/flags/me.svg";
import icFlagsMg from "../misc-icons/flags/mg.svg";
import icFlagsMh from "../misc-icons/flags/mh.svg";
import icFlagsMk from "../misc-icons/flags/mk.svg";
import icFlagsMl from "../misc-icons/flags/ml.svg";
import icFlagsMm from "../misc-icons/flags/mm.svg";
import icFlagsMn from "../misc-icons/flags/mn.svg";
import icFlagsMo from "../misc-icons/flags/mo.svg";
import icFlagsMp from "../misc-icons/flags/mp.svg";
import icFlagsMq from "../misc-icons/flags/mq.svg";
import icFlagsMr from "../misc-icons/flags/mr.svg";
import icFlagsMs from "../misc-icons/flags/ms.svg";
import icFlagsMt from "../misc-icons/flags/mt.svg";
import icFlagsMu from "../misc-icons/flags/mu.svg";
import icFlagsMv from "../misc-icons/flags/mv.svg";
import icFlagsMw from "../misc-icons/flags/mw.svg";
import icFlagsMx from "../misc-icons/flags/mx.svg";
import icFlagsMy from "../misc-icons/flags/my.svg";
import icFlagsMz from "../misc-icons/flags/mz.svg";
import icFlagsNa from "../misc-icons/flags/na.svg";
import icFlagsNe from "../misc-icons/flags/ne.svg";
import icFlagsNf from "../misc-icons/flags/nf.svg";
import icFlagsNg from "../misc-icons/flags/ng.svg";
import icFlagsNi from "../misc-icons/flags/ni.svg";
import icFlagsNl from "../misc-icons/flags/nl.svg";
import icFlagsNo from "../misc-icons/flags/no.svg";
import icFlagsNp from "../misc-icons/flags/np.svg";
import icFlagsNr from "../misc-icons/flags/nr.svg";
import icFlagsNu from "../misc-icons/flags/nu.svg";
import icFlagsNz from "../misc-icons/flags/nz.svg";
import icFlagsOm from "../misc-icons/flags/om.svg";
import icFlagsPa from "../misc-icons/flags/pa.svg";
import icFlagsPe from "../misc-icons/flags/pe.svg";
import icFlagsPf from "../misc-icons/flags/pf.svg";
import icFlagsPg from "../misc-icons/flags/pg.svg";
import icFlagsPh from "../misc-icons/flags/ph.svg";
import icFlagsPk from "../misc-icons/flags/pk.svg";
import icFlagsPl from "../misc-icons/flags/pl.svg";
import icFlagsPn from "../misc-icons/flags/pn.svg";
import icFlagsPr from "../misc-icons/flags/pr.svg";
import icFlagsPs from "../misc-icons/flags/ps.svg";
import icFlagsPt from "../misc-icons/flags/pt.svg";
import icFlagsPw from "../misc-icons/flags/pw.svg";
import icFlagsPy from "../misc-icons/flags/py.svg";
import icFlagsQa from "../misc-icons/flags/qa.svg";
import icFlagsRo from "../misc-icons/flags/ro.svg";
import icFlagsRs from "../misc-icons/flags/rs.svg";
import icFlagsRu from "../misc-icons/flags/ru.svg";
import icFlagsRw from "../misc-icons/flags/rw.svg";
import icFlagsSa from "../misc-icons/flags/sa.svg";
import icFlagsSb from "../misc-icons/flags/sb.svg";
import icFlagsSc from "../misc-icons/flags/sc.svg";
import icFlagsSe from "../misc-icons/flags/se.svg";
import icFlagsSg from "../misc-icons/flags/sg.svg";
import icFlagsSi from "../misc-icons/flags/si.svg";
import icFlagsSk from "../misc-icons/flags/sk.svg";
import icFlagsSl from "../misc-icons/flags/sl.svg";
import icFlagsSm from "../misc-icons/flags/sm.svg";
import icFlagsSn from "../misc-icons/flags/sn.svg";
import icFlagsSo from "../misc-icons/flags/so.svg";
import icFlagsSr from "../misc-icons/flags/sr.svg";
import icFlagsSs from "../misc-icons/flags/ss.svg";
import icFlagsSt from "../misc-icons/flags/st.svg";
import icFlagsSv from "../misc-icons/flags/sv.svg";
import icFlagsSx from "../misc-icons/flags/sx.svg";
import icFlagsSy from "../misc-icons/flags/sy.svg";
import icFlagsSz from "../misc-icons/flags/sz.svg";
import icFlagsTc from "../misc-icons/flags/tc.svg";
import icFlagsTd from "../misc-icons/flags/td.svg";
import icFlagsTg from "../misc-icons/flags/tg.svg";
import icFlagsTh from "../misc-icons/flags/th.svg";
import icFlagsTj from "../misc-icons/flags/tj.svg";
import icFlagsTk from "../misc-icons/flags/tk.svg";
import icFlagsTl from "../misc-icons/flags/tl.svg";
import icFlagsTm from "../misc-icons/flags/tm.svg";
import icFlagsTn from "../misc-icons/flags/tn.svg";
import icFlagsTo from "../misc-icons/flags/to.svg";
import icFlagsTr from "../misc-icons/flags/tr.svg";
import icFlagsTt from "../misc-icons/flags/tt.svg";
import icFlagsTv from "../misc-icons/flags/tv.svg";
import icFlagsTw from "../misc-icons/flags/tw.svg";
import icFlagsTz from "../misc-icons/flags/tz.svg";
import icFlagsUa from "../misc-icons/flags/ua.svg";
import icFlagsUg from "../misc-icons/flags/ug.svg";
import icFlagsUs from "../misc-icons/flags/us.svg";
import icFlagsUy from "../misc-icons/flags/uy.svg";
import icFlagsUz from "../misc-icons/flags/uz.svg";
import icFlagsVc from "../misc-icons/flags/vc.svg";
import icFlagsVe from "../misc-icons/flags/ve.svg";
import icFlagsVg from "../misc-icons/flags/vg.svg";
import icFlagsVi from "../misc-icons/flags/vi.svg";
import icFlagsVn from "../misc-icons/flags/vn.svg";
import icFlagsVu from "../misc-icons/flags/vu.svg";
import icFlagsWs from "../misc-icons/flags/ws.svg";
import icFlagsYe from "../misc-icons/flags/ye.svg";
import icFlagsZa from "../misc-icons/flags/za.svg";
import icFlagsZm from "../misc-icons/flags/zm.svg";
import icFlagsZw from "../misc-icons/flags/zw.svg";
import icFlagsEarth from "../misc-icons/flags/earth.svg";
import icFeaturedSmBrandLight from "../misc-icons/featured/sm-brand-light.svg";
import icFeaturedSmBrandModern from "../misc-icons/featured/sm-brand-modern.svg";
import icFeaturedSmErrorLight from "../misc-icons/featured/sm-error-light.svg";
import icFeaturedSmGrayLight from "../misc-icons/featured/sm-gray-light.svg";
import icFeaturedSmGrayModern from "../misc-icons/featured/sm-gray-modern.svg";
import icFeaturedSmSuccessLight from "../misc-icons/featured/sm-success-light.svg";
import icFeaturedSmWarningLight from "../misc-icons/featured/sm-warning-light.svg";
import icFeaturedMdBrandLight from "../misc-icons/featured/md-brand-light.svg";
import icFeaturedMdBrandModern from "../misc-icons/featured/md-brand-modern.svg";
import icFeaturedMdErrorLight from "../misc-icons/featured/md-error-light.svg";
import icFeaturedMdGrayLight from "../misc-icons/featured/md-gray-light.svg";
import icFeaturedMdGrayModern from "../misc-icons/featured/md-gray-modern.svg";
import icFeaturedMdSuccessLight from "../misc-icons/featured/md-success-light.svg";
import icFeaturedMdWarningLight from "../misc-icons/featured/md-warning-light.svg";
import icFeaturedLgBrandLight from "../misc-icons/featured/lg-brand-light.svg";
import icFeaturedLgBrandModern from "../misc-icons/featured/lg-brand-modern.svg";
import icFeaturedLgErrorLight from "../misc-icons/featured/lg-error-light.svg";
import icFeaturedLgGrayLight from "../misc-icons/featured/lg-gray-light.svg";
import icFeaturedLgGrayModern from "../misc-icons/featured/lg-gray-modern.svg";
import icFeaturedLgSuccessLight from "../misc-icons/featured/lg-success-light.svg";
import icFeaturedLgWarningLight from "../misc-icons/featured/lg-warning-light.svg";
import icFeaturedXlBrandLight from "../misc-icons/featured/xl-brand-light.svg";
import icFeaturedXlBrandModern from "../misc-icons/featured/xl-brand-modern.svg";
import icFeaturedXlErrorLight from "../misc-icons/featured/xl-error-light.svg";
import icFeaturedXlGrayLight from "../misc-icons/featured/xl-gray-light.svg";
import icFeaturedXlGrayModern from "../misc-icons/featured/xl-gray-modern.svg";
import icFeaturedXlSuccessLight from "../misc-icons/featured/xl-success-light.svg";
import icFeaturedXlWarningLight from "../misc-icons/featured/xl-warning-light.svg";
import icFeaturedOutlineSmBrand from "../misc-icons/featured/outline-sm-brand.svg";
import icFeaturedOutlineSmError from "../misc-icons/featured/outline-sm-error.svg";
import icFeaturedOutlineSmGray from "../misc-icons/featured/outline-sm-gray.svg";
import icFeaturedOutlineSmInfo from "../misc-icons/featured/outline-sm-info.svg";
import icFeaturedOutlineSmSuccess from "../misc-icons/featured/outline-sm-success.svg";
import icFeaturedOutlineSmWarning from "../misc-icons/featured/outline-sm-warning.svg";
import icFeaturedOutlineMdBrand from "../misc-icons/featured/outline-md-brand.svg";
import icFeaturedOutlineMdError from "../misc-icons/featured/outline-md-error.svg";
import icFeaturedOutlineMdGray from "../misc-icons/featured/outline-md-gray.svg";
import icFeaturedOutlineMdInfo from "../misc-icons/featured/outline-md-info.svg";
import icFeaturedOutlineMdSuccess from "../misc-icons/featured/outline-md-success.svg";
import icFeaturedOutlineMdWarning from "../misc-icons/featured/outline-md-warning.svg";
import icFeaturedOutlineLgBrand from "../misc-icons/featured/outline-lg-brand.svg";
import icFeaturedOutlineLgError from "../misc-icons/featured/outline-lg-error.svg";
import icFeaturedOutlineLgGray from "../misc-icons/featured/outline-lg-gray.svg";
import icFeaturedOutlineLgInfo from "../misc-icons/featured/outline-lg-info.svg";
import icFeaturedOutlineLgSuccess from "../misc-icons/featured/outline-lg-success.svg";
import icFeaturedOutlineLgWarning from "../misc-icons/featured/outline-lg-warning.svg";
import icFeaturedOutlineXlBrand from "../misc-icons/featured/outline-xl-brand.svg";
import icFeaturedOutlineXlError from "../misc-icons/featured/outline-xl-error.svg";
import icFeaturedOutlineXlGray from "../misc-icons/featured/outline-xl-gray.svg";
import icFeaturedOutlineXlInfo from "../misc-icons/featured/outline-xl-info.svg";
import icFeaturedOutlineXlSuccess from "../misc-icons/featured/outline-xl-success.svg";
import icFeaturedOutlineXlWarning from "../misc-icons/featured/outline-xl-warning.svg";

export interface MiscIconAsset {
  name: string;
  svgUrl: string;
  /** Size category for featured icons. */
  size?: "sm" | "md" | "lg" | "xl";
  /** Style variant for social icons. */
  style?: "brand" | "gray";
}

export type MiscIconCategory =
  | "Social (Brand)"
  | "Social (Gray)"
  | "File Type"
  | "File Type (Sized)"
  | "Country Flags"
  | "Featured Icon"
  | "Featured Icon Outline";

export const socialIconsBrand: MiscIconAsset[] = [
  {
    name: "AngelList",
    svgUrl: icSocialBrandAngellist,
    style: "brand" as const,
  },
  { name: "Apple", svgUrl: icSocialBrandApple, style: "brand" as const },
  {
    name: "Clubhouse",
    svgUrl: icSocialBrandClubhouse,
    style: "brand" as const,
  },
  { name: "Discord 01", svgUrl: icSocialBrandDiscord, style: "brand" as const },
  { name: "Discord 02", svgUrl: icSocialBrandDiscord, style: "brand" as const },
  { name: "Dribbble", svgUrl: icSocialBrandDribbble, style: "brand" as const },
  { name: "Facebook", svgUrl: icSocialBrandFacebook, style: "brand" as const },
  { name: "Figma", svgUrl: icSocialBrandFigma, style: "brand" as const },
  { name: "Framer 01", svgUrl: icSocialBrandFramer, style: "brand" as const },
  { name: "Framer 02", svgUrl: icSocialBrandFramer, style: "brand" as const },
  { name: "GitHub", svgUrl: icSocialBrandGithub, style: "brand" as const },
  { name: "Google", svgUrl: icSocialBrandGoogle, style: "brand" as const },
  {
    name: "Instagram",
    svgUrl: icSocialBrandInstagram,
    style: "brand" as const,
  },
  { name: "Layers", svgUrl: icSocialBrandLayers, style: "brand" as const },
  { name: "LinkedIn", svgUrl: icSocialBrandLinkedin, style: "brand" as const },
  { name: "Notion", svgUrl: icSocialBrandNotion, style: "brand" as const },
  { name: "PayPal", svgUrl: icSocialBrandPaypal, style: "brand" as const },
  {
    name: "Pinterest",
    svgUrl: icSocialBrandPinterest,
    style: "brand" as const,
  },
  { name: "Reddit", svgUrl: icSocialBrandReddit, style: "brand" as const },
  { name: "Signal", svgUrl: icSocialBrandSignal, style: "brand" as const },
  { name: "Slack", svgUrl: icSocialBrandSlack, style: "brand" as const },
  { name: "Snapchat", svgUrl: icSocialBrandSnapchat, style: "brand" as const },
  { name: "Spotify", svgUrl: icSocialBrandSpotify, style: "brand" as const },
  { name: "Stripe", svgUrl: icSocialBrandStripe, style: "brand" as const },
  { name: "Telegram", svgUrl: icSocialBrandTelegram, style: "brand" as const },
  { name: "TikTok", svgUrl: icSocialBrandTiktok, style: "brand" as const },
  { name: "Tumblr", svgUrl: icSocialBrandTumblr, style: "brand" as const },
  { name: "Twitch", svgUrl: icSocialBrandTwitch, style: "brand" as const },
  { name: "Twitter", svgUrl: icSocialBrandTwitter, style: "brand" as const },
  { name: "Webflow", svgUrl: icSocialBrandWebflow, style: "brand" as const },
  { name: "WhatsApp", svgUrl: icSocialBrandWhatsapp, style: "brand" as const },
  { name: "Wise", svgUrl: icSocialBrandWise, style: "brand" as const },
  { name: "X (Twitter)", svgUrl: icSocialBrandX, style: "brand" as const },
  { name: "YouTube", svgUrl: icSocialBrandYoutube, style: "brand" as const },
];

export const socialIconsGray: MiscIconAsset[] = [
  { name: "AngelList", svgUrl: icSocialGrayAngellist, style: "gray" as const },
  { name: "Apple", svgUrl: icSocialGrayApple, style: "gray" as const },
  { name: "Clubhouse", svgUrl: icSocialGrayClubhouse, style: "gray" as const },
  { name: "Discord 01", svgUrl: icSocialGrayDiscord, style: "gray" as const },
  { name: "Discord 02", svgUrl: icSocialGrayDiscord, style: "gray" as const },
  { name: "Dribbble", svgUrl: icSocialGrayDribbble, style: "gray" as const },
  { name: "Facebook", svgUrl: icSocialGrayFacebook, style: "gray" as const },
  { name: "Figma", svgUrl: icSocialGrayFigma, style: "gray" as const },
  { name: "Framer 01", svgUrl: icSocialGrayFramer, style: "gray" as const },
  { name: "Framer 02", svgUrl: icSocialGrayFramer, style: "gray" as const },
  { name: "GitHub", svgUrl: icSocialGrayGithub, style: "gray" as const },
  { name: "Google", svgUrl: icSocialGrayGoogle, style: "gray" as const },
  { name: "Instagram", svgUrl: icSocialGrayInstagram, style: "gray" as const },
  { name: "Layers", svgUrl: icSocialGrayLayers, style: "gray" as const },
  { name: "LinkedIn", svgUrl: icSocialGrayLinkedin, style: "gray" as const },
  { name: "Notion", svgUrl: icSocialGrayNotion, style: "gray" as const },
  { name: "PayPal", svgUrl: icSocialGrayPaypal, style: "gray" as const },
  { name: "Pinterest", svgUrl: icSocialGrayPinterest, style: "gray" as const },
  { name: "Reddit", svgUrl: icSocialGrayReddit, style: "gray" as const },
  { name: "Signal", svgUrl: icSocialGraySignal, style: "gray" as const },
  { name: "Slack", svgUrl: icSocialGraySlack, style: "gray" as const },
  { name: "Snapchat", svgUrl: icSocialGraySnapchat, style: "gray" as const },
  { name: "Spotify", svgUrl: icSocialGraySpotify, style: "gray" as const },
  { name: "Stripe", svgUrl: icSocialGrayStripe, style: "gray" as const },
  { name: "Telegram", svgUrl: icSocialGrayTelegram, style: "gray" as const },
  { name: "TikTok", svgUrl: icSocialGrayTiktok, style: "gray" as const },
  { name: "Tumblr", svgUrl: icSocialGrayTumblr, style: "gray" as const },
  { name: "Twitch", svgUrl: icSocialGrayTwitch, style: "gray" as const },
  { name: "Twitter", svgUrl: icSocialGrayTwitter, style: "gray" as const },
  { name: "Webflow", svgUrl: icSocialGrayWebflow, style: "gray" as const },
  { name: "WhatsApp", svgUrl: icSocialGrayWhatsapp, style: "gray" as const },
  { name: "Wise", svgUrl: icSocialGrayWise, style: "gray" as const },
  { name: "X (Twitter)", svgUrl: icSocialGrayX, style: "gray" as const },
  { name: "YouTube", svgUrl: icSocialGrayYoutube, style: "gray" as const },
];

export const fileTypeIcons: MiscIconAsset[] = [
  { name: "Archive / RAR", svgUrl: icFiletypeBadgeArchiveRar },
  { name: "Archive / ZIP", svgUrl: icFiletypeBadgeArchiveZip },
  {
    name: "Design / AEP (After Effects)",
    svgUrl: icFiletypeBadgeDesignAepAfterEffects,
  },
  {
    name: "Design / AI (Illustrator)",
    svgUrl: icFiletypeBadgeDesignAiIllustrator,
  },
  { name: "Design / FIG (Figma)", svgUrl: icFiletypeBadgeDesignFigFigma },
  {
    name: "Design / INDD (InDesign)",
    svgUrl: icFiletypeBadgeDesignInddIndesign,
  },
  {
    name: "Design / PSD (Photoshop)",
    svgUrl: icFiletypeBadgeDesignPsdPhotoshop,
  },
  { name: "Document / CSV", svgUrl: icFiletypeBadgeDocumentCsv },
  { name: "Document / DOC", svgUrl: icFiletypeBadgeDocumentDoc },
  { name: "Document / DOCX", svgUrl: icFiletypeBadgeDocumentDocx },
  { name: "Document / PDF", svgUrl: icFiletypeBadgeDocumentPdf },
  { name: "Document / PPT", svgUrl: icFiletypeBadgeDocumentPpt },
  { name: "Document / PPTX", svgUrl: icFiletypeBadgeDocumentPptx },
  { name: "Document / TXT", svgUrl: icFiletypeBadgeDocumentTxt },
  { name: "Document / XLS", svgUrl: icFiletypeBadgeDocumentXls },
  { name: "Document / XLSX", svgUrl: icFiletypeBadgeDocumentXlsx },
  { name: "Image / EPS", svgUrl: icFiletypeBadgeImageEps },
  { name: "Image / GIF", svgUrl: icFiletypeBadgeImageGif },
  { name: "Image / IMG", svgUrl: icFiletypeBadgeImageImg },
  { name: "Image / JPEG", svgUrl: icFiletypeBadgeImageJpeg },
  { name: "Image / JPG", svgUrl: icFiletypeBadgeImageJpg },
  { name: "Image / PNG", svgUrl: icFiletypeBadgeImagePng },
  { name: "Image / SVG", svgUrl: icFiletypeBadgeImageSvg },
  { name: "Image / TIFF", svgUrl: icFiletypeBadgeImageTiff },
  { name: "Image / WebP", svgUrl: icFiletypeBadgeImageWebp },
  { name: "Media / AVI", svgUrl: icFiletypeBadgeMediaAvi },
  { name: "Media / MKV", svgUrl: icFiletypeBadgeMediaMkv },
  { name: "Media / MP3", svgUrl: icFiletypeBadgeMediaMp3 },
  { name: "Media / MP4", svgUrl: icFiletypeBadgeMediaMp4 },
  { name: "Media / MPEG", svgUrl: icFiletypeBadgeMediaMpeg },
  { name: "Media / WAV", svgUrl: icFiletypeBadgeMediaWav },
];

export const fileTypeSized: MiscIconAsset[] = [
  { name: ".jpg (Icon)", svgUrl: icFiletypeJpg },
  { name: ".jpg (Image)", svgUrl: icFiletypeJpg },
  { name: ".link (Icon)", svgUrl: icFiletypeLink },
  { name: ".link (Image)", svgUrl: icFiletypeLink },
  { name: ".mov (Icon)", svgUrl: icFiletypeMov },
  { name: ".mov (Image)", svgUrl: icFiletypeMov },
  { name: ".mp3 (Icon)", svgUrl: icFiletypeMp3 },
  { name: ".mp3 (Image)", svgUrl: icFiletypeMp3 },
  { name: ".pdf (Icon)", svgUrl: icFiletypePdf },
  { name: ".pdf (Image)", svgUrl: icFiletypePdf },
  { name: ".ppt (Icon)", svgUrl: icFiletypePpt },
  { name: ".ppt (Image)", svgUrl: icFiletypePpt },
  { name: ".txt (Icon)", svgUrl: icFiletypeTxt },
  { name: ".txt (Image)", svgUrl: icFiletypeTxt },
  { name: ".word (Icon)", svgUrl: icFiletypeWord },
  { name: ".word (Image)", svgUrl: icFiletypeWord },
  { name: ".xlsx (Icon)", svgUrl: icFiletypeXlsx },
  { name: ".xlsx (Image)", svgUrl: icFiletypeXlsx },
  { name: ".zip (Icon)", svgUrl: icFiletypeZip },
  { name: ".zip (Image)", svgUrl: icFiletypeZip },
  { name: "? (Icon)", svgUrl: icFiletypeUnknown },
  { name: "? (Image)", svgUrl: icFiletypeUnknown },
];

export const countryFlags: MiscIconAsset[] = [
  { name: "AD", svgUrl: icFlagsAd },
  { name: "AE", svgUrl: icFlagsAe },
  { name: "AF", svgUrl: icFlagsAf },
  { name: "AG", svgUrl: icFlagsAg },
  { name: "AI", svgUrl: icFlagsAi },
  { name: "AL", svgUrl: icFlagsAl },
  { name: "AM", svgUrl: icFlagsAm },
  { name: "AO", svgUrl: icFlagsAo },
  { name: "AR", svgUrl: icFlagsAr },
  { name: "AS", svgUrl: icFlagsAs },
  { name: "AT", svgUrl: icFlagsAt },
  { name: "AU", svgUrl: icFlagsAu },
  { name: "AW", svgUrl: icFlagsAw },
  { name: "AX", svgUrl: icFlagsAx },
  { name: "AZ", svgUrl: icFlagsAz },
  { name: "BA", svgUrl: icFlagsBa },
  { name: "BB", svgUrl: icFlagsBb },
  { name: "BD", svgUrl: icFlagsBd },
  { name: "BE", svgUrl: icFlagsBe },
  { name: "BF", svgUrl: icFlagsBf },
  { name: "BG", svgUrl: icFlagsBg },
  { name: "BH", svgUrl: icFlagsBh },
  { name: "BI", svgUrl: icFlagsBi },
  { name: "BJ", svgUrl: icFlagsBj },
  { name: "BL", svgUrl: icFlagsBl },
  { name: "BM", svgUrl: icFlagsBm },
  { name: "BN", svgUrl: icFlagsBn },
  { name: "BO", svgUrl: icFlagsBo },
  { name: "BQ", svgUrl: icFlagsBq },
  { name: "BR", svgUrl: icFlagsBr },
  { name: "BS", svgUrl: icFlagsBs },
  { name: "BT", svgUrl: icFlagsBt },
  { name: "BW", svgUrl: icFlagsBw },
  { name: "BY", svgUrl: icFlagsBy },
  { name: "BZ", svgUrl: icFlagsBz },
  { name: "CA", svgUrl: icFlagsCa },
  { name: "CC", svgUrl: icFlagsCc },
  { name: "CD", svgUrl: icFlagsCd },
  { name: "CF", svgUrl: icFlagsCf },
  { name: "CH", svgUrl: icFlagsCh },
  { name: "CK", svgUrl: icFlagsCk },
  { name: "CL", svgUrl: icFlagsCl },
  { name: "CM", svgUrl: icFlagsCm },
  { name: "CN", svgUrl: icFlagsCn },
  { name: "CO", svgUrl: icFlagsCo },
  { name: "CR", svgUrl: icFlagsCr },
  { name: "CU", svgUrl: icFlagsCu },
  { name: "CW", svgUrl: icFlagsCw },
  { name: "CX", svgUrl: icFlagsCx },
  { name: "CY", svgUrl: icFlagsCy },
  { name: "CZ", svgUrl: icFlagsCz },
  { name: "DE", svgUrl: icFlagsDe },
  { name: "DJ", svgUrl: icFlagsDj },
  { name: "DK", svgUrl: icFlagsDk },
  { name: "DM", svgUrl: icFlagsDm },
  { name: "DO", svgUrl: icFlagsDo },
  { name: "DS", svgUrl: icFlagsDs },
  { name: "DZ", svgUrl: icFlagsDz },
  { name: "EC", svgUrl: icFlagsEc },
  { name: "EE", svgUrl: icFlagsEe },
  { name: "EG", svgUrl: icFlagsEg },
  { name: "EH", svgUrl: icFlagsEh },
  { name: "ER", svgUrl: icFlagsEr },
  { name: "ES", svgUrl: icFlagsEs },
  { name: "ET", svgUrl: icFlagsEt },
  { name: "FI", svgUrl: icFlagsFi },
  { name: "FJ", svgUrl: icFlagsFj },
  { name: "FK", svgUrl: icFlagsFk },
  { name: "FM", svgUrl: icFlagsFm },
  { name: "FO", svgUrl: icFlagsFo },
  { name: "FR", svgUrl: icFlagsFr },
  { name: "GA", svgUrl: icFlagsGa },
  { name: "GB", svgUrl: icFlagsGb },
  { name: "GB-2", svgUrl: icFlagsGb2 },
  { name: "GD", svgUrl: icFlagsGd },
  { name: "GE", svgUrl: icFlagsGe },
  { name: "GG", svgUrl: icFlagsGg },
  { name: "GH", svgUrl: icFlagsGh },
  { name: "GI", svgUrl: icFlagsGi },
  { name: "GL", svgUrl: icFlagsGl },
  { name: "GM", svgUrl: icFlagsGm },
  { name: "GN", svgUrl: icFlagsGn },
  { name: "GQ", svgUrl: icFlagsGq },
  { name: "GR", svgUrl: icFlagsGr },
  { name: "GT", svgUrl: icFlagsGt },
  { name: "GU", svgUrl: icFlagsGu },
  { name: "GW", svgUrl: icFlagsGw },
  { name: "GY", svgUrl: icFlagsGy },
  { name: "HK", svgUrl: icFlagsHk },
  { name: "HN", svgUrl: icFlagsHn },
  { name: "HR", svgUrl: icFlagsHr },
  { name: "HT", svgUrl: icFlagsHt },
  { name: "HU", svgUrl: icFlagsHu },
  { name: "ID", svgUrl: icFlagsId },
  { name: "IE", svgUrl: icFlagsIe },
  { name: "IL", svgUrl: icFlagsIl },
  { name: "IM", svgUrl: icFlagsIm },
  { name: "IN", svgUrl: icFlagsIn },
  { name: "IO", svgUrl: icFlagsIo },
  { name: "IQ", svgUrl: icFlagsIq },
  { name: "IR", svgUrl: icFlagsIr },
  { name: "IS", svgUrl: icFlagsIs },
  { name: "IT", svgUrl: icFlagsIt },
  { name: "JE", svgUrl: icFlagsJe },
  { name: "JM", svgUrl: icFlagsJm },
  { name: "JO", svgUrl: icFlagsJo },
  { name: "JP", svgUrl: icFlagsJp },
  { name: "KE", svgUrl: icFlagsKe },
  { name: "KG", svgUrl: icFlagsKg },
  { name: "KH", svgUrl: icFlagsKh },
  { name: "KI", svgUrl: icFlagsKi },
  { name: "KM", svgUrl: icFlagsKm },
  { name: "KN", svgUrl: icFlagsKn },
  { name: "KP", svgUrl: icFlagsKp },
  { name: "KR", svgUrl: icFlagsKr },
  { name: "KW", svgUrl: icFlagsKw },
  { name: "KY", svgUrl: icFlagsKy },
  { name: "KZ", svgUrl: icFlagsKz },
  { name: "LA", svgUrl: icFlagsLa },
  { name: "LB", svgUrl: icFlagsLb },
  { name: "LC", svgUrl: icFlagsLc },
  { name: "LI", svgUrl: icFlagsLi },
  { name: "LK", svgUrl: icFlagsLk },
  { name: "LR", svgUrl: icFlagsLr },
  { name: "LS", svgUrl: icFlagsLs },
  { name: "LT", svgUrl: icFlagsLt },
  { name: "LU", svgUrl: icFlagsLu },
  { name: "LV", svgUrl: icFlagsLv },
  { name: "LY", svgUrl: icFlagsLy },
  { name: "MA", svgUrl: icFlagsMa },
  { name: "MC", svgUrl: icFlagsMc },
  { name: "MD", svgUrl: icFlagsMd },
  { name: "ME", svgUrl: icFlagsMe },
  { name: "MG", svgUrl: icFlagsMg },
  { name: "MH", svgUrl: icFlagsMh },
  { name: "MK", svgUrl: icFlagsMk },
  { name: "ML", svgUrl: icFlagsMl },
  { name: "MM", svgUrl: icFlagsMm },
  { name: "MN", svgUrl: icFlagsMn },
  { name: "MO", svgUrl: icFlagsMo },
  { name: "MP", svgUrl: icFlagsMp },
  { name: "MQ", svgUrl: icFlagsMq },
  { name: "MR", svgUrl: icFlagsMr },
  { name: "MS", svgUrl: icFlagsMs },
  { name: "MT", svgUrl: icFlagsMt },
  { name: "MU", svgUrl: icFlagsMu },
  { name: "MV", svgUrl: icFlagsMv },
  { name: "MW", svgUrl: icFlagsMw },
  { name: "MX", svgUrl: icFlagsMx },
  { name: "MY", svgUrl: icFlagsMy },
  { name: "MZ", svgUrl: icFlagsMz },
  { name: "NA", svgUrl: icFlagsNa },
  { name: "NE", svgUrl: icFlagsNe },
  { name: "NF", svgUrl: icFlagsNf },
  { name: "NG", svgUrl: icFlagsNg },
  { name: "NI", svgUrl: icFlagsNi },
  { name: "NL", svgUrl: icFlagsNl },
  { name: "NO", svgUrl: icFlagsNo },
  { name: "NP", svgUrl: icFlagsNp },
  { name: "NR", svgUrl: icFlagsNr },
  { name: "NU", svgUrl: icFlagsNu },
  { name: "NZ", svgUrl: icFlagsNz },
  { name: "OM", svgUrl: icFlagsOm },
  { name: "PA", svgUrl: icFlagsPa },
  { name: "PE", svgUrl: icFlagsPe },
  { name: "PF", svgUrl: icFlagsPf },
  { name: "PG", svgUrl: icFlagsPg },
  { name: "PH", svgUrl: icFlagsPh },
  { name: "PK", svgUrl: icFlagsPk },
  { name: "PL", svgUrl: icFlagsPl },
  { name: "PN", svgUrl: icFlagsPn },
  { name: "PR", svgUrl: icFlagsPr },
  { name: "PS", svgUrl: icFlagsPs },
  { name: "PT", svgUrl: icFlagsPt },
  { name: "PW", svgUrl: icFlagsPw },
  { name: "PY", svgUrl: icFlagsPy },
  { name: "QA", svgUrl: icFlagsQa },
  { name: "RO", svgUrl: icFlagsRo },
  { name: "RS", svgUrl: icFlagsRs },
  { name: "RU", svgUrl: icFlagsRu },
  { name: "RW", svgUrl: icFlagsRw },
  { name: "SA", svgUrl: icFlagsSa },
  { name: "SB", svgUrl: icFlagsSb },
  { name: "SC", svgUrl: icFlagsSc },
  { name: "SE", svgUrl: icFlagsSe },
  { name: "SG", svgUrl: icFlagsSg },
  { name: "SI", svgUrl: icFlagsSi },
  { name: "SK", svgUrl: icFlagsSk },
  { name: "SL", svgUrl: icFlagsSl },
  { name: "SM", svgUrl: icFlagsSm },
  { name: "SN", svgUrl: icFlagsSn },
  { name: "SO", svgUrl: icFlagsSo },
  { name: "SR", svgUrl: icFlagsSr },
  { name: "SS", svgUrl: icFlagsSs },
  { name: "ST", svgUrl: icFlagsSt },
  { name: "SV", svgUrl: icFlagsSv },
  { name: "SX", svgUrl: icFlagsSx },
  { name: "SY", svgUrl: icFlagsSy },
  { name: "SZ", svgUrl: icFlagsSz },
  { name: "TC", svgUrl: icFlagsTc },
  { name: "TD", svgUrl: icFlagsTd },
  { name: "TG", svgUrl: icFlagsTg },
  { name: "TH", svgUrl: icFlagsTh },
  { name: "TJ", svgUrl: icFlagsTj },
  { name: "TK", svgUrl: icFlagsTk },
  { name: "TL", svgUrl: icFlagsTl },
  { name: "TM", svgUrl: icFlagsTm },
  { name: "TN", svgUrl: icFlagsTn },
  { name: "TO", svgUrl: icFlagsTo },
  { name: "TR", svgUrl: icFlagsTr },
  { name: "TT", svgUrl: icFlagsTt },
  { name: "TV", svgUrl: icFlagsTv },
  { name: "TW", svgUrl: icFlagsTw },
  { name: "TZ", svgUrl: icFlagsTz },
  { name: "UA", svgUrl: icFlagsUa },
  { name: "UG", svgUrl: icFlagsUg },
  { name: "US", svgUrl: icFlagsUs },
  { name: "UY", svgUrl: icFlagsUy },
  { name: "UZ", svgUrl: icFlagsUz },
  { name: "VC", svgUrl: icFlagsVc },
  { name: "VE", svgUrl: icFlagsVe },
  { name: "VG", svgUrl: icFlagsVg },
  { name: "VI", svgUrl: icFlagsVi },
  { name: "VN", svgUrl: icFlagsVn },
  { name: "VU", svgUrl: icFlagsVu },
  { name: "WS", svgUrl: icFlagsWs },
  { name: "YE", svgUrl: icFlagsYe },
  { name: "ZA", svgUrl: icFlagsZa },
  { name: "ZM", svgUrl: icFlagsZm },
  { name: "ZW", svgUrl: icFlagsZw },
  { name: "earth", svgUrl: icFlagsEarth },
];

export const featuredIcons: MiscIconAsset[] = [
  {
    name: "sm / Brand / Light",
    svgUrl: icFeaturedSmBrandLight,
    size: "sm" as const,
  },
  {
    name: "sm / Brand / Modern",
    svgUrl: icFeaturedSmBrandModern,
    size: "sm" as const,
  },
  {
    name: "sm / Error / Light",
    svgUrl: icFeaturedSmErrorLight,
    size: "sm" as const,
  },
  {
    name: "sm / Gray / Light",
    svgUrl: icFeaturedSmGrayLight,
    size: "sm" as const,
  },
  {
    name: "sm / Gray / Modern",
    svgUrl: icFeaturedSmGrayModern,
    size: "sm" as const,
  },
  {
    name: "sm / Success / Light",
    svgUrl: icFeaturedSmSuccessLight,
    size: "sm" as const,
  },
  {
    name: "sm / Warning / Light",
    svgUrl: icFeaturedSmWarningLight,
    size: "sm" as const,
  },
  {
    name: "md / Brand / Light",
    svgUrl: icFeaturedMdBrandLight,
    size: "md" as const,
  },
  {
    name: "md / Brand / Modern",
    svgUrl: icFeaturedMdBrandModern,
    size: "md" as const,
  },
  {
    name: "md / Error / Light",
    svgUrl: icFeaturedMdErrorLight,
    size: "md" as const,
  },
  {
    name: "md / Gray / Light",
    svgUrl: icFeaturedMdGrayLight,
    size: "md" as const,
  },
  {
    name: "md / Gray / Modern",
    svgUrl: icFeaturedMdGrayModern,
    size: "md" as const,
  },
  {
    name: "md / Success / Light",
    svgUrl: icFeaturedMdSuccessLight,
    size: "md" as const,
  },
  {
    name: "md / Warning / Light",
    svgUrl: icFeaturedMdWarningLight,
    size: "md" as const,
  },
  {
    name: "lg / Brand / Light",
    svgUrl: icFeaturedLgBrandLight,
    size: "lg" as const,
  },
  {
    name: "lg / Brand / Modern",
    svgUrl: icFeaturedLgBrandModern,
    size: "lg" as const,
  },
  {
    name: "lg / Error / Light",
    svgUrl: icFeaturedLgErrorLight,
    size: "lg" as const,
  },
  {
    name: "lg / Gray / Light",
    svgUrl: icFeaturedLgGrayLight,
    size: "lg" as const,
  },
  {
    name: "lg / Gray / Modern",
    svgUrl: icFeaturedLgGrayModern,
    size: "lg" as const,
  },
  {
    name: "lg / Success / Light",
    svgUrl: icFeaturedLgSuccessLight,
    size: "lg" as const,
  },
  {
    name: "lg / Warning / Light",
    svgUrl: icFeaturedLgWarningLight,
    size: "lg" as const,
  },
  {
    name: "xl / Brand / Light",
    svgUrl: icFeaturedXlBrandLight,
    size: "xl" as const,
  },
  {
    name: "xl / Brand / Modern",
    svgUrl: icFeaturedXlBrandModern,
    size: "xl" as const,
  },
  {
    name: "xl / Error / Light",
    svgUrl: icFeaturedXlErrorLight,
    size: "xl" as const,
  },
  {
    name: "xl / Gray / Light",
    svgUrl: icFeaturedXlGrayLight,
    size: "xl" as const,
  },
  {
    name: "xl / Gray / Modern",
    svgUrl: icFeaturedXlGrayModern,
    size: "xl" as const,
  },
  {
    name: "xl / Success / Light",
    svgUrl: icFeaturedXlSuccessLight,
    size: "xl" as const,
  },
  {
    name: "xl / Warning / Light",
    svgUrl: icFeaturedXlWarningLight,
    size: "xl" as const,
  },
];

export const featuredIconsOutline: MiscIconAsset[] = [
  { name: "sm / Brand", svgUrl: icFeaturedOutlineSmBrand, size: "sm" as const },
  { name: "sm / Error", svgUrl: icFeaturedOutlineSmError, size: "sm" as const },
  { name: "sm / Gray", svgUrl: icFeaturedOutlineSmGray, size: "sm" as const },
  { name: "sm / Info", svgUrl: icFeaturedOutlineSmInfo, size: "sm" as const },
  {
    name: "sm / Success",
    svgUrl: icFeaturedOutlineSmSuccess,
    size: "sm" as const,
  },
  {
    name: "sm / Warning",
    svgUrl: icFeaturedOutlineSmWarning,
    size: "sm" as const,
  },
  { name: "md / Brand", svgUrl: icFeaturedOutlineMdBrand, size: "md" as const },
  { name: "md / Error", svgUrl: icFeaturedOutlineMdError, size: "md" as const },
  { name: "md / Gray", svgUrl: icFeaturedOutlineMdGray, size: "md" as const },
  { name: "md / Info", svgUrl: icFeaturedOutlineMdInfo, size: "md" as const },
  {
    name: "md / Success",
    svgUrl: icFeaturedOutlineMdSuccess,
    size: "md" as const,
  },
  {
    name: "md / Warning",
    svgUrl: icFeaturedOutlineMdWarning,
    size: "md" as const,
  },
  { name: "lg / Brand", svgUrl: icFeaturedOutlineLgBrand, size: "lg" as const },
  { name: "lg / Error", svgUrl: icFeaturedOutlineLgError, size: "lg" as const },
  { name: "lg / Gray", svgUrl: icFeaturedOutlineLgGray, size: "lg" as const },
  { name: "lg / Info", svgUrl: icFeaturedOutlineLgInfo, size: "lg" as const },
  {
    name: "lg / Success",
    svgUrl: icFeaturedOutlineLgSuccess,
    size: "lg" as const,
  },
  {
    name: "lg / Warning",
    svgUrl: icFeaturedOutlineLgWarning,
    size: "lg" as const,
  },
  { name: "xl / Brand", svgUrl: icFeaturedOutlineXlBrand, size: "xl" as const },
  { name: "xl / Error", svgUrl: icFeaturedOutlineXlError, size: "xl" as const },
  { name: "xl / Gray", svgUrl: icFeaturedOutlineXlGray, size: "xl" as const },
  { name: "xl / Info", svgUrl: icFeaturedOutlineXlInfo, size: "xl" as const },
  {
    name: "xl / Success",
    svgUrl: icFeaturedOutlineXlSuccess,
    size: "xl" as const,
  },
  {
    name: "xl / Warning",
    svgUrl: icFeaturedOutlineXlWarning,
    size: "xl" as const,
  },
];

export const miscIconRegistry: Record<MiscIconCategory, MiscIconAsset[]> = {
  "Social (Brand)": socialIconsBrand,
  "Social (Gray)": socialIconsGray,
  "File Type": fileTypeIcons,
  "File Type (Sized)": fileTypeSized,
  "Country Flags": countryFlags,
  "Featured Icon": featuredIcons,
  "Featured Icon Outline": featuredIconsOutline,
};

export const miscIconCategories: MiscIconCategory[] = [
  "Social (Brand)",
  "Social (Gray)",
  "File Type",
  "File Type (Sized)",
  "Country Flags",
  "Featured Icon",
  "Featured Icon Outline",
];
export const miscIconTotalCount = 404;
