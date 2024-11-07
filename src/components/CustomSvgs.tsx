import Image from "next/image";


export function HomePageIcon () {
    return (
        <Image
        src={'/homepagelogo.svg'}
        alt='HomePage logo'
        width={20}
        height={20}
        />
    )
}


export function ProgressIcon() {
    return (
        <Image
        src={'/Progress.svg'}
        alt='Progress logo'
        width={20}
        height={20}
        />
    )
}


export function MascotIcon() {
    return (
        <Image
        src={'/Mascot.svg'}
        alt='Mascot logo'
        width={25}
        height={25}
        />
    )
}