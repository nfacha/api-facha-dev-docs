import '../../scss/index.scss';

export default function HomeLayout({children}: { children: JSX.Element }) {
    return (
            <div>
                {children}
            </div>
    );
}
