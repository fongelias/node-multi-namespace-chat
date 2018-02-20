import Server from 'socket.io';

import { ChatRoom } from '../socket.io';


export default function(server) {
	const io = Server(server);

	const chatRoom = new ChatRoom(io, 'testname');

	io.on('connection', (socket) => {
		console.log('a user connected');
		console.log(socket.id);
		

		socket.on('chat message', (msg) => {
			io.emit('chat message', msg);
			socket.broadcast.to(msg).emit('chat message', 'secret message');
		});

		socket.on('disconnect', () => {
			console.log('a user disconnected');
		});
	});


	return io;
}