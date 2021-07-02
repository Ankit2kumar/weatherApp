import { useEffect, useState } from 'react';
import {
	Button,
	Col,
	Container,
	Form,
	FormControl,
	Row,
	Card,
} from 'react-bootstrap';
import '../styles/AnyPlace.css';

const AnyPlace = () => {
	const [input, setInput] = useState('');
	const [weatherData, setWeatherData] = useState({});

	const pickPlace = (e) => {
		setInput({ input: e.target.value });
	};
	const viewWeather = async (e) => {
		try {
			const response = await fetch(
				'api.openweathermap.org/data/2.5/weather?q=london&appid=2c56ab71974f1be018e15e409e9f6937',
				{
					headers: {
						//	'X-API-KEY': '2c56ab71974f1be018e15e409e9f6937',
						//Accept: 'application/json',
						'Content-Type': 'application/json',
					},
				}
			);
			const data = await response.json();
			setWeatherData(data);
			console.log(weatherData);
		} catch (error) {
			window.alert(error);
		}
	};

	return (
		<>
			<Form className="d-flex" onChange={pickPlace}>
				<Container>
					<Row className="mt-5 searchbar">
						<Col>
							<FormControl
								type="text"
								placeholder="Enter City"
								aria-label="Search"
							/>
						</Col>

						<Col>
							<Button variant="outline-success" onClick={viewWeather}>
								Search
							</Button>
						</Col>
					</Row>
					{/* {weatherData.map((data) => (
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">
									Card Subtitle
								</Card.Subtitle>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
								<Card.Link href="#">Card Link</Card.Link>
								<Card.Link href="#">Another Link</Card.Link>
							</Card.Body>
						</Card>
					))} */}
				</Container>
			</Form>
		</>
	);
};

export default AnyPlace;
