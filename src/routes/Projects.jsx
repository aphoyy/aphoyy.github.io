import { Banner, Navbar } from '../components'
import bannerUrl from '/src/assets/images/qr-code.png'

export function Projects() {
    return (
        <>
            <Navbar currentPage="projects" />
            <main>
                <Banner
                    imgUrl={bannerUrl}
                    title='QR-Code'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cumque, architecto eum quas expedita reprehenderit tempora quo. Recusandae quasi molliti'
                />
                <div className="background">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </main>
        </>
    )
}