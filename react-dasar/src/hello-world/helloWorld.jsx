import "./helloWorld.css"


export default function HelloWorld() {
    const props = {
        textHeader: "Hello World",
        paragraph: "Selamat Belajar ReactJS dari Programmer Zaman Now"
    }
    return (
        <div>
            <HeaderHelloWorld {...props} />
            <ParagraphHelloWorld {...props} />
        </div>
    )
}


export function HeaderHelloWorld({ textHeader = "default Header" }) {
    // const text = "Hello World"
    // const style = {
    //     color: "salmon",
    //     textAlign: "center"
    // }
    return (
        // <h1 style={style}>{textHeader.toUpperCase()}</h1>                // jika menggunakan style
        <h1 className="header">{textHeader.toUpperCase()}</h1>
    )
}

export function ParagraphHelloWorld({ paragraph }) {
    return (
        <p className="paragraph">{paragraph.toLowerCase()}</p>
    )
}