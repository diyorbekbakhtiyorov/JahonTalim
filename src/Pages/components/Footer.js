import React from 'react'
import "../../Styles/Footer.css"

const AbouFooter = () => {
    return (
        <>
            <div className='Footer_wrapper'>
                <div className='call_Setting'>
                    <div className='Footer_call_img'>
                        <img src="https://www.pngkit.com/png/full/22-220966_phone-icon-png-red-icon-in-thoi-png.png" width={50} height={50} alt="" />
                    </div>
                    <h1 className='Footer_capital'>
                        +998 (97) 682-15-82
                    </h1>
                </div>
                <div className='Footer_links'>
                    <div className='Footer_link'>
                        <a href='https://instagram.com/jahontalim?igshid=MzRlODBiNWFlZA=='>
                            <img src="https://cdn-icons-png.flaticon.com/512/3621/3621464.png" width={30} height={30} alt="" />
                        </a>
                    </div>
                    <div className='Footer_link  link1'>
                        <a href='https://t.me/jahon_talim'>
                            <img src="https://cdn-icons-png.flaticon.com/512/4701/4701496.png" width={20} height={20} alt="" />
                        </a>
                    </div>
                    <div className='Footer_link link1'>
                        <a href='https://www.youtube.com/@jahontalim4993'>
                            <img src="https://cdn-icons-png.flaticon.com/512/59/59439.png" width={20} height={20} alt="" />
                        </a>
                    </div>
                    <p className='Footer_capital'>@Jahon_Talim</p>
                </div>

            </div>
        </>
    )
}

export default AbouFooter