import {LayoutContainer} from './Layout.styled'

export default function Layout ({children}) {
    return <LayoutContainer>
        {children}
    </LayoutContainer>
}