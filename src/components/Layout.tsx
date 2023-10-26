import Footer from "./Footer"

type Props = {
    preview?: boolean
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return <>
        <div className="min-h-screen my-10">
            <main>{children}</main>
        </div>
        <Footer />
    </>
}

export default Layout