import { Container, Li, Menu } from './styles'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { useEffect, useState } from 'react'

function Header() {
    const [$changeBackground, setChangeBackground] = useState(false)
    const { pathname } = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            const shouldChange = window.pageYOffset > 150

            setChangeBackground(prevState => {
                if (prevState !== shouldChange) {
                    return shouldChange
                }
                return prevState
            })
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Container $changeBackground={$changeBackground}>
            <img src={Logo} alt='logo-dev-movies' />
            <Menu>
                <Li $isActive={pathname === '/'}>
                    <Link to='/'>Home</Link>
                </Li>
                <Li $isActive={pathname.includes('filmes')}>
                    <Link to='/filmes'>Filmes</Link>
                </Li>
                <Li $isActive={pathname.includes('series')}>
                    <Link to='/series'>Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header