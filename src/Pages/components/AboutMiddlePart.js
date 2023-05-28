import React from 'react'
import "../../Styles/AboutMiddle.css"
import Image from "../../Images/vector.png"


const AboutMiddlePart = () => {
    return (
        <>
            <div className="category">
                <h1>Bizni Kurslarimiz:</h1>
            </div>
            <div className='Middle_wrapper'>
                <div className='middle_category_part'>
                    <div className='midddle_left_part'>
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

                <div className='middle_category_part'>
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

                <div className='middle_category_part'>
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



                <div>
                    <h1>
                    </h1>
                    <p>
                    </p>
                </div>
            </div>

        </>
    )
}

export default AboutMiddlePart