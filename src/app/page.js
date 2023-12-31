'use client'
import Tile1 from "@/components/tiles/Tile1";
import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { TbReload } from 'react-icons/tb';
import Container from "@/components/Container";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Title from "@/components/Titile";
import { useRouter } from "next/navigation";
import LiveUpdates from "@/components/LiveUpdates";

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  const [showBreakingNewsTitle, setShowBreakingNewsTitle] = useState(true)

  const route = useRouter()

  const textNewsData = [
    { id: 1, type: "video", link: "/news/34/sdfsdf", text: "दमदार हेलमेट... Airbag से लैस खास रेसिंग सूट...पैरो में बूट! किसी योद्धा की तरह ट्रैक पर उतरते हैं MotoGP राइडर्स" },
    { id: 2, type: "text", link: "/news/34", text: "8 साल से कार में रह रहा शख्स, बताया अब तक कौन से फायदे हुए" },
    { id: 3, type: "image", link: "/news/34/tkjserksjer", text: "Asian Games 2023 IND-W Vs BAN-W: क्रिकेट में मिलेगा गोल्ड! बांग्लादेश को हराकर फाइनल में पहुंची टीम इंडिया, अब पाकिस्तान से हो सकती है टक्कर" },
    { id: 4, type: "video", link: "/news/34/jtejkwrthwe", text: "PM मोदी आज 9 वंदे भारत एक्सप्रेस को दिखाएंगे हरी झंडी, इन 11 राज्यों से गुजरेगी हाइटेक ट्रेन" },
    { id: 5, type: "video", link: "/news/34/jtejkwrthwe", text: "PM मोदी आज 9 वंदे भारत एक्सप्रेस को दिखाएंगे हरी झंडी, इन 11 राज्यों से गुजरेगी हाइटेक ट्रेन" },
    { id: 6, type: "video", link: "/news/34/jtejkwrthwe", text: "PM मोदी आज 9 वंदे भारत एक्सप्रेस को दिखाएंगे हरी झंडी, इन 11 राज्यों से गुजरेगी हाइटेक ट्रेन" },
    { id: 7, type: "video", link: "/news/34/jtejkwrthwe", text: "PM मोदी आज 9 वंदे भारत एक्सप्रेस को दिखाएंगे हरी झंडी, इन 11 राज्यों से गुजरेगी हाइटेक ट्रेन" },
    { id: 8, type: "text", link: "/news/34", text: "8 साल से कार में रह रहा शख्स, बताया अब तक कौन से फायदे हुए" },
  ]

  const liveUpdate = [
    { id: 1, time: "05:30 AM", link: "/news/34wer", news: "26 सितंबर को G20 यूनिवर्सिटी कनेक्ट कार्यक्रम', मन की बात में बोले पीएम मोदी" },
    { id: 2, time: "06:14 AM", link: "/news/34r/3434", news: "चंद्रयान की सफलता से भारतीयों को गहरा लगाव', मन की बात में बोले पीएम मोदी" },
    { id: 3, time: "07:04 AM", link: "/news/34/345/345", news: "एशियन गेम्स में भारत की पुरुष हॉकी टीम ने उज्बेकिस्तान को 16-0 से हराया" },
    { id: 4, time: "09:04 AM", link: "/news/34/jsdfjsdkf", news: "एशियन गेम्स में भारत की पुरुष हॉकी टीम ने उज्बेकिस्तान को 16-0 से हराया" },
    { id: 5, time: "10:04 AM", link: "/news/34/345/345", news: "एशियन गेम्स में भारत की पुरुष हॉकी टीम ने उज्बेकिस्तान को 16-0 से हराया" },
    { id: 6, time: "11:04 AM", link: "/news/34/345/345", news: "एशियन गेम्स में भारत की पुरुष हॉकी टीम ने उज्बेकिस्तान को 16-0 से हराया" },
    { id: 7, time: "01:30 AM", link: "/news/34wer", news: "26 सितंबर को G20 यूनिवर्सिटी कनेक्ट कार्यक्रम', मन की बात में बोले पीएम मोदी" },
    { id: 8, time: "01:04 AM", link: "/news/34/345/345", news: "एशियन गेम्स में भारत की पुरुष हॉकी टीम ने उज्बेकिस्तान को 16-0 से हराया" },
  ]

  const titleWithImage = [
    { id: 1, link: "/news/34wewr/wer32", text: "LIVE:  राघव-परिणीति की शादी, संगीत में थिरके 'दूल्हा-दुल्हन', सामने आई पहली तस्वीर", image: "https://picsum.photos/id/331/200/100" },
    { id: 2, link: "/news/34wewr/wer32", text: "मैदान पर तूफान मचाने आ रहा द्रविड़ का बेटा, इस टीम में हुआ सेलेक्शन ", image: "https://picsum.photos/id/222/200/100" },
    { id: 3, link: "/news/34wewr/wer32", text: "रिपीट हुई 'हम दिल दे चुके सनम' की स्टोरी, पति ने पत्नी को प्रेमी संग किया विदा", image: "https://picsum.photos/id/555/200/100" },
    { id: 4, link: "/news/34wewr/wer32", text: "निज्जर की हत्या के बाद खालिस्तानी तत्वों को सावधान कर रहा FBI! न्यूज रिपोर्ट में दावा", image: "https://picsum.photos/id/666/200/100" },
    { id: 4, link: "/news/34wewr/wer32", text: "निज्जर की हत्या के बाद खालिस्तानी तत्वों को सावधान कर रहा FBI! न्यूज रिपोर्ट में दावा", image: "https://picsum.photos/id/536/200/100" },
  ]

  return (
    <>
      <Container>

        { // Breaking News
          showBreakingNewsTitle &&
          <div className="flex justify-between text-[10px] md:text-base items-center bg-red-600 text-white rounded-3xl px-4 py-1 m-1 md:m-4 cursor-pointer font-semibold">
            <div>
              <span className="italic">BREAKING NEWS</span>
              <span className="border border-r mx-2"></span>
              <span>राज्यसभा में भी महिला आरक्षण विधेयक पारित, महिला सांसदों ने PM मोदी के साथ मनाया जश्न</span>
            </div>
            <div className="text-lg ml-1">
              <AiOutlineClose onClick={() => setShowBreakingNewsTitle(false)} className="text-md md:text-lg" />
            </div>
          </div>
        }

        <div className="grid grid-cols-1 md:grid-cols-12 m-3">  {/*This is main Grid = Total Grid is 4*/}

          <div className="col-span-1 md:col-span-3"> {/*This Grid 1 */}
            <Title title={"मुख्य समाचार"} />
            <div>
              <h1 className={` ${roboto.className} font-semibold text-lg`}>सबूत सौंपने की बात आई तो पैंतरेबाजी पर उतरे ट्रूडो, बोले- कनाडा ने कई सप्ताह पहले भारत को दिए थे साक्ष्य</h1>
              <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202309/justin_trudeau-sixteen_nine.png?size=948:533" alt="Test Image" />
              <p>कनाडा के प्रधानमंत्री जस्टिन ट्रूडो भारत को सबूत पेश करने के मामले पैंतरेबाजी कर रहे हैं. ट्रूडो ने अब कहा है कि कनाडा ने कई सप्ताह पहले भारत के साथ...</p>
            </div>
            <div>
              <h1 className={` ${roboto.className} font-semibold text-lg`}>सद्दाम ने ही बनवाए थे उमेशपाल हत्याकांड के आरोपियों के फर्जी दस्तावेज, फिर भाग गया था दुबई</h1>
              <img src="https://picsum.photos/id/356/200/100" className="w-full" alt="Test Image" />
              <p>पुलिस के हत्थे चढ़ा सद्दाम केवल अशरफ का रिश्तेदार ही नहीं था बल्कि उसका काम भी संभालता था. अशरफ के जेल जाने के बाद वही बाहर उसका सारा काम काज देखता था...</p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-4"> {/*This Grid 2 */}
            <Title title={"ख़बरें"} />
            <div className="w-full px-3">
              <iframe
                className="w-full h-[13rem] border-2 rounded shadow"
                src="https://www.youtube.com/embed/rSSDrpK2Pec"
                title="YouTube Video"
                frameborder="2"
                allowfullscreen
              ></iframe>
            </div>
            <div className="">
              {
                titleWithImage?.map((item) => (
                  <Tile1 key={item.id} text={item.text} image={item.image} link={item.link} />
                ))
              }
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 "> {/*This Grid 3 */}
            <Title title={"बड़ी ख़बरें"} />
            {
              textNewsData?.map((item) => (
                <div onClick={() => route.push(item?.link)} key={item.id} className="text-sm my-2 cursor-pointer text-gray-600 hover:text-gray-900 hover:underline">
                  <TextNews text={item?.text} />
                  <p className="border-b border-gray-300 pt-3"></p>
                </div>
              ))
            }

          </div>

          <div className="col-span-1 md:col-span-3 mx-2"> {/*This Grid 4 */}
            <div className="flex justify-between">
              <Title title={"लाइव अपडेट"} />
              <TbReload className="cursor-pointer active:text-red-400 hover:bg-gray-200 rounded-full" />
            </div>
            <div>
              {
                liveUpdate?.map((item) => (
                  <div key={item.id} className="text-sm">
                    <LiveUpdates link={item.link} time={item.time} news={item?.news} />
                  </div>
                ))
              }
            </div>
          </div>

        </div>
      </Container>

      <div className="bg-blue-900 text-white">
        <Container>
          <Title title={"Video"} />

          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-1 md:col-span-3 p-5">
              <VideoWithText image="https://picsum.photos/id/554/2000/1000" text={"वर्ल्डकप 2023 में होगी पैसों की बरसात, ICC ने किया प्राइजमनी का ऐलान"} />
              <VideoWithText image="https://picsum.photos/id/524/2000/1000" text={"करीमा बलोच हत्याकांड को लेकर क्यों उठे जस्टीन ट्रूडो पर सवाल? देखें"} />

            </div>
            <div className="col-span-1 md:col-span-6 p-5  border-r-gray-800 border-l-gray-600">
              <VideoWithText image="https://picsum.photos/id/324/2000/1000" text={"Indian Cricket team as Avengers रोहित, विराट के एवेंजर अवतार की वर्ल्डकप में आंधी? देखें सो सॉरी"} />
            </div>
            <div className="col-span-1 md:col-span-3 p-5">
              <VideoWithText image="https://picsum.photos/id/645/2000/1000" text={"इस AI टेक्नोलॉजी से फुटबॉल के खेल में आएगा क्रांतिकारी बदलाव"} />
              <VideoWithText image="https://picsum.photos/id/634/2000/1000" text={"बड़े मियां छोटे मियां' की खूब‍ी वाला Ubon SP 12 खरीदना क‍ितना सही?"} />
            </div>

          </div>
        </Container>

      </div>

    </>
  )
}


const TextNews = ({ text, link, type }) => {
  const truncatedText = text.length > 100 ? `${text.slice(0, 70)}...` : text;
  return (
    <>
      <div>
        {truncatedText}
      </div>
    </>
  )
}

const VideoWithText = ({ text, image, link }) => {

  return (
    <>
      <Image className="border" layout="responsive" width="200" height="100" src={image} />
      <p className="text-[16px] font-semibold my-2">{text}</p>
    </>
  )
}