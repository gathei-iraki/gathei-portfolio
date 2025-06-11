import Image from "next/image";

export default function DownloadLinks() {
    // TODO: Add app usage guides
  return (
    <main className="flex min-h-screen flex-col justify-center items-center">
        <div className="container mx-auto flex flex-col justify-center items-center gap-5">

                        <div className="w-full flex flex-col gap-5 justify-start md:justify-center items-start md:items-center px-4 md:px-28">
        
                        <p className='text-gray-800 font-bold text-[30px] md:text-[40px] leading-10 text-start'>Truride is available for <span className='text-green-400 underline'> all devices</span>
                            </p>
                            <p className='text-gray-600 text-[18px]'>Embark on a journey like never before with the Truride customer app, available on both Android and iOS platforms. Unleash the power of seamless rides, curated attractions, and effortless transactions. Recharge your virtual wallet with ease using M-Pesa or card, and experience the joy of automatic fare deduction at the end of every exhilarating ride.</p>
                <div className="flex flex-col gap-2 w-full">
                    <p className='uppercase text-[16px] font-semibold'>Download customer app on:</p>
                    <div className="flex flex-row gap-2 items-center">
                        <a href={'https://apps.apple.com/ke/app/truride/id6742114978'} target='_blank' className=''>
                            <Image src='/app.png' alt='appstore' width={150} height={40} className='rounded'/>
                        </a>
                        <a href={'https://play.google.com/store/apps/details?id=com.vicsmadaraka.turide&pcampaignid=web_share'} target='_blank' className=''>
                            <Image src='/gplay.png' alt='playstore' width={180} height={40} className='rounded'/>
                        </a>
                    </div>
                </div>
                        </div>
                        <div className="w-full flex flex-col gap-5 justify-start md:justify-center items-start md:items-center px-4 md:px-28">

            <p className='text-gray-600 text-[18px]'>Rev up your journey with the Truride Driver app, available on both Android and iOS. Take the wheel of your success, enjoy intuitive analytics, and withdraw earnings at your convenience. With rides assigned based on ratings, every journey is a step toward higher accomplishments.</p>

                <div className="flex flex-col gap-2 w-full">

                    <p className='uppercase text-[16px] font-semibold'>Download driver app on:</p>
                    <div className="flex flex-row gap-2 items-center">
                        <a href={'https://apps.apple.com/ke/app/truride-driver/id6742808414'} target='_blank' className=''>
                            <Image src='/app.png' alt='appstore' width={150} height={40} className='rounded'/>
                        </a>
                        <a href={'https://play.google.com/store/apps/details?id=com.vicsmadaraka.turidedriverapp&pcampaignid=web_share'} target='_blank' className=''>
                            <Image src='/gplay.png' alt='playstore' width={180} height={40} className='rounded'/>
                        </a>
                    </div>
                </div>
                        </div>
        </div>
    </main>
  )
}
