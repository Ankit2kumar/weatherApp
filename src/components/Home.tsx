
import { Container, Nav, Navbar } from 'react-bootstrap';

const Home = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiles.fluxes.com%2Fwp-content%2Fuploads%2F2017%2F08%2FWeather-Icons.jpg&f=1&nofb=1" alt="" width='49px' height='49px'/></Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Any Place</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Home;
