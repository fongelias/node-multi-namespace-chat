import express from 'express';
import route from '../routes';

export default function() {
	const app = express();

	//Static
	app.use(express.static('public'));
	//Routing
	route(app);

	return app;
}