import React, { useEffect } from 'react'
import "../../Styles/Middle.css"
import Aos from 'aos'
import "aos/dist/aos.css"


const AboutMiddlePart = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <>
            <div className='Middle_wrapper'>
                <div className='Category_infoo_wrapper'>
                    <div className='card' >
                        <div className='images' data-aos="fade-up-left">
                            <img src='https://www.ertan-atay.com/assets/img/en/services-frontend-backend-development-600x375.png' alt='' />
                        </div>
                        <div data-aos="zoom-out">
                            <h1>Frontend va Backend</h1>
                            <p className='paragraf'>Dasturiy ta'minot muhandisligida frontend va backend (yoki ba'zan backend yoki backend deb ataladi) atamalari dasturiy ta'minotning taqdimot qatlami (frontend) va ma'lumotlarga kirish qatlami (backend) o'rtasidagi tashvishlarni ajratishni anglatadi, yoki jismoniy infratuzilma yoki apparat. </p>
                        </div>
                    </div>
                    <div className='card' >
                        <div data-aos="zoom-out">
                            <h1>Grafik dizayn</h1>
                            <p className='paragraf'>Grafik dizayn - bu kasb, [2] o'quv intizomi[3][4][5] va amaliy san'at bo'lib, uning faoliyati aniq maqsadlar bilan ijtimoiy guruhlarga ma'lum xabarlarni uzatish uchun mo'ljallangan vizual aloqalarni loyihalashdan iborat.[6] Grafik dizayn dizaynning[1] va tasviriy san'atning fanlararo bo'limidir. </p>
                        </div>
                        <div className='images' data-aos="fade-up-right">
                            <img src='https://freepngimg.com/save/12022-graphic-design-png-clipart/505x368' alt='' />
                        </div>
                    </div>
                    <div className='card' >
                        <div className='images' data-aos="zoom-out">
                            <img src='https://blogs.classplusapp.com/wp-content/uploads/2022/06/Body-Language-Tricks-for-Teachers-And-Why-It-Is-Important-in-Teaching-1-1-1024x576.png' alt='' />
                        </div>
                        <div data-aos="zoom-out">
                            <h1>Kompyuter savodxonligi </h1>
                            <p className='paragraf'>Kompyuter savodxonligi - bu kompyuterlardan va tegishli texnologiyalardan samarali foydalanish bo'yicha bilim va ko'nikma sifatida tavsiflanadi, bunda boshlang'ich foydalanishdan kompyuter dasturlash va ilg'or muammolarni hal qilishgacha bo'lgan mahorat darajasi. </p>
                        </div>
                    </div>
                </div>
                <div className="category" data-aos="fade-up"
                    data-aos-anchor-placement="bottom-center">
                    <h1>Bizni Kurslarimiz:</h1>
                </div>
                <div className='middle_category_part'data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0">
                    <div className='midddle_left_part' >
                        <div className='fiver'></div>
                        <div className='fiver1'></div>
                        <div className='fiver2'></div>
                        <div className='middle_image'>
                            <img src='https://static.thenounproject.com/png/487779-200.png' width={70} height={70} alt='' />
                        </div>
                    </div>
                    <div className='middle_right_part'>
                        <h1>
                            Frontend-Backend
                        </h1>
                        <p>
                            HTML, CSS, SaSS, Bootstrap Git, JavaScript, React js, Python, Django.
                        </p>
                    </div>
                </div>

                <div className='middle_category_part'data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0">
                    <div className='midddle_left_part'>
                        <div className='fiver'></div>
                        <div className='fiver1'></div>
                        <div className='fiver2'></div>
                        <div className='middle_image'>
                            <img src="https://cdn-icons-png.flaticon.com/512/1185/1185316.png" width={70} height={70} alt='' />
                        </div>
                    </div>
                    <div className='middle_right_part'>
                        <h1>
                            Grafik Dizayn
                        </h1>
                        <p>
                            PhotoShop, Illustrator, indesign, Coreldraw.
                        </p>
                    </div>
                </div>

                <div className='middle_category_part'data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0">
                    <div className='midddle_left_part'>
                        <div className='fiver'></div>
                        <div className='fiver1'></div>
                        <div className='fiver2'></div>
                        <div className='middle_image'>
                            <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/computer-skills-994284.png?f=webp' width={70} height={70} alt='' />
                        </div>
                    </div>
                    <div className='middle_right_part'>
                        <h1>
                            Komputer Savodhonligi

                        </h1>
                        <p>
                            Word, Excel, Power Point, Google Docs, Google Sheet, BIOS
                        </p>
                    </div>
                </div>


            </div>

        </>
    )
}

export default AboutMiddlePart