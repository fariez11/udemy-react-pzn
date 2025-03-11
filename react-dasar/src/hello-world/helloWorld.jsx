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
    const style = {
        color: "salmon",
        textAlign: "center"
    }
    return (
        <h1 style={style}>{textHeader.toUpperCase()}</h1>
    )
}

export function ParagraphHelloWorld({ paragraph }) {
    const sentence = "Selamat Belajar ReactJS dari Programmer Zaman Now"
    const style = {
        color: "#0DCAF0",
        backgroundColor: "#CFF4FC",
        textAlign: "center",
        padding: "1rem",
        fontSize: "1.2rem",
        borderRadius: "15px"
    }
    return (
        <p style={style}>{paragraph.toLowerCase()}</p>
    )
}